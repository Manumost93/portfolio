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
}

export const techCategories: TechCategory[] = [
  {
    name: 'Lenguajes',
    items: ['TypeScript', 'JavaScript', 'C#', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    name: 'Frontend',
    items: ['React', 'Tailwind CSS', 'Material UI', 'Vite', 'Responsive Design'],
  },
  {
    name: 'Backend y datos',
    items: ['ASP.NET Core', '.NET 8', 'Entity Framework', 'SQLite', 'API REST'],
  },
  {
    name: 'Herramientas',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Swagger', 'Docker básico'],
  },
];

export const skillLevels: SkillLevel[] = [
  { name: 'React / TypeScript', level: 80, color: 'bg-blue-500' },
  { name: '.NET / C#', level: 70, color: 'bg-purple-500' },
  { name: 'SQL / Bases de datos', level: 70, color: 'bg-emerald-500' },
  { name: 'HTML / CSS', level: 85, color: 'bg-orange-500' },
  { name: 'Git / GitHub', level: 75, color: 'bg-slate-400' },
  { name: 'Resolución de problemas', level: 90, color: 'bg-amber-500' },
  { name: 'Aprendizaje técnico', level: 95, color: 'bg-blue-400' },
];

export const interestAreas: InterestArea[] = [
  {
    id: 1,
    title: 'Desarrollo Web',
    description:
      'Aplicaciones modernas, interfaces claras, componentes reutilizables y experiencias responsive.',
    icon: 'Monitor',
    color: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  },
  {
    id: 2,
    title: 'Sistemas y Automatización',
    description:
      'Soluciones para optimizar procesos, reducir tareas manuales y mejorar entornos técnicos.',
    icon: 'Settings',
    color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  },
  {
    id: 3,
    title: 'Smart Buildings / BMS',
    description:
      'Integración de sensores, visualización de datos, alarmas, mantenimiento y operación de edificios.',
    icon: 'Building2',
    color: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  },
  {
    id: 4,
    title: 'Facility Tech',
    description:
      'Herramientas internas para mantenimiento, incidencias, activos, proveedores y equipos técnicos.',
    icon: 'Wrench',
    color: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
  },
  {
    id: 5,
    title: 'Ciberseguridad básica',
    description:
      'Interés en buenas prácticas, seguridad en aplicaciones, redes y protección de sistemas.',
    icon: 'Shield',
    color: 'text-slate-400 bg-slate-400/10 border-slate-400/20',
  },
];
