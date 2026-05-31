import type { ReactNode } from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  icon?: ReactNode;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <span className="inline-block text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 mb-4">
        {label}
      </span>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-tight text-metal">
        {title}
      </h2>
      {description && (
        <p className="text-slate-500 text-sm max-w-xl leading-relaxed">{description}</p>
      )}
      <div className="mt-5 h-px w-12" style={{
        background: 'linear-gradient(90deg, rgba(148,163,184,0.5), transparent)',
      }} />
    </div>
  );
}
