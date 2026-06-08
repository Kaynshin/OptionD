import type { ReactNode } from 'react';
import Button from './Button';

type ServiceCardProps = {
  icon: ReactNode;
  eyebrow: string;
  title: ReactNode;
  lede: ReactNode;
  items: ReactNode[];
  ctaLabel: ReactNode;
  ctaHref: string;
  price: ReactNode;
};

export default function ServiceCard({
  icon,
  eyebrow,
  title,
  lede,
  items,
  ctaLabel,
  ctaHref,
  price,
}: ServiceCardProps) {
  return (
    <article className="svc">
      <div className="svc-top">
        <div className="svc-ico">{icon}</div>
        <div className="svc-eyebrow">{eyebrow}</div>
      </div>
      <h3>{title}</h3>
      <p className="lede">{lede}</p>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="svc-foot">
        <Button href={ctaHref} variant="primary" arrow="→">
          {ctaLabel}
        </Button>
        <span className="svc-price">{price}</span>
      </div>
    </article>
  );
}
