import React from 'react';
import { PosterSection } from '../components/PosterSection';
import { DonutChart } from '../components/Charts/DonutChart';
import { Gauge } from '../components/Charts/Gauge';
import { BarChart } from '../components/Charts/BarChart';
import { ExportImageButton } from '../components/ExportImageButton';

export default function Page() {
  const donutData = [
    { label: 'Roya', value: 50, color: '#0e4d7a' },
    { label: 'Minador', value: 30, color: '#0f7f8c' },
    { label: 'Broca', value: 40, color: '#11b38e' },
    { label: 'Phoma', value: 20, color: '#f3a712' },
    { label: 'Cercospora', value: 15, color: '#b7f0d5' }
  ];

  const barData = [
    { label: 'Roya', value: 50 },
    { label: 'Minador', value: 48 },
    { label: 'Broca', value: 35 },
    { label: 'Phoma', value: 22 },
    { label: 'Cercospora', value: 18 }
  ];

  const kpiTiles = [
    { label: 'Precisión validada', value: '97%', accent: 'var(--c4)', note: 'CNN cuantizada' },
    { label: 'Latencia promedio', value: '1.4 s', accent: 'var(--c5)', note: 'Captura → dictamen' },
    { label: 'Ahorro insumos', value: '-28%', accent: 'var(--c2)', note: 'Mejor dosificación' },
    { label: 'Cobertura piloto', value: '3 valles', accent: 'var(--c6)', note: 'Villa Rica · Chanchamayo · Satipo' }
  ];

  const quickStripe = [
    { title: 'Sesiones a campo', value: '42', note: 'fotogramas limpios' },
    { title: 'Etiquetas QA', value: '2x', note: 'agrónomo + app' },
    { title: 'Tiempo de set-up', value: '15 min', note: 'offline listo' },
    { title: 'Ahorro Fito', value: '↓28%', note: 'dosis optimizada' }
  ];

  const milestones = [
    { icon: '📸', title: 'Captura limpia', text: 'Segmentación de hoja e iluminación controlada.' },
    { icon: '🧠', title: 'Modelo ligero', text: 'MobileNet cuantizada para TFLite + Grad-CAM.' },
    { icon: '🌐', title: 'Feedback activo', text: 'Re-entrenamiento con muestras dudosas.' },
    { icon: '📶', title: 'Conectividad híbrida', text: 'Inferencia offline + sync cuando hay red.' },
    { icon: '🔍', title: 'Explicabilidad', text: 'Mapa de calor resalta lesiones.' },
    { icon: '💰', title: 'Impacto', text: 'Menor pérdida y trazabilidad exportadora.' }
  ];

  const stack = [
    { icon: '🛰️', title: 'Georreferenciado', text: 'Captura + clima local + altitud.' },
    { icon: '🤖', title: 'ML en dispositivo', text: 'Inferencia <1.5 s sin red.' },
    { icon: '☁️', title: 'Nube liviana', text: 'API REST, control de versiones y trazas.' },
    { icon: '🛡️', title: 'Gobierno de datos', text: 'Roles, anonimización y auditoría.' }
  ];

  const adoption = [
    { icon: '🚜', title: 'Productor guiado', text: 'Checklist visual y foto asistida.' },
    { icon: '📲', title: 'Alerta inmediata', text: 'Semáforo con confianza y acción.' },
    { icon: '🤝', title: 'Extensión técnica', text: 'Dashboard comunitario y visitas focalizadas.' },
    { icon: '📦', title: 'Trazabilidad', text: 'Código de lote y evidencia visual.' }
  ];

  return (
    <main>
      <div id="poster-root">
        <div className="banner-title">
          <div className="top-line">
            <div className="ribbon">Poster ML · Detección Temprana</div>
            <div className="ribbon alt">Formato horizontal A1</div>
          </div>
          <h1>Aplicación móvil con IA para diagnosticar plagas en hojas de café</h1>
          <div className="subtitle">Caso: Villa Rica, Perú · Ingeniería de Software</div>
          <div className="meta-authors" style={{marginTop:12}}>
            <span>Diego Rafael Cisneros Tafur</span>
            <span>Francis Daniel Mamani Silva</span>
            <span>Asesora: Norma Patricia Falcon Seminario</span>
          </div>
          <div className="chips-row">
            <span className="chip accent">IA explainable</span>
            <span className="chip">Sesiones de campo 2025</span>
            <span className="chip warn">Exportable a PNG</span>
            <span className="chip">Uso sin red</span>
          </div>
          <div className="hero-stats">
            <div className="hero-pill"><span className="big">97%</span>Precisión objetivo</div>
            <div className="hero-pill"><span className="big">1.4s</span>Captura → dictamen</div>
            <div className="hero-pill"><span className="big">-28%</span>Insumos agro</div>
            <div className="hero-pill"><span className="big">3</span>Zonas piloto</div>
          </div>
        </div>

        <PosterSection title="01 Reto en campo" badge={<span className="badge numbered"><span className="number">1</span></span>} className="grid-span-4">
          <ul className="compact-list">
            <li>Presión alta de roya, minador y broca.</li>
            <li>Productores sin asistencia inmediata.</li>
            <li>Costos altos por diagnósticos tardíos.</li>
          </ul>
          <div className="pill-grid">
            <div className="pill">Alertas tempranas</div>
            <div className="pill">Dosificación óptima</div>
            <div className="pill">Dataset local balanceado</div>
          </div>
          <div className="callout soft" style={{marginTop:10}}>Objetivo: diagnóstico <strong>&lt;90 s</strong> con confianza y recomendación accionable.</div>
        </PosterSection>

        <PosterSection title="02 Caso Villa Rica" badge={<span className="badge numbered"><span className="number">2</span></span>} className="grid-span-4">
          <div className="icon-grid">
            <div className="icon-card"><div className="icon">📍</div><div className="title">Zona</div><div className="text">Oxapampa · 1,200–2,200 m</div></div>
            <div className="icon-card"><div className="icon">🌦️</div><div className="title">Microclimas</div><div className="text">Sombra, HR&gt;90%, lluvias intensas</div></div>
            <div className="icon-card"><div className="icon">☕</div><div className="title">Oferta</div><div className="text">80% exportación especialidad</div></div>
            <div className="icon-card"><div className="icon">🧪</div><div className="title">Dataset</div><div className="text">3 variedades + controles de calidad</div></div>
          </div>
        </PosterSection>

        <PosterSection title="03 Propuesta rápida" badge={<span className="badge numbered"><span className="number">3</span></span>} className="grid-span-4">
          <div className="icon-row" style={{marginBottom:8}}>
            <span>⚡ Inferencia offline</span>
            <span>👁️ Grad-CAM</span>
            <span>🌱 Acción clara</span>
          </div>
          <p><strong>Pregunta:</strong> ¿Cómo entregar diagnóstico confiable en campo sin conectividad?</p>
          <p>Pipeline corto: captura guiada → segmentación → modelo cuantizado → confianza + recomendación.</p>
          <div className="pill-grid">
            <div className="pill">Móvil + nube liviana</div>
            <div className="pill">Gobernanza de datos</div>
            <div className="pill">Re-entrenamiento activo</div>
          </div>
        </PosterSection>

        <PosterSection title="Arquitectura en 6 pasos" badge={<span className="badge numbered"><span className="number">4</span></span>} className="grid-span-8">
          <div className="mini-grid">
            <div className="mini-item"><strong>1. Captura</strong><br/>Foto asistida + metadatos.</div>
            <div className="mini-item"><strong>2. Prepro</strong><br/>Segmentación hoja y control de luz.</div>
            <div className="mini-item"><strong>3. Modelo</strong><br/>MobileNet cuantizada + Grad-CAM.</div>
            <div className="mini-item"><strong>4. Dictamen</strong><br/>Semáforo + sugerencia.</div>
            <div className="mini-item"><strong>5. Sincroniza</strong><br/>Carga diferida cuando hay red.</div>
            <div className="mini-item"><strong>6. Mejora</strong><br/>Feedback activo y QA agrónomo.</div>
          </div>
          <div className="callout" style={{marginTop:12}}>Optimización multi-objetivo: precisión, latencia y memoria en móviles de gama media.</div>
        </PosterSection>

        <PosterSection title="Stack y gobierno de datos" badge={<span className="badge numbered"><span className="number">5</span></span>} className="grid-span-4">
          <div className="icon-grid">
            {stack.map(item => (
              <div key={item.title} className="icon-card">
                <div className="icon">{item.icon}</div>
                <div className="title">{item.title}</div>
                <div className="text">{item.text}</div>
              </div>
            ))}
          </div>
          <div className="callout glass" style={{marginTop:12}}>Políticas de roles, cifrado en tránsito y versionado de datasets.</div>
        </PosterSection>

        <PosterSection title="Indicadores y métricas" badge={<span className="badge numbered"><span className="number">6</span></span>} className="grid-span-12">
          <div className="chart-row">
            <div className="chart-card">
              <h3>Distribución Plagas (ejemplo)</h3>
              <DonutChart data={donutData} />
            </div>
            <div className="chart-card">
              <h3>Precisión objetivo</h3>
              <Gauge value={97} label="Clasificación" subtitle=">=95% meta" />
            </div>
            <div className="chart-card">
              <h3>Recall crítico roya</h3>
              <Gauge value={94} label="Recall" subtitle=">=90%" color="var(--c6)" />
            </div>
            <div className="chart-card">
              <h3>Pérdidas evitadas (%)</h3>
              <BarChart data={barData} />
            </div>
          </div>
          <div className="kpi-stripe">
            {quickStripe.map(item => (
              <div key={item.title} className="stripe-card">
                <div className="stripe-title">{item.title}</div>
                <div className="stripe-value">{item.value}</div>
                <div className="stripe-note">{item.note}</div>
              </div>
            ))}
          </div>
          <div className="stat-grid" style={{marginTop:14}}>
            {kpiTiles.map(tile => (
              <div key={tile.label} className="stat-card" style={{borderColor: tile.accent}}>
                <div className="stat-label">{tile.label}</div>
                <div className="stat-value" style={{color: tile.accent}}>{tile.value}</div>
                <div className="stat-note">{tile.note}</div>
              </div>
            ))}
          </div>
        </PosterSection>

        <PosterSection title="Tabla rápida de plagas" badge={<span className="badge numbered"><span className="number">7</span></span>} className="grid-span-7">
          <table className="table">
            <thead>
              <tr>
                <th>Plaga</th>
                <th>Agente</th>
                <th>Condición</th>
                <th>Efecto</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Roya</td><td>Hemileia vastatrix</td><td>HR alta · 21–25°C</td><td>Pérdida hasta 50%</td></tr>
              <tr><td>Minador</td><td>Leucoptera coffeella</td><td>Clima cálido y seco</td><td>Defoliación &gt;50%</td></tr>
              <tr><td>Broca</td><td>Hypothenemus hampei</td><td>Fruto sin control</td><td>Pérdidas 30–80%</td></tr>
              <tr><td>Phoma</td><td>Phyllosticta coffeicola</td><td>Sombra + HR alta</td><td>Caída de fruto</td></tr>
              <tr><td>Cercospora</td><td>C. coffeicola</td><td>17–22°C HR&gt;90%</td><td>Pérdida 15–30%</td></tr>
            </tbody>
          </table>
          <p style={{fontSize:11}}>* Datos referenciales para integrar en motor de recomendación.</p>
        </PosterSection>

        <PosterSection title="Adopción y piloto" badge={<span className="badge numbered"><span className="number">8</span></span>} className="grid-span-5">
          <div className="icon-grid">
            {adoption.map(item => (
              <div key={item.title} className="icon-card">
                <div className="icon">{item.icon}</div>
                <div className="title">{item.title}</div>
                <div className="text">{item.text}</div>
              </div>
            ))}
          </div>
          <div className="callout glass" style={{marginTop:12}}>Checklist corto, interfaz clara y sincronización diferida reducen curva de adopción.</div>
        </PosterSection>

        <PosterSection title="Ruta visual" badge={<span className="badge numbered"><span className="number">9</span></span>} className="grid-span-12">
          <div className="timeline">
            {milestones.map(step => (
              <div key={step.title} className="timeline-item">
                <div className="timeline-icon">{step.icon}</div>
                <div>
                  <div className="timeline-title">{step.title}</div>
                  <div className="timeline-text">{step.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="footer-ribbon">
            <span className="ribbon">Poster listo para PNG</span>
            <span className="ribbon">Orientación horizontal</span>
            <span className="ribbon">IA explainable</span>
          </div>
        </PosterSection>

        <PosterSection title="Trabajo futuro" badge={<span className="badge numbered"><span className="number">10</span></span>} className="grid-span-6">
          <ul style={{margin:0, paddingLeft:18, fontSize:13}}>
            <li>Imágenes multiespectrales (UAV) para síntomas tempranos.</li>
            <li>Modelos federados y personalización por finca.</li>
            <li>Optimización energética en móviles de gama baja.</li>
            <li>Recomendaciones dinámicas según fenología y clima.</li>
            <li>Análisis económico post-adopción.</li>
          </ul>
        </PosterSection>

        <PosterSection title="Conclusión rápida" badge={<span className="badge numbered"><span className="number">11</span></span>} className="grid-span-6">
          <p>Modelo ligero + Grad-CAM → diagnósticos confiables sin red.</p>
          <p>Gobierno de datos y feedback de productores sostienen mejora continua.</p>
          <p>La app conecta innovación tecnológica con resiliencia productiva.</p>
          <div className="callout soft" style={{marginTop:10}}>Meta: subir recall en roya y minador, reducir pérdidas y acelerar adopción.</div>
        </PosterSection>
      </div>
      <ExportImageButton />
    </main>
  );
}
