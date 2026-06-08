import type { ReactNode } from 'react';
import Button from './Button';

type PackCardProps = {
  featured?: boolean;
  tier: ReactNode;
  name: ReactNode;
  price: ReactNode;
  priceUnit: ReactNode;
  lede: ReactNode;
  items: ReactNode[];
  ctaLabel: ReactNode;
  ctaHref: string;
  ctaVariant: 'sec' | 'on-mag';
  ctaArrow?: '→' | '↗';
};

export default function PackCard({
  featured,
  tier,
  name,
  price,
  priceUnit,
  lede,
  items,
  ctaLabel,
  ctaHref,
  ctaVariant,
  ctaArrow,
}: PackCardProps) {
  return (
    <article className={'pack' + (featured ? ' featured' : '')}>
      {featured && <div className="ribbon">Recommandé</div>}
      <div className="tier">{tier}</div>
      <div className="name">{name}</div>
      <div className="price-row">
        <div className="price">{price}</div>
        <div className="price-unit">{priceUnit}</div>
      </div>
      <p className="lede">{lede}</p>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="pack-foot">
        <Button href={ctaHref} variant={ctaVariant} arrow={ctaArrow}>
          {ctaLabel}
        </Button>
      </div>
    </article>
  );
}
