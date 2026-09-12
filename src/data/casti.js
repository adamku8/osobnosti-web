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

// U každé části je `top` = její největší jednotlivá akce za období (rozbor, kap. 3).
export const OBDOBI = '2022–2025';

// ŠKOLY (pole `skoly` u každé části) počítáme mezi stavby pro celé město, ne
// mezi investice do části, kde stojí budova. Důvod je věcný: spád škol je
// celoměstský — do škol v Lyžbicích chodí děti z Nebor i z Karpentné. Pravidlo
// platí na obě strany, odečítají se i školy v Oldřichovicích, Gutech a na
// Osůvkách. Rozbor to má jako metodickou výhradu č. 5.
// Částky jsou dopočtené z rozbor. tabulky (sloupce „Kč/obyv." a „bez příspěvků
// školám" × počet obyvatel), proto jsou na koruny orientační; součet 184,9 mil.
// sedí na poměr 12 494 : 12 278 Kč na obyvatele uvedený v analýze.
//
// Celoměstské stavby 2022–2025 — kino Kosmos, nadjezd Závodní, 1. ZŠ, semafory,
// lesopark, STaRS, veřejné osvětlení, hřbitovy Folvark, autobusové stanoviště.
// Fyzicky stojí většinou na sídlištích, ale používá je celé město, takže se
// nedají přiřadit části. V grafu na /casti.html jsou vlastním pruhem — schované
// v poznámce budily dojem, že sídliště dostala tři čtvrtiny všech peněz.
// Rozpis: analyzy/investice-mimo-centrum-2022-2026.md, kap. 4.
export const CELOMESTSKE_STAVBY = 381525689;

export const casti = [
  {
    "nazev": "Lyžbice a Staré Město",
    "skoly": 133383936,
    "top": { "co": "most přes Tyrku na ulici Závodní", "mil": 47.8 },
    "typ": "sidliste",
    "obyvatel": 19264,
    "investice": 326105857,
    "akce": "most přes Tyrku, ZŠ Petra Bezruče, ZŠ Koperníkova, ZŠ Míru, prostranství nad Hradčany, břehové svahy Olše, městské bytové domy"
  },
  {
    "nazev": "Dolní Líštná se Sosnou",
    "skoly": 31739928,
    "top": { "co": "parkovací objekt Sosna", "mil": 54.8 },
    "typ": "sidliste",
    "obyvatel": 3597,
    "investice": 124654922,
    "akce": "parkovací objekt Sosna, ZŠ Kaštanová, rekonstrukce ulice Kaštanová, břehové svahy Líštnice"
  },
  {
    "nazev": "Oldřichovice",
    "skoly": 11234154,
    "top": { "co": "bytový dům čp. 783", "mil": 18.2 },
    "typ": "primestska",
    "obyvatel": 3118,
    "investice": 54456609,
    "akce": "bytový dům čp. 783, třetí etapa hřbitova, kanalizace Vlněnka, ZŠ a MŠ, zadržení vody v krajině"
  },
  {
    "nazev": "Konská a Podlesí",
    "skoly": 0,
    "top": { "co": "chodník na Podlesí", "mil": 40.7 },
    "typ": "primestska",
    "obyvatel": 1635,
    "investice": 50091744,
    "akce": "chodník Podlesí (40,7 mil.), propustek, břehový svah Staviska"
  },
  {
    "nazev": "Tyra a Javorový",
    "skoly": 0,
    "top": { "co": "vodovod Kozinčany", "mil": 14.0 },
    "typ": "primestska",
    "obyvatel": 465,
    "investice": 23054925,
    "akce": "vodovod Kozinčany (14,0 mil.), most Holý, chata Javorový — ČOV a střecha"
  },
  {
    "nazev": "Guty",
    "skoly": 7688692,
    "top": { "co": "hasičská zbrojnice", "mil": 10.1 },
    "typ": "primestska",
    "obyvatel": 836,
    "investice": 17806052,
    "akce": "hasičská zbrojnice a požární ochrana, energetika MŠ"
  },
  {
    "nazev": "Nebory",
    "skoly": 140448,
    "top": { "co": "čerpací stanice a výtlačný řad", "mil": 5.5 },
    "typ": "primestska",
    "obyvatel": 1848,
    "investice": 5812867,
    "akce": "čerpací stanice a výtlačný řad — a nic dalšího"
  },
  {
    "nazev": "Osůvky",
    "skoly": 670338,
    "top": { "co": "dětské hřiště", "mil": 1.5 },
    "typ": "primestska",
    "obyvatel": 446,
    "investice": 2147006,
    "akce": "dětské hřiště a úniková cesta ZŠ a MŠ — obojí v roce 2022"
  },
  {
    "nazev": "Kojkovice",
    "skoly": 0,
    "top": { "co": "dětské hřiště", "mil": 0.33 },
    "typ": "primestska",
    "obyvatel": 342,
    "investice": 328393,
    "akce": "dětské hřiště v roce 2022"
  },
  {
    "nazev": "Karpentná",
    "skoly": 0,
    "top": { "co": "vodovodní služebnost", "mil": 0.12 },
    "typ": "primestska",
    "obyvatel": 787,
    "investice": 126739,
    "akce": "vodovodní služebnost a devět tisíc na chodník k víceúčelovému domu"
  },
  {
    "nazev": "Kanada",
    "skoly": 0,
    "top": { "co": "žádná investiční akce", "mil": 0 },
    "typ": "primestska",
    "obyvatel": 1044,
    "investice": 0,
    "akce": "za čtyři roky žádná investiční akce"
  },
  {
    "nazev": "Horní Líštná",
    "skoly": 0,
    "top": { "co": "žádná investiční akce", "mil": 0 },
    "typ": "primestska",
    "obyvatel": 400,
    "investice": 0,
    "akce": "za čtyři roky žádná investiční akce"
  }
];

