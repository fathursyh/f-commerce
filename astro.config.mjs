// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';
import commonjs from 'vite-plugin-commonjs';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), react()],
  trailingSlash: 'ignore',
  output: 'server',

  security: {
    checkOrigin: true
  },
  vite: {
    plugins: [tailwindcss(), commonjs() ],
  },
});