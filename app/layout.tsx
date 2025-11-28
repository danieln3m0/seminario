import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Aplicación ML Café - Póster Académico',
  description: 'Póster académico de la propuesta de detección temprana de plagas en hojas de café.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
