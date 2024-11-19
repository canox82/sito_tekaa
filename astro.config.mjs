// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'http://www.tekaa.it',
    base: '/',
    output: 'hybrid',
    integrations: [mdx(), sitemap(), tailwind()],
    i18n: {
        defaultLocale: "it",
        locales: ["it", "en", "de"],
      }
});