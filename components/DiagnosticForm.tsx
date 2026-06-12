'use client';

import type { FormEvent } from 'react';

/**
 * Île client minimale : seul le <form> a besoin de JS (mailto construit au
 * submit). Input non contrôlé, lu via FormData — pas de re-render à la frappe.
 */
export default function DiagnosticForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = String(new FormData(e.currentTarget).get('url') ?? '');
    window.location.href =
      'mailto:contact@optiond.fr?subject=Diagnostic%20-%20' +
      encodeURIComponent(url) +
      '&body=' +
      encodeURIComponent(
        'Bonjour David,\n\nJe souhaite un diagnostic pour le site : https://' +
          url +
          '\n\nMerci.'
      );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="lab">— Diagnostic offert —</div>
      <div className="url">
        <span className="pre">https://</span>
        <input
          type="text"
          name="url"
          placeholder="votre-site.fr"
          aria-label="URL de votre site"
        />
        <button type="submit" className="btn btn-primary">
          Lancer <span className="arrow">↗</span>
        </button>
      </div>
      <div className="micro">
        <span className="ok">✓</span> Réponse sous 48 h ·{' '}
        <span className="ok">✓</span> Aucun engagement ·{' '}
        <span className="ok">✓</span> Document A4, dix minutes de lecture
      </div>
    </form>
  );
}
