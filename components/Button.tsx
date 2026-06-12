import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  variant: 'primary' | 'sec' | 'on-mag';
  size?: 'lg';
  arrow?: '→' | '↗';
  children: ReactNode;
  ariaLabel?: string;
};

export default function Button({
  href,
  variant,
  size,
  arrow,
  children,
  ariaLabel,
}: ButtonProps) {
  const className = `btn btn-${variant}${size === 'lg' ? ' btn-lg' : ''}`;

  const inner = (
    <>
      {children}
      {arrow && (
        <>
          {' '}
          <span className="arrow">{arrow}</span>
        </>
      )}
    </>
  );

  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} className={className} aria-label={ariaLabel}>
      {inner}
    </a>
  );
}
