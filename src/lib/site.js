// Ostrá doména webu. Dokud site !== LIVE, chová se build jako náhled:
// robots.txt zakáže indexaci a stránky dostanou meta noindex.
export const LIVE = 'https://osobnostiprotrinec.cz';

export const isLive = (site) => String(site ?? '').replace(/\/$/, '') === LIVE;
