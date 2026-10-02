#!/usr/bin/env python3
"""Náhledové obrázky pro sdílení (og:image, 1200×630) — každá stránka vlastní.

Spuštění z WEB/:   python3 scripts/make_og.py
Výstup:            public/assets/og/<stránka>.jpg  (+ kandidat-<slug>.jpg pro medailonky)
Na obrázek odkazuje Base.astro přes prop `og` (stránky) a kandidat-[slug].astro / blog-[slug].astro.

Dvě šablony podle výchozího public/assets/img/og-image.jpg:
  A „pás“    — logo + doména nahoře, dva řádky nadpisu, třetí v červeném boxu (#FF2D2D)
               přes horní hranu fotky, fotka přes celou šířku dole, modrý pill s datem voleb.
  B „portrét“ — medailonky: číslo na kandidátce, jméno (příjmení v červeném boxu), profese,
               kruhový portrét vpravo, modrý pill VOLTE Č. 3.
Značka v2.0: jen #FF2D2D / #003B8E / #323232 / bílá, Montserrat ExtraBold + Inter, jedna červená.
Pozor: FB/Slack si náhled k URL pamatují — po změně obrázku obnovit ve Sharing Debuggeru.
"""
import json, os, re
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(ROOT, 'public')
IMG = os.path.join(PUB, 'assets', 'img')
OUT = os.path.join(PUB, 'assets', 'og')
FONTS = os.path.join(PUB, 'assets', 'fonts')

RED, BLUE, ANTH, WHITE = (255, 45, 45), (0, 59, 142), (50, 50, 50), (255, 255, 255)
W, H = 1200, 630
PHOTO_TOP = 330          # horní hrana fotky (šablona A)
X0 = 72                  # levý okraj sazby


def font(name, size):
    return ImageFont.truetype(os.path.join(FONTS, name), size)


def text_w(f, s):
    return f.getbbox(s)[2] - f.getbbox(s)[0]


# Logo vyříznuté z výchozího OG obrázku (bílá plocha, 2,26:1) — žádná vlastní varianta loga.
_DEF = Image.open(os.path.join(IMG, 'og-image.jpg')).convert('RGB')
LOGO = _DEF.crop((60, 58, 245, 140))


def cover(im, w, h, fy=0.5):
    """object-fit: cover s volitelným svislým těžištěm fy (0 = horní okraj, 1 = spodní)."""
    im = im.convert('RGB')
    s = max(w / im.width, h / im.height)
    nw, nh = round(im.width * s), round(im.height * s)
    im = im.resize((nw, nh), Image.LANCZOS)
    x = (nw - w) // 2
    y = round((nh - h) * fy)
    return im.crop((x, y, x + w, y + h))


def hlavicka(c, d):
    c.paste(LOGO, (60, 58))
    f = font('Montserrat-Bold.ttf', 26)
    s = 'osobnostiprotrinec.cz'
    d.text((W - 72 - text_w(f, s), 80), s, font=f, fill=ANTH)


