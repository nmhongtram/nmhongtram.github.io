import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const base = process.env.PORTFOLIO_URL || "http://127.0.0.1:4321";
const routes = ["/", "/vi/", "/engineer/", "/vi/engineer/"];
const browser = await chromium.launch({ headless: true });
const failures = [];

for (const route of routes) {
  for (const width of [1440, 390]) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    await page.goto(new URL(route, base).href, { waitUntil: "networkidle" });
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    for (const issue of result.violations) {
      failures.push(
        `${route} ${width}px: ${issue.id} (${issue.impact}), ${issue.nodes.length} elements`,
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
    "No automated WCAG A/AA violations on the four portfolio routes at desktop and mobile widths.",
  );
}