// ---- Dopočty (jediné místo, kde se z čísel výše počítá) ----

const soucet = (pole, klic) => pole.reduce((a, c) => a + c[klic], 0);

// Co z investice zůstává části po vyčlenění škol.
export const prirazeno = (c) => c.investice - c.skoly;
export const naObyvatele = (c) => Math.round(prirazeno(c) / c.obyvatel);

export const primestske = casti.filter(c => c.typ === 'primestska');
export const sidliste = casti.filter(c => c.typ === 'sidliste');

const soucetPrirazenych = (pole) => pole.reduce((a, c) => a + prirazeno(c), 0);

export const SKOLY = soucet(casti, 'skoly');
// Vše, co slouží celému městu: celoměstské stavby + školy.
export const CELOMESTSKE = CELOMESTSKE_STAVBY + SKOLY;

export const souhrn = {
  obyvatelCelkem: soucet(casti, 'obyvatel'),
  obyvatelPrimestske: soucet(primestske, 'obyvatel'),
  pocetPrimestskych: primestske.length,
  // investiceCelkem = to, co se dá přiřadit konkrétní části (po odečtení škol)
  investiceCelkem: soucetPrirazenych(casti),
  investicePrimestske: soucetPrirazenych(primestske),
  investiceSidliste: soucetPrirazenych(sidliste),
};
souhrn.podilObyvatel = souhrn.obyvatelPrimestske / souhrn.obyvatelCelkem;
souhrn.podilInvestic = souhrn.investicePrimestske / souhrn.investiceCelkem;
souhrn.prumerNaObyvatele = Math.round(souhrn.investiceCelkem / souhrn.obyvatelCelkem);
// Úplný objem kapitálových výdajů 2022–2025 včetně všeho celoměstského.
souhrn.investiceVse = souhrn.investiceCelkem + CELOMESTSKE;
souhrn.podilCelomestskych = CELOMESTSKE / souhrn.investiceVse;

