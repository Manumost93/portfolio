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
        {icon && <span className="text-chrome-400">{icon}</span>}
        <span className="text-xs font-mono uppercase tracking-widest text-slate-400 border border-slate-600/30 bg-slate-800/40 px-3 py-1 rounded-full">
          {label}
        </span>
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-3 leading-tight text-metal">
        {title}
      </h2>
      {description && (
        <p className="text-slate-500 text-sm md:text-base max-w-2xl leading-relaxed">{description}</p>
      )}
      {/* Línea metálica degradada */}
      <div className="mt-4 h-px w-20 rounded-full" style={{
        background: 'linear-gradient(90deg, #475569 0%, #94a3b8 50%, transparent 100%)',
      }} />
    </div>
  );
}
