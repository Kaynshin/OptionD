import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://optiond.fr/sitemap.xml',
    host: 'https://optiond.fr',
  };
}
