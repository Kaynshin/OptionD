'use client';

import { useEffect, useRef } from 'react';

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
    }[] = [];
    let mouse = { x: -9999, y: -9999, active: false };
    let raf = 0,
      running = false;

    function size() {
      const r = canvas!.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas!.width = Math.floor(w * dpr);
      canvas!.height = Math.floor(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }
    function seed() {
      const target = Math.min(90, Math.floor((w * h) / 16000));
      particles = new Array(target).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 0.6 + Math.random() * 1.4,
        a: 0.12 + Math.random() * 0.55,
        mag: Math.random() < 0.18, // 18% magenta
      }));
    }
    function step() {
      ctx!.clearRect(0, 0, w, h);
      const theme = document.documentElement.getAttribute('data-theme') || 'dark';
      const isLight = theme === 'light';
      const baseColor = isLight ? '10,10,10' : '255,255,255';
      const magColor = '255,0,110';

      // links
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
      // connecting lines
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 9000) {
            const o = (1 - d2 / 9000) * (isLight ? 0.1 : 0.18);
            ctx!.strokeStyle = `rgba(${baseColor},${o})`;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }
      // dots
      for (const p of particles) {
        const c = p.mag ? magColor : baseColor;
        ctx!.fillStyle = `rgba(${c},${p.a})`;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fill();
        if (p.mag) {
          ctx!.fillStyle = `rgba(${c},${p.a * 0.18})`;
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
    const onMove = (e: MouseEvent) => {
      const r = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
    };
    hero.addEventListener('mousemove', onMove);
    hero.addEventListener('mouseleave', onLeave);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? start() : stop()));
      },
      { threshold: 0.05 }
    );
    io.observe(canvas);

    window.addEventListener('resize', size, { passive: true });
    size();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('resize', size);
      hero.removeEventListener('mousemove', onMove);
      hero.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-particles" aria-hidden="true" />;
}
