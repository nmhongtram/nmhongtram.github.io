import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const out = process.env.REVIEW_DIR || "/tmp/portfolio-review";
const base = process.env.PORTFOLIO_URL || "http://127.0.0.1:4321";
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ headless: true });
const failures = [];

for (const [name, width, height] of [
  ["desktop", 1440, 900],
  ["mobile", 390, 844],
]) {
  const context = await browser.newContext({
    viewport: { width, height },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  page.on("pageerror", (error) => failures.push(`${name}: ${error.message}`));
  await page.goto(new URL("/", base).href, { waitUntil: "networkidle" });
  await page.screenshot({ path: `${out}/dossier-${name}.png`, fullPage: true });
  await page.screenshot({ path: `${out}/dossier-${name}-fold.png` });

  const horizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1,
  );
  if (horizontalOverflow) failures.push(`${name}: horizontal overflow`);

  const sections = await page.locator("main > section").count();
  if (sections !== 9)
    failures.push(`${name}: expected 9 section elements, found ${sections}`);

  if (
    (await page.locator(".primary-action").getAttribute("href")) !== "/cv.pdf"
  )
    failures.push(`${name}: CV link mismatch`);

  if (await page.locator(".review-strip").count())
    failures.push(`${name}: comparison controls remain`);

  if (name === "desktop") {
    await page.locator('[data-select-stage="egocentric-video"]').click();
    const active = await page
      .locator(".journey")
      .getAttribute("data-active-stage");
    if (active !== "egocentric-video")
      failures.push("Journey selection failed");
  }
  await context.close();
}

await browser.close();
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `Dossier homepage rendered at desktop and mobile sizes. Screenshots: ${out}`,
  );
}
