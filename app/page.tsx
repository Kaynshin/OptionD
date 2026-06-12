import type { Metadata } from 'next';
import Link from 'next/link';
import HeroParticlesLazy from '@/components/HeroParticlesLazy';
import Wordmark from '@/components/Wordmark';

const PAGE_DESCRIPTION =
  'OptionD fait peau neuve. Sites & agents IA pour les pros de Haute-Savoie — de retour très bientôt.';

export const metadata: Metadata = {
  title: { absolute: 'OptionD — Bientôt disponible' },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'OptionD — Bientôt disponible',
    description: PAGE_DESCRIPTION,
    url: '/',
  },
  twitter: {
    title: 'OptionD — Bientôt disponible',
    description: PAGE_DESCRIPTION,
  },
};

export default function ComingSoon() {
  return (
    <main className="hero cs-page" data-screen-label="Coming soon — Option/D">
      <HeroParticlesLazy />

      <div className="cs-inner">
        <div className="hero-lock cs-lock">
          <Wordmark variant="hero" />
        </div>

        <p className="cs-eyebrow">
          <span className="cs-dot" aria-hidden="true"></span>
          <span>Site en construction</span>
        </p>

        <h1 className="cs-title">Quelque chose se construit ici.</h1>
        <p className="cs-sub">
          Sites &amp; agents IA pour les pros de Haute-Savoie. De retour très bientôt.
        </p>

        <div className="cs-term" aria-hidden="true">
          <span className="cs-term-label">building…</span>
          <span className="cs-bar">
            <span className="cs-bar-fill"></span>
          </span>
          <span className="cs-caret"></span>
        </div>

        <a className="cs-mail" href="mailto:contact@optiond.fr">
          contact@optiond.fr
        </a>
      </div>

      <footer className="cs-foot">
        <span>© 2026 OptionD</span>
        <span className="cs-sep" aria-hidden="true">
          ·
        </span>
        <Link href="/mentions-legales">Mentions légales</Link>
      </footer>
    </main>
  );
}
