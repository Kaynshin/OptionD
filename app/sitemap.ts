import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://optiond.fr';
  // Date statique : `new Date()` changeait lastModified à chaque build,
  // ce qui invalide le cache des crawlers sans raison.
  const lastModified = '2026-06-12';

  // Mode « site en construction » : seules la home et les mentions légales
  // sont exposées (les pages commerciales redirigent vers /).
  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/mentions-legales`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
