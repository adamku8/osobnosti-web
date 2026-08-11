# Web Osobnosti pro Třinec

Statický web postavený v [Astro](https://astro.build). Build vytvoří čisté HTML,
žádný JavaScript framework se do stránky nedostane.

## Práce s webem

```bash
npm install     # jednou
npm run dev     # náhled na http://localhost:4321
npm run build   # výsledek do dist/
```

Push do `main` spustí GitHub Actions, které web postaví a nasadí na Pages.

## Kde co měnit

| Co chci změnit | Kde |
|---|---|
| Kandidátní listina (jména, profese, pořadí) | `src/data/kandidati.js` |
| Medailonek kandidáta (odpovědi, video, citace) | `src/data/medailonky.js` |
| Programové oblasti a jejich vize | `src/data/oblasti.js` |
| Konkrétní projekty | `src/data/projekty.js` |
| Menu, patička, hlavička | `src/components/` |
| Meta tagy, OG, GTM | `src/layouts/Base.astro` |
| Styly | `src/styles/style.css` |
| Obrázky, fonty, PDF | `public/assets/` |

## Přidání medailonku kandidáta

1. V `src/data/kandidati.js` doplň u kandidáta `"detail": "jmeno-prijmeni"`.
2. V `src/data/medailonky.js` přidej záznam se stejným klíčem
   (odpovědi z dotazníku, rychlé otázky, případně video).
3. Stránka `/kandidat-jmeno-prijmeni.html` se vygeneruje sama,
   včetně prolinkování na předchozího a následujícího kandidáta.

Otázky pro kandidáty: `../dotaznik-kandidati.md`
