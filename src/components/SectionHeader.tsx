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
        <span className="text-xs font-mono uppercase tracking-widest text-slate-100 px-3 py-1 rounded-full" style={{
          border: '1px solid rgba(203,213,225,0.38)',
          background: 'linear-gradient(135deg, rgba(71,85,105,0.38) 0%, rgba(51,65,85,0.22) 100%)',
          boxShadow: '0 0 18px rgba(148,163,184,0.16), 0 1px 0 rgba(241,245,249,0.18) inset, 0 -1px 0 rgba(0,0,0,0.3) inset',
        }}>
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
      <div className="mt-4 h-px w-36 rounded-full" style={{
        background: 'linear-gradient(90deg, #334155 0%, #94a3b8 25%, #f1f5f9 55%, #cbd5e1 72%, transparent 100%)',
        boxShadow: '0 0 10px rgba(203,213,225,0.65), 0 0 24px rgba(148,163,184,0.25)',
      }} />
    </div>
  );
}
