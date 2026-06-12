import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://optiond.fr';
  const lastModified = new Date();

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