// ---- Co pro části chceme ----
// Ilustrace `obrazek` leží v public/assets/img/casti/ — stejný rukopis jako kresby
// projektů na /program.html: tenká linka v antracitu, bílá plocha, jeden červený akcent.
// Sedm závazků, platí pro všechny části stejně. `hl` je slovo nebo číslo z názvu,
// které jde do červeného boxu — musí být přesný výřez z `nazev`, jinak se box
// nevykreslí (kontrola je v casti.astro). `strucne` jde na stránku vždy,
// `detail` je schovaný v rozklikávacím bloku — kdo chce podrobnosti, dostane je,
// kdo chce přehled, přečte stránku za minutu.
// Podklady: akční plán města (termíny „2027+“), závěrečný účet 2025, NPŽP.
export const zavazky = [
  {
    "nazev": "Nové místo, kde se potkáme",
    "obrazek": "setkavani.jpg",
    "alt": "Kresba: lidé se potkávají pod dřevěnou pergolou na návsi, v pozadí hasičská zbrojnice a vesnice",
    "hl": "Nové",
    "ikona": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/>",
    "strucne": "Komunitní prostor, hřiště a kus zeleně nemá být odměna pro tu část, která si řekne nejhlasitěji. Nastavíme jasná pravidla, která platí všude stejně.",
    "detail": [
      "Spolek, který si chce postavit místo k setkávání, předem ví, jak mu město pomůže s pozemkem i s penězi — metodika místo jednání o každé žádosti zvlášť.",
      "Hasičské zbrojnice a jejich sály bereme jako plnohodnotná komunitní centra. Tak už dávno fungují.",
      "Otevřeme hřiště u škol a školek i mimo vyučování a dáme víc peněz do sportovišť a malých parků."
    ]
  },
  {
    "nazev": "Nová MHD na zavolání",
    "obrazek": "mhd.jpg",
    "alt": "Kresba: mikrobus zastavuje u zastávky ve vesnici, žena si ho právě objednala telefonem",
    "hl": "Nová",
    "ikona": "<path d=\"M8 6v6\"/><path d=\"M15 6v6\"/><path d=\"M2 12h19.6\"/><path d=\"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3\"/><circle cx=\"7\" cy=\"18\" r=\"2\"/><path d=\"M9 18h5\"/><circle cx=\"16\" cy=\"18\" r=\"2\"/>",
    "strucne": "Autobus, který nejezdí poloprázdný podle jízdního řádu, ale přijede, když si o něj řeknete. Objednáte ho aplikací nebo telefonem, přijede mikrobus a platíte běžnou jízdenku.",
    "detail": [
      "Ve Středočeském a Libereckém kraji to jezdí pod názvem PID Haló, zavedly to Litoměřice, Jablonec i obce u Brna. Moravskoslezský kraj to pilotně provozuje na Osoblažsku ve čtrnácti obcích.",
      "Třinec to má naplánované — v akčním plánu města je „Veřejná poptávková hromadná doprava“ s termínem 2026, nositelem je odbor dopravy. Jen se nespustila.",
      "Ve špičkách zůstává běžná linka posílená tak, aby se děti dostaly do školy a zpátky bez rodičovského taxi."
    ]
  },
  {
    "nazev": "100 mil. Kč do nových chodníků",
    "obrazek": "chodniky.jpg",
    "alt": "Kresba: nový chodník a přechod podél vesnické silnice, děti jdou do školy, cyklista na stezce",
    "hl": "100 mil. Kč",
    "ikona": "<circle cx=\"6\" cy=\"19\" r=\"3\"/><path d=\"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15\"/><circle cx=\"18\" cy=\"5\" r=\"3\"/>",
    "strucne": "Město má generel cyklodopravy, chodníky ho nemají — staví se úsek po úseku, podle toho, co zrovna vyjde. Necháme zpracovat generel pěší dopravy a podle něj dáme za volební období sto milionů do chodníků a cyklostezek.",
    "detail": [
      "Koncepci pěší dopravy jsme prosadili do strategického plánu. V akčním plánu ale stojí s termínem „2027+“, stejně jako chodník v Oldřichovicích — to je v překladu „někdy“. Dáme jí konkrétní datum.",
      "Podle generelu pak na jednotlivé úseky sháníme dotace. U páteřních chodníků nevyloučíme ani úvěr: chodník slouží třicet let, je v pořádku ho takhle zaplatit.",
      "Začneme tam, kde děti chodí do školy po krajnici."
    ]
  },
  {
    "nazev": "Více vody pro teplé roky",
    "hl": "Více vody",
    "obrazek": "voda.jpg",
    "alt": "Kresba: vesnický dům s nádrží na dešťovou vodu a studnou, potok s lávkou za zahradou",
    "ikona": "<path d=\"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z\"/>",
    "strucne": "Sucho ve studni a čekání na kanalizaci se netýká sídlišť, ale částí. Na domovní čistírny má stát vypsané peníze — jenže žádost musí podat město, ne majitel domu.",
    "detail": [
      "<strong>Domovní čistírny.</strong> Národní program Životní prostředí platí až 80 % ceny — 150 tisíc na čistírnu pro jeden dům, 300 tisíc pro větší. Žádosti se přijímají do ledna 2027 a čistírny zůstávají ve správě města. Podáme ji.",
      "<strong>Půjčka na vodu.</strong> Město má Fond rozvoje bydlení a nevyčerpá ho — loni z půldruhého milionu půjčilo 590 tisíc. Rozšíříme ho o nádrže, vsakování a studny.",
      "<strong>Konec čekání naslepo.</strong> Zveřejníme plán odkanalizování s pořadím a termíny, ať každý ví, jestli má čekat, nebo si pořídit vlastní čistírnu.",
      "<strong>Vodovod dál od centra.</strong> Rozšíření vodovodu Nebory–Dušinec směrem na Kanadu a Podlesí dostane termín místo dnešního „2027+“."
    ]
  },
  {
    "nazev": "Nové peníze na akce mimo centrum",
    "hl": "Nové peníze",
    "obrazek": "hlas.jpg",
    "alt": "Kresba: lidé z části stojí nad plánem na stole, jeden zvedá ruku, vedle vývěska",
    "ikona": "<path d=\"m9 12 2 2 4-4\"/><path d=\"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z\"/><path d=\"M22 19H2\"/>",
    "strucne": "Posílíme participativní rozpočet a část peněz vyhradíme na akce v příměstských částech, aby velké sídliště nepřehlasovalo malou vesnici.",
    "detail": [
      "Zvýšíme podporu osadních výborů a budeme se s nimi bavit pravidelně, ne jen když se něco stane.",
      "Zavedeme výjezdní setkání rady a zastupitelů přímo v částech.",
      "Nově chceme mluvit i s mladými — navážeme na Třineckou radu mládeže a dáme jí vlastní rozpočet i vlastní hlas."
    ]
  }
];