def pill(d, text, x, y):
    f = font('Montserrat-ExtraBold.ttf', 22)
    tw = text_w(f, text)
    h = 52
    d.rounded_rectangle((x, y, x + tw + 64, y + h), radius=h // 2, fill=BLUE)
    bb = f.getbbox(text)
    d.text((x + 32, y + (h - (bb[3] - bb[1])) // 2 - bb[1]), text, font=f, fill=WHITE)


def red_box(d, f, text, x, y, size):
    """Červený highlight box za textem (princip 03) — výška podle velikosti písma."""
    pad_x = round(size * 0.18)
    bb = f.getbbox(text)
    bh = round(size * 0.98)
    d.rectangle((x - pad_x, y, x + bb[2] - bb[0] + pad_x, y + bh), fill=RED)
    cap = f.getbbox('H')
    d.text((x - bb[0], y + (bh - (cap[3] - cap[1])) // 2 - cap[1]), text, font=f, fill=WHITE)


def sablona_pas(radky, box, fotky, fy=0.5, pill_text='VOLBY 9.–10. ŘÍJNA 2026'):
    c = Image.new('RGB', (W, H), WHITE)
    # fotka (nebo několik fotek vedle sebe) přes celou šířku dole
    if isinstance(fotky, str):
        fotky = [fotky]
    n = len(fotky)
    for i, f in enumerate(fotky):
        x1, x2 = round(i * W / n), round((i + 1) * W / n)
        im = Image.open(os.path.join(PUB, f))
        c.paste(cover(im, x2 - x1, H - PHOTO_TOP, fy), (x1, PHOTO_TOP))
    d = ImageDraw.Draw(c)
    if n > 1:   # bílé spáry mezi fotkami
        for i in range(1, n):
            x = round(i * W / n)
            d.rectangle((x - 2, PHOTO_TOP, x + 1, H), fill=WHITE)
    hlavicka(c, d)
    # velikost nadpisu tak, aby nejdelší řádek nepřetekl
    size = 78
    while size > 44:
        f = font('Montserrat-ExtraBold.ttf', size)
        if max(text_w(f, s) for s in radky + [box]) <= W - X0 - 60:
            break
        size -= 2
    f = font('Montserrat-ExtraBold.ttf', size)
    box_y = PHOTO_TOP + 2
    lh = round(size * 1.08)   # místo pro háčky a čárky nad verzálkami (Ž, Ř, Í)
    cap = f.getbbox('H')
    for i, s in enumerate(reversed(radky)):
        top = box_y - (i + 1) * lh - 4
        d.text((X0 - f.getbbox(s)[0], top - cap[1] + (lh - (cap[3] - cap[1])) // 2), s, font=f, fill=ANTH)
    red_box(d, f, box, X0, box_y, size)
    pill(d, pill_text, X0, 520)
    return c


def jmeno_bez_titulu(j):
    return ' '.join(t for t in j.replace(',', ' ').split() if '.' not in t and t != 'et')


def zalom(f, text, sirka):
    radky, r = [], ''
    for slovo in text.split():
        t = (r + ' ' + slovo).strip()
        if text_w(f, t) <= sirka:
            r = t
        else:
            radky.append(r)
            r = slovo
    return radky + [r] if r else radky


def sablona_portret(k):
    c = Image.new('RGB', (W, H), WHITE)
    d = ImageDraw.Draw(c)
    hlavicka(c, d)
    # kruhový portrét vpravo
    D = 400
    foto = os.path.join(IMG, 'kandidati', k['foto'])
    im = cover(Image.open(foto), D * 2, D * 2, 0.35).resize((D, D), Image.LANCZOS)
    maska = Image.new('L', (D * 4, D * 4), 0)
    ImageDraw.Draw(maska).ellipse((0, 0, D * 4 - 1, D * 4 - 1), fill=255)
    maska = maska.resize((D, D), Image.LANCZOS)
    c.paste(im, (W - 72 - D, 165), maska)
    # text vlevo
    sirka = W - 72 - D - 48 - X0
    f_eb = font('Montserrat-Bold.ttf', 22)
    eb = f'{k["cislo"]}. NA KANDIDÁTCE · OSOBNOSTI PRO TŘINEC'   # bez rodu — jména rod nespolehlivě prozradí
    d.rectangle((X0, 186, X0 + 28, 189), fill=BLUE)
    d.text((X0 + 40, 176), eb, font=f_eb, fill=BLUE)
    cele = jmeno_bez_titulu(k['jmeno']).upper().split()
    krestni, prijmeni = ' '.join(cele[:-1]), cele[-1]
    size = 76
    while size > 40:
        f = font('Montserrat-ExtraBold.ttf', size)
        if max(text_w(f, krestni), text_w(f, prijmeni) + size * 0.36) <= sirka:
            break
        size -= 2
    f = font('Montserrat-ExtraBold.ttf', size)
    cap = f.getbbox('H')
    y = 232
    d.text((X0 - f.getbbox(krestni)[0], y - cap[1]), krestni, font=f, fill=ANTH)
    y += round(size * 1.12)
    red_box(d, f, prijmeni, X0 + round(size * 0.18), y - round(size * 0.18), size)
    y += round(size * 1.1)
    f_p = font('Inter-Regular.ttf', 26)
    for r in zalom(f_p, f'{k["vek"]} let · {k["profese"]}', sirka)[:2]:
        d.text((X0, y), r, font=f_p, fill=(107, 107, 107))   # antracit 72 % na bílé
        y += 36
    pill(d, 'VOLTE Č. 3 · 9.–10. ŘÍJNA 2026', X0, 520)
    return c


# ------------------------------------------------------------------ stránky
STRANKY = {
    'program':        (['JASNÁ A KONKRÉTNÍ', 'VIZE PRO'], 'NOVÝ TŘINEC.', 'assets/img/panorama-mesto.jpg', 0.5),
    'vysledky':       (['VÝSLEDKY', 'MÍSTO ŽVANĚNÍ.'], '1,2 MILIARDY KČ', 'assets/img/noviny/stanoviste.jpg', 0.15),
    'doporucuji-nas': (['DOPORUČUJÍ NÁS', 'TŘINECKÉ'], 'OSOBNOSTI', [
        'assets/img/noviny/zabystrzan.jpg', 'assets/img/noviny/vanka.jpg', 'assets/img/noviny/koppova.jpg',
        'assets/img/noviny/mokrosz.jpg', 'assets/img/noviny/siska.jpg', 'assets/img/noviny/palkovska.jpg'], 0.3),
    'kandidati':      (['SEDMADVACET'], 'OSOBNOSTÍ.', 'assets/img/tym-2026.jpg', 0.3),
    'casti':          (['JEDEN TŘINEC.'], 'TŘINÁCT ČÁSTÍ.', 'assets/img/casti-kanada.jpg', 0.5),
    'lesopark':       (['LESOPARK PRO'], 'VŠECHNY GENERACE.', 'assets/img/noviny/lesopark.jpg', 0.5),
    'javorovy':       (['JAVOROVÝ.'], 'NOVÁ VIZE.', 'assets/img/javorovy/cover-javorovy.jpg', 0.45),
    'podporte-nas':   (['POMOZTE NÁM'], 'MĚNIT TŘINEC.', 'assets/img/panorama-udoli.jpg', 0.5),
    'srdicko':        (['VOLÍTE'], 'SRDCEM?', 'assets/img/panorama.jpg', 0.5),
    'prohlaseni':     (['POLITICKÁ SOUTĚŽ', 'MÁ SVÉ'], 'HRANICE.', 'assets/img/panorama-zapad.jpg', 0.5),
    'original':       (['ORIGINÁL JE'], 'JEN JEDEN.', 'assets/img/panorama-hreben.jpg', 0.5),
    'blog-je-v-trinci-mrtvo-nebo-zivo': (['JE V TŘINCI', 'MRTVO,'], 'NEBO ŽIVO?', 'assets/img/blog/ai-vecerni-ulice.jpg', 0.55),
    'blog-mlade-rodiny-do-trince': (['MLADÉ RODINY'], 'DO TŘINCE.', 'assets/img/noviny/mesto-letecky.jpg', 0.5),
    'blog-zive-mesto-tvori-lide':  (['ŽIVÉ MĚSTO'], 'TVOŘÍ LIDÉ.', 'assets/img/noviny/slavnost-traktory.jpg', 0.45),
    'blog-spojujeme-generace':     (['SPOJUJEME'], 'GENERACE.', 'assets/img/noviny/seniori-promoce.jpg', 0.35),
}


def kandidati():
    src = open(os.path.join(ROOT, 'src', 'data', 'kandidati.js'), encoding='utf-8').read()
    pole = src[src.index('['): src.rindex(']') + 1]
    return json.loads(pole)


def main():
    os.makedirs(OUT, exist_ok=True)
    for slug, (radky, box, foto, fy) in STRANKY.items():
        sablona_pas(radky, box, foto, fy).save(os.path.join(OUT, f'{slug}.jpg'), quality=86, optimize=True)
        print('og', slug)
    for k in kandidati():
        slug = k.get('detail') or k.get('detailPriprava')
        if slug and k.get('foto'):
            sablona_portret(k).save(os.path.join(OUT, f'kandidat-{slug}.jpg'), quality=86, optimize=True)
            print('og kandidat', slug)


if __name__ == '__main__':
    main()
