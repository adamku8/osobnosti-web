// Sestaví adresu s ohledem na podadresář, ve kterém web běží (viz astro.config.mjs).
// Použití: u('assets/logo.svg') → /osobnosti-web/assets/logo.svg
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
export const u = (cesta = '') => `${base}/${String(cesta).replace(/^\/+/, '')}`;
