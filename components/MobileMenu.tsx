'use client';

import type { ReactNode } from 'react';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import type { NavActive } from './Nav';

type MobileMenuProps = {
  /** Omis (ou non reconnu) → aucun lien actif (ex. /mentions-legales). */
  active?: NavActive;
  ctaLabel: ReactNode;
  ctaHref: string;
};

const LINKS: { href: string; label: string; key: NavActive }[] = [
  { href: '/', label: 'Accueil', key: 'home' },
  { href: '/site-internet', label: 'Site internet', key: 'site' },
  { href: '/agent-ia', label: 'Agent IA', key: 'agent' },
];

export default function MobileMenu({
  active,
  ctaLabel,
  ctaHref,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const panelId = useId();

  const close = useCallback(() => setOpen(false), []);

  // Lock body scroll while the panel is open, then restore it.
  useEffect(() => {
    if (!open) return;
    const { body } = document;
    const previous = body.style.overflow;
    body.style.overflow = 'hidden';
    return () => {
      body.style.overflow = previous;
    };
  }, [open]);

  // Focus management: focus first link on open, return focus to the burger on close.
  useEffect(() => {
    if (open) {
      // Defer to allow the panel to mount/transition in.
      const id = window.requestAnimationFrame(() => firstLinkRef.current?.focus());
      return () => window.cancelAnimationFrame(id);
    }
    burgerRef.current?.focus();
  }, [open]);

  // Close on Escape; trap Tab focus inside the panel.
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== 'Tab') return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const activeEl = document.activeElement;
      if (e.shiftKey && activeEl === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && activeEl === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, close]);

  return (
    <div className="mobile-nav">
      <button
        ref={burgerRef}
        type="button"
        className="nav-burger"
        aria-label="Menu"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="nav-burger-box" aria-hidden="true">
          <span className="nav-burger-bar" />
          <span className="nav-burger-bar" />
          <span className="nav-burger-bar" />
        </span>
      </button>

      <button
        type="button"
        className={`mobile-overlay${open ? ' is-open' : ''}`}
        hidden={!open}
        onClick={close}
        tabIndex={-1}
        aria-label="Fermer le menu"
      />

      <div
        ref={panelRef}
        id={panelId}
        className={`mobile-panel${open ? ' is-open' : ''}`}
        hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
      >
        <nav className="mobile-links" aria-label="Services">
          {LINKS.map((link, i) => (
            <Link
              key={link.href}
              ref={i === 0 ? firstLinkRef : undefined}
              href={link.href}
              className={active === link.key ? 'is-active' : undefined}
              aria-current={active === link.key ? 'page' : undefined}
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mobile-foot">
          {ctaHref.startsWith('/') ? (
            <Link href={ctaHref} className="btn btn-primary" onClick={close}>
              {ctaLabel} <span className="arrow">→</span>
            </Link>
          ) : (
            <a href={ctaHref} className="btn btn-primary" onClick={close}>
              {ctaLabel} <span className="arrow">→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
