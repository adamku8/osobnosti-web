// Části města Třince — obyvatelé a kapitálové výdaje města 2022–2025.
//
// Zdroj čísel: závěrečné účty města Třince 2022–2024, návrh ZÚ 2025 (přílohy
// kapitálových výdajů) · počty obyvatel SLDB 2021 (ČSÚ). Vlastní zpracování,
// celý rozbor včetně metodiky: ../../analyzy/investice-mimo-centrum-2022-2026.md
//
// POZOR — co čísla NEobsahují:
//   · celoměstské stavby (kino Kosmos, nadjezd Závodní, 1. ZŠ, semafory, lesopark…),
//     dohromady 381,5 mil. Kč, které slouží celému městu — nedají se přiřadit části,
//   · opravy a údržbu z běžných výdajů (sekání, výtluky, úklid).
//     „Nula" tedy znamená nula investic, ne nula péče.
// Zařazení akce k části je vlastní klasifikace podle názvu v rozpočtu.
//
// Řádky kopírují rozbor: Lyžbice a Staré Město jsou sloučené (společné projekty),
// Podlesí spadá statisticky pod Konskou, Sosna a Terasa pod Dolní Líštnou.
// Vše ostatní se v souboru dopočítává — nepiš sem Kč na obyvatele ani procenta ručně.

export const OBDOBI = '2022–2025';

export const casti = [
  {
    "nazev": "Lyžbice a Staré Město",
    "typ": "sidliste",
    "obyvatel": 19264,
    "investice": 326105857,
    "akce": "most přes Tyrku, ZŠ Petra Bezruče, ZŠ Koperníkova, ZŠ Míru, prostranství nad Hradčany, břehové svahy Olše, městské bytové domy"
  },
  {
    "nazev": "Dolní Líštná se Sosnou",
    "typ": "sidliste",
    "obyvatel": 3597,
    "investice": 124654922,
    "akce": "parkovací objekt Sosna, ZŠ Kaštanová, rekonstrukce ulice Kaštanová, břehové svahy Líštnice"
  },
  {
    "nazev": "Oldřichovice",
    "typ": "primestska",
    "obyvatel": 3118,
    "investice": 54456609,
    "akce": "bytový dům čp. 783, třetí etapa hřbitova, kanalizace Vlněnka, ZŠ a MŠ, zadržení vody v krajině"
  },
  {
    "nazev": "Konská a Podlesí",
    "typ": "primestska",
    "obyvatel": 1635,
    "investice": 50091744,
    "akce": "chodník Podlesí (40,7 mil.), propustek, břehový svah Staviska"
  },
  {
    "nazev": "Tyra a Javorový",
    "typ": "primestska",
    "obyvatel": 465,
    "investice": 23054925,
    "akce": "vodovod Kozinčany (14,0 mil.), most Holý, chata Javorový — ČOV a střecha"
  },
  {
    "nazev": "Guty",
    "typ": "primestska",
    "obyvatel": 836,
    "investice": 17806052,
    "akce": "hasičská zbrojnice a požární ochrana, energetika MŠ"
  },
  {
    "nazev": "Nebory",
    "typ": "primestska",
    "obyvatel": 1848,
    "investice": 5812867,
    "akce": "čerpací stanice a výtlačný řad — a nic dalšího"
  },
  {
    "nazev": "Osůvky",
    "typ": "primestska",
    "obyvatel": 446,
    "investice": 2147006,
    "akce": "dětské hřiště a úniková cesta ZŠ a MŠ — obojí v roce 2022"
  },
  {
    "nazev": "Kojkovice",
    "typ": "primestska",
    "obyvatel": 342,
    "investice": 328393,
    "akce": "dětské hřiště v roce 2022"
  },
  {
    "nazev": "Karpentná",
    "typ": "primestska",
    "obyvatel": 787,
    "investice": 126739,
    "akce": "vodovodní služebnost a devět tisíc na chodník k víceúčelovému domu"
  },
  {
    "nazev": "Kanada",
    "typ": "primestska",
    "obyvatel": 1044,
    "investice": 0,
    "akce": "za čtyři roky žádná investiční akce"
  },
  {
    "nazev": "Horní Líštná",
    "typ": "primestska",
    "obyvatel": 400,
    "investice": 0,
    "akce": "za čtyři roky žádná investiční akce"
  }
];

