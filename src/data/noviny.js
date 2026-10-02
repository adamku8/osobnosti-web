// Obsah převzatý z volebních novin „Nový Třinec“ (A3, 8 stran, tisk 15. 9. 2026,
// sazba Lenka — Drive Osobnosti 2026+/04_TISK/Bulletin/NÁVRH_Lenka/).
// Texty jsou z finální sazby; na webu se jen dělí do odstavců, „na dalších
// stránkách“ → „na webu“ apod. Fotky vyřezané z tiskového PDF: public/assets/img/noviny/.
//
// Kdo to používá:
//   vysledky.astro          → CISLO, uvodVysledky, slibili, splnili, podarilo
//   doporucuji-nas.astro    → doporuceni
//   blog-[slug].astro       → clanky
//   index.astro             → uvodnik (Slovo lídryně) + upoutávky
//   kandidati.astro         → kolaz
//   medailonky.js           → pole `noviny` u Sirotové, Štěrby a čtyř zastupitelů

const IMG = 'assets/img/noviny/';

// ---------------------------------------------------------------- strana 1
export const uvodnik = {
  foto: IMG + 'lucie-todam.jpg',
  podpis: IMG + 'lucie-podpis.png',
  osloveni: 'Milí sousedé,',
  odstavce: [
    'Třinec je můj domov. Tady žiju, vychovávám své děti, pracuju a každý den potkávám vás – lidi, kteří tomuto městu dávají život.',
    'A jsem hrdá na to, co se nám v posledních letech podařilo. Zrekonstruovali jsme autobusové stanoviště, modernizovali kino Kosmos, připravili projekt velkého městského hřiště a pomáhali projektu CirkArena, který může Třinec posunout zase o kus dál. Rozjeli jsme participativní rozpočet, spustili nový web města a přinesli nové akce – Třineckou olympiádu dětí a mládeže nebo Noc vědy.',
    'Je za námi kus práce. Ale před námi je ještě větší příležitost.',
    'Třinec nepotřebuje začínat znovu. Potřebuje navázat na to dobré a mít odvahu pustit se do nových věcí. Přitáhnout mladé rodiny. Dát prostor podnikavým a aktivním lidem. Vytvářet kvalitní veřejný prostor. A být městem, které ví, kam směřuje.',
    'Proto jsme dali dohromady tým lidí, kteří už ve svých profesích něco dokázali a není jim jedno, co se děje kolem nich. Každý přináší jiné zkušenosti a jiný pohled. Spojuje nás ale jedno: Třinec a chuť vzít odpovědnost za jeho další směřování.',
    'Tady na webu najdete naše konkrétní plány. Ale hlavně poznáte lidi, kteří jsou připraveni je proměnit ve skutečnost. Jestli tu možnost dostaneme, rozhodnete vy. Budu ráda za vaši důvěru a možnost pokračovat v práci pro Třinec.',
    'Máme zkušenosti, máme energii a máme jasnou představu, kam naše město posunout dál.',
  ],
  jmeno: 'Lucie Fremrová',
  role: 'lídryně kandidátky',
};

// ---------------------------------------------------------------- strana 3
export const CISLO = { hodnota: '1,2', jednotka: 'miliardy Kč', popis: 'proinvestováno za minulé volební období' };

export const uvodVysledky = {
  podtitul: 'Víme, jak spravovat naše město. Slušně, odborně a bez skandálů.',
  text: 'OSOBNOSTI jsou občanskou kandidátkou lidí, kteří v Třinci žijí a pracují. Nejsme závislí na žádné celostátní politické straně ani hnutí. Spravovat město svědomitě, s odborností a bez skandálů není vůbec samozřejmé. My to dokázali a za minulé období jsme proinvestovali více než 1,2 miliardy Kč.',
};

