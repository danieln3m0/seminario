# Póster Académico – Aplicación Móvil ML para Plagas del Café

Este proyecto genera un póster académico estático en **Next.js (App Router)** para presentar la propuesta de una aplicación móvil basada en Machine Learning que detecta tempranamente plagas en hojas de café en el Perú.

## Características
- Layout tipo póster grande (1400px) con secciones temáticas.
- Paleta personalizada (gradiente) con variables CSS.
- Indicadores visuales estáticos: gráfico donut, gauges, barras y tabla.
- Botón para exportar el póster como imagen PNG (`html2canvas`).
- Arquitectura y contenido basados en el documento de investigación (contexto, metodología, caso Villa Rica, indicadores, conclusiones, trabajo futuro).

## Requisitos
- Node.js 18+
- npm 9+

## Instalación
```powershell
npm install
npm run dev
```
Luego abre `http://localhost:3000` en el navegador.

## Exportar a Imagen
Presiona el botón flotante “Exportar como Imagen”. Se descargará `poster-cafe.png` (doble escala para mejor impresión). Puedes ajustar dimensiones en `#poster-root` (archivo `app/globals.css`).

## Estructura Principal
```
app/
  layout.tsx        # Layout global
  page.tsx          # Contenido completo del póster
components/
  PosterSection.tsx # Contenedor común de secciones
  Charts/DonutChart.tsx
  Charts/Gauge.tsx
  Charts/BarChart.tsx
  ExportImageButton.tsx
app/globals.css     # Estilos y paleta
```

## Personalización Rápida
- Editar colores: `app/globals.css` (`--c1` a `--c5`).
- Cambiar datos de ejemplo: arreglos `donutData` y `barData` en `app/page.tsx`.
- Ajustar tamaño de póster: regla `#poster-root` (width / min-height / scale).

## Impresión
Para impresión en gran formato (A0/A1) puedes:
1. Aumentar `scale` en `html2canvas` a 3–4 (ExportImageButton).
2. Ajustar dimensiones finales y usar una herramienta externa para convertir a PDF.

## Notas
- Errores de tipos en editor hasta que instales dependencias (React/Next). Después de `npm install` desaparecen.
- El contenido es estático; para hacerlo dinámico podrías extraer datos de un CMS o JSON.

## Próximos pasos sugeridos (opcional)
- Añadir modo oscuro.
- Incorporar un selector de datasets y métricas reales.
- Generar versión PDF directa con `@react-pdf/renderer`.

---
© 2025 Proyecto académico. Uso educativo.
