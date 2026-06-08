'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Fade-in des sections au scroll.
 *
 * - Rend `null` (effet de bord uniquement, monté dans le layout).
 * - Ajoute `reveal-on` sur <html> au montage : le masquage CSS ne s'applique
 *   QUE si le JS tourne (sinon le contenu reste visible sans JS / au SSR).
 * - IntersectionObserver sur tous les `section.band` ; au croisement → `.in`
 *   puis `unobserve`.
 * - Navigation client (App Router) : le composant persiste entre les routes ;
 *   on re-sélectionne et (ré)observe les nouvelles sections à chaque pathname.
 * - `prefers-reduced-motion: reduce` → aucune observation, toutes les sections
 *   reçoivent `.in` immédiatement (aucune animation).
 */
export default function SectionReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Active le masquage CSS seulement quand le JS est présent.
    root.classList.add('reveal-on');

    if (reduced) {
      // Aucune animation : tout est révélé immédiatement.
      document
        .querySelectorAll<HTMLElement>('section.band')
        .forEach((el) => el.classList.add('in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    // Le DOM de la nouvelle page peut ne pas être encore monté juste après
    // un changement de route : on laisse passer une frame.
    let rafId = 0;
    const observeSections = () => {
      document
        .querySelectorAll<HTMLElement>('section.band')
        .forEach((el) => {
          if (!el.classList.contains('in')) observer.observe(el);
        });
    };
    rafId = requestAnimationFrame(observeSections);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
