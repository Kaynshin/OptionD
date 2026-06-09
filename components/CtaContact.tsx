'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import Button from './Button';

export default function CtaContact() {
  const [url, setUrl] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
    <section id="contact" className="band" style={{ paddingTop: '80px' }}>
      <div className="container">
        <div className="cta-band">
          <div className="left">
            <div className="eyebrow">— Demander mon diagnostic —</div>
            <h2>Avant le devis, un constat honnête sur votre site.</h2>
            <p>
              Donnez-moi votre URL, je vous renvoie sous 48 h un document court :
              performance, SEO local, parcours, comparatif concurrence. Aucun
              engagement.
            </p>
            <div className="cta-row">
              <Button href="mailto:contact@optiond.fr" variant="on-mag" size="lg" arrow="→">
                contact@optiond.fr
              </Button>
            </div>
          </div>
          <div className="right">
            <form className="form" onSubmit={handleSubmit}>
              <div className="lab">— Diagnostic offert —</div>
              <div className="url">
                <span className="pre">https://</span>
                <input
                  type="text"
                  placeholder="votre-site.fr"
                  aria-label="URL de votre site"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
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
          </div>
        </div>
      </div>
    </section>
  );
}
