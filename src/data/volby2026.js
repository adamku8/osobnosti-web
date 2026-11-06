// Výsledek komunálních voleb 9.–10. 10. 2026 v Třinci — čísla pro děkovný blok na úvodu.
// Zdroj: finální open data ČSÚ (volby.gov.cz), soubory kvros (strany), kvrk (kandidáti)
// a kvt3 (okrsky), stav po sečtení všech 38 okrsků. Offline kopie:
// analyzy/volby-2026-live/csu-final-2026/. Čísla neměň z hlavy — jen proti těmto souborům.
export const VOLBY_2026 = {
  hlasy: 36267,        // kvros HLASY_STR, Osobnosti pro Třinec (volební č. 3)
  procent: '14,31',    // kvros PROCHLSTR
  mandaty: 4,          // kvros MAND_STR (z 27 členů zastupitelstva)
  kresel: 27,          // počet členů zastupitelstva města Třince
  volicu: 10503,       // kvt3 součet VYD_OBALKY (vydané obálky)
  ucast: '38,3',       // 10 503 / 27 444 zapsaných voličů
};

// Zvolení zastupitelé v pořadí, v jakém jim ČSÚ přidělil mandát (kvrk PORADIMAND).
// "cislo" = pořadí na kandidátce, páruje se s kandidati.js.
// "hlasy" = kvrk POCHLASU (hlasy pro kandidáta); ukazují se nahoře v medailonku.
// "email" = adresa pro formulář „Napište mi" v medailonku. Prázdná = formulář se
// nezobrazí. Vyplňuj jen adresu, se kterou zastupitel souhlasí (je pak veřejná).
export const ZVOLENI = [
  { cislo: 5, role: 'zastupitelka', hlasy: 1785, email: '' },  // Martina Wolna
  { cislo: 4, role: 'zastupitel',   hlasy: 1643, email: '' },  // Marek Štěrba
  { cislo: 2, role: 'zastupitel',   hlasy: 1509, email: '' },  // Adam Kurzok
  { cislo: 7, role: 'zastupitelka', hlasy: 1500, email: '' },  // Regina Eichler
];

// Číslo s pevnou mezerou mezi tisíci (36 267) — nesmí se zalomit uprostřed.
export const tisice = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
