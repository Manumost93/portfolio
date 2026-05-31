import { profile } from '../data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8" style={{ borderTop: '1px solid rgba(100,116,139,0.15)' }}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-slate-500 text-xs font-mono">{profile.name}</span>
        </div>
        <p className="text-slate-600 text-xs">
          © {year} · Desarrollado con React, TypeScript y Tailwind CSS
        </p>
        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-400 text-xs transition">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-400 text-xs transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
