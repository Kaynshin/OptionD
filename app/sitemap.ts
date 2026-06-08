import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://optiond.fr';
  const lastModified = new Date();

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${base}/site-internet`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/agent-ia`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/mentions-legales`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
