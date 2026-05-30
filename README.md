# Manuel Honrado Vega — Portfolio Personal

> Portfolio web personal construido con React, TypeScript, Vite y Tailwind CSS.
> Diseñado como un dashboard técnico oscuro para mostrar proyectos, habilidades y perfil profesional.

**Web:** https://portfolio-kohl-seven-15tnfk4ujq.vercel.app
**Autor:** Manuel Honrado Vega
**Email:** myjhonradov@gmail.com
**LinkedIn:** [linkedin.com/in/manuel-honrado-desarrollador](https://www.linkedin.com/in/manuel-honrado-desarrollador)
**GitHub:** [github.com/Manumost93](https://github.com/Manumost93)

---

## Sobre el proyecto

Este portfolio presenta mi perfil como **Desarrollador Junior Fullstack** con un background híbrido:

- Desarrollo de software en React, TypeScript y ASP.NET Core / .NET
- Experiencia técnica real en mantenimiento, instalaciones, operaciones y entornos facility

El diseño visual está inspirado en dashboards industriales e interfaces SaaS oscuras — profesional, limpio y técnico. Construido como una Single Page Application con animaciones fluidas, layout responsive y navegación por sidebar.

---

## Tecnologías utilizadas

| Capa | Tecnología |
|---|---|
| Framework | React 18 |
| Lenguaje | TypeScript |
| Bundler | Vite |
| Estilos | Tailwind CSS v3 |
| Animaciones | Framer Motion |
| Iconos | Lucide React |
| Gestor de paquetes | npm |

---

## Funcionalidades y secciones

### Secciones de contenido

- **Hero** — Presentación con badge de disponibilidad, botones CTA y bloque de terminal interactivo
- **Métricas rápidas** — Tarjetas con experiencia, proyectos, tecnologías y compromiso
- **Proyectos destacados** — 6 tarjetas con mockups visuales, stack tecnológico y enlaces a GitHub y demo
- **Stack técnico** — Tecnologías agrupadas por categoría: Lenguajes, Frontend, Backend y Herramientas
- **Nivel de habilidades** — Barras de progreso animadas con autoevaluación honesta
- **Áreas de interés** — 5 tarjetas: Desarrollo Web, Automatización, BMS, Facility Tech y Ciberseguridad
- **Experiencia** — Timeline con trabajos, prácticas y proyectos personales con puntos clave
- **Formación** — Título DAM con sección de certificaciones: Azure AI-900, Big Data, Java, Python, Fullstack Bootcamp y Ciberseguridad
- **Contacto** — Grid con email, LinkedIn, GitHub y descarga de CV (activable/desactivable con `cvEnabled` en `profile.ts`)
- **Footer** — Pie de página minimalista con enlaces de perfil

### Efectos visuales avanzados

- **Efecto typewriter en el Hero** — El subtítulo se escribe y borra solo rotando entre distintos roles profesionales. Implementado con un hook personalizado `useTypewriter` usando `useState`, `useEffect` y control de timing preciso.

- **Contadores animados** — Las métricas de la sección de estadísticas cuentan desde 0 hasta su valor real cuando entran en pantalla. Implementado con el hook `useCounter` usando `IntersectionObserver` y `requestAnimationFrame` con easing cúbico.

- **Glow que sigue al ratón** — Al pasar el cursor por las tarjetas de proyectos aparece un resplandor azul que sigue exactamente la posición del ratón dentro de la tarjeta. Implementado con el componente `GlowCard` usando `onMouseMove` y coordenadas relativas con `getBoundingClientRect`.

- **Orbe de fondo con parallax** — Blob de color azul difuso en el Hero que se desplaza suavemente en dirección contraria al movimiento del ratón, creando efecto de profundidad. Implementado con listener global de `mousemove` y `transform` dinámico.

- **Barra de progreso de scroll** — Línea azul degradada en la parte superior de la página que indica el porcentaje de contenido leído, con un punto luminoso en el extremo. Implementado con el componente `ScrollProgress` y evento `scroll` pasivo.

- **Sección activa en el sidebar** — El ítem de navegación se resalta automáticamente en azul según la sección visible mientras el usuario hace scroll. Implementado con múltiples instancias de `IntersectionObserver` y `rootMargin` calibrado.

- **Fondo de partículas animado** — Red de nodos y conexiones azules que se mueven lentamente por toda la página. Implementado con Canvas API y `requestAnimationFrame`.

- **Animaciones de entrada** — Todas las secciones aparecen con movimiento suave al entrar en el viewport usando Framer Motion con `whileInView` y `viewport: { once: true }`.

---

## Estructura del proyecto

```
portfolio/
├── public/
│   └── CV_Manuel_Honrado.pdf        ← coloca aquí el PDF del CV
│
├── src/
│   ├── main.tsx                     ← punto de entrada de la aplicación
│   ├── App.tsx                      ← componente raíz, ensambla todas las secciones
│   ├── index.css                    ← directivas de Tailwind + fuente Inter
│   │
│   ├── hooks/                       ← hooks personalizados de React
│   │   ├── useTypewriter.ts         ← efecto de escritura animada letra a letra
│   │   └── useCounter.ts            ← contador animado con IntersectionObserver
│   │
│   ├── data/                        ← todo el contenido estático (edita aquí para actualizar la web)
│   │   ├── profile.ts               ← nombre, bio, email, LinkedIn, GitHub, CV, terminal
│   │   ├── stats.ts                 ← tarjetas de métricas rápidas
│   │   ├── projects.ts              ← tarjetas de proyectos con URLs de GitHub y demo
│   │   ├── skills.ts                ← categorías de tecnologías, niveles y áreas de interés
│   │   └── experience.ts            ← experiencia laboral, certificaciones y formación
│   │
│   └── components/
│       ├── Layout.tsx               ← wrapper principal, gestiona offset del sidebar
│       ├── Sidebar.tsx              ← sidebar fijo en escritorio + menú colapsable en móvil
│       ├── SectionHeader.tsx        ← título de sección reutilizable con badge y línea
│       ├── BrandIcons.tsx           ← SVGs propios de GitHub y LinkedIn
│       ├── AnimatedBackground.tsx   ← fondo de partículas con Canvas API
│       ├── ScrollProgress.tsx       ← barra de progreso de lectura
│       ├── GlowCard.tsx             ← tarjeta con glow que sigue al ratón
│       ├── Hero.tsx                 ← sección hero con typewriter y orbe parallax
│       ├── Stats.tsx                ← métricas con contadores animados
│       ├── Projects.tsx             ← grid de proyectos con mockups visuales
│       ├── Skills.tsx               ← stack tecnológico agrupado por categoría
│       ├── SkillLevels.tsx          ← barras de habilidades animadas
│       ├── InterestAreas.tsx        ← tarjetas de áreas de interés profesional
│       ├── Experience.tsx           ← timeline de experiencia laboral
│       ├── Education.tsx            ← formación académica y certificaciones
│       ├── Contact.tsx              ← grid de contacto
│       └── Footer.tsx               ← pie de página
│
├── tailwind.config.js               ← configuración de Tailwind
├── vite.config.ts                   ← configuración de Vite
├── tsconfig.json                    ← configuración TypeScript raíz
├── tsconfig.app.json                ← configuración TypeScript de la app
└── package.json                     ← dependencias y scripts
```

---

## Cómo ejecutarlo en local

### Requisitos previos

- [Node.js](https://nodejs.org/) versión **18 o superior**
- **npm** — se instala automáticamente con Node.js

Verifica tus versiones:

```bash
node --version
npm --version
```

---

### Paso 1 — Clona o navega al proyecto

Si ya tienes el proyecto en local:

```bash
cd portfolio
```

Si vas a clonarlo desde GitHub:

```bash
git clone https://github.com/Manumost93/portfolio.git
cd portfolio
```

---

### Paso 2 — Instala las dependencias

```bash
npm install
```

Solo es necesario ejecutarlo una vez, o después de hacer pull con cambios nuevos.

---

### Paso 3 — Arranca el servidor de desarrollo

```bash
npm run dev
```

Abre el navegador en:

```
http://localhost:5173
```

El servidor **recarga automáticamente** al guardar cualquier archivo.

---

### Paso 4 — Build de producción

```bash
npm run build
```

El resultado optimizado se genera en la carpeta `dist/`.

---

### Paso 5 — Preview del build en local

```bash
npm run preview
```

---

## Cómo personalizar el contenido

Todo el contenido está en `src/data/`. Edita esos archivos para actualizar la web sin tocar ningún componente.

| Archivo | Qué editar |
|---|---|
| `src/data/profile.ts` | Nombre, bio, email, LinkedIn, GitHub, ruta del CV, `cvEnabled`, líneas del terminal |
| `src/data/projects.ts` | Nombre, descripción, stack, enlace a GitHub y URL de demo de cada proyecto |
| `src/data/skills.ts` | Categorías de tecnologías, porcentajes de habilidades y tarjetas de interés |
| `src/data/experience.ts` | Entradas de experiencia, certificaciones y formación |
| `src/data/stats.ts` | Valores y etiquetas de las métricas |

### Añadir el CV en PDF

Coloca el archivo en la carpeta `public/`:

```
public/CV_Manuel_Honrado.pdf
```

Activa el botón de descarga cambiando el flag en `src/data/profile.ts`:

```ts
cvEnabled: true,   // true = botón activo | false = botón desactivado visualmente
```

Cuando `cvEnabled` es `false`, los botones del Hero y de Contacto se muestran bloqueados (sin enlace ni descarga) hasta que se reactive.

### Actualizar URLs de demo de proyectos

Una vez desplegado un proyecto, abre `src/data/projects.ts` y reemplaza `demoUrl: '#'` con la URL real:

```ts
demoUrl: 'https://tu-proyecto.vercel.app',
```

---

## Despliegue

Esta es una web completamente estática — se puede desplegar en cualquier plataforma de hosting estático.

**Opciones recomendadas:**

| Plataforma | Cómo desplegar |
|---|---|
| [Vercel](https://vercel.com) | Conecta el repo de GitHub → se despliega automáticamente en cada push |
| [Netlify](https://netlify.com) | Arrastra la carpeta `dist/`, o conecta el repo |
| [GitHub Pages](https://pages.github.com) | Usa el paquete `gh-pages` o un workflow de GitHub Actions |

---

## Licencia

Este proyecto y todo su contenido son propiedad intelectual de **Manuel Honrado Vega**.
La arquitectura del código puede usarse como referencia, pero el contenido personal — bio, proyectos, experiencia e identidad — no está disponible para reutilización.

---

_Desarrollado por [Manuel Honrado Vega](https://github.com/Manumost93) · 2025_
