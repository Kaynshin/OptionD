import type { ReactNode } from 'react';

type FeatItem = {
  mk: '✓' | '—' | '+';
  children: ReactNode;
  off?: boolean;
};

type PricingCardProps = {
  tier: string;
  name: string;
  price: string;
  priceUnit: ReactNode;
  lede: string;
  features: FeatItem[];
  cta: ReactNode;
  featured?: boolean;
};

export default function PricingCard({
  tier,
  name,
  price,
  priceUnit,
  lede,
  features,
  cta,
  featured,
}: PricingCardProps) {
  return (
    <article className={'pack' + (featured ? ' featured' : '')}>
      {featured && <div className="ribbon">Recommandé</div>}
      <div className="tier">{tier}</div>
      <div className="name">{name}</div>
      <div className="price-row">
        <div className="price">{price}</div>
        <div className="price-unit month">{priceUnit}</div>
      </div>
      <p className="lede">{lede}</p>
      <ul className="feat-list">
        {features.map((feat, i) => (
          <li key={i} className={feat.off ? 'off' : undefined}>
            <span className="mk">{feat.mk}</span> {feat.children}
          </li>
        ))}
      </ul>
      <div className="pack-foot">{cta}</div>
    </article>
  );
}
