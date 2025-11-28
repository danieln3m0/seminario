import React from 'react';
import { PosterSection } from '../components/PosterSection';
import { DonutChart } from '../components/Charts/DonutChart';
import { Gauge } from '../components/Charts/Gauge';
import { BarChart } from '../components/Charts/BarChart';
import { ExportImageButton } from '../components/ExportImageButton';

export default function Page() {
  // Datos simulados para visualizaciones (puedes ajustar con valores reales)
  const donutData = [
    { label: 'Roya', value: 50, color: '#034159' },
    { label: 'Minador', value: 30, color: '#025951' },
    { label: 'Broca', value: 40, color: '#02735E' },
    { label: 'Phoma', value: 20, color: '#038C3E' },
    { label: 'Cercospora', value: 15, color: '#0CF25D' }
  ];
  const barData = [
    { label: 'Roya', value: 50 },
    { label: 'Minador', value: 48 },
    { label: 'Broca', value: 35 },
    { label: 'Phoma', value: 22 },
    { label: 'Cercospora', value: 18 }
  ];

  return (
    <main>
      <div id="poster-root">
        <div className="banner-title">
          <h1>Aplicación Móvil basada en Machine Learning para Detección Temprana de Plagas en Hojas de Café</h1>
          <div className="subtitle">Caso de estudio: Villa Rica, Perú · Ingeniería de Software</div>
          <div className="meta-authors" style={{marginTop:12}}>
            <span>Diego Rafael Cisneros Tafur</span>
            <span>Francis Daniel Mamani Silva</span>
            <span>Asesora Metodológica: Norma Patricia Falcon Seminario</span>
          </div>
        </div>

        <PosterSection title="Contexto y Relevancia" badge="Problema" className="grid-span-4">
          <p>La producción de café Arábica enfrenta amenazas crecientes por plagas y enfermedades exacerbadas por la variabilidad climática y limitaciones edáficas. Perú muestra rendimientos bajos y alta incidencia de roya, minador y broca que generan pérdidas económicas significativas y comprometen la sostenibilidad social del cultivo.</p>
          <p>Necesidad: herramientas accesibles de diagnóstico temprano para pequeños productores que operan con limitada infraestructura tecnológica.</p>
          <div className="callout">ODS 9 y 12: Innovación productiva sostenible y optimización de recursos para resiliencia agrícola.</div>
        </PosterSection>

        <PosterSection title="Formulación del Problema" badge="Pregunta" className="grid-span-4">
          <p><strong>¿Cómo un modelo de ML (TensorFlow) integrado en una app móvil puede facilitar la detección temprana de plagas en hojas de café y apoyar la gestión del cultivo?</strong></p>
          <p>Planteamiento soportado por evidencia de precisiones &gt;95% en CNNs optimizadas (MobileNet, SmallPavicNet-MC, COFFORMER).</p>
          <p>Beneficios esperados: reducción de tiempos de inspección, menor costo operativo, decisiones objetivas y escalabilidad territorial.</p>
        </PosterSection>

        <PosterSection title="Objetivos" badge="Objetivos" className="grid-span-4">
          <ul style={{margin:0, paddingLeft:18, fontSize:13}}>
            <li>Desarrollar dataset representativo multirregional de hojas de café.</li>
            <li>Entrenar modelo ligero cuantizado para inferencia offline.</li>
            <li>Integrar explicación visual (Grad-CAM) para apoyo semántico.</li>
            <li>Diseñar flujo activo de re-entrenamiento con aprendizaje continuo.</li>
            <li>Medir precisión, recall y tiempo promedio de respuesta en campo.</li>
          </ul>
          <div className="divider" />
          <p><strong>Indicadores:</strong> Precisión global, Falsos negativos críticos, Latencia de captura→diagnóstico, Adopción usuario.</p>
        </PosterSection>

        <PosterSection title="Metodología (Etapas)" badge="Método" className="grid-span-8">
          <div className="mini-grid">
            <div className="mini-item"><strong>1. Captura Campo</strong><br/>Imágenes multivariedad + metadatos (GPS, altitud).</div>
            <div className="mini-item"><strong>2. Diseño</strong><br/>Arquitectura app + pipeline ML + criterios calidad.</div>
            <div className="mini-item"><strong>3. Desarrollo</strong><br/>App móvil + modelo cuantizado + backend APIs.</div>
            <div className="mini-item"><strong>4. Explicabilidad</strong><br/>Mapas de saliencia y recomendaciones umbraladas.</div>
            <div className="mini-item"><strong>5. Piloto</strong><br/>Validación comunitaria, métricas de desempeño.</div>
            <div className="mini-item"><strong>6. Mejora Continua</strong><br/>Aprendizaje activo + gobernanza de datos.</div>
          </div>
          <div style={{marginTop:10}} className="callout">Revisión doble de anotaciones por agrónomos para minimizar sesgo y elevar robustez del dataset.</div>
        </PosterSection>

        <PosterSection title="Villa Rica - Caso de Estudio" badge="Caso" className="grid-span-4">
          <p>Principal distrito cafetalero de Oxapampa (75% área). Altitud 1200–2200 m, diversidad cultural y denominación de origen registrada. Exporta ~80% a mercados internacionales exigentes.</p>
          <p>Desafíos: presión de roya, broca y minador; condiciones edáficas subóptimas y dependencia económica del rubro.</p>
          <p>Oportunidad: Data localizada para calibrar modelos y recomendaciones adaptadas a microclima y manejo.</p>
        </PosterSection>

        <PosterSection title="Antecedentes Clave" badge="Literatura" className="grid-span-8">
          <p>Modelos híbridos YOLOv8 + DenseNet, arquitecturas ligeras MobileViT y SmallPavicNet-MC muestran viabilidad en dispositivos con recursos limitados. Precisión reportada hasta 99.1% (COFFORMER) en clasificación de roya, minador, Phoma y Cercospora.</p>
          <p>Vacíos: recall menor en Cercospora por representatividad limitada; tiempo y memoria elevados en transformadores complejos; necesidad de segmentación eficiente para etapas tempranas.</p>
          <p style={{marginTop:8}} className="callout">Se enfatiza optimización multi-objetivo: precisión diagnóstica + latencia + footprint de memoria + interpretabilidad.</p>
        </PosterSection>

        <PosterSection title="Arquitectura Propuesta" badge="Solución" className="grid-span-6">
          <p><strong>Pipeline:</strong> Captura → Preprocesamiento (segmentación hoja, normalización color) → Inferencia (Modelo cuantizado) → Explicación (Grad-CAM) → Recomendación → Feedback Activo → Re-entrenamiento.</p>
          <p><strong>Módulos:</strong> On-device (inferencias offline), Cloud (almacenamiento + active learning), Panel técnico (validación ambigua).</p>
          <p><strong>Tecnologías:</strong> TensorFlow, TFLite, YOLOv8 (localización), CNN ligera (clasificación), API REST Node/Next para sincronización incremental.</p>
        </PosterSection>

        <PosterSection title="Indicadores y Métricas" badge="Indicadores" className="grid-span-6">
          <div className="chart-row">
            <div className="chart-card">
              <h3>Distribución Plagas (Ej.)</h3>
              <DonutChart data={donutData} />
            </div>
            <div className="chart-card">
              <h3>Precisión Objetivo</h3>
              <Gauge value={97} label="Precisión Clasificación" subtitle=">=95% meta" />
            </div>
            <div className="chart-card">
              <h3>Recall Crítico Roya</h3>
              <Gauge value={94} label="Recall Roya" subtitle=">=90%" color="var(--c5)" />
            </div>
            <div className="chart-card">
              <h3>Pérdidas Evitadas (%)</h3>
              <BarChart data={barData} />
            </div>
          </div>
        </PosterSection>

        <PosterSection title="Tabla Referencial de Plagas" badge="Datos" className="grid-span-8">
          <table className="table">
            <thead>
              <tr>
                <th>Plaga</th>
                <th>Agente</th>
                <th>Condición Favorable</th>
                <th>Efecto Rendimiento</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Roya</td><td>Hemileia vastatrix</td><td>Alta humedad, 21–25°C</td><td>Reducción hasta 50%</td></tr>
              <tr><td>Minador</td><td>Leucoptera coffeella</td><td>Clima cálido y seco</td><td>Defoliación &gt;50% fruto</td></tr>
              <tr><td>Broca</td><td>Hypothenemus hampei</td><td>Frutos verdes/maduros sin control</td><td>Pérdidas 30–80%</td></tr>
              <tr><td>Phoma</td><td>Phyllosticta coffeicola</td><td>Sombra + alta humedad</td><td>Caída prematura frutos</td></tr>
              <tr><td>Cercospora</td><td>Cercospora coffeicola</td><td>17–22°C HR&gt;90%</td><td>Pérdida 15–30%</td></tr>
            </tbody>
          </table>
          <p style={{fontSize:11}}>* Valores sintetizados de fuentes técnicas recientes para ilustrar estructura de datos integrable en motor de recomendación.</p>
        </PosterSection>

        <PosterSection title="Beneficios Esperados" badge="Impacto" className="grid-span-4">
          <ul style={{margin:0, paddingLeft:18, fontSize:13}}>
            <li>Reducción de pérdidas económicas por detección temprana.</li>
            <li>Optimización de insumos y prácticas de manejo.</li>
            <li>Mayor resiliencia frente a cambio climático.</li>
            <li>Base de datos nacional para investigación futura.</li>
            <li>Empoderamiento tecnológico de pequeños productores.</li>
          </ul>
          <div className="callout" style={{marginTop:10}}>Escalamiento progresivo: nuevas plagas → actualización modelo vía aprendizaje activo.</div>
        </PosterSection>

        <PosterSection title="Conclusiones Preliminares" badge="Conclusión" className="grid-span-4">
            <p>La integración de modelos ligeros cuantizados y explicabilidad visual ofrece una vía práctica para mejorar la gestión fitosanitaria en caficultura peruana.</p>
            <p>La gobernanza de datos y la participación colaborativa son determinantes para sostenibilidad y expansión territorial.</p>
            <p>La propuesta alinea innovación con objetivos globales de producción sostenible y resiliencia económica rural.</p>
        </PosterSection>

        <PosterSection title="Trabajo Futuro" badge="Futuro" className="grid-span-4">
          <ul style={{margin:0, paddingLeft:18, fontSize:13}}>
            <li>Integración multiespectral (UAV) para síntomas tempranos.</li>
            <li>Modelos federados para privacidad y regionalización.</li>
            <li>Optimización energética en dispositivos de gama baja.</li>
            <li>Recomendaciones dinámicas según fenología y clima.</li>
            <li>Análisis económico longitudinal post-adopción.</li>
          </ul>
        </PosterSection>

        <PosterSection title="Créditos y Referencias" badge="Referencias" className="grid-span-12">
          <p style={{columns:4, fontSize:11}}>
            Silva et al. (2025); Dias et al. (2024); Lazebnik et al. (2024); Albuquerque & Guedes (2024); Lima et al. (2022); Cesavegro (2023); Cenicafé (2025); Flores Colorado et al. (2023); Ali Salamai (2024); Yamashita & Leite (2023); Grandez-Alberca et al. (2025); Kishaija et al. (2025); Humphries et al. (2025); Ayalew et al. (2024); García Juárez et al. (2025); Quispe et al. (2025); Juarez-Contreras et al. (2025); Alvarado-Huamán et al. (2023); JNC (2023); Agroperu (2024); Milke et al. (2023); Chavarro et al. (2023); Li et al. (2023); Nawaz et al. (2024); Sultana et al. (2025); Ramos Farroñán et al. (2024); Rodriguez Muñoz et al. (2025); Selvanarayanan et al. (2024a); Rodriguez-Gallo et al. (2023); Abuhayi & Mossa (2023); Haider et al. (2024).
          </p>
          <div className="footer-note">Póster generado estáticamente en Next.js. Botón exporta PNG para impresión.</div>
        </PosterSection>
      </div>
      <ExportImageButton />
    </main>
  );
}
