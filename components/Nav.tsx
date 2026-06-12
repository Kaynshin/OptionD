import type { ReactNode } from 'react';
import Link from 'next/link';
import Wordmark from './Wordmark';
import Button from './Button';
import MobileMenu from './MobileMenu';

export type NavActive = 'home' | 'site' | 'agent';

type NavProps = {
  /** Lien à mettre en surbrillance. Omis (ou non reconnu) → aucun lien actif (ex. /mentions-legales). */
  active?: NavActive;
  ctaLabel: ReactNode;
  ctaHref: string;
};

export default function Nav({ active, ctaLabel, ctaHref }: NavProps) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-brand" aria-label="Option/D — Accueil">
          <Wordmark variant="plain" />
          <div className="meta">
            FREELANCE
            <br />
            HAUTE-SAVOIE
          </div>
        </Link>
        <nav className="nav-links" aria-label="Services">
          <Link
            href="/"
            className={active === 'home' ? 'is-active' : undefined}
            aria-current={active === 'home' ? 'page' : undefined}
          >
            Accueil
          </Link>
          <Link
            href="/site-internet"
            className={active === 'site' ? 'is-active' : undefined}
            aria-current={active === 'site' ? 'page' : undefined}
          >
            Site internet
          </Link>
          <Link
            href="/agent-ia"
            className={active === 'agent' ? 'is-active' : undefined}
            aria-current={active === 'agent' ? 'page' : undefined}
          >
            Agent IA
          </Link>
        </nav>
        <div className="nav-cta">
          <Button href={ctaHref} variant="primary" arrow="→">
            {ctaLabel}
          </Button>
        </div>
        <MobileMenu active={active} ctaLabel={ctaLabel} ctaHref={ctaHref} />
      </div>
    </header>
  );
}
