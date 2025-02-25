// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';
import commonjs from 'vite-plugin-commonjs';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

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

  adapter: vercel(),
});