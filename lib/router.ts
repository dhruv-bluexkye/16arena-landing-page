/**
 * Minimal client-side router.
 *
 * Pages use clean paths (/privacy, /refund-policy, …). Old #hash links keep
 * working as a fallback so existing/shared links don't break. On Vercel, a
 * rewrite (see vercel.json) serves index.html for these paths so a direct
 * visit or a link crawler resolves the page too.
 */

export const ROUTES = [
  'privacy',
  'terms',
  'contact',
  'delete-account',
  'csae-policy',
  'contest-rules',
  'refund-policy',
  'return-policy',
  'shipping-policy',
] as const;

const ROUTE_SET = new Set<string>(ROUTES);
const ROUTE_EVENT = 'route-change';

/** Current route key from the URL — clean path first, #hash as fallback. '' = home. */
export function getRoute(): string {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  if (ROUTE_SET.has(path)) return path;
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (ROUTE_SET.has(hash)) return hash;
  return '';
}

/** Update the URL (no reload) and notify listeners. */
export function pushPath(url: string): void {
  if (url !== window.location.pathname + window.location.hash) {
    window.history.pushState({}, '', url);
  }
  window.dispatchEvent(new Event(ROUTE_EVENT));
}

/** SPA-navigate to a clean path and scroll to top. */
export function navigate(to: string): void {
  pushPath(to.startsWith('/') ? to : `/${to}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/** Subscribe to route changes (pushState nav, back/forward, or legacy hash). */
export function onRouteChange(cb: () => void): () => void {
  window.addEventListener('popstate', cb);
  window.addEventListener('hashchange', cb);
  window.addEventListener(ROUTE_EVENT, cb);
  return () => {
    window.removeEventListener('popstate', cb);
    window.removeEventListener('hashchange', cb);
    window.removeEventListener(ROUTE_EVENT, cb);
  };
}
