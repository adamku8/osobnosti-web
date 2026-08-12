// Medailonky kandidátů — obsah z dotazníku (viz ../../dotaznik-kandidati.md).
// Klíč = hodnota "detail" v kandidati.js. Stačí přidat záznam a stránka se vygeneruje sama.
//
// POZOR: odpovědi jsou převzaté doslova z dotazníků. Citace (pole `citace`) je
// vždy zkrácený výňatek z odpovědi kandidáta — před spuštěním kampaně nechat
// potvrdit dotyčným.
export const medailonky = {
  'adam-kurzok': {
    citace: 'Město se dá vést poctivě, otevřeně a <span class="hl">s výsledky</span>',
    // TODO: potvrdit finální znění s kandidátem
    odpovedi: [
      {
        nadpis: 'Proč kandiduji',
        text: 'Dvacet let pomáhám českým firmám prodávat do celého světa. A přitom vidím, jak šikovní lidé z Třince odcházejí jinam, protože tady nenajdou práci ani bydlení. Chci, aby měli důvod zůstat. Město se dá vést poctivě, otevřeně a s výsledky — a u toho chci být.',
      },
      {
        nadpis: 'Co chci posunout',
        text: 'Podnikavost. Chci, aby v Třinci vznikl coworking a startovací kanceláře pro nové firmy — místo, kde se potkají lidé pracující na dálku, začínající podnikatelé i freelanceři. Dnes kvůli tomu jezdí do Ostravy. Stačí prostor, rozumný nájem a trocha odvahy města.',
      },
      {
        nadpis: 'Když zrovna nepracuji',
        text: 'Pomáhám do Třince dostat Lavičku Václava Havla. A když nejsem v práci, potkáte mě na kole cestou na Javorový nebo s kávou v centru — často s mikrofonem, protože natáčím podcast s lidmi, kteří něco dokázali.',
      },
    ],
    rychleOtazky: [
      { otazka: 'Třinec za čtyři roky', odpoved: 'Podnikavý' },
      { otazka: 'Inspirace pro Třinec', odpoved: 'Zlín' },
      { otazka: 'Nejoblíbenější místo', odpoved: 'Javorový' },
      { otazka: 'Hory, nebo město?', odpoved: 'Hory' },
      { otazka: 'Pes, nebo kočka?', odpoved: 'Pes' },
      { otazka: 'Léto, nebo zima?', odpoved: 'Léto' },
      { otazka: 'Kolo, nebo běh?', odpoved: 'Kolo' },
      { otazka: 'Ráno, nebo večer?', odpoved: 'Ráno' },
      { otazka: 'Hokej, nebo fotbal?', odpoved: 'Hokej' },
    ],
    video: null,
  },

  'david-szkandera': {
    citace: 'Radnice nemá být uzavřená <span class="hl">pevnost</span>',
    odpovedi: [
      {
        nadpis: 'Proč kandiduji',
        text: 'Kandiduji, protože mi na Třinci záleží a chci se aktivně podílet na jeho budoucnosti. Jako člověk, který tady žije a chce tady i nadále žít, nechci jen pasivně přihlížet. Chci lépe poznat práci zastupitele a spolurozhodovat o tom, kam se bude naše město Třinec dál ubírat.',
      },
      {
        nadpis: 'Co chci posunout',
        text: 'Chci do dění v Třinci zapojit více lidí, kterým na našem městě záleží. Otevřít radnici občanům, zpřehlednit komunikaci s úřadem a vytvořit prostor pro jejich nápady, podněty a spolupráci. Třinec je naše společné město a radnice by měla být jeho otevřeným partnerem. Radnice nemá být uzavřená pevnost.',
      },
      {
        nadpis: 'Když zrovna nepracuji',
        text: 'Nejčastěji mě potkáte v Beskydech – mám rád hory, lesy a turistiku, kde nejlépe dobíjím energii. Rád pomáhám s organizací místních akcí a spolupořádám dětskou turistickou hru „Przez Kopce“. Baví mě také pořádat i navštěvovat přednášky a stále se učit něco nového.',
      },
    ],
    rychleOtazky: [
      { otazka: 'Třinec za čtyři roky', odpoved: 'Otevřený, spolupracující' },
      { otazka: 'Inspirace pro Třinec', odpoved: 'Litomyšl' },
      { otazka: 'Nejoblíbenější místo', odpoved: 'Lesopark' },
      { otazka: 'Hory, nebo město?', odpoved: 'Hory' },
      { otazka: 'Pes, nebo kočka?', odpoved: 'Pes' },
      { otazka: 'Léto, nebo zima?', odpoved: 'Podzim' },
      { otazka: 'Kolo, nebo běh?', odpoved: 'Běh' },
      { otazka: 'Ráno, nebo večer?', odpoved: 'Večer' },
      { otazka: 'Hokej, nebo fotbal?', odpoved: 'Majday' },
    ],
    video: null,
  },

  'adam-tomoszek': {
    citace: 'Třinec je <span class="hl">skvělé místo</span> k životu',
    odpovedi: [
      {
        nadpis: 'Proč kandiduji',
        text: 'Považuji se za místního patriota – byl jsem vychován s respektem a úctou k našemu krásnému regionu, jeho historii a tradicím. Třinec je skvělé místo k životu a možnost přispět k jeho dalšímu rozvoji a směřování by pro mě bylo velkou poctou.',
      },
      {
        nadpis: 'Co chci posunout',
        text: 'Přál bych si, aby ještě více mladých lidí vidělo potenciál našeho města a výhody života v něm, a aby tak zdejší rodáci zde zůstávali, popřípadě se sem po čase vraceli – jak to ostatně mnoho z nich činí již v současné době.',
      },
      {
        nadpis: 'Když zrovna nepracuji',
        text: 'Pocházím z věřící a hudebně založené rodiny. Kdykoli se naskytne příležitost, vyrážím pěšky nebo na kole do okolních hor – nejčastěji po sjezdovce na Javorový.',
      },
    ],
    rychleOtazky: [
      { otazka: 'Třinec za čtyři roky', odpoved: 'Rozvíjející se' },
      { otazka: 'Inspirace pro Třinec', odpoved: 'Čeladná' },
      { otazka: 'Nejoblíbenější místo', odpoved: 'Javorový vrch' },
      { otazka: 'Hory, nebo město?', odpoved: 'Hory' },
      { otazka: 'Pes, nebo kočka?', odpoved: 'Pes' },
      { otazka: 'Léto, nebo zima?', odpoved: 'Léto' },
      { otazka: 'Kolo, nebo běh?', odpoved: 'Kolo' },
      { otazka: 'Ráno, nebo večer?', odpoved: 'Večer' },
      { otazka: 'Hokej, nebo fotbal?', odpoved: 'Hokej' },
    ],
    video: null,
  },

  'jakub-stvrtna': {
    citace: 'Jsem připraven <span class="hl">naslouchat</span> a nápady pomáhat uskutečňovat',
    odpovedi: [
      {
        nadpis: 'Proč kandiduji',
        text: 'Do obecního zastupitelstva kandiduji, protože bych rád přispěl svými názory, nápady a zkušenostmi ke zlepšení života v našem městě. Věřím, že dobré podněty vznikají především při otevřené a respektující komunikaci s lidmi v každodenním životě. Jsem připraven naslouchat, diskutovat a smysluplné nápady také pomáhat uskutečňovat.',
      },
      {
        nadpis: 'Co chci posunout',
        text: 'Chci, aby děti v Třinci měly dostatek možností trávit volný čas aktivně – od útlého věku až po dospělost. Za důležité považuji rozšíření nabídky sportovišť pro mladistvé a dětských hřišť. Zároveň je pro mě prioritou zvýšení jejich bezpečnosti, například drobným oplocením, které se osvědčilo i v jiných městech.',
      },
      {
        nadpis: 'Když zrovna nepracuji',
        text: 'Nejraději trávím čas s rodinou – ať už na kole, při sportu nebo na zahradě. K tomu patří samozřejmě i dobré jídlo z grilu. Spoluobčané mě často potkají také na horách, v areálu STaRS nebo na sportovních utkáních, nejčastěji při fotbale či hokeji.',
      },
    ],
    rychleOtazky: [
      { otazka: 'Třinec za čtyři roky', odpoved: 'Přístupnější' },
      { otazka: 'Inspirace pro Třinec', odpoved: 'Siedlce' },
      { otazka: 'Nejoblíbenější místo', odpoved: 'STaRS Třinec' },
      { otazka: 'Hory, nebo město?', odpoved: 'Hory' },
      { otazka: 'Pes, nebo kočka?', odpoved: 'Pes' },
      { otazka: 'Léto, nebo zima?', odpoved: 'Zima' },
      { otazka: 'Kolo, nebo běh?', odpoved: 'Kolo' },
      { otazka: 'Ráno, nebo večer?', odpoved: 'Ráno' },
      { otazka: 'Hokej, nebo fotbal?', odpoved: 'Fotbal' },
    ],
    video: null,
  },

  'tomas-novy': {
    citace: 'Nechci jen kritizovat — chci se <span class="hl">zapojit</span>',
    odpovedi: [
      {
        nadpis: 'Proč kandiduji',
        text: 'Protože v Třinci žiji a vidím všude kolem sebe, jak má každý potřebu kritizovat a nadávat, ale zároveň nic pro zlepšení neudělat, jelikož by ho to stálo jeho pohodlí. Nechci být takový a třeba strhnu někoho ve svém okolí, aby se také aktivně zapojil do dění v našem městě.',
      },
      {
        nadpis: 'Co chci posunout',
        text: 'V prvé řadě by to mělo být vylepšení reputace a vnímání komunální politiky. Zvýšit zájem občanů města Třince o dění kolem nich a nastavit správnou komunikaci. Z toho tak nějak vychází vše.',
      },
      {
        nadpis: 'Když zrovna nepracuji',
        text: 'O mně se ví, že v práci trávím většinu času. Takže by lidi mohlo překvapit, když v ní zrovna nejsem.',
      },
    ],
    rychleOtazky: [
      { otazka: 'Třinec za čtyři roky', odpoved: 'Moderní Třinec' },
      { otazka: 'Inspirace pro Třinec', odpoved: 'Frýdek-Místek' },
      { otazka: 'Nejoblíbenější místo', odpoved: 'Je to o lidech' },
      { otazka: 'Hory, nebo město?', odpoved: 'Soulad' },
      { otazka: 'Pes, nebo kočka?', odpoved: 'Pes' },
      { otazka: 'Léto, nebo zima?', odpoved: 'Léto' },
      { otazka: 'Kolo, nebo běh?', odpoved: 'Kolo' },
      { otazka: 'Ráno, nebo večer?', odpoved: 'Ráno' },
      { otazka: 'Hokej, nebo fotbal?', odpoved: 'Fotbal' },
    ],
    video: null,
  },

  'libor-zarsky': {
    citace: 'Není mi <span class="hl">lhostejný</span> rozvoj našeho města',
    odpovedi: [
      {
        nadpis: 'Proč kandiduji',
        text: 'Protože mi není lhostejný rozvoj našeho města. Rád bych přispěl svými názory a nápady pro ještě lepší Třinec.',
      },
      {
        nadpis: 'Co chci posunout',
        text: 'Víc sportovních aktivit pro momentálně nesportující občany, víc pohybu a nové cyklostezky.',
      },
      {
        nadpis: 'Když zrovna nepracuji',
        text: 'Zbožňuju aktivní způsob života — brusle, kolo, golf, paddleboard, motorka.',
      },
    ],
    rychleOtazky: [
      { otazka: 'Třinec za čtyři roky', odpoved: 'TOP' },
      { otazka: 'Inspirace pro Třinec', odpoved: 'Brno' },
      { otazka: 'Nejoblíbenější místo', odpoved: 'Park TGM' },
      { otazka: 'Hory, nebo město?', odpoved: 'Javorový' },
      { otazka: 'Pes, nebo kočka?', odpoved: 'Pes' },
      { otazka: 'Léto, nebo zima?', odpoved: 'Léto' },
      { otazka: 'Kolo, nebo běh?', odpoved: 'Kolo' },
      { otazka: 'Ráno, nebo večer?', odpoved: 'Večer' },
      { otazka: 'Hokej, nebo fotbal?', odpoved: 'Hokej' },
    ],
    video: null,
  },
};
