import React from 'react';

interface GaugeProps {
  value: number; // 0-100
  label: string;
  color?: string;
  size?: number;
  subtitle?: string;
}

export const Gauge: React.FC<GaugeProps> = ({ value, label, color='var(--c4)', size=160, subtitle }: GaugeProps) => {
  const clamp = Math.max(0, Math.min(100, value));
  const radius = size/2 - 10;
  const circumference = 2 * Math.PI * radius;
  const pct = clamp/100;
  const dash = pct * circumference;
  const gap = circumference - dash;

  return (
    <div style={{width:size, textAlign:'center'}}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>        
        <circle r={radius} cx={size/2} cy={size/2} stroke="#e1e6e8" strokeWidth={12} fill="transparent" />
        <g transform={`rotate(-90 ${size/2} ${size/2})`}>
          <circle
            r={radius}
            cx={size/2}
            cy={size/2}
            stroke={color}
            strokeWidth={12}
            strokeDasharray={`${dash} ${gap}`}
            strokeLinecap="round"
            fill="transparent"
          />
        </g>
      </svg>
      <div style={{marginTop:-size/2 - 4, position:'relative', fontSize:26, fontWeight:600}}>{clamp.toFixed(0)}%</div>
      <div style={{fontSize:12, fontWeight:500, marginTop:4}}>{label}</div>
      {subtitle && <div style={{fontSize:11, opacity:.75}}>{subtitle}</div>}
    </div>
  );
};
