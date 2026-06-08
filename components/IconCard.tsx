import type { ReactNode } from 'react';

type IconCardProps = {
  icon: ReactNode;
  title: ReactNode;
  children: ReactNode;
  safe?: boolean;
};

export default function IconCard({ icon, title, children, safe }: IconCardProps) {
  return (
    <div className={'icard' + (safe ? ' safe' : '')}>
      <div className="ico">{icon}</div>
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  );
}
