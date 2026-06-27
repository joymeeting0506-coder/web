import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://joymeeting0506-coder.github.io',
  base: '/web/',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
