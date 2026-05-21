import { useState } from 'react';
import { Menu, X, Terminal, User, BarChart2, FolderGit2, Cpu, Briefcase, GraduationCap, Mail } from 'lucide-react';
import { profile } from '../data/profile';

const navItems = [
  { id: 'hero', label: 'Inicio', icon: Terminal },
  { id: 'stats', label: 'Resumen', icon: BarChart2 },
  { id: 'projects', label: 'Proyectos', icon: FolderGit2 },
  { id: 'skills', label: 'Stack', icon: Cpu },
  { id: 'interests', label: 'Intereses', icon: User },
  { id: 'experience', label: 'Experiencia', icon: Briefcase },
  { id: 'education', label: 'Formación', icon: GraduationCap },
  { id: 'contact', label: 'Contacto', icon: Mail },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-slate-950/95 border-b border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white font-semibold text-sm">{profile.name.split(' ')[0]} Honrado</span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition"
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-[52px] left-0 right-0 z-40 bg-slate-950/98 border-b border-white/10 backdrop-blur-md py-2">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => { scrollTo(id); setMobileOpen(false); }}
              className="flex items-center gap-3 w-full px-5 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition text-left"
            >
              <Icon size={15} className="text-blue-400" />
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-60 bg-slate-950/80 border-r border-white/8 backdrop-blur-md z-40 py-6">
        {/* Logo / identity */}
        <div className="px-5 mb-8">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400 font-mono">online</span>
          </div>
          <p className="text-white font-semibold text-sm leading-tight">{profile.name}</p>
          <p className="text-slate-500 text-xs mt-0.5">{profile.subtitle}</p>
        </div>

        {/* Divider */}
        <div className="mx-5 h-px bg-white/8 mb-6" />

        {/* Nav */}
        <nav className="flex-1 px-3 space-y-0.5">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/6 transition text-sm text-left group"
            >
              <Icon size={15} className="text-slate-500 group-hover:text-blue-400 transition" />
              {label}
            </button>
          ))}
        </nav>

        {/* Bottom status */}
        <div className="px-5 mt-4">
          <div className="rounded-xl border border-white/8 bg-white/3 p-3">
            <p className="text-xs text-slate-500 mb-1 font-mono">status</p>
            <p className="text-xs text-emerald-400 font-mono leading-relaxed">
              available_for_<br />opportunities
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
