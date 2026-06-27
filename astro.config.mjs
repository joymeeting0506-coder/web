import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
