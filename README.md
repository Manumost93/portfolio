# Manuel Honrado Vega — Portfolio Personal

> Portfolio web personal construido con React, TypeScript, Vite y Tailwind CSS.
> Diseño dark minimalista con fondo barroco interactivo, cursor magnético y animaciones elegantes.

**Web:** https://portfolio-manumost93s-projects.vercel.app
**Autor:** Manuel Honrado Vega
**Email:** myjhonradov@gmail.com
**LinkedIn:** [linkedin.com/in/manuel-honrado-desarrollador](https://www.linkedin.com/in/manuel-honrado-desarrollador)
**GitHub:** [github.com/Manumost93](https://github.com/Manumost93)

---

## Sobre el proyecto

Este portfolio presenta mi perfil como **Desarrollador Junior Fullstack** con un background híbrido:

- Desarrollo fullstack en React, TypeScript, Node.js y ASP.NET Core / .NET
- Ciberseguridad aplicada: JWT, OWASP, autenticación por roles (SecureFM SOC)
- Experiencia técnica real en mantenimiento, instalaciones y entornos facility tech

El diseño visual combina un aesthetic dark minimalista con una imagen barroca de fondo (fresco de iglesia) que responde al movimiento del ratón con efecto parallax. Construido como SPA con animaciones fluidas, layout responsive y navegación por sidebar.

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
| Deploy frontend | Vercel |
| Deploy backend (SecureFM) | Render |

---

## Secciones de contenido

- **Hero** — Presentación con efecto scramble en el nombre, typewriter de roles, badge de disponibilidad, terminal de boot sequence interactivo y botones CTA
- **Métricas rápidas** — 4 tarjetas con contadores animados: años de experiencia, proyectos, tecnologías y compromiso
- **Proyectos destacados** — 7 tarjetas con mockups visuales únicos por proyecto, stack tecnológico, badges de verificado y enlaces a GitHub y demo
- **Stack técnico** — 5 categorías: Lenguajes, Frontend, Backend y datos, Herramientas & Deploy, IA & Cloud
- **Dominio por área** — Barras de progreso animadas con autoevaluación honesta por tecnología
- **Áreas de interés** — 5 tarjetas: Desarrollo Fullstack, Ciberseguridad Aplicada, Smart Buildings/BMS, Facility Tech y Automatización
- **Experiencia** — Timeline con trabajo real (IKEA/Ingka), prácticas DAM (migración de microservicios, backend, bases de datos) y proyectos personales
- **Formación** — Título DAM con logos, certificaciones universitarias con badges Badgr verificables, PDFs de certificados y sección de formación complementaria
- **Contacto** — Grid con email, LinkedIn, GitHub y descarga de CV
- **Footer** — Pie de página minimalista

---

## Efectos visuales e interactivos

- **Fondo barroco con parallax** — Fresco de iglesia barroca como fondo fijo que se desplaza suavemente siguiendo el ratón (hasta 14px), dando sensación de profundidad 3D. Solo activo en dispositivos con ratón. Implementado con `requestAnimationFrame` y easing suavizado en `Layout.tsx`.

- **Cursor magnético** — Cursor personalizado con un punto interior que sigue el ratón instantáneamente y un anillo exterior que lo sigue con retraso (lerp). Al pasar sobre enlaces y botones el anillo se expande. Implementado en `MagneticCursor.tsx` con doble RAF.

- **Efecto scramble en el nombre** — Al cargar la página el nombre aparece como caracteres aleatorios que se van revelando progresivamente hasta mostrar el nombre real. Implementado con `useScramble` hook en `Hero.tsx`.

- **Typewriter de roles** — El subtítulo se escribe y borra rotando entre distintos perfiles profesionales. Implementado con `useTypewriter` hook con control preciso de timing.

- **Terminal de boot sequence** — Bloque de terminal en el Hero que ejecuta una secuencia de arranque animada con líneas de error, éxito, progreso y datos del perfil. Incluye barra de carga animada y cursor parpadeante. Implementado con `setTimeout` y Framer Motion `AnimatePresence`.

- **Contadores animados** — Las métricas cuentan desde 0 hasta su valor cuando entran en viewport. Implementado con `useCounter` hook usando `IntersectionObserver` y `requestAnimationFrame` con easing cúbico.

- **Glow que sigue al ratón** — En las tarjetas de proyectos e intereses aparece un resplandor de color que sigue la posición del ratón. Implementado en `GlowCard.tsx` con coordenadas relativas y color configurable por tarjeta.

- **Tilt 3D en tarjetas** — Las tarjetas de proyectos rotan en 3D siguiendo el ratón y añaden un efecto de luz especular. Implementado con `perspective` y `rotateX/Y` dinámicos.

- **Barra de progreso de scroll** — Línea de 1px en la parte superior que indica el porcentaje de contenido leído. Implementado en `ScrollProgress.tsx`.

- **Sección activa en sidebar** — El ítem de navegación se resalta automáticamente según la sección visible durante el scroll. Implementado con múltiples `IntersectionObserver`.

- **Animaciones de entrada** — Todas las secciones y tarjetas aparecen con movimiento suave al entrar en viewport usando Framer Motion `whileInView`.

---

## Estructura del proyecto

```
portfolio/
├── public/
│   ├── bg-baroque.jpg               ← imagen de fondo barroca (fresco de iglesia)
│   ├── CV_Manuel_Honrado.pdf        ← CV descargable
│   ├── ImagenLikdn.png              ← foto de perfil
│   ├── favicon.svg
│   └── certs/                       ← certificados PDF verificables
│       ├── bigdata-uax.pdf
│       ├── google-activate.pdf
│       ├── ethical-hacking.pdf
│       ├── ciencia-datos-santander.pdf
│       ├── logo-uax.jpg
│       └── logo-educacionit.jpg
│
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css                    ← Tailwind + estilos globales + card-metal
│   │
│   ├── hooks/
│   │   ├── useTypewriter.ts
│   │   └── useCounter.ts
│   │
│   ├── data/                        ← todo el contenido editable
│   │   ├── profile.ts               ← nombre, bio, email, LinkedIn, GitHub, cvEnabled
│   │   ├── stats.ts                 ← métricas rápidas
│   │   ├── projects.ts              ← proyectos con mockups, stack y URLs
│   │   ├── skills.ts                ← tecnologías, niveles y áreas de interés
│   │   └── experience.ts            ← experiencia, certificaciones y formación
│   │
│   └── components/
│       ├── Layout.tsx               ← wrapper con parallax barroco
│       ├── Sidebar.tsx              ← navegación fija escritorio + móvil
│       ├── MagneticCursor.tsx       ← cursor personalizado con lag ring
│       ├── ScrollProgress.tsx       ← barra de lectura superior
│       ├── GlowCard.tsx             ← tarjeta con glow de ratón configurable
│       ├── SectionHeader.tsx        ← cabecera de sección reutilizable
│       ├── BrandIcons.tsx           ← SVGs de GitHub y LinkedIn
│       ├── Hero.tsx                 ← hero con scramble, typewriter y terminal
│       ├── Stats.tsx                ← métricas con contadores animados
│       ├── Projects.tsx             ← grid de proyectos con mockups y tilt
│       ├── Skills.tsx               ← stack tecnológico por categorías
│       ├── SkillLevels.tsx          ← barras de habilidades animadas
│       ├── InterestAreas.tsx        ← áreas de enfoque profesional
│       ├── Experience.tsx           ← timeline de experiencia
│       ├── Education.tsx            ← formación y certificaciones con logos
│       ├── Contact.tsx              ← grid de contacto
│       ├── FloatingCTA.tsx          ← botón flotante de contacto
│       └── Footer.tsx               ← pie de página
│
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Cómo ejecutarlo en local

```bash
# Clona el repositorio
git clone https://github.com/Manumost93/portfolio.git
cd portfolio

# Instala dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## Cómo personalizar el contenido

Todo el contenido está en `src/data/`. Edita esos archivos sin tocar los componentes.

| Archivo | Qué editar |
|---|---|
| `src/data/profile.ts` | Nombre, bio, email, LinkedIn, GitHub, `cvEnabled` |
| `src/data/projects.ts` | Proyectos, stack, URLs de GitHub y demo |
| `src/data/skills.ts` | Categorías de tecnologías, niveles y áreas de interés |
| `src/data/experience.ts` | Experiencia, educación y certificaciones |
| `src/data/stats.ts` | Métricas rápidas |

### Activar/desactivar el CV

```ts
// src/data/profile.ts
cvEnabled: true,   // true = botón activo | false = botón desactivado
```

### Cambiar el fondo barroco

Reemplaza `public/bg-baroque.jpg` con cualquier imagen. El overlay oscuro se aplica automáticamente vía CSS.

---

## Despliegue

Desplegado en **Vercel** con auto-deploy en cada push a `main`. También compatible con Netlify y GitHub Pages.

---

## Licencia

Propiedad intelectual de **Manuel Honrado Vega**.
El código puede usarse como referencia. El contenido personal no está disponible para reutilización.

---

_Desarrollado por [Manuel Honrado Vega](https://github.com/Manumost93) · 2025_
