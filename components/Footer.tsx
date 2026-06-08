import type { ReactNode } from 'react';
import Link from 'next/link';
import Wordmark from './Wordmark';

type FooterLink = { label: ReactNode; href: string; ext?: boolean };
type FooterColumn = { title: string; links: FooterLink[] };

type FooterProps = {
  brandText: ReactNode;
  bottomStatus: ReactNode;
  columns: FooterColumn[];
};

function FootLink({ label, href, ext }: FooterLink) {
  const inner = (
    <>
      {label}
      {ext && <span className="ext">↗</span>}
    </>
  );
  if (href.startsWith('/')) {
    return <Link href={href}>{inner}</Link>;
  }
  if (href.startsWith('http')) {
    return <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>;
  }
  return <a href={href}>{inner}</a>;
}

const CONTACT_COLUMN: FooterColumn = {
  title: 'Contact',
  links: [
    { label: 'david@optiond.fr', href: 'mailto:david@optiond.fr' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/davidjomain/', ext: true },
    { label: 'GitHub', href: 'https://github.com/Kaynshin', ext: true },
  ],
};

export default function Footer({ brandText, bottomStatus, columns }: FooterProps) {
  const allColumns = [...columns, CONTACT_COLUMN];

  return (
    <footer className="foot">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Wordmark variant="plain" />
            <div className="head">— DAVID · DIGITAL · DESIGN —</div>
            <p>{brandText}</p>
          </div>
          {allColumns.map((col, i) => (
            <div className="foot-col" key={i}>
              <h5>{col.title}</h5>
              <ul>
                {col.links.map((link, j) => (
                  <li key={j}>
                    <FootLink {...link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="foot-bot">
          <div>
            <span className="pulse"></span>
            {bottomStatus}
          </div>
          <div className="right">
            <span>© 2026 Option/D — David Jomain</span>
            <span>SIRET en cours</span>
            <span>Annecy · Haute-Savoie</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
