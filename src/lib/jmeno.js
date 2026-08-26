// Rozdělení jména kandidáta na tituly a vlastní jméno.
// Jeden zdroj pro veřejný detail i náhled — ať se to nerozejde.
//
// Titul = token končící tečkou (i s čárkou za ní: „Bc.,"), spojka „et" nebo samotná čárka.
// Odebíráme jen zepředu a jen dokud zbývají aspoň dva tokeny — křestní jméno a příjmení
// musí zůstat vždycky. Zvládne „Mgr. et Bc. Erika Sirotová" i „Bc., MSc. Bohdan Sikora".
const jeTitul = (t) => /\.,?$/.test(t) || t === 'et' || t === ',';

export function rozdelJmeno(cele) {
  const slova = String(cele).trim().split(/\s+/);
  let i = 0;
  while (i < slova.length && slova.length - i > 2 && jeTitul(slova[i])) i++;
  const jmeno = slova.slice(i);
  return {
    tituly: slova.slice(0, i).join(' '),
    krestni: jmeno.slice(0, -1).join(' '),
    prijmeni: jmeno[jmeno.length - 1] ?? '',
  };
}
