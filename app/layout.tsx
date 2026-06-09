import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import JsonLd from '@/components/JsonLd';
import SectionReveal from '@/components/SectionReveal';
import BackToTop from '@/components/BackToTop';
import './globals.css';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://optiond.fr/#organization',
  name: 'Option/D',
  alternateName: 'Option D',
  url: 'https://optiond.fr',
  email: 'contact@optiond.fr',
  image: 'https://optiond.fr/og-image.png',
  logo: 'https://optiond.fr/favicon.svg',
  description:
    'Atelier freelance IA-augmenté — sites internet premium et agents IA téléphoniques pour commerces et indépendants.',
  founder: {
    '@type': 'Person',
    name: 'David',
    url: 'https://www.linkedin.com/in/davidjomain/',
    sameAs: [
      'https://www.linkedin.com/in/davidjomain/',
      'https://github.com/Kaynshin',
    ],
  },
  areaServed: { '@type': 'Country', name: 'France' },
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Haute-Savoie',
    addressCountry: 'FR',
  },
  sameAs: [
    'https://www.linkedin.com/in/davidjomain/',
    'https://github.com/Kaynshin',
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://optiond.fr'),
  title: {
    default: 'Option/D',
    template: '%s · Option/D',
  },
  description:
    'Atelier freelance IA-augmenté — sites internet premium et agents IA pour commerces et indépendants. David, Haute-Savoie.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Option/D',
    title: 'Option/D',
    description:
      'Atelier freelance IA-augmenté — sites internet premium et agents IA pour commerces et indépendants. David, Haute-Savoie.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Option/D — David · Digital · Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Option/D',
    description:
      'Atelier freelance IA-augmenté — sites internet premium et agents IA pour commerces et indépendants. David, Haute-Savoie.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      data-theme="dark"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <JsonLd data={organizationJsonLd} />
        {children}
        <SectionReveal />
        <BackToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
