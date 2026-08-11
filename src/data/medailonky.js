// Medailonky kandidátů — obsah z dotazníku (viz ../../dotaznik-kandidati.md).
// Klíč = hodnota "detail" v kandidati.js. Stačí přidat záznam a stránka se vygeneruje sama.
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
    // video: { typ: 'soubor', src: '/assets/video/kurzok-medailonek.mp4' }
    // video: { typ: 'youtube', id: 'VIDEO_ID' }
    video: null,
  },
};
