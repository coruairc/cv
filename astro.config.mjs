import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://coruairc.github.io',
  base: '/cv/',
  integrations: [tailwind()],
});
