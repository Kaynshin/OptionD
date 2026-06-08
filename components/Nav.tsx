import type { ReactNode } from 'react';
import Link from 'next/link';
import Wordmark from './Wordmark';
import Button from './Button';
import MobileMenu from './MobileMenu';

type NavProps = {
  active: 'home' | 'site' | 'agent';
  /** Conservé pour compat. d'API (les pages le passent encore) — non rendu. */
  statusText?: ReactNode;
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
          <Link href="/" className={active === 'home' ? 'is-active' : undefined}>
            Accueil
          </Link>
          <Link
            href="/site-internet"
            className={active === 'site' ? 'is-active' : undefined}
          >
            Site internet
          </Link>
          <Link
            href="/agent-ia"
            className={active === 'agent' ? 'is-active' : undefined}
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
