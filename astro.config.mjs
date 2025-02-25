// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';
import commonjs from 'vite-plugin-commonjs';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  trailingSlash: 'ignore',
  output: 'server',

  security: {
    checkOrigin: true
  },
  vite: {
    plugins: [tailwindcss(), commonjs() ],
  },
});