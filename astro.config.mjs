import { defineConfig } from 'astro/config';

// Web běží na ostré doméně osobnostiprotrinec.cz (GitHub Pages + public/CNAME).
// Náhled v podadresáři adamku8.github.io/osobnosti-web: BASE_PATH=/osobnosti-web
const base = process.env.BASE_PATH ?? '/';
const site = base === '/' ? 'https://osobnostiprotrinec.cz' : 'https://adamku8.github.io';

export default defineConfig({
  site,
  base,
  build: { format: 'file' },
  trailingSlash: 'ignore',
});
