import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel";

export default defineConfig({
  integrations: [svelte(), tailwind()],
  adapter: vercel(),
  trailingSlash: 'never',
  security: {
    checkOrigin: false,
  },
  build: {
    inlineStylesheets: "always",
  },
});
