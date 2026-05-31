export interface TechCategory {
  name: string;
  items: string[];
}

export interface SkillLevel {
  name: string;
  level: number;
  color: string;
}

export interface InterestArea {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  glowRgb?: string;
}

export const techCategories: TechCategory[] = [
  {
    name: 'Lenguajes',
    items: ['TypeScript', 'JavaScript', 'C#', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    name: 'Frontend',
    items: ['React', 'Tailwind CSS', 'Material UI', 'Framer Motion', 'Recharts', 'Vite'],
  },
  {
    name: 'Backend y datos',
    items: ['Node.js', 'Express', 'ASP.NET Core', '.NET 8', 'Entity Framework', 'SQLite', 'JWT', 'API REST'],
  },
  {
    name: 'Herramientas & Deploy',
    items: ['Git', 'GitHub', 'Vercel', 'Render', 'VS Code', 'Postman', 'Docker', 'Swagger'],
  },
  {
    name: 'IA & Cloud',
    items: ['ChatGPT', 'Claude AI', 'AWS Cloud', 'AWS Labs'],
  },
];

export const skillLevels: SkillLevel[] = [
  { name: 'React / TypeScript',         level: 82, color: 'bg-blue-500' },
  { name: 'Node.js / Express',           level: 65, color: 'bg-emerald-500' },
  { name: 'ASP.NET Core / .NET',         level: 68, color: 'bg-purple-500' },
  { name: 'SQL / Bases de datos',        level: 72, color: 'bg-cyan-500' },
  { name: 'Seguridad web (JWT · OWASP)', level: 65, color: 'bg-amber-500' },
  { name: 'Git / GitHub / Deploy',       level: 76, color: 'bg-slate-400' },
  { name: 'Resolución de problemas',     level: 90, color: 'bg-rose-400' },
];

export const interestAreas: InterestArea[] = [
  {
    id: 1,
    title: 'Desarrollo Fullstack',
    description:
      'Aplicaciones completas de principio a fin: interfaces React, APIs REST y backends con Node.js o .NET. Orientado a soluciones reales y desplegadas.',
    icon: 'Monitor',
    color: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    glowRgb: '59,130,246',
  },
  {
    id: 2,
    title: 'Ciberseguridad Aplicada',
    description:
      'Autenticación JWT, control de roles, auditoría de cabeceras HTTP, rate limiting y documentación OWASP. Aplicado en producción con SecureFM SOC.',
    icon: 'Shield',
    color: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    glowRgb: '34,211,238',
  },
  {
    id: 3,
    title: 'Smart Buildings / BMS',
    description:
      'Integración de sensores, visualización de datos en tiempo real, alarmas, consumos y operación de edificios inteligentes.',
    icon: 'Building2',
    color: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    glowRgb: '251,191,36',
  },
  {
    id: 4,
    title: 'Facility Tech',
    description:
      'Herramientas internas para equipos técnicos: incidencias, activos, mantenimiento preventivo y correctivo, proveedores y exportación de informes.',
    icon: 'Wrench',
    color: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    glowRgb: '251,146,60',
  },
  {
    id: 5,
    title: 'Sistemas y Automatización',
    description:
      'Soluciones para optimizar procesos técnicos, reducir tareas manuales y digitalizar entornos operativos con herramientas a medida.',
    icon: 'Settings',
    color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    glowRgb: '52,211,153',
  },
];
