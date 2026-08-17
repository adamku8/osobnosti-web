# Web Osobnosti pro Třinec

Statický web postavený v [Astro](https://astro.build). Build vytvoří čisté HTML,
žádný JavaScript framework se do stránky nedostane.

## Práce s webem

```bash
npm install     # jednou
npm run dev     # náhled na http://localhost:4321
npm run build   # výsledek do dist/
```

## Větve a nasazení

| Větev | K čemu | Co se stane po pushi |
|---|---|---|
| `staging` | pracovní verze, sem edituje tým | ověří se, že build projde (`check.yml`) |
| `main` | to, co je venku | build + nasazení na GitHub Pages (`deploy.yml`) |

Změny jdou vždy na `staging`, odtud se po kontrole mergují do `main`.
Návod pro netechnické editory: [NAVOD-editace-webu.md](NAVOD-editace-webu.md).

## Domény

Web zatím běží na náhledové subdoméně `new.osobnostiprotrinec.cz`. Dokud se
`site` nerovná ostré doméně, build se chová jako náhled: `robots.txt` zakáže
indexaci, stránky dostanou `meta noindex` a nespustí se GTM (aby náhled nekazil
měření ostrého webu).

Přepnutí na ostrou doménu `osobnostiprotrinec.cz` = tři kroky:

1. `src/lib/site.js` — zkontroluj, že `LIVE` sedí na ostrou doménu
2. `astro.config.mjs` — výchozí hodnotu `site` změň na `LIVE`
3. `public/CNAME` — přepiš na `osobnostiprotrinec.cz`

a v DNS přesměruj doménu na GitHub Pages (4 A záznamy na apex, `www` jako CNAME
na `adamku8.github.io`). **MX a SPF záznamy nech být** — na doméně běží pošta.

Otestovat ostrou variantu lokálně, bez commitu:

```bash
SITE=https://osobnostiprotrinec.cz npm run build
```

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
