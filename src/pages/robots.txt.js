import { LIVE, isLive } from '../lib/site.js';

// Na ostré doméně pustíme roboty dovnitř, na náhledové je zavřeme ven.
export function GET({ site }) {
  const body = isLive(site)
    ? `User-agent: *\nAllow: /\n\nSitemap: ${LIVE}/sitemap.xml\n`
    : `User-agent: *\nDisallow: /\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
