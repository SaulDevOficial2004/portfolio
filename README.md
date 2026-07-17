# Saúl San Martín Portfolio

Portafolio profesional nativo construido únicamente con HTML5, CSS3 y JavaScript Vanilla ES6. No utiliza React, Next.js, Vue, Angular, Svelte, Tailwind, Bootstrap ni jQuery.

## Decisiones de UX

- El hero responde en segundos quién eres, qué construyes y cuál es tu fortaleza principal.
- El contenedor del logo está integrado desde el header y el hero para recibir tu futura identidad visual sin rediseñar.
- ProFitnessGym funciona como caso de estudio profundo, no como tarjeta genérica.
- El stack está agrupado por contexto de trabajo para comunicar criterio técnico, no solo herramientas.
- La sección de proyectos está preparada para crecer desde datos en `script.js`.
- Las animaciones son discretas, progresivas y respetan `prefers-reduced-motion`.

## Estructura

- `index.html`: estructura semántica, SEO, navegación y contenedores principales.
- `styles.css`: sistema visual, responsive, accesibilidad y microinteracciones.
- `script.js`: datos del portafolio, renderizado reusable y reveal on scroll.
- `assets/images`: recursos visuales organizados para producción.

## Arquitectura de Imágenes

```text
assets/
└── images/
    ├── logo/
    │   ├── logo.svg
    │   └── logo-white.svg
    ├── projects/
    │   └── profitnessgym/
    │       ├── dashboard.svg
    │       └── architecture.svg
    ├── profile/
    │   └── profile.png
    ├── backgrounds/
    └── icons/
```

El HTML y JavaScript ya usan rutas reales con etiquetas `<img>`. Cuando tengas los archivos finales, solo reemplaza o agrega las imágenes en esas rutas sin modificar la estructura del sitio.

## Uso

Puedes abrir directamente `index.html` en el navegador.

Opcionalmente, para desarrollo con servidor local:

```bash
npm run dev
```

## Escalar Proyectos

Para agregar un proyecto, añade un objeto nuevo en `portfolio.projects` dentro de `script.js`. Si el proyecto debe ser protagonista, marca `featured: true` y agrega `impact`, `modules`, `architecture`, `challenges` y `media`.

## Pendientes Recomendados

- Reemplazar `contacto@saulsanmartin.dev` y el enlace de GitHub por datos reales.
- Agregar versiones finales del logo si decides migrar de `logo.png` a SVG.
- Sustituir o complementar los SVG actuales con capturas reales de ProFitnessGym.
- Agregar métricas verificables cuando existan: usuarios, módulos activos, registros gestionados, tiempo ahorrado o volumen de datos.
