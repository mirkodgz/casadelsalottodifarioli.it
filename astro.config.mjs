// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://casadelsalottodifarioli.it',
  integrations: [sitemap()],
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory' // Changed from 'file' to fix Vercel 404s on /storia, /contatti etc.
  }
});