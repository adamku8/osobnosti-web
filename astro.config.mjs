import { defineConfig } from 'astro/config';

// Web zatím běží v podadresáři na GitHub Pages (adamku8.github.io/osobnosti-web).
// Po přepnutí na ostrou doménu stačí spustit build s BASE_PATH=/
//   nebo tady změnit výchozí hodnotu na '/'.
const base = process.env.BASE_PATH ?? '/osobnosti-web';
const site = base === '/' ? 'https://osobnostiprotrinec.cz' : 'https://adamku8.github.io';

export default defineConfig({
  site,
  base,
  build: { format: 'file' },
  trailingSlash: 'ignore',
});
