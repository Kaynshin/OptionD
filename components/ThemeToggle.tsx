'use client';

import { useEffect, useRef } from 'react';

const KEY = 'optiond-theme';

export default function ThemeToggle() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const group = rootRef.current;
    if (!group) return;

    const buttons = Array.from(
      group.querySelectorAll<HTMLButtonElement>('[data-set-theme]')
    );

    function apply(theme: string) {
      root.setAttribute('data-theme', theme);
      try {
        localStorage.setItem(KEY, theme);
      } catch (e) {}
      buttons.forEach((b) => {
        b.setAttribute(
          'aria-pressed',
          b.getAttribute('data-set-theme') === theme ? 'true' : 'false'
        );
      });
    }

    // Sync aria-pressed to the theme already on <html> (set by the anti-FOUC
    // script). Do NOT overwrite it: fall back to storage, then to 'dark'.
    const current =
      root.getAttribute('data-theme') ||
      (function () {
        try {
          const saved = localStorage.getItem(KEY);
          return saved === 'light' || saved === 'dark' ? saved : 'dark';
        } catch (e) {
          return 'dark';
        }
      })();

    buttons.forEach((b) => {
      b.setAttribute(
        'aria-pressed',
        b.getAttribute('data-set-theme') === current ? 'true' : 'false'
      );
    });

    const handlers = buttons.map((b) => {
      const handler = () => apply(b.getAttribute('data-set-theme') as string);
      b.addEventListener('click', handler);
      return { b, handler };
    });

    return () => {
      handlers.forEach(({ b, handler }) => b.removeEventListener('click', handler));
    };
  }, []);

  return (
    <div className="theme-toggle" role="group" aria-label="Thème" ref={rootRef}>
      <button
        type="button"
        data-set-theme="light"
        aria-pressed="false"
        aria-label="Thème clair"
        title="Thème clair"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
        </svg>
      </button>
      <button
        type="button"
        data-set-theme="dark"
        aria-pressed="true"
        aria-label="Thème sombre"
        title="Thème sombre"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </button>
    </div>
  );
}
