'use client';

import { useEffect, useRef } from 'react';

const LINK_DIST_SQ = 9000;
const LINK_BUCKETS = 6;

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let w = 0,
      h = 0,
      dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
      mag: boolean;
      fill: string;
      halo: string;
    }[] = [];
    let mouse = { x: -9999, y: -9999, active: false };
    let raf = 0,
      running = false;

    // Theme is hardcoded to "dark" in layout.tsx — read once at mount instead of every frame.
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    const isLight = theme === 'light';
    const baseColor = isLight ? '10,10,10' : '255,255,255';
    const magColor = '255,0,110';
    const maxLinkAlpha = isLight ? 0.1 : 0.18;

    // Pre-computed link colors: one per opacity bucket, so the link pass can
    // batch all segments of a bucket into a single beginPath/stroke call
    // instead of one stroke + one rgba string allocation per line.
    const linkColors: string[] = [];
    const linkBuckets: number[][] = [];
    for (let k = 0; k < LINK_BUCKETS; k++) {
      const o = ((k + 0.5) / LINK_BUCKETS) * maxLinkAlpha;
      linkColors.push(`rgba(${baseColor},${o.toFixed(4)})`);
      linkBuckets.push([]);
    }

    function applySize(width: number, height: number) {
      w = width;
      h = height;
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function size() {
      const r = canvas!.getBoundingClientRect();
      applySize(r.width, r.height);
      seed();
    }
    function seed() {
      // Cap the particle count on small viewports — the O(n²) link pass is
      // the dominant cost and small screens don't need the full density.
      const cap = w < 720 ? 35 : 90;
      const target = Math.min(cap, Math.floor((w * h) / 16000));
      particles = new Array(target).fill(0).map(() => {
        const mag = Math.random() < 0.18; // 18% magenta
        const a = 0.12 + Math.random() * 0.55;
        const c = mag ? magColor : baseColor;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: 0.6 + Math.random() * 1.4,
          a,
          mag,
          // Pre-compute fill styles once instead of building rgba strings per frame.
          fill: `rgba(${c},${a.toFixed(4)})`,
          halo: `rgba(${c},${(a * 0.18).toFixed(4)})`,
        };
      });
    }
    function step() {
      ctx!.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        // mouse repulsion
        if (mouse.active) {
          const dx = p.x - mouse.x,
            dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 14000) {
            const f = ((14000 - d2) / 14000) * 0.6;
            const d = Math.sqrt(d2) + 0.0001;
            p.vx += (dx / d) * f * 0.04;
            p.vy += (dy / d) * f * 0.04;
          }
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy *= 0.985;
        // drift back
        p.vx += (Math.random() - 0.5) * 0.005;
        p.vy += (Math.random() - 0.5) * 0.005;
        if (p.x < -10) p.x = w + 10;
        else if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        else if (p.y > h + 10) p.y = -10;
      }

      // connecting lines — batched by opacity bucket (one stroke per bucket)
      for (let k = 0; k < LINK_BUCKETS; k++) linkBuckets[k].length = 0;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST_SQ) {
            const t = 1 - d2 / LINK_DIST_SQ; // 0..1
            let k = Math.floor(t * LINK_BUCKETS);
            if (k >= LINK_BUCKETS) k = LINK_BUCKETS - 1;
            linkBuckets[k].push(a.x, a.y, b.x, b.y);
          }
        }
      }
      ctx!.lineWidth = 0.6;
      for (let k = 0; k < LINK_BUCKETS; k++) {
        const seg = linkBuckets[k];
        if (seg.length === 0) continue;
        ctx!.strokeStyle = linkColors[k];
        ctx!.beginPath();
        for (let s = 0; s < seg.length; s += 4) {
          ctx!.moveTo(seg[s], seg[s + 1]);
          ctx!.lineTo(seg[s + 2], seg[s + 3]);
        }
        ctx!.stroke();
      }

      // dots
      for (const p of particles) {
        ctx!.fillStyle = p.fill;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fill();
        if (p.mag) {
          ctx!.fillStyle = p.halo;
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
          ctx!.fill();
        }
      }
      raf = requestAnimationFrame(step);
    }
    function start() {
      if (running) return;
      running = true;
      canvas!.classList.add('is-on');
      raf = requestAnimationFrame(step);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    const hero = canvas.closest('.hero') as HTMLElement;

    // Cache the canvas rect — getBoundingClientRect on every mousemove forces
    // layout. Invalidated on resize and scroll.
    let cachedRect: DOMRect | null = null;
    const invalidateRect = () => {
      cachedRect = null;
    };
    const onMove = (e: MouseEvent) => {
      if (!cachedRect) cachedRect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - cachedRect.left;
      mouse.y = e.clientY - cachedRect.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
    };
    // Mouse repulsion only makes sense (and only fires usefully) on devices
    // with a real pointer — skip the listeners entirely on touch devices.
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (hasFinePointer) {
      hero.addEventListener('mousemove', onMove);
      hero.addEventListener('mouseleave', onLeave);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? start() : stop()));
      },
      { threshold: 0.05 }
    );
    io.observe(canvas);

    // Debounced resize. Only re-seed when the surface changes significantly:
    // height-only variations (mobile URL bar show/hide) keep the particles.
    let resizeTimer = 0;
    const onResize = () => {
      invalidateRect();
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        const r = canvas!.getBoundingClientRect();
        const widthChanged = Math.abs(r.width - w) > 1;
        const prevArea = w * h;
        const areaChanged =
          prevArea > 0 && Math.abs(r.width * r.height - prevArea) / prevArea > 0.25;
        if (r.width === w && r.height === h) return;
        applySize(r.width, r.height);
        if (widthChanged || areaChanged) seed();
      }, 150);
    };
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('scroll', invalidateRect, { passive: true });
    size();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', invalidateRect);
      if (hasFinePointer) {
        hero.removeEventListener('mousemove', onMove);
        hero.removeEventListener('mouseleave', onLeave);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-particles" aria-hidden="true" />;
}
