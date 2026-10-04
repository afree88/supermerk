import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    {
      name: 'admin-dev-rewrite',
      hooks: {
        'astro:server:setup': ({ server }) => {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/admin' || req.url === '/admin/') {
              req.url = '/admin/index.html';
            }
            next();
          });
        }
      }
    }
  ],
  site: 'https://mercadobompreco.netlify.app'
});
