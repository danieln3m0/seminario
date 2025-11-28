import React from 'react';

interface PosterSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
  badge?: React.ReactNode;
}

export const PosterSection: React.FC<PosterSectionProps> = ({ title, children, className='', subtitle, badge }) => {
  const isSimpleBadge = typeof badge === 'string' || typeof badge === 'number';

  return (
    <section className={`section ${className}`}>
      {badge && (isSimpleBadge ? <span className="badge">{badge}</span> : badge)}
      {title && <h2>{title}</h2>}
      {subtitle && <h4 style={{marginTop:-4, fontWeight:400, color:'var(--c2)'}}>{subtitle}</h4>}
      <div className="divider" />
      {children}
    </section>
  );
};
