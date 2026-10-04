import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    '/admin': '/admin/index.html',
  },
  site: 'https://mercadobompreco.netlify.app'
});
