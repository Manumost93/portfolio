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
        <span className="text-xs font-mono uppercase tracking-widest text-slate-200 px-3 py-1 rounded-full" style={{ border: '1px solid rgba(203,213,225,0.35)', background: 'rgba(71,85,105,0.3)', boxShadow: '0 0 12px rgba(148,163,184,0.12), 0 1px 0 rgba(226,232,240,0.1) inset' }}>
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
      <div className="mt-4 h-px w-24 rounded-full" style={{
        background: 'linear-gradient(90deg, #64748b 0%, #cbd5e1 40%, #f1f5f9 70%, transparent 100%)',
        boxShadow: '0 0 8px rgba(203,213,225,0.5)',
      }} />
    </div>
  );
}
