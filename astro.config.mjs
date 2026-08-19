import { defineConfig } from 'astro/config';

import { LIVE } from './src/lib/site.js';

// Web běží na ostré doméně (site === LIVE → indexace povolena).
// Náhledový build lze vyrobit přes env SITE=https://new.osobnostiprotrinec.cz.
const site = process.env.SITE ?? LIVE;
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  build: { format: 'file' },
  trailingSlash: 'ignore',
});
