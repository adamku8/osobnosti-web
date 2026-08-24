// FOTOBANKA kandidátů — soupis všech fotek, které k 24. 8. 2026 máme.
// Zdroje: `web` = co je dnes nasazené na osobnostiprotrinec.cz,
//         `drive` = jednotná upravená série z Drive „Fotky - upravené/web-800",
//         `raw`   = neupravený originál z Drive „Fotky - neupravené" (náhled 700 px).
// `nej: true` = doporučená varianta pro web a tisk.
// Používá jen skrytá stránka /nahled-k7x2m9/fotky.html.

const web   = (f) => ({ zdroj: 'web',   src: `assets/img/kandidati/${f}` });
const drive = (f) => ({ zdroj: 'drive', src: `assets/img/fotky-drive/${f}` });
const raw   = (f) => ({ zdroj: 'raw',   src: `assets/img/fotky-raw/${f}` });
const nej   = (v) => ({ ...v, nej: true });

export const fotobanka = {
  1:  [nej(web('lucie_fremrova_c.jpg'))],
  2:  [nej(web('adam_kurzok_c.jpg'))],
  3:  [nej(web('erika_sirotova_c.jpg'))],
  4:  [nej(web('marek_sterba_c.jpg'))],
  5:  [nej(web('martina_wolna_c.jpg'))],
  6:  [nej(drive('miskej.jpg')), raw('17-miskej-2.jpg')],
  7:  [],
  8:  [nej(drive('antoniadis.jpg')), raw('antoniadis.jpg')],
  9:  [nej(drive('szkandera.jpg')), raw('szkandera.jpg')],
  10: [nej(web('veronika_chmelarova_c.jpg')), raw('chmelarova.jpg')],
  11: [nej(drive('tomoszek.jpg')), raw('adam-tomoszek-foto2.jpg')],
  12: [nej(drive('stvrtna.jpg')), raw('20-stvrtna-2.jpg')],
  13: [nej(drive('vapenikova.jpg')), raw('vapenikova.jpg')],
  14: [nej(web('aron_chmielewski_c.jpg'))],
  15: [nej(web('patrik_cavoj_c.jpg')), drive('cavoj.jpg'), raw('cavoj.jpg')],
  16: [nej(drive('kubikova.jpg')), raw('kubikova.jpg')],
  17: [nej(drive('figura.jpg')), raw('figura01.jpg'), raw('figura02.jpg')],
  18: [nej(web('michal_niemiec_c.jpg')), drive('niemiec.jpg'), raw('niemiec.jpg')],
  19: [nej(drive('sikora.jpg')), raw('06-sikora-2.jpg')],
  20: [],
  21: [nej(drive('sajdok.jpg')), raw('29-sajdok-2.jpg'), raw('sajdok.jpg')],
  22: [nej(web('lenka_palicova_c.jpg')), drive('palicova.jpg'), raw('palicova.jpg')],
  23: [nej(web('libor_zarsky_c.jpg')), drive('zarsky.jpg'), raw('zarsky.jpg')],
  24: [nej(drive('kotlar.jpg')), raw('21-kotlar-2.jpg'), raw('kotlar.jpg')],
  25: [nej(drive('serafin.jpg')), raw('28-serafin-2.jpg')],
  26: [nej(drive('nowak.jpg')), raw('nowak.jpg')],
  27: [nej(web('rudolf_rucki_c2.jpg')), web('rudolf_rucki_c.jpg'), raw('25-rucki-2.jpg'),
       raw('rucki1.jpg'), raw('rucki2.jpg'), raw('rucki3.jpg')],
};

// Poznámka, která se vypíše u karty kandidáta.
export const poznamky = {
  7:  'Fotka chybí úplně — není ani v jedné složce na Drive.',
  10: 'Jediný podklad je snímek celé postavy z 24. 8. Ořízl jsem ho na čtverec podle fotostylu (oči 38 %, hlava 58 %), pozadí ale zůstalo — vlevo je vidět obraz na zdi. Na odmazání pozadí to chce projet stejnou pipeline jako zbytek série.',
  11: 'Upravená verze vznikla ze snímku celé postavy v sále — hlava je měkká. Doporučuji přefotit.',
  17: 'Originály jsou tmavé u cihlové zdi, ořez upravené verze je nejslabší z celé série. Doporučuji přefotit.',
  20: 'Fotka chybí úplně — není ani v jedné složce na Drive.',
  22: 'Webová a upravená verze jsou skoro shodné; webová má teplejší tón pleti.',
  27: 'ZMĚNA: přepnuto na upravenou verzi z Drive. Původní (druhá v řadě) měla silný červený nádech a tvrdý výraz. Starý soubor jsem nemazal.',
};

// Fotky lidí, kteří na aktuální kandidátce nejsou.
export const mimoListinu = [
  { jmeno: 'Szpyrcová', varianty: [drive('szpyrcova.jpg'), raw('04-szpyrcova-2.jpg')] },
];