// Šest krátkých článků „SLÍBILI jsme…“. odkaz = kam dál na webu (volitelné).
export const slibili = [
  {
    id: 'autobusove-stanoviste',
    nazev: 'Autobusové stanoviště',
    foto: IMG + 'stanoviste.jpg',
    alt: 'Nové zastřešené nástupiště autobusového stanoviště v Třinci',
    zdroj: 'www.trinecko.cz',
    text: 'jsme modernizaci autobusového stanoviště – a povedlo se. Dnes už nové stanoviště slouží cestujícím a je modernější, bezpečnější a jednoduše hezčí. Nové zastřešení nabízí větší komfort a celý prostor působí vzdušněji. Pro spoustu lidí je právě autobusové stanoviště prvním kontaktem s Třincem. Jsme proto rádi, že jsme jeho rekonstrukci dotáhli a další důležité místo ve městě dostalo podobu, kterou si zaslouží.',
  },
  {
    id: 'kino-kosmos',
    nazev: 'Kino Kosmos',
    foto: IMG + 'kosmos.jpg',
    alt: 'Zrekonstruovaná budova kina Kosmos v Třinci',
    zdroj: 'www.trinecko.cz',
    text: 'jsme rekonstrukci Kina Kosmos a dnes je znovu otevřené. Nebyla to jednoduchá stavba – kino potřebovalo zásadní modernizaci, zároveň pro nás ale bylo důležité zachovat jeho jedinečný charakter. Výsledkem je moderní kino se špičkovou technologií, které dál zůstává místem, k němuž mají Třinečáci silný vztah. A jeho význam nekončí u filmového plátna. Kosmos má být živým kulturním místem pro setkávání, výstavy i další akce a důležitou součástí života v Třinci.',
  },
  {
    id: 'cirkarena',
    nazev: 'CirkArena',
    foto: IMG + 'cirkarena.jpg',
    alt: 'Vizualizace výzkumného centra CirkArena v Třinci',
    zdroj: 'www.cirkarena.cz',
    text: 'jsme, že podpoříme vznik CirkAreny, a jsme hrdí, že jsme mohli pomoci projektu, který může výrazně ovlivnit budoucnost Třince. Ze staré Werk Areny vzniká špičkové výzkumné centrum zaměřené na cirkulární ekonomiku. Přivede vědce, studenty, nové talenty i pracovní příležitosti a propojí výzkum s místními firmami. Na CirkArenu navážeme expat centrem, které pomůže nově příchozím i navrátilcům rychle se zabydlet a zapojit do života města. Třinec tak získá projekt s významem daleko za hranicemi regionu.',
  },
  {
    id: 'lesopark',
    nazev: 'Lesopark',
    foto: IMG + 'lesopark.jpg',
    alt: 'Obnovená pobytová plocha s lavičkami v třineckém lesoparku',
    zdroj: 'www.trinecko.cz',
    text: 'jsme, že budeme pokračovat v obnově lesoparku – jednoho z nejoblíbenějších míst pro procházky, sport i odpočinek přímo ve městě. Postupně obnovujeme pobytové plochy, zeleň, mobiliář i herní prvky a pustili jsme se také do rekonstrukce osvětlení. Rádi bychom našli místo pro psí hřiště, toalety pro rodiče u dětského hřiště a přidali cvičící prvky také pro seniory.',
    odkaz: { href: 'lesopark.html', text: 'Program pro lesopark' },
  },
  {
    id: 'ochlazeni',
    nazev: 'Ochlazení veřejného prostoru',
    foto: IMG + 'ochlazeni.jpg',
    alt: 'Vodní mlžítko na náměstí v Třinci',
    zdroj: 'www.trinecko.cz',
    text: 'jsme, že budeme město lépe připravovat na horké letní dny. Na frekventovaná místa jsme proto postupně instalovali mlžítka, letos přibyla také před Kinem Kosmos. Ochlazení veřejného prostoru je i jedním z hlavních cílů revitalizace náměstí T. G. M., kde původní zeleň zůstává zachována a fontánu nahradí vodní trysky. V celém Třinci zároveň pokračujeme ve výsadbě stromů a péči o zeleň. Stín, voda a stromy jsou totiž v horkých dnech stále důležitější.',
  },
  {
    id: 'detska-hriste',
    nazev: 'Dětská hřiště a prvky',
    foto: IMG + 'hriste.jpg',
    alt: 'Dětské hřiště s průlezkami a houpačkami',
    zdroj: 'www.hriste-bonita.cz',
    text: 'jsme obnovovat dětská hřiště a herní prvky a v uplynulých letech jsme se do jejich oprav postupně pustili. Teď jsme připravili další velký krok – nové dětské hřiště u knihovny. Máme hotovou přípravu a v rozpočtu vyčleněné peníze na jeho realizaci. Pokud dostaneme vaši důvěru, velké moderní hřiště, které bude místem pro děti i setkávání rodin, zrealizujeme. Třinec si takové centrální hřiště zaslouží.',
    odkaz: { href: 'program.html#projekty', text: 'Hřiště u knihovny v programu' },
  },
];

