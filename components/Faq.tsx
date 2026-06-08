import type { ReactNode } from 'react';

type FaqProps = {
  items: { q: ReactNode; a: ReactNode }[];
};

export default function Faq({ items }: FaqProps) {
  return (
    <div className="faq">
      {items.map((item, i) => (
        <details key={i} open={i === 0}>
          <summary>{item.q}</summary>
          <div>{item.a}</div>
        </details>
      ))}
    </div>
  );
}
