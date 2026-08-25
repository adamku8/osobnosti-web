// Co je z kandidátky VEŘEJNÉ na osobnostiprotrinec.cz.
// Náhled /nahled-k7x2m9/ ukazuje vždy všechno; veřejný web se řídí tímhle souborem.

// false = teaser (jen první trojka, zbytek jako „Již brzy")
// true  = plná listina 27 osobností s fotkami + veřejné medailonky
export const PLNA_KANDIDATKA = true;

// Které medailonky smí ven:
//   'zadne'     → žádné. Karty jsou bez prokliku, veřejné stránky medailonků se ani negenerují.
//   'schvalene' → jen ty s "detail" v kandidati.js (potvrzené kandidátem)
//   'vse'       → i ty s "detailPriprava" (hotové, ale zatím nepotvrzené)
export const REZIM_MEDAILONKU = 'zadne';

export const verejnySlug = (k) => {
  if (!PLNA_KANDIDATKA || REZIM_MEDAILONKU === 'zadne') return null;
  return REZIM_MEDAILONKU === 'vse' ? (k.detail ?? k.detailPriprava ?? null) : (k.detail ?? null);
};
