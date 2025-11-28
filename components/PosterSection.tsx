import React from 'react';

interface PosterSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
  badge?: string;
}

export const PosterSection: React.FC<PosterSectionProps> = ({ title, children, className='', subtitle, badge }) => {
  return (
    <section className={`section ${className}`}>      
      {badge && <span className="badge">{badge}</span>}
      {title && <h2>{title}</h2>}
      {subtitle && <h4 style={{marginTop:-4, fontWeight:400, color:'var(--c2)'}}>{subtitle}</h4>}
      <div className="divider" />
      {children}
    </section>
  );
};
