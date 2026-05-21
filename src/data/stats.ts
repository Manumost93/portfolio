import { Briefcase, FolderGit2, Cpu, Star } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

export const stats: Stat[] = [
  {
    value: '1+',
    label: 'Año de experiencia técnica',
    icon: Briefcase,
    color: 'text-blue-400',
  },
  {
    value: '6+',
    label: 'Proyectos completados',
    icon: FolderGit2,
    color: 'text-emerald-400',
  },
  {
    value: '10+',
    label: 'Tecnologías trabajadas',
    icon: Cpu,
    color: 'text-amber-400',
  },
  {
    value: '100%',
    label: 'Compromiso por proyecto',
    icon: Star,
    color: 'text-blue-400',
  },
];