// Modrý box „Splnili jsme“ — sloveso VERZÁLKAMI + zbytek věty.
export const splnili = [
  ['Zrevitalizovali', 'jsme lesopark'],
  ['Rozjeli', 'jsme participativní rozpočet ve výši 600 000 Kč ročně'],
  ['Zrekonstruovali', 'jsme autobusové stanoviště'],
  ['Vybudovali', 'jsme nová dětská hřiště a dětské prvky'],
  ['Zmodernizovali', 'jsme Kino Kosmos'],
  ['Zpracovali', 'jsme nový Strategický plán'],
  ['Pomohli', 'jsme k realizaci CirkAreny'],
  ['Rozšířili', 'jsme sítě vodovodů a kanalizací v příměstských částech'],
  ['Podpořili', 'jsme kulturu, sport a společenský život v centru i příměstských částech'],
  ['Zavedli', 'jsme mobilní aplikaci města'],
  ['Zdokonalili', 'jsme informovanost občanů v krizových situacích'],
  ['Zasadili', 'jsme 75 nových stromů a 100 keřů v ulicích'],
  ['Ochladili', 'jsme městský veřejný prostor'],
  ['Zřídili', 'jsme taxislužbu pro seniory — Senior taxi'],
  ['Rozvíjeli', 'jsme bohatou síť sociálních služeb'],
];

// ---------------------------------------------------------------- strana 2
// Čtyři současní zastupitelé. slug = klíč medailonku (odkaz na /kandidat-<slug>.html).
export const podarilo = [
  {
    slug: 'adam-kurzok',
    jmeno: 'Adam Kurzok',
    funkce: 'předseda strategického výboru',
    let: 8,
    foto: IMG + 'kurzok.jpg',
    perex: 'Naše město má velký potenciál, proto jsme připravili strategický plán Třinec 2030+.',
    text: 'Jedni mluví o problémech, druzí mají vizi. Třinec ztrácí obyvatele, hlavně mladé. Jako předseda strategického výboru jsem proto vedl přípravu plánu Třinec 2030+ s jasným posláním: bez mladých rodin nemá naše město budoucnost. Strategie vznikla s lidmi, ne od stolu. Její cíle jsou jasné: hezčí veřejný prostor, lepší práce, více firem, zelená energie a chytré město. Jak vidíte, náš volební program se od ní příliš neliší.',
  },
  {
    slug: 'bohdan-sikora',
    jmeno: 'Bohdan Sikora',
    funkce: 'velitel HZS Třinec',
    let: 12,
    foto: IMG + 'sikora.jpg',
    perex: 'V zastupitelstvu pracuji už 12 let a po celou dobu se věnuji především bezpečnosti.',
    text: 'Ze své profese vím, že právě ta je základem dobře fungujícího města. V krizové situaci je přitom zásadní nejen rychlá pomoc, ale také včasné a přesné informace. Proto jsem se podílel na nastavení krizové komunikace města. Jedním z jejích nástrojů je Třinec v mobilu, který upozorní na mimořádné situace, ale nabízí i řadu dalších praktických informací pro každodenní život.',
  },
  {
    slug: 'regina-eichler',
    jmeno: 'Regina Eichler',
    funkce: 'ředitelka Kina Kosmos',
    let: 17,
    foto: IMG + 'eichler.jpg',
    perex: 'Kino Kosmos je pro mě místem, které k Třinci neodmyslitelně patří.',
    text: 'Chodily do něj celé generace a jsem ráda, že po rekonstrukci může dál žít svým životem. To, že je dnes třetím nejnavštěvovanějším jednosálovým kinem v Česku, ukazuje, jak silný vztah k němu Třinečáci mají.',
  },
  {
    slug: 'martina-wolna',
    jmeno: 'Martina Wolna',
    funkce: 'ředitelka Knihovny Třinec',
    let: 16,
    foto: IMG + 'wolna.jpg',
    perex: 'Na naši knihovnu můžeme být opravdu hrdí. Je oceňovaná, inspiruje ostatní, ale hlavně je živým místem, kde se potkávají všechny generace.',
    text: 'A její role nekončí u dveří budovy. Právě teď sháníme prostředky na Lavičku Václava Havla, která vytvoří před knihovnou další místo pro setkávání a povídání. A možná nám bude i připomínat, že demokracie začíná docela obyčejně – tím, že spolu mluvíme a umíme si naslouchat.',
  },
];

