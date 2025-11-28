'use client';
import React from 'react';
import html2canvas from 'html2canvas';

export const ExportImageButton: React.FC = () => {
  const handleExport = async () => {
    const poster = document.getElementById('poster-root');
    if(!poster) return;
    const canvas = await html2canvas(poster, { scale: 2, backgroundColor: '#ffffff' });
    const link = document.createElement('a');
    link.download = 'poster-cafe.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };
  return (
    <button className="export-btn" onClick={handleExport}>Exportar como Imagen</button>
  );
};
