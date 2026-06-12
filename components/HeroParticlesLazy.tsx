'use client';

import dynamic from 'next/dynamic';

/**
 * Client-only lazy loader for the canvas animation.
 * `ssr: false` is not allowed directly in a Server Component (Hero.tsx),
 * hence this thin client wrapper: the particles bundle is split out and
 * only fetched/executed in the browser.
 */
const HeroParticlesLazy = dynamic(() => import('./HeroParticles'), { ssr: false });

export default HeroParticlesLazy;