// „Nová generace — proč do toho jdeme“ (strana 2 vpravo) → medailonky.
export const novaGenerace = {
  'erika-sirotova': {
    nadpis: 'Třinec je můj domov, chci mu naslouchat',
    foto: IMG + 'sirotova.jpg',
    perex: 'Třinec je moje rodné město a místo, kam jsem se po studiích a zkušenostech odjinud vrátila s rodinou.',
    text: [
      'Vystudovala jsem politologii a personální management a celý profesní život pracuji v personalistice. Každý den se potkávám s lidmi, naslouchám různým pohledům a hledám řešení, která dávají smysl. Praxe mě naučila, že dobrá spolupráce stojí na otevřené komunikaci, respektu a schopnosti věci dotahovat.',
      'Do voleb jdu proto, že chci využít své zkušenosti i pro Třinec a přispět k tomu, aby se dobré nápady proměňovaly v konkrétní kroky.',
    ],
  },
  'marek-sterba': {
    nadpis: 'Třinci chci vrátit, co mi dal',
    foto: IMG + 'sterba.jpg',
    perex: 'Jsem Třinečák. Narodil jsem se tady, vyrůstal, chodil do školy, sportoval a poznal své přátele. Třinec je zkrátka město, se kterým je spojená velká část mého života. Po studiu v Praze jsem se vrátil domů a dnes tady žiji s rodinou, pracuji a podnikám.',
    text: [
      'Třinec mi toho do života hodně dal a připadá mi správné mu teď něco vrátit. Kandidaturu proto vnímám jako příležitost zapojit se víc do dění ve městě, poznat lépe jeho fungování a přispět svými zkušenostmi.',
      'Do politiky nejdu s představou, že mám na všechno hotovou odpověď. Chci především naslouchat lidem, učit se, hledat společná řešení a být užitečný tam, kde můžu. Věřím, že člověk nemusí před volbami slibovat velká slova. Důležitější je podle mě chuť pracovat, převzít odpovědnost a udělat něco pro město, které považuje za svůj domov.',
    ],
  },
};

// ---------------------------------------------------------------- strana 5
// Koláž „My jsme z Třince, žijeme tady spolu“ — fotky kandidátů z volného času.
// siroka = fotka přes dva sloupce mřížky.
export const kolaz = [
  { foto: IMG + 'kolaz-01.jpg', siroka: true },
  { foto: IMG + 'kolaz-02.jpg' },
  { foto: IMG + 'kolaz-03.jpg' },
  { foto: IMG + 'kolaz-04.jpg' },
  { foto: IMG + 'kolaz-06.jpg' },
  { foto: IMG + 'kolaz-07.jpg' },
  { foto: IMG + 'kolaz-05.jpg' },
  { foto: IMG + 'kolaz-08.jpg' },
  { foto: IMG + 'kolaz-09.jpg' },
  { foto: IMG + 'kolaz-10.jpg' },
  { foto: IMG + 'kolaz-11.jpg' },
];

