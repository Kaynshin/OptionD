'use client';

import { useEffect, useState } from 'react';

/**
 * Bouton « retour en haut ».
 *
 * - `position: fixed` en bas à droite, visible uniquement après ~500px de scroll.
 * - Clic → remonte en haut (smooth, sauf `prefers-reduced-motion: reduce`).
 * - Style sobre/premium via tokens CSS ; accent magenta léger au hover.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);

    // État initial (cas d'un rechargement déjà scrollé).
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      aria-label="Remonter en haut"
      className={`back-to-top${visible ? ' is-visible' : ''}`}
      onClick={handleClick}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
}
