// Programová pasáž k lesoparku (září 2026) — data pro /lesopark.html.
// Vznikla ze speciálního letáku pro kontaktní akci v lesoparku 15. 9. 2026;
// tisková verze je ../../make_lesopark_a4.py. Když se mění texty tady, změň
// i generátor — sdílený zdroj mezi JS a Pythonem není.
//
// Čísla: závěrečné účty statutárního města Třince 2023–2025, skutečné čerpání
// (ZU_2025_Priloha4, list „meziroční“):
//   02-22308 Obnova pobytových ploch v lesoparku  2023: 356 950 · 2024: 5 398 527 · 2025: 6 916 758
//   02-22320 Lesopark Třinec – rekonstrukce VO     2024: 477 950 · 2025: 5 711 143
// Pozor: v casti.js je lesopark jen 7,57 mil., protože tam se počítají jen
// kapitálové výdaje (tř. 6) — část obnovy pobytových ploch šla přes položku 5169.

export const OBDOBI = '2023–2025';

export const INVESTICE = [
  { ucel: 'Obnova pobytových ploch v lesoparku', kc: 12672235, roky: '2023–2025' },
  { ucel: 'Rekonstrukce veřejného osvětlení', kc: 6189093, roky: '2024–2025' },
];
export const INVESTICE_CELKEM = INVESTICE.reduce((a, p) => a + p.kc, 0);

// Co už v lesoparku je — zrcadlo pásu na letáku.
export const mame = [
  { co: 'Nové pobytové plochy', kdy: 'obnova 2024–2025' },
  { co: 'Nové veřejné osvětlení', kdy: 'rekonstrukce 2025' },
  { co: 'Doplněné prvky na dětském hřišti', kdy: '2024' },
  { co: 'In-line dráha k městskému stadionu', kdy: 'v přípravě' },
];

// Závazky — stejná struktura jako zavazky v casti.js (nazev, hl, strucne,
// detail, obrazek, alt, ikona). Obrázky jsou výřezy z náčrtu lesoparku
// (TISK/program-2026/kresby/OPT-lesopark-kresba.svg).
export const zavazky = [
  {
    nazev: 'Oplocená psí loučka',
    hl: 'Oplocená',
    obrazek: 'psi-loucka.jpg',
    alt: 'Kresba: oplocený výběh pro psy s dvojitou brankou a lavičkou, dva psi si hrají',
    ikona: '<path d="M4 20V9"/><path d="M10 20V9"/><path d="M16 20V9"/><path d="M22 20V9"/><path d="M2 12h20"/><path d="M2 17h20"/><path d="M4 9l2-4 2 4"/><path d="M10 9l2-4 2 4"/><path d="M16 9l2-4 2 4"/>',
    strucne: 'Psi dnes běhají po celém lesoparku — mezi kočárky, běžci i dětmi. Oplocený výběh dá volnost psům a klid všem ostatním.',
    detail: [
      'Oplocená louka s dvojitou brankou, lavičkou, vodou a košem na sáčky — stranou od dětského hřiště a hlavních cest.',
      'Místo, kde se psi socializují a páníčci potkávají: pár překážek a hodiny s kynologem. V Luhačovicích to tak funguje.',
      'Místo vybereme s pejskaři, ne od stolu. Kdo chce psa pustit, má kde. Kdo se psů bojí, ví, kde je nepotká.',
    ],
  },
  {
    nazev: 'Posilovna pro seniory',
    hl: 'Posilovna',
    obrazek: 'posilovna.jpg',
    alt: 'Kresba: venkovní cvičební stroje s madly, cvičí na nich dva senioři, vedle lavička',
    ikona: '<path d="M6 5v14"/><path d="M18 5v14"/><path d="M3 8v8"/><path d="M21 8v8"/><path d="M6 12h12"/>',
    strucne: 'Venkovní cvičební prvky pro starší lidi: šetrné ke kloubům, s madly a jasným návodem, hned u laviček.',
    detail: [
      'Stroje na rovnováhu, protažení a lehké posílení — ne hrazda pro dvacetileté. Takové parky pro seniory už stojí v řadě českých měst.',
      'Ve stínu a u laviček, ať se dá cvičit i v létě, mezi cviky si sednout a potkat sousedy. Cvičení ve skupině táhne víc než doma o samotě.',
      'Navážeme na Mozkovou posilovnu a kurzy v knihovně — tělo si zaslouží to samé co hlava.',
    ],
  },
  {
    nazev: 'WC u dětského hřiště',
    hl: 'WC',
    obrazek: 'wc.jpg',
    alt: 'Kresba: dětské hřiště s houpačkou a skluzavkou, vedle malá budova veřejných toalet',
    ikona: '<path d="M12 2.7 5.6 9.1a9 9 0 1 0 12.8 0L12 2.7z"/><path d="M9 15a3 3 0 0 0 3 3"/>',
    strucne: 'Každý rodič to zná: hřiště je skvělé, ale záchod nikde. Do lesoparku patří veřejné WC s umyvadlem a přebalovacím pultem.',
    detail: [
      'Stojí přímo u dětského hřiště, bezbariérové, v sezóně otevřené od rána do večera. Umýt ruce, napít se, přebalit — bez běhu domů.',
      'Jinde to funguje: Zlín má WC u hřiště v parku Komenského zdarma od 8 do 22 hodin, Olomouc u hřiště v Čechových sadech i s umyvadlem a přebalovacím pultem.',
      'Samočisticí modul, nebo malá stavba se správcem — vybereme podle toho, co je levnější na provoz, ne jen na pořízení.',
    ],
  },
  {
    nazev: 'Propojení s kanadským lesem',
    hl: 'Propojení',
    obrazek: 'kanada.jpg',
    alt: 'Kresba: značená cesta vede z parku do hustého lesa, u ní dřevěný rozcestník se šipkou',
    ikona: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
    strucne: 'Lesopark a les nad Kanadou jsou sousedé, jen mezi nimi chybí pořádná cesta. Spojíme je, ať se dá jít dál.',
    detail: [
      'Značená cesta pro pěší i běžce z lesoparku do lesa na Kanadě a zpátky: okruh místo otočky na konci.',
      'Značení, lavičky a osvětlení na výstupu z lesoparku, ať je cesta bezpečná i po setmění.',
      'První krok našeho projektu <a href="program.html#projekty">Nové chodníky i cyklostezky</a> — propojení centra s příměstskými částmi.',
    ],
  },
];
