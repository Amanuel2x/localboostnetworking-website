import { useEffect } from 'react';

const ORIGIN = 'https://localboostnetworking.com';

/**
 * Per-route title and canonical. index.html ships one static canonical pointing
 * at the homepage, so without this every route tells crawlers it IS the
 * homepage — while sitemap.xml lists them as distinct URLs.
 * ponytail: a useEffect beats adding react-helmet-async for three routes.
 */
export function usePageMeta(title: string, path: string) {
  useEffect(() => {
    document.title = title;

    const href = `${ORIGIN}${path}`;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = href;

    const og = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (og) og.content = href;

    // Restore the homepage's canonical on unmount: client-side nav back to "/"
    // does not re-parse index.html.
    return () => {
      if (link) link.href = `${ORIGIN}/`;
      if (og) og.content = `${ORIGIN}/`;
    };
  }, [title, path]);
}
