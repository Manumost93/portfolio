export interface ExperienceItem {
  id: number;
  title: string;
  company?: string;
  period: string;
  description: string;
  highlights: string[];
  type: 'work' | 'internship' | 'personal';
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
  extras: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: 1,
    title: 'Técnico de Mantenimiento',
    company: 'IKEA / Ingka',
    period: '2025 – Actualidad',
    description:
      'Experiencia en mantenimiento preventivo y correctivo, gestión de incidencias, instalaciones, coordinación con equipos, proveedores y resolución de problemas en entorno técnico real.',
    highlights: [
      'Mantenimiento preventivo y correctivo',
      'Resolución de incidencias técnicas',
      'Coordinación con equipos y proveedores',
      'Trabajo en entornos técnicos reales',
      'Mentalidad orientada a operaciones',
    ],
    type: 'work',
  },
  {
    id: 2,
    title: 'Prácticas DAM',
    period: '2024 / 2025',
    description:
      'Desarrollo de aplicaciones, trabajo con proyectos de software, bases de datos, APIs, frontend y backend en el marco del ciclo formativo de Desarrollo de Aplicaciones Multiplataforma.',
    highlights: [
      'Desarrollo de aplicaciones software',
      'Bases de datos relacionales',
      'APIs REST con ASP.NET Core',
      'Frontend con React y TypeScript',
      'Buenas prácticas de programación',
    ],
    type: 'internship',
  },
  {
    id: 3,
    title: 'Proyectos personales',
    period: '2023 – Actualidad',
    description:
      'Desarrollo de proyectos propios para mejorar habilidades en React, .NET, TypeScript, arquitectura, consumo de APIs, interfaces y resolución de problemas reales.',
    highlights: [
      'React y TypeScript en proyectos reales',
      'Backend con .NET y Entity Framework',
      'Diseño de arquitectura de software',
      'Resolución de problemas concretos',
      'Aprendizaje continuo y autónomo',
    ],
    type: 'personal',
  },
];

export const education: EducationItem[] = [
  {
    id: 1,
    degree: 'Desarrollo de Aplicaciones Multiplataforma – DAM',
    institution: 'Universidad Alfonso X el Sabio',
    period: '2023 – 2025',
    description:
      'Formación orientada al desarrollo de aplicaciones, programación, bases de datos, interfaces, acceso a datos, sistemas de gestión empresarial y proyecto final.',
    extras: [
      'React y TypeScript',
      'ASP.NET Core y .NET',
      'SQL y bases de datos',
      'Ciberseguridad básica',
      'BMS / Facility Tech',
      'Automatización y sistemas técnicos',
    ],
  },
];
