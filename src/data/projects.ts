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
}

export const projects: Project[] = [
  {
    id: 1,
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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
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
  },
  {
    id: 4,
    name: 'Portfolio Personal',
    type: 'Personal Brand',
    typeColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
    description:
      'Web personal desarrollada con React, TypeScript, Vite y Tailwind CSS para mostrar proyectos, experiencia técnica, stack tecnológico y perfil profesional.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    highlights: [
      'Diseño tipo dashboard técnico',
      'Componentes reutilizables',
      'Responsive design completo',
      'Animaciones con Framer Motion',
      'Posicionamiento profesional claro',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/Manumost93/ecommerce-react',
  },
  {
    id: 5,
    name: 'Generador de Informes Técnicos',
    type: 'Utilidad técnica',
    typeColor: 'text-slate-400 bg-slate-400/10 border-slate-400/20',
    description:
      'Herramienta conceptual para generar informes de mantenimiento, registrar actuaciones, exportar datos y estructurar información técnica de forma clara.',
    stack: ['React', 'TypeScript', 'Formularios', 'Validaciones', 'Exportación PDF/Excel'],
    highlights: [
      'Registro de actuaciones técnicas',
      'Generación de informes estructurados',
      'Validación de formularios',
      'Transformación de tareas manuales en digital',
      'Orientado a equipos de mantenimiento',
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com/Manumost93/react-pruebas',
  },
  {
    id: 6,
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
  },
];
