/**
 * Same-origin proxy for the acquire service (LBN's ads → client attribution loop).
 * /_lb/lb.js, /_lb/e and /_lb/leads are forwarded to ACQUIRE_ORIGIN; everything else 404s so
 * the site can never be used as a door to acquire's admin routes. Same-origin means: no CORS,
 * the visitor cookie is a true first-party HTTP cookie (Safari keeps it a year, not 7 days),
 * and blocker lists that key on third-party tracker hosts don't apply.
 * LB_PROXY_SECRET (optional) is sent as x-lb-proxy; with the matching PROXY_SECRET on acquire,
 * the bare acquire host stops accepting writes and only this proxy (behind Cloudflare's rules) can.
 * Inert until ACQUIRE_ORIGIN is set in the Pages project, e.g. https://t.localboostnetworking.com
 */
interface Env { ACQUIRE_ORIGIN?: string; LB_PROXY_SECRET?: string }

const ALLOWED = new Set(['lb.js', 'e', 'leads']);

export const onRequest: PagesFunction<Env> = async ({ request, env, params }) => {
  const path = Array.isArray(params.path) ? params.path.join('/') : String(params.path ?? '');
  if (!ALLOWED.has(path)) return new Response('not found', { status: 404 });
  if (!env.ACQUIRE_ORIGIN) {
    // Off: an empty script for lb.js (a 204 is not a valid script response), 204 for the beacons.
    return path === 'lb.js' ? new Response('', { status: 200, headers: { 'content-type': 'application/javascript' } }) : new Response(null, { status: 204 });
  }
  const url = new URL(request.url);
  const upstream = new Request(`${env.ACQUIRE_ORIGIN.replace(/\/+$/, '')}/${path}${url.search}`, request);
  const ip = request.headers.get('cf-connecting-ip');
  if (ip) upstream.headers.set('cf-connecting-ip', ip);
  if (env.LB_PROXY_SECRET) upstream.headers.set('x-lb-proxy', env.LB_PROXY_SECRET);
  return fetch(upstream);
};
