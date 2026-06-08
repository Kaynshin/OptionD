import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://optiond.fr'),
  title: {
    default: 'Option/D',
    template: '%s',
  },
  description:
    'Atelier freelance IA-augmenté — sites internet premium et agents IA pour commerces et indépendants. David Jomain, Haute-Savoie.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Option/D',
    title: 'Option/D',
    description:
      'Atelier freelance IA-augmenté — sites internet premium et agents IA pour commerces et indépendants. David Jomain, Haute-Savoie.',
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
      'Atelier freelance IA-augmenté — sites internet premium et agents IA pour commerces et indépendants. David Jomain, Haute-Savoie.',
    images: ['/og-image.png'],
  },
};

const antiFouc = `(function(){try{var t=localStorage.getItem('optiond-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: antiFouc }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