// ---- Dopočty (jediné místo, kde se z čísel výše počítá) ----

const soucet = (pole, klic) => pole.reduce((a, c) => a + c[klic], 0);

export const naObyvatele = (c) => Math.round(c.investice / c.obyvatel);

export const primestske = casti.filter(c => c.typ === 'primestska');
export const sidliste = casti.filter(c => c.typ === 'sidliste');

export const souhrn = {
  obyvatelCelkem: soucet(casti, 'obyvatel'),
  investiceCelkem: soucet(casti, 'investice'),
  obyvatelPrimestske: soucet(primestske, 'obyvatel'),
  investicePrimestske: soucet(primestske, 'investice'),
  pocetPrimestskych: primestske.length,
};
souhrn.podilObyvatel = souhrn.obyvatelPrimestske / souhrn.obyvatelCelkem;
souhrn.podilInvestic = souhrn.investicePrimestske / souhrn.investiceCelkem;
souhrn.prumerNaObyvatele = Math.round(souhrn.investiceCelkem / souhrn.obyvatelCelkem);

// Části, na které za čtyři roky zbyly drobné — hranice 5 000 Kč na obyvatele,
// tedy zhruba třetina městského průměru.
export const HRANICE_ZANEDBANI = 5000;
export const zanedbane = primestske.filter(c => naObyvatele(c) < HRANICE_ZANEDBANI);

export const souhrnZanedbanych = {
  pocet: zanedbane.length,
  obyvatel: soucet(zanedbane, 'obyvatel'),
  investice: soucet(zanedbane, 'investice'),
};
souhrnZanedbanych.naObyvatele = Math.round(souhrnZanedbanych.investice / souhrnZanedbanych.obyvatel);
souhrnZanedbanych.podilObyvatel = souhrnZanedbanych.obyvatel / souhrn.obyvatelCelkem;
souhrnZanedbanych.podilInvestic = souhrnZanedbanych.investice / souhrn.investiceCelkem;
souhrnZanedbanych.kratMene = souhrn.prumerNaObyvatele / souhrnZanedbanych.naObyvatele;

// ---- Co pro části chceme ----
// Závazky jsou systémové: platí pro všechny části stejně. Vycházejí z programu
// (oblasti.js) a z toho, co k částem zaznělo v podcastu a na schůzkách týmu.
export const zavazky = [
  {
    "nazev": "Místo k setkávání v každé části",
    "text": "Ne případ od případu, ale se stejnými pravidly pro všechny. Spolek, který si chce postavit komunitní prostor, musí předem vědět, jak mu město pomůže s pozemkem i penězi — a plán setkávacích míst patří do akčního plánu města, ne na jednání o každé jednotlivé žádosti."
  },
  {
    "nazev": "Doprava na zavolání",
    "text": "Menší vozy, které v částech nejezdí podle jízdního řádu poloprázdné, ale přijedou, když si o ně člověk řekne. Ve špičkách zůstává běžná MHD posílená tak, aby se děti dostaly do školy a zpátky bez rodičovského taxi."
  },
  {
    "nazev": "Bezpečná cesta do centra",
    "text": "Desítky milionů do chodníků a cyklostezek, které spojí části s centrem. Prvním krokem může být spojení lesoparku s Kanadou nebo Terasy s Oldřichovicemi. Tam, kde stavba není rychle možná, začneme zpomalením dopravy a přechody."
  },
  {
    "nazev": "Peníze, o kterých rozhodnou lidé z části",
    "text": "Rozšíříme participativní rozpočet a granty na kulturu, sport a sousedské akce tak, aby na ně dosáhly i malé spolky. Dožínky, rozsvícení stromu nebo sousedská slavnost drží část pohromadě stejně jako asfalt."
  },
  {
    "nazev": "Dokončené sítě",
    "text": "Vodovod a kanalizace tam, kde na ně lidé čekají — v plánu s jasným pořadím a termíny, ne jako odměna té části, která si letos řekla nejhlasitěji."
  },
  {
    "nazev": "Přehled, na který každý vidí",
    "text": "Jednou ročně zveřejníme, kolik šlo do které části a co se za to postavilo — spolu s plánem na další roky. Žádná část nemá být čtyři roky bez jediné investice, aniž by to někdo zavčas viděl."
  }
];
