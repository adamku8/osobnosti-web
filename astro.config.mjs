import { defineConfig } from 'astro/config';

import { LIVE } from './src/lib/site.js';

// Zatím běžíme na náhledové subdoméně. Náhled se schovává před vyhledávači
// (robots.txt + meta noindex) — řídí se to podle toho, jestli site === LIVE.
//
// PŘEPNUTÍ NA OSTROU DOMÉNU: změň výchozí hodnotu site na LIVE
//   a v public/CNAME přepiš subdoménu na osobnostiprotrinec.cz.
const site = process.env.SITE ?? 'https://new.osobnostiprotrinec.cz';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  build: { format: 'file' },
  trailingSlash: 'ignore',
});