// ---------------------------------------------------------------- strana 8
// Pořadí jako v novinách (sloupec 1 shora, sloupec 2 shora). `kratce` = výňatek pro úvod webu.
export const doporuceni = [
  {
    id: 'jiri-zabystrzan',
    jmeno: 'Jiří Zabystrzan',
    foto: IMG + 'zabystrzan.jpg',
    kratce: 'Osobnostem věřím, protože za sebou mají konkrétní práci a výsledky a zároveň dokážou přivést nové tváře, nápady a energii.',
    text: [
      'Pokud mi záleží na městě, kde jsem se narodil a kde žiju, považuji za důležité přijít k volbám a nepřenechat rozhodování o jeho budoucnosti ostatním. Svůj hlas dávám především lidem, které znám, kterým důvěřuji a o kterých vím, že jim na Třinci skutečně záleží.',
      'Přál bych si hlavně více dobré nálady a pozitivního pohledu na naše město. V Třinci se nám žije opravdu dobře a máme být na co hrdí. Spokojenost většinou nebývá tolik slyšet, a tak bych si přál, abychom si častěji všímali toho dobrého kolem nás.',
      'Osobnostem věřím, protože za sebou mají konkrétní práci a výsledky a zároveň dokážou přivést nové tváře, nápady a energii.',
    ],
  },
  {
    id: 'martin-vanka',
    jmeno: 'Martin Vaňka',
    foto: IMG + 'vanka.jpg',
    kratce: 'Dobré město je totiž trochu jako dobrý gym – potřebuje silný tým, jasný směr a nikoho, kdo jen sedí v rohu a radí ostatním.',
    text: [
      'Ve sportu i v životě platí jedno – kdo chce něco ovlivnit, musí nastoupit. Já se rozhoduji podle lidí a podle toho, co za nimi zůstává. Jako trenér vím, že můžeš mít krásný plán na papíře, ale nakonec rozhodují ti, kteří ho mají splnit.',
      'U Osobností vidím práci, výsledky a lidi, kteří umí makat. A Třinci přeju, aby byl městem, kde budou chtít naše děti jednou zůstat – se skvělým sportem, školami, prací i kulturou.',
      'Dobré město je totiž trochu jako dobrý gym – potřebuje silný tým, jasný směr a nikoho, kdo jen sedí v rohu a radí ostatním.',
    ],
  },
  {
    id: 'libuse-koppova',
    jmeno: 'Libuše Koppová',
    foto: IMG + 'koppova.jpg',
    kratce: 'Osobnostem dávám hlas, protože mám paměť. Pamatuji si spoustu dobrých věcí, které se v Třinci podařily.',
    text: [
      'Osobnostem dávám hlas, protože mám paměť. Pamatuji si spoustu dobrých věcí, které se v Třinci podařily, a těch je podle mě podstatně víc než těch negativních. Navíc mezi Osobnostmi znám spoustu kvalitních lidí.',
      'Třinci přeji, aby děti vyrůstaly v bezpečí, mladí měli prostor pro své myšlenky a senioři své důstojné místo v naší komunitě – protože tam jednou budeme patřit všichni.',
      'A věřím, že právě s Osobnostmi budeme dál táhnout za společný provaz správným směrem.',
    ],
  },
  {
    id: 'marek-mokrosz',
    jmeno: 'Marek Mokrosz',
    foto: IMG + 'mokrosz.jpg',
    kratce: 'Znám mezi nimi lidi, kterým věřím a kteří mají za sebou výsledky. A ty jsou pro mě víc než předvolební sliby.',
    text: [
      'Kdo nejde volit, vzdává se možnosti vyjádřit, co považuje za správné. Já se rozhoduji podle lidí – řadu z nich znám osobně, u ostatních se dívám na to, co mají za sebou.',
      'Třinci přeji vedení, které se dokáže dohodnout a tvořit, ne pálit čas a energii v rozepřích. Přeji si bezpečné město, kde se dobře žije všem – a v Třinci to odjakživa znamená lidi různých jazyků, vyznání i zájmů. Školství, které děti motivuje, a ne odrazuje. A město, které aktivně podporuje fungující spolky a organizace – pro děti i pro ty nejstarší, od sportu po paliativní péči.',
      'Většina mých křížků půjde Osobnostem, které podporuji – znám mezi nimi lidi, kterým věřím a kteří mají za sebou výsledky. A ty jsou pro mě víc než předvolební sliby.',
    ],
  },
  {
    id: 'petr-siska',
    jmeno: 'Petr Šiška',
    foto: IMG + 'siska.jpg',
    kratce: 'Svůj hlas letos jednoznačně dám Osobnostem – mají vizi, zkušenosti, odhodlání a nesnaží se bourat to, co jejich předchůdci vytvořili.',
    text: [
      'Jsme sousedé, tátové, mámy, přátelé a budoucnost našeho města by nám neměla být lhostejná. Já už po 20 letech jako dinosaurus komunální politiky nekandiduji, ale těší mě, že kandidátky omládly.',
      'Třinci přeji hlavně správnou a šťastnou volbu a lidi bez klapek na očích. Kdo totiž občas vytáhne paty z Třince, ví, že se nám tu žije opravdu nadstandardně.',
      'Svůj hlas letos jednoznačně dám Osobnostem – mají vizi, zkušenosti, odhodlání a nesnaží se bourat to, co jejich předchůdci vytvořili. Držím palce veselé, energické a pracovité TROJCE!',
    ],
  },
  {
    id: 'vera-palkovska',
    jmeno: 'Věra Palkovská',
    foto: IMG + 'palkovska.jpg',
    kratce: 'Osobnosti pro Třinec pro mě představují spojení zkušeností s novou energií a novými nápady.',
    text: [
      'Třinec je náš společný domov a není jedno, kdo a jak se o něj bude starat. Při volbě jsou pro mě nejdůležitější lidé, jejich práce, zkušenosti a výsledky.',
      'Přeji si, aby se Třinec dál rozvíjel a byl městem, kde se dobře žije všem generacím a kam se mladí lidé rádi vracejí.',
      'Osobnosti pro Třinec pro mě představují spojení zkušeností s novou energií a novými nápady. Právě v tom vidím sílu pro další rozvoj našeho města.',
    ],
  },
];

