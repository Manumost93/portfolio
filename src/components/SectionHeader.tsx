import type { ReactNode } from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  icon?: ReactNode;
}

export default function SectionHeader({ label, title, description, icon }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-2 mb-3">
        {icon && <span className="text-blue-400">{icon}</span>}
        <span className="text-xs font-mono uppercase tracking-widest text-blue-400 border border-blue-400/30 bg-blue-400/5 px-3 py-1 rounded-full">
          {label}
        </span>
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3 leading-tight">{title}</h2>
      {description && (
        <p className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">{description}</p>
      )}
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-blue-500 to-transparent" />
    </div>
  );
}
