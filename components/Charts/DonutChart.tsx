import React from 'react';

interface DonutChartProps {
  size?: number;
  thickness?: number;
  data: { label: string; value: number; color: string }[];
}

export const DonutChart: React.FC<DonutChartProps> = ({ size=160, thickness=42, data }) => {
  const total = data.reduce((acc: number, d: { label: string; value: number; color: string }) => acc + d.value, 0);
  let cumulative = 0;
  const radius = size/2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div style={{position:'relative', width:size, height:size}}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>        
        <g transform={`rotate(-90 ${radius} ${radius})`}>
          {data.map((slice: { label: string; value: number; color: string }, i: number) => {
            const pct = total === 0 ? 0 : slice.value / total;
            const dash = pct * circumference;
            const gap = circumference - dash;
            const circle = (
              <circle
                key={i}
                r={radius - thickness/2}
                cx={radius}
                cy={radius}
                stroke={slice.color}
                strokeWidth={thickness}
                strokeDasharray={`${dash} ${gap}`}
                strokeDashoffset={-cumulative * circumference}
                fill="transparent"
                style={{transition:'stroke-dasharray .4s'}}
              />
            );
            cumulative += pct;
            return circle;
          })}
        </g>
      </svg>
      <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
        <strong style={{fontSize:20}}>{(total).toFixed(0)}</strong>
        <span style={{fontSize:11, letterSpacing:.5}}>Total</span>
      </div>
      <div className="legend">
        {data.map((d: { label: string; value: number; color: string }) => (
          <div key={d.label} className="legend-item">
            <span className="legend-swatch" style={{background:d.color}} />
            {d.label}: {d.value}
          </div>
        ))}
      </div>
    </div>
  );
};
