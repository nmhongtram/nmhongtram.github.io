import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  // Keep cached HTML styled even after a deployment replaces hashed CSS assets.
  build: { inlineStylesheets: "always" },
  site: "https://nmhongtram.github.io",
});
