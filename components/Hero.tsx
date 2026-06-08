import type { ReactNode } from 'react';
import HeroParticles from './HeroParticles';
import Wordmark from './Wordmark';

type HeroProps = {
  ariaLabel: string;
  eyebrow: ReactNode;
  lockup?: boolean;
  headline: ReactNode;
  sub: ReactNode;
  ctas: ReactNode;
  meta?: ReactNode;
};

export default function Hero({
  ariaLabel,
  eyebrow,
  lockup,
  headline,
  sub,
  ctas,
  meta,
}: HeroProps) {
  return (
    <section className="hero" aria-label={ariaLabel}>
      <HeroParticles />
      <div className="hero-inner">
        <div className="hero-eyebrow">{eyebrow}</div>
        {lockup && (
          <div className="hero-lock">
            <Wordmark variant="hero" />
            <div className="head">— DAVID · DIGITAL · DESIGN —</div>
          </div>
        )}
        <h1 className="hero-headline">{headline}</h1>
        <p className="hero-sub">{sub}</p>
        <div className="hero-cta">{ctas}</div>
        {meta && <div className="hero-meta">{meta}</div>}
      </div>
    </section>
  );
}
