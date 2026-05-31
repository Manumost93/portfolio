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
    period: '2016 – Actualidad',
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

export interface CertificationItem {
  id: number;
  name: string;
  issuer: string;
  period: string;
  color: string;
  url?: string;
  logo?: string;
}

export const certifications: CertificationItem[] = [
  {
    id: 1,
    name: 'Azure AI Fundamentals (AI-900)',
    issuer: 'Microsoft',
    period: '2024',
    color: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  },
  {
    id: 2,
    name: 'Big Data e Inteligencia Artificial',
    issuer: 'Universidad Alfonso X el Sabio',
    period: '2024',
    color: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
    url: '/certs/bigdata-uax.pdf',
    logo: 'https://www.uax.com/themes/custom/uax/favicon.ico',
  },
  {
    id: 3,
    name: 'Certificado Universitario en Java',
    issuer: 'Universidad Europea',
    period: '2024',
    color: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    url: 'https://api.eu.badgr.io/public/assertions/4XBkA9j_Rwmb4oq1awdBmg',
    logo: 'https://api.eu.badgr.io/public/assertions/4XBkA9j_Rwmb4oq1awdBmg/image',
  },
  {
    id: 4,
    name: 'Certificado Universitario en Python',
    issuer: 'Universidad Europea',
    period: '2024',
    color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    url: 'https://api.eu.badgr.io/public/assertions/gdXnrQBzRuSNGINbTo9QUw',
    logo: 'https://api.eu.badgr.io/public/assertions/gdXnrQBzRuSNGINbTo9QUw/image',
  },
  {
    id: 5,
    name: 'Bootcamp Fullstack (1 año)',
    issuer: 'Education IT',
    period: '2022 – 2023',
    color: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    url: 'https://www.educacionit.com/perfil/manuel-honrado-vega-1035488/certificado/73593',
    logo: 'https://www.educacionit.com/favicon.ico',
  },
  {
    id: 6,
    name: 'Bases de la Ciberseguridad (1 año y medio)',
    issuer: 'Education IT',
    period: '2022 – 2023',
    color: 'text-red-400 bg-red-400/10 border-red-400/20',
    url: 'https://www.educacionit.com/perfil/Manuel-Honrado-Vega-1035488/certificado/78303',
    logo: 'https://www.educacionit.com/favicon.ico',
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
