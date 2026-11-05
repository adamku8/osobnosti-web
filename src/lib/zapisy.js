// Zápisy ze zastupitelstva pro úvod a /zastupitelstvo.html.
// Veřejný záznam každého zasedání vzniká mimo tento repozitář (ZASTUPITELSTVO/ZM_<datum>_live/verejne/,
// publikuj.sh ho nahrává přes GitHub API) jako dvojice public/zastupitelstvo-<RRRR-MM-DD>.html + .json.
// Tady se při buildu jen projde složka public/, takže nový zápis se na webu objeví sám —
// žádný datový soubor se kvůli němu neupravuje. JSON: { stav, ted, aktualizovano, zaznam: [...] }.
import fs from 'node:fs';
import path from 'node:path';
import { NAZVY_ZASEDANI } from '../data/zastupitelstvo.js';

const MESICE = ['ledna', 'února', 'března', 'dubna', 'května', 'června',
  'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'];
const SLOZKA = path.resolve('public');

export function zapisy() {
  return fs.readdirSync(SLOZKA)
    .map(f => f.match(/^zastupitelstvo-(\d{4})-(\d{2})-(\d{2})\.json$/))
    .filter(Boolean)
    .filter(m => fs.existsSync(path.join(SLOZKA, m[0].replace(/\.json$/, '.html'))))
    .map(m => {
      const [soubor, rok, mesic, den] = m;
      const iso = `${rok}-${mesic}-${den}`;
      let d = {};
      try { d = JSON.parse(fs.readFileSync(path.join(SLOZKA, soubor), 'utf-8')); } catch { /* rozbitý JSON zápis neshodí */ }
      return {
        iso,
        datum: `${Number(den)}. ${MESICE[Number(mesic) - 1]} ${rok}`,
        nazev: NAZVY_ZASEDANI[iso] ?? 'Zasedání zastupitelstva',
        shrnuti: typeof d.ted === 'string' ? d.ted : '',
        bezi: d.stav !== undefined && d.stav !== 'skoncilo',
        zaznamu: Array.isArray(d.zaznam) ? d.zaznam.length : 0,
        soubor: soubor.replace(/\.json$/, '.html'),
      };
    })
    .sort((a, b) => b.iso.localeCompare(a.iso));
}
