// Tým z voleb 2026 pro úvod a stránku Kdo jsme: čtyři zvolení (pořadí mandátů podle ČSÚ)
// a zbytek kandidátky v pořadí z hlasovacího lístku. Proklik na medailonek řídí stejná
// pravidla jako /kandidati.html (src/lib/verejne.js).
import { kandidati } from '../data/kandidati.js';
import { medailonky } from '../data/medailonky.js';
import { ZVOLENI } from '../data/volby2026.js';
import { verejnySlug } from './verejne.js';
import { u } from './url.js';

const sOdkazem = (k) => {
  const slug = verejnySlug(k);
  return { ...k, detail: slug && medailonky[slug] ? slug : null };
};
export const zvoleni = ZVOLENI.map(z => ({ ...sOdkazem(kandidati.find(k => k.cislo === z.cislo)), role: z.role, email: z.email }));
const zvolenaCisla = new Set(ZVOLENI.map(z => z.cislo));
export const ostatni = kandidati.filter(k => !zvolenaCisla.has(k.cislo)).map(sOdkazem);
export const vsichni = kandidati.map(sOdkazem);
export const hrefKandidata = (k) => k.detail ? u(`kandidat-${k.detail}.html`) : null;
