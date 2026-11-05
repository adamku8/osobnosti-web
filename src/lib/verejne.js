// Co je z kandidátky VEŘEJNÉ na osobnostiprotrinec.cz.
// Náhled /nahled-k7x2m9/ ukazuje vždy všechno; veřejný web se řídí tímhle souborem.

// false = teaser (jen první trojka, zbytek jako „Již brzy")
// true  = plná listina 27 osobností s fotkami + veřejné medailonky
export const PLNA_KANDIDATKA = true;

// Které medailonky smí ven:
//   'zadne'     → žádné. Karty jsou bez prokliku, veřejné stránky medailonků se ani negenerují.
//   POZOR: od 26. 8. 2026 je zapnuto 'vse' — venku jsou i medailonky, které kandidáti
//   neodsouhlasili (rozhodnutí Adama). Zpět se to vypne přepnutím na 'schvalene'.
//   'schvalene' → jen ty s "detail" v kandidati.js (potvrzené kandidátem)
//   'vse'       → i ty s "detailPriprava" (hotové, ale zatím nepotvrzené)
export const REZIM_MEDAILONKU = 'vse';

export const verejnySlug = (k) => {
  if (!PLNA_KANDIDATKA || REZIM_MEDAILONKU === 'zadne') return null;
  return REZIM_MEDAILONKU === 'vse' ? (k.detail ?? k.detailPriprava ?? null) : (k.detail ?? null);
};

// Povolební režim úvodu a hlavičky. true = schová, co po volbách 9.–10. 10. 2026
// přestalo platit: sekci „Jak volit" s odpočtem, tlačítko „Volte č. 3" v hlavičce,
// datum voleb s tlačítkem „Jak volit" v hero a odkaz „Jak volit" v závěrečném rozcestníku.
// Děkovný blok s výsledkem (src/data/volby2026.js) je na úvodu vždy. Zpět = false.
export const PO_VOLBACH = false;
