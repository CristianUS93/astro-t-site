import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://cheerful-raindrop-90c175.netlify.app",
  integrations: [preact()]
});