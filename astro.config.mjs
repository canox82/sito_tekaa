// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://canox82.github.io',
    base: 'sito_tekaa',
    integrations: [mdx(), sitemap(), tailwind()],
    i18n: {
        defaultLocale: "it",
        locales: ["it", "en", "de"],
      }
});