import type { ReactNode } from 'react';

type TargetStripProps = {
  items: { num: string; label: ReactNode }[];
  label?: string;
};

export default function TargetStrip({ items, label = 'Pour qui' }: TargetStripProps) {
  return (
    <div className="container">
      <div className="strip">
        <div className="label">{label}</div>
        {items.map((item, i) => (
          <div className="item" key={i}>
            <span className="num">{item.num}</span> {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
