// Blok „Aktuálně" na úvodu — ručně vybrané příspěvky ze sítí hnutí.
// Instagram se vkládá oficiálním embedem (bez tokenu), stačí ID příspěvku z URL:
//   https://www.instagram.com/p/DdOUjgRjztl/  →  { typ: 'p',    id: 'DdOUjgRjztl' }
//   https://www.instagram.com/reel/DdKE0seAP-H/ → { typ: 'reel', id: 'DdKE0seAP-H' }
// Pořadí = pořadí na webu (první vlevo). Držet tři položky; při novém postu
// nejstarší vyhodit. Aktualizace: po každém výraznějším postu, min. 1× týdně.
export const SOCIAL = {
  instagram: 'https://www.instagram.com/osobnosti_pro_trinec/',
  facebook: 'https://www.facebook.com/osobnostiprotrinec',
};

export const aktualne = [
  { typ: 'p',    id: 'DdOUjgRjztl' },
  { typ: 'p',    id: 'DdLnCfvlY46' },
  { typ: 'reel', id: 'DdKE0seAP-H' },
];
