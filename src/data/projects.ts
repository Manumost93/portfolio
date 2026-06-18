export interface Project {
  id: number;
  name: string;
  type: string;
  typeColor: string;
  description: string;
  stack: string[];
  highlights: string[];
  demoUrl: string;
  githubUrl: string;
  status?: 'completado' | 'en-desarrollo';
  glowRgb?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'SecureFM SOC',
    type: 'Cybersecurity / Fullstack',
    typeColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    description:
      'Plataforma fullstack de gestión de incidencias técnicas con panel SOC integrado. Autenticación JWT con roles (admin/technician/viewer), dashboard de eventos de seguridad en tiempo real, auditor web de cabeceras HTTP con puntuación de riesgo 0-100 y documentación OWASP Top 10.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'SQLite', 'JWT', 'bcrypt', 'Helmet', 'OWASP'],
    highlights: [
      'Autenticación JWT con control de acceso por roles',
      'Dashboard SOC con eventos de seguridad en tiempo real',
      'Auditor pasivo de cabeceras HTTP (riesgo 0-100)',
      'Backend con rate limiting, Helmet y validación OWASP',
      'Desplegado en Vercel (frontend) + Render (API)',
    ],
    demoUrl: 'https://securefm-soc.vercel.app',
    githubUrl: 'https://github.com/Manumost93/Securefm-soc',
    status: 'completado',
    glowRgb: '34,211,238',
  },
  {
    id: 3,
    name: 'HistoLinea',
    type: 'Fullstack App',
    typeColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    description:
      'Aplicación web de eventos históricos con timeline interactiva, API REST propia y arquitectura por capas. Permite gestionar eventos históricos y visualizarlos de forma clara e interactiva.',
    stack: ['React', 'TypeScript', 'ASP.NET Core', '.NET 8', 'Entity Framework', 'SQLite', 'API REST'],
    highlights: [
      'Frontend React con TypeScript',
      'Backend ASP.NET Core con API REST',
      'Arquitectura por capas',
      'CRUD completo con Entity Framework',
      'Consumo de API desde cliente',
    ],
    demoUrl: 'https://pfc-histolinea.vercel.app',
    githubUrl: 'https://github.com/Manumost93/pfc-histolinea',
    status: 'completado',
  },
  {
    id: 4,
    name: 'Gestor de Mantenimiento',
    type: 'Facility Tech',
    typeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    description:
      'Aplicación para registrar, organizar y filtrar incidencias, tareas preventivas, visitas externas, prioridades, costes y trabajos pendientes de un equipo técnico de mantenimiento.',
    stack: ['React', 'TypeScript', 'Material UI', 'Dashboard', 'CRUD', 'Filtros'],
    highlights: [
      'Gestión de incidencias y tareas',
      'Filtros por prioridad, estado y tipo',
      'Panel de control tipo dashboard',
      'Orientado a equipos técnicos reales',
      'Experiencia laboral aplicada al código',
    ],
    demoUrl: 'https://inventory-orders-dashboard-git-main-manumost93s-projects.vercel.app',
    githubUrl: 'https://github.com/Manumost93/inventory-orders-dashboard',
    status: 'completado',
  },
  {
    id: 5,
    name: 'BMS Dashboard Demo',
    type: 'Smart Buildings',
    typeColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    description:
      'Dashboard simulado para visualizar sensores, alarmas, temperaturas, consumos, estados de equipos técnicos y avisos de mantenimiento en un entorno tipo edificio inteligente.',
    stack: ['React', 'TypeScript', 'Recharts', 'Datos simulados', 'IoT', 'Smart Buildings'],
    highlights: [
      'Visualización de sensores en tiempo real',
      'Alarmas y estados de equipos',
      'Gráficos de temperatura y consumo',
      'Interfaz tipo panel BMS',
      'Afinidad con entornos industriales',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/Manumost93/Manumost93',
    status: 'en-desarrollo',
  },
  {
    id: 6,
    name: 'Portfolio Personal',
    type: 'Personal Brand',
    typeColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
    description:
      'Web personal con diseño tipo dashboard técnico oscuro. Efectos visuales avanzados: cursor magnético, lluvia Matrix, partículas Canvas y animaciones con Framer Motion.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Canvas API'],
    highlights: [
      'Cursor magnético y lluvia Matrix',
      'Fondo de partículas con Canvas API',
      'Animaciones con Framer Motion',
      'Responsive design completo',
      'Desplegado en Vercel',
    ],
    demoUrl: 'https://portfolio-kohl-seven-15tnfk4ujq.vercel.app',
    githubUrl: 'https://github.com/Manumost93/portfolio',
    status: 'completado',
  },
  {
    id: 7,
    name: 'AppMantenimiento Portable',
    type: 'App Portable',
    typeColor: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    description:
      'Aplicación portable para la gestión integral de mantenimiento: registro de incidencias, seguimiento de tareas, control de activos y generación de informes en entornos técnicos reales.',
    stack: ['React', 'TypeScript', 'Electron', 'LocalStorage', 'CRUD', 'Exportación'],
    highlights: [
      'Gestión de incidencias y activos',
      'Datos persistentes sin servidor',
      'Exportación de informes',
      'Diseño portable y ligero',
      'Orientado a técnicos de campo',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/Manumost93/AppMantenimiento',
    status: 'completado',
  },
  {
    id: 8,
    name: 'Negocio Fisioterapia',
    type: 'Salud & Reservas',
    typeColor: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
    description:
      'Web profesional de reservas de fisioterapia a domicilio. Gestión de citas, panel de administración y experiencia de usuario orientada a la conversión.',
    stack: ['React', 'TypeScript', 'Panel Admin', 'Reservas', 'Responsive', 'Vercel'],
    highlights: [
      'Sistema de reservas a domicilio',
      'Panel de administración integrado',
      'React + TypeScript',
      'Diseño orientado a conversión',
      'Despliegue en Vercel',
    ],
    demoUrl: 'https://negociofisioterapia.vercel.app',
    githubUrl: 'https://github.com/Manumost93/negociofisioterapia',
    status: 'completado',
  },
];
