// Jediný zdroj pravdy pro programové oblasti.
// Struktura dle rozvržení „Čtyři oblasti" (srpen 2026): klíčové slovo v červeném
// boxu + „Třinec.", podnadpis, pět závazků a projekty (vize) navázané na oblast.
// Závazky v `body` obsahují <strong> kolem jádrového předmětu — vykreslovat přes set:html.
// `teaser` = dvě věty pro veřejnou teaser stránku /program.html (bez konkrétních závazků).
export const oblasti = [
  {
    "cislo": "01",
    "klic": "Moderní",
    "nazev": "Moderní Třinec.",
    "podnadpis": "Moderní a bezpečné město",
    "teaser": "Aby se v Třinci dobře bydlelo a bezpečně chodilo. Zaměřujeme se na byty, chodníky, zeleň a pořádek na sídlištích.",
    "body": [
      "aktivně podpoříme výstavbu <strong>nových bytů</strong>",
      "postavíme nové <strong>přechody, chodníky a cyklostezky</strong>",
      "vysadíme <strong>stromy a zeleň</strong>, která ochladí ulice",
      "posílíme <strong>městskou policii</strong> pro větší bezpečnost",
      "revitalizujeme <strong>sídliště i veřejný prostor</strong>"
    ],
    "obrazek": "propojene-mesto-kresba.png",
    "projekty": ["propojene-mesto"],
    "ikona": "<path d=\"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/><polyline points=\"9 22 9 12 15 12 15 22\"/>"
  },
  {
    "cislo": "02",
    "klic": "Akční",
    "nazev": "Akční Třinec.",
    "podnadpis": "Sport a kultura",
    "teaser": "Třinec drží spolky, sport a lidé, kteří něco dělají. Chceme jim uvolnit ruce a otevřít víc míst k setkávání.",
    "body": [
      "podpoříme místní <strong>spolky a aktivní komunity</strong>",
      "zajistíme více <strong>míst pro setkávání</strong> v příměstských částech",
      "rozšíříme <strong>participativní rozpočet</strong> na komunitní akce",
      "přispějeme <strong>1 000 Kč na kroužky</strong> a dětské tábory",
      "zpřístupníme <strong>hřiště u škol</strong> i školek"
    ],
    "obrazek": "letni-scena-kresba.png",
    "projekty": ["letni-scena", "outdoor-centrum", "hriste-knihovna", "javorovy"],
    "ikona": "<path d=\"M6 9H4.5a2.5 2.5 0 0 1 0-5H6\"/><path d=\"M18 9h1.5a2.5 2.5 0 0 0 0-5H18\"/><path d=\"M4 22h16\"/><path d=\"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22\"/><path d=\"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22\"/><path d=\"M18 2H6v7a6 6 0 0 0 12 0V2Z\"/>"
  },
  {
    "cislo": "03",
    "klic": "Odvážný",
    "nazev": "Odvážný Třinec.",
    "podnadpis": "Práce a podnikání",
    "teaser": "Práce a podnikání drží město naživu. Podpoříme ty, kdo v Třinci začínají, a propojíme ty, kdo už podnikají.",
    "body": [
      "podpoříme <strong>začínající podnikatele</strong> — „Podnikej v Třinci“",
      "<strong>propojíme podnikatele</strong> v Třinci prostřednictvím pravidelných akcí",
      "otevřeme <strong>expat centrum</strong> pro nově příchozí i navrátilce do Třince",
      "zajistíme <strong>vstřícný a otevřený magistrát</strong>",
      "zavedeme <strong>startovací nájmy</strong> pro začínající podnikatele"
    ],
    "obrazek": "coworking-kresba.png",
    "projekty": ["coworking"],
    "ikona": "<path d=\"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"6\" rx=\"2\"/>"
  },
  {
    "cislo": "04",
    "klic": "Zdravý",
    "nazev": "Zdravý Třinec.",
    "podnadpis": "Sociální péče a zdraví",
    "teaser": "Péče musí být po ruce, když ji člověk potřebuje. Řešíme místa v pečovatelských domech, dostupnost lékařů i podporu rodin.",
    "body": [
      "zajistíme více míst v <strong>domech s pečovatelskou službou</strong>",
      "podpoříme dostupnou <strong>zdravotní i psychologickou péči</strong>",
      "pomůžeme <strong>rodinám</strong> pečujícím o své blízké",
      "otevřeme <strong>Centrum pro aktivní seniory</strong> na Smetanově",
      "podpoříme další rozvoj <strong>péče o duševní zdraví</strong>"
    ],
    "obrazek": "dps-kresba.png",
    "projekty": ["centrum-senioru"],
    "ikona": "<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"/><path d=\"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27\"/>"
  }
];
