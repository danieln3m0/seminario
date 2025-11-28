import React from 'react';

interface BarChartDatum { label: string; value: number; color?: string; }
interface BarChartProps { data: BarChartDatum[]; height?: number; }

export const BarChart: React.FC<BarChartProps> = ({ data, height=160 }) => {
  const max = Math.max(...data.map(d=>d.value), 1);
  return (
    <div style={{display:'flex', alignItems:'flex-end', gap:10, height, paddingBottom:8}}>
      {data.map(d => {
        const pct = d.value / max;
        return (
          <div key={d.label} style={{flex:1, display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div style={{
              width:'100%',
              background:'linear-gradient(var(--c2), var(--c3))',
              height: Math.round(pct * (height-34)),
              borderRadius:6,
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              color:'#fff',
              fontSize:11,
              boxShadow:'0 2px 6px rgba(0,0,0,.15)'
            }}>{d.value}</div>
            <div style={{marginTop:6, fontSize:11, textAlign:'center'}}>{d.label}</div>
          </div>
        );
      })}
    </div>
  );
};