// ---------------------------------------------------------------- strana 6
// Tři články → /blog-<slug>.html. Odstavec může začínat tučnou „vstupní větou“
// (pole `b`) a pokračovat textem (`t`). projekty = slugy z projekty.js.
export const clanky = [
  {
    slug: 'mlade-rodiny-do-trince',
    nazev: 'Mladé rodiny do Třince',
    hl: 'Třince',
    podtitul: 'Jak bude město vypadat za 10 let, rozhodujeme dnes.',
    popis: 'Mladí lidé si nevybírají jen byt, ale místo pro život. Bydlení, práce, hřiště, kroužky a důvod se po studiích vrátit domů.',
    cover: { foto: IMG + 'mesto-letecky.jpg', alt: 'Letecký pohled na třinecké sídliště', zdroj: 'archiv OPT' },
    odstavce: [
      { t: 'Mladí lidé si nevybírají jen byt. Vybírají si i místo pro život. Místo, kde najdou dobrou práci. Kde mají děti dobrou školu a co dělat, až škola skončí. Kde se dá sportovat, podnikat, potkávat s lidmi a kde se dobře žije.', b2: 'A přesně takovým místem má být Třinec.', lead: true },
      { b: 'Začněme bydlením.', t: 'Podpoříme novou výstavbu, připravíme lokality pro rodinné domy, rozšíříme nabídku startovacích bytů a budeme dál proměňovat sídliště, jejich okolí i život v příměstských částech.' },
      { foto: IMG + 'hriste-kostka.jpg', alt: 'Dětské hřiště s lezeckou kostkou v Třinci', zdroj: 'www.trinecko.cz' },
      { b: 'Přidáme příležitosti.', t: 'Podpoříme začínající podnikatele, propojíme místní firmy a vytvoříme prostor pro nové nápady i spolupráci. Nabídneme startovací nájmy v městských prostorách a podpoříme vznik coworkingu. I tady chceme stavět na úzké spolupráci s Třineckými železárnami a dalšími významnými zaměstnavateli. CirkArena přinese nové profese, zajímavé lidi i návštěvníky. Třinec bude městem, kde má smysl pracovat, podnikat a rozjet něco vlastního.' },
      { b: 'Vytvoříme víc míst a zážitků pro rodiny.', t: 'Postavíme velké dětské hřiště u knihovny a outdoor centrum u lesoparku. Otevřeme školní hřiště i mimo vyučování a zaměříme se na bezpečné cesty dětí do škol. Rodinám přispějeme 1 000 Kč na kroužky a tábory. Rozjedeme letní scénu, podpoříme sousedské akce a navážeme dalšími ročníky TODAM. Protože město pro rodiny není jen o bydlení. Je i o tom, co v něm společně zažijí.' },
      { foto: IMG + 'mural.jpg', alt: 'Barevný mural na budově v Třinci', zdroj: 'www.galerietrinec.cz' },
      { t: 'Chceme, aby mladí měli po studiích a zkušenostech ze světa důvod říct: Vrátím se do Třince. Tady chci pracovat. Tady chci založit rodinu. Tady chci žít.' },
      { zaver: 'Protože když se mladí lidé do Třince vracejí, zakládají tady rodiny a přinášejí nové nápady, město zůstává živé a má kam růst.' },
    ],
    projekty: ['hriste-knihovna', 'outdoor-centrum', 'coworking', 'letni-scena'],
  },
  {
    slug: 'zive-mesto-tvori-lide',
    nazev: 'Živé město tvoří lidé',
    hl: 'lidé',
    podtitul: 'Spolky a komunity musí dostat prostor.',
    popis: 'Třinec nežije díky budovám, žije díky lidem. Větší participativní rozpočet, podpora spolků, slovo pro mladé a nová letní scéna.',
    cover: { foto: IMG + 'slavnost-traktory.jpg', alt: 'Ozdobené traktory na průvodu místní slavnosti', zdroj: 'www.gorolweb.cz' },
    odstavce: [
      { b: 'Třinec nežije díky budovám. Žije díky lidem.', lead: true },
      { t: 'Díky těm, kteří uspořádají sousedskou slavnost. Vedou spolek. Trénují děti. Starají se o tradice. Nebo prostě jednoho dne řeknou: „Tady by se dalo něco udělat.“ Právě takovým lidem dáme větší podporu a prostor proměnit nápady ve skutečnost. V centru i v příměstských částech.' },
      { b: 'Více rozhodování dáme přímo lidem.', t: 'Rozšíříme participativní rozpočet a dál budeme podporovat spolky, církve, národnostní menšiny i další komunity. Třinec byl vždycky městem různých lidí, kultur a tradic. A právě v tom je jeho síla.' },
      { b: 'Mladým dáme slovo.', t: 'A hlavně možnost něco změnit. Třinecká rada mládeže ukazuje, že když mladí dostanou prostor, přijdou s nápady a dokážou je také uskutečnit. Učí se přitom něco důležitého: že nestačí říct, co se mi nelíbí. Změna začíná tím, že se zapojím.' },
      { b: 'A město samotné?', t: 'Podíváme se na něj novýma očima. Javorový, široký chodník i místa, kolem kterých dnes jen procházíme, mohou ožít koncertem, sportem, sousedským setkáním nebo programem pro rodiny.' },
      { foto: IMG + 'letni-scena-lf.jpg', alt: 'Diváci na letní akci pod širým nebem', zdroj: 'archiv LF' },
      { t: 'Přidáme také novou letní scénu pod širým nebem. A o tom, kde vznikne, pomohou rozhodnout sami obyvatelé.' },
      { t: 'Protože živé město se nedá postavit.', zaver: 'Živé město se musí žít.' },
    ],
    projekty: ['letni-scena', 'javorovy', 'propojene-mesto'],
  },
  {
    slug: 'spojujeme-generace',
    nazev: 'Spojujeme generace',
    hl: 'generace',
    podtitul: 'Nezapomínejme na lidi v důchodu.',
    popis: 'Dnešní senioři nechtějí jen sedět doma. Centrum pro aktivní seniory, Univerzita třetího věku, terénní služby a pomoc pečujícím rodinám.',
    cover: { foto: IMG + 'seniori-promoce.jpg', alt: 'Slavnostní promoce Univerzity třetího věku v Třinci', zdroj: 'archiv OPT' },
    odstavce: [
      { t: 'Dnešní senioři nechtějí jen sedět doma. Chtějí se potkávat, učit, hýbat, cestovat a být součástí dění. A město jim v tom má jít naproti.', lead: true },
      { t: 'Budeme dál podporovat Univerzitu třetího věku i kluby seniorů a na Smetanově ulici vybudujeme Centrum pro aktivní seniory. Místo pro pohyb, vzdělávání, společné aktivity i obyčejné posezení s přáteli.' },
      { b: 'A budeme propojovat generace.', t: 'Mladší mohou pomoci s technologiemi, starší předat zkušenosti, které žádný internet nenahradí. Vytvoříme více příležitostí, aby se potkávali a učili jeden od druhého.' },
      { t: 'Zároveň se připravíme na dobu, kdy pomoc bude potřebovat stále více lidí. Posílíme terénní služby a podporu pečujících rodin a postupně zvýšíme kapacity pobytových služeb. Aby lidé mohli zůstat co nejdéle doma – a když už to nepůjde, měli se o koho opřít.' },
      { zaver: 'Protože dobré město je dobrým místem pro život v každém věku.' },
    ],
    projekty: ['centrum-senioru'],
  },
];
