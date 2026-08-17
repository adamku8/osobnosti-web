# Jak editovat web osobnostiprotrinec.cz

Návod pro editaci webu na Windows. Nepotřebuješ umět git ani příkazovou řádku —
všechno se dá odklikat v aplikaci GitHub Desktop.

---

## Jednorázové nastavení (uděláš jen poprvé)

### 1. Účet na GitHubu

Založ si účet na [github.com](https://github.com) (pokud ho nemáš) a pošli Adamovi
svoje uživatelské jméno. Adam tě přidá do projektu — bez toho web neuvidíš.

### 2. GitHub Desktop

Stáhni a nainstaluj [GitHub Desktop](https://desktop.github.com) (verze pro Windows).
Po spuštění se přihlas svým GitHub účtem.

### 3. Stažení webu do počítače

V GitHub Desktop:

1. `File` → `Clone repository`
2. Záložka `GitHub.com` → v seznamu najdi **adamku8/osobnosti-web**
3. `Local path` — vyber, kam se má web uložit (např. `C:\Users\TvojeJmeno\Documents\osobnosti-web`)
4. `Clone`

### 4. Přepnutí na pracovní větev

**Tohle je důležité.** Nahoře v GitHub Desktop je tlačítko `Current branch`.
Klikni na něj a vyber **`staging`**.

> Proč: `staging` je pracovní verze. Co sem nahraješ, se ještě neobjeví na ostrém webu —
> Adam to nejdřív zkontroluje a teprve pak pustí ven. Máš tedy volnou ruku a nic nerozbiješ.

### 5. Node.js (jen pokud si chceš web prohlížet u sebe)

Není povinné. Když ale chceš vidět změny hned ve svém prohlížeči, nainstaluj
[Node.js](https://nodejs.org) (verze LTS, klikni jen Next → Next → Install).

---

## Běžná práce — pokaždé, když chceš něco změnit

### Krok 1: Stáhni si aktuální verzi

Otevři GitHub Desktop a nahoře klikni na **`Fetch origin`**. Pokud se objeví
`Pull origin`, klikni i na to.

> Tohle nikdy nepřeskakuj. Stahuješ tím změny, které mezitím udělal Adam nebo někdo jiný.
> Bez toho můžeš omylem přepsat cizí práci.

### Krok 2: Uprav soubory

Otevři Claude Code a nech ho pracovat ve složce, kam sis web stáhla
(např. `C:\Users\TvojeJmeno\Documents\osobnosti-web`).

Co kde najdeš:

| Co chci změnit | Soubor |
|---|---|
| Kandidátní listina (jména, profese, pořadí) | `src/data/kandidati.js` |
| Medailonek kandidáta (odpovědi, video, citace) | `src/data/medailonky.js` |
| Programové oblasti a jejich vize | `src/data/oblasti.js` |
| Konkrétní projekty | `src/data/projekty.js` |
| Menu, patička, hlavička | `src/components/` |
| Texty jednotlivých stránek | `src/pages/` |
| Obrázky, fonty, PDF | `public/assets/` |

### Krok 3: Zkontroluj si to u sebe (nepovinné)

Pokud máš nainstalovaný Node.js, můžeš si web prohlédnout, než ho pošleš dál.
V Claude Code požádej o spuštění náhledu, nebo v příkazové řádce ve složce webu:

```bash
npm install
```

```bash
npm run dev
```

Pak otevři v prohlížeči `http://localhost:4321`.

### Krok 4: Odešli změny

Zpátky v GitHub Desktop:

1. Vlevo vidíš seznam souborů, které jsi změnila — projdi si ho očima
2. Dole vlevo do políčka **Summary** napiš česky, co jsi udělala
   (např. `Doplněn medailonek Jany Novákové`)
3. Klikni **`Commit to staging`**
4. Nahoře klikni **`Push origin`**

Hotovo. Adam dostane změny a pustí je na ostrý web.

---

## Na co si dát pozor

- **Vždy pracuj na větvi `staging`**, nikdy ne na `main`. Zkontroluj si to nahoře
  v `Current branch` pokaždé, když GitHub Desktop otevřeš.
- **Před každou prací dej `Fetch origin`.** Ušetří to spoustu problémů.
- **Commituj po menších celcích.** Radši třikrát malá změna než jednou obří —
  líp se v tom pak hledá, kdyby něco.
- **Soubory `.js` v `src/data/` mají přesnou strukturu.** Čárky, uvozovky a složené
  závorky musí sedět. Když si nejsi jistá, nech to zkontrolovat Claude Code —
  po nahrání to navíc automaticky ověří i GitHub (viz níže).

## Když se něco pokazí

Po každém nahrání GitHub automaticky zkusí web postavit. Výsledek uvidíš
na [github.com/adamku8/osobnosti-web/actions](https://github.com/adamku8/osobnosti-web/actions):

- **zelená fajfka** — všechno v pořádku
- **červený křížek** — někde je chyba, web by se nepostavil

Když svítí červená, nic se neděje — na ostrý web se to nedostane. Klikni na ten
červený řádek, zkopíruj chybovou hlášku a pošli ji Adamovi nebo vlož do Claude Code.

Když si nevíš rady s čímkoli jiným, napiš Adamovi. Nic, co uděláš na `staging`,
se nedá pokazit nevratně.
