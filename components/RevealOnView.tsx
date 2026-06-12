'use client';

import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';

type RevealOnViewProps = {
  children: ReactNode;
  /** Classe ajoutée à l'élément enfant quand il entre dans le viewport. */
  inViewClass?: string;
  threshold?: number;
};

/**
 * Île client minimale : observe le premier élément enfant (rendu côté
 * serveur) et lui ajoute une classe à l'entrée dans le viewport.
 * Le wrapper est en display:contents — aucun impact sur le layout.
 * Respecte prefers-reduced-motion (classe appliquée immédiatement).
 */
export default function RevealOnView({
  children,
  inViewClass = 'in-view',
  threshold = 0.2,
}: RevealOnViewProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const target = host.firstElementChild;
    if (!target) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      target.classList.add(inViewClass);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(inViewClass);
            io.unobserve(e.target);
          }
        });
      },
      { threshold }
    );
    io.observe(target);
    return () => io.disconnect();
  }, [inViewClass, threshold]);

  return (
    <div ref={hostRef} style={{ display: 'contents' }}>
      {children}
    </div>
  );
}
