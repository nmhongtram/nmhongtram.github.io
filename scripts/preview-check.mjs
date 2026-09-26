import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const out = process.env.REVIEW_DIR || "/tmp/portfolio-review";
const base = process.env.PORTFOLIO_URL || "http://127.0.0.1:4321";
const routes = [
  {
    path: "/",
    name: "research-en",
    role: "research",
    locale: "en",
    cv: "/cv.pdf",
  },
  {
    path: "/vi/",
    name: "research-vi",
    role: "research",
    locale: "vi",
    cv: "/cv.pdf",
  },
  {
    path: "/engineer/",
    name: "engineer-en",
    role: "engineer",
    locale: "en",
    cv: "/engineer_cv.pdf",
  },
  {
    path: "/vi/engineer/",
    name: "engineer-vi",
    role: "engineer",
    locale: "vi",
    cv: "/engineer_cv.pdf",
  },
];

await mkdir(out, { recursive: true });
const browser = await chromium.launch({ headless: true });
const failures = [];

for (const route of routes) {
  for (const [name, width, height] of [
    ["desktop", 1440, 900],
    ["mobile", 390, 844],
  ]) {
    const context = await browser.newContext({
      viewport: { width, height },
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    page.on("pageerror", (error) =>
      failures.push(`${route.path} ${name}: ${error.message}`),
    );
    await page.goto(new URL(route.path, base).href, {
      waitUntil: "networkidle",
    });
    await page.screenshot({
      path: `${out}/${route.name}-${name}.png`,
      fullPage: true,
    });
    await page.screenshot({ path: `${out}/${route.name}-${name}-fold.png` });

    const horizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 1,
    );
    if (horizontalOverflow)
      failures.push(`${route.path} ${name}: horizontal overflow`);

    if ((await page.locator("html").getAttribute("lang")) !== route.locale)
      failures.push(`${route.path} ${name}: wrong page language`);

    if ((await page.locator(".header-cv").getAttribute("href")) !== route.cv)
      failures.push(`${route.path} ${name}: CV link mismatch`);

    const phone = page.locator(".contact-phone");
    if (
      (await phone.getAttribute("href")) !== "tel:+84375851104" ||
      !(await phone.textContent())?.includes("+84 37 585 1104")
    )
      failures.push(`${route.path} ${name}: phone contact mismatch`);

    const currentRole = await page
      .locator(".role-switch a[aria-current='page']")
      .getAttribute("href");
    if (
      currentRole !==
      (route.role === "engineer"
        ? route.locale === "vi"
          ? "/vi/engineer/"
          : "/engineer/"
        : route.locale === "vi"
          ? "/vi/"
          : "/")
    )
      failures.push(`${route.path} ${name}: role switch mismatch`);

    const otherLanguage = await page
      .locator(
        `.language-switch a[lang="${route.locale === "en" ? "vi" : "en"}"]`,
      )
      .getAttribute("href");
    const expectedOtherLanguage =
      route.role === "engineer"
        ? route.locale === "en"
          ? "/vi/engineer/"
          : "/engineer/"
        : route.locale === "en"
          ? "/vi/"
          : "/";
    if (otherLanguage !== expectedOtherLanguage)
      failures.push(`${route.path} ${name}: language switch mismatch`);

    if (route.role === "research") {
      const sections = await page.locator("main > section").count();
      if (sections !== 9)
        failures.push(
          `${route.path} ${name}: expected 9 research sections, found ${sections}`,
        );
      if (name === "desktop") {
        await page.locator('[data-select-stage="egocentric-video"]').click();
        const active = await page
          .locator(".journey")
          .getAttribute("data-active-stage");
        if (active !== "egocentric-video")
          failures.push(`${route.path}: Journey selection failed`);
      }
    } else {
      if ((await page.locator(".engineer-build").count()) !== 4)
        failures.push(`${route.path} ${name}: expected four selected builds`);
      if (
        (await page.locator(".primary-action").getAttribute("href")) !==
        "#builds"
      )
        failures.push(`${route.path} ${name}: project-first action missing`);
    }
    // Exercise the actual links in both directions, including missing CSS assets.
    await page.route("**/*.css", (request) => request.abort());
    for (const destination of [
      route.role === "research"
        ? route.locale === "vi"
          ? "/vi/engineer/"
          : "/engineer/"
        : route.locale === "vi"
          ? "/vi/"
          : "/",
      route.path,
    ]) {
      await Promise.all([
        page.waitForURL(new URL(destination, base).href),
        page.locator(".role-switch a:not([aria-current])").click(),
      ]);
      await page.evaluate(() => document.fonts.ready);
      const header = await page.locator(".site-header").evaluate((element) => {
        const nav = element.querySelector(".role-switch");
        const links = [...nav.querySelectorAll("a")];
        const boxes = links.map((link) => link.getBoundingClientRect());
        return {
          position: getComputedStyle(element).position,
          display: getComputedStyle(nav).display,
          horizontal: Math.abs(boxes[0].top - boxes[1].top) < 1,
          fits: nav.scrollWidth <= nav.clientWidth + 1,
          labels: links.map((link) => link.textContent.trim()).join(" | "),
          active: nav
            .querySelector("[aria-current='page']")
            ?.getAttribute("href"),
        };
      });
      if (
        header.position !== (name === "desktop" ? "fixed" : "sticky") ||
        header.display !== "flex" ||
        !header.horizontal ||
        !header.fits ||
        header.labels !== "AI Researcher | AI Engineer" ||
        header.active !== destination
      )
        failures.push(
          `${route.path} ${name} → ${destination}: inconsistent or unstyled role navigation ${JSON.stringify(header)}`,
        );
      if ((await page.locator("html").getAttribute("lang")) !== route.locale)
        failures.push(
          `${route.path} ${name} → ${destination}: role switch changed language`,
        );
    }
    await context.close();
  }
}

await browser.close();
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `All four routes rendered at desktop and mobile sizes. Screenshots: ${out}`,
  );
}
