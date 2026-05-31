import { useState, useEffect } from 'react';
import { Menu, X, Terminal, User, BarChart2, FolderGit2, Cpu, Briefcase, GraduationCap, Mail } from 'lucide-react';
import { profile } from '../data/profile';

const navItems = [
  { id: 'hero',       label: 'Inicio',      icon: Terminal },
  { id: 'stats',      label: 'Resumen',     icon: BarChart2 },
  { id: 'projects',   label: 'Proyectos',   icon: FolderGit2 },
  { id: 'skills',     label: 'Stack',       icon: Cpu },
  { id: 'interests',  label: 'Intereses',   icon: User },
  { id: 'experience', label: 'Experiencia', icon: Briefcase },
  { id: 'education',  label: 'Formación',   icon: GraduationCap },
  { id: 'contact',    label: 'Contacto',    icon: Mail },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function useActiveSection() {
  const [active, setActive] = useState('hero');
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);
  return active;
}

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection();

  return (
    <>
      {/* Mobile top bar */}
      <header
        className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3.5"
        style={{ background: 'rgba(6,7,11,0.95)', borderBottom: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)' }}
      >
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-slate-200 font-medium text-sm tracking-wide">{profile.name.split(' ')[0]} Honrado</span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-1.5 text-slate-500 hover:text-slate-200 transition"
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed top-[52px] left-0 right-0 z-40 py-2"
          style={{ background: 'rgba(6,7,11,0.98)', borderBottom: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)' }}
        >
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => { scrollTo(id); setMobileOpen(false); }}
              className={`flex items-center gap-3 w-full px-5 py-3 text-sm transition text-left ${
                active === id ? 'text-slate-200' : 'text-slate-600 hover:text-slate-300'
              }`}
            >
              <Icon size={14} className={active === id ? 'text-slate-400' : 'text-slate-700'} />
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-60 z-40 py-8"
        style={{
          background: 'rgba(5,6,10,0.92)',
          borderRight: '1px solid rgba(255,255,255,0.045)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Identity */}
        <div className="px-6 mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] text-emerald-500 font-mono tracking-widest uppercase">online</span>
          </div>
          <p className="text-slate-100 font-semibold text-sm leading-tight">{profile.name}</p>
          <p className="text-slate-600 text-xs mt-0.5">{profile.subtitle}</p>
        </div>

        {/* Divider */}
        <div className="mx-6 mb-6 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />

        {/* Nav */}
        <nav className="flex-1 px-3 space-y-0.5">
          {navItems.map(({ id, label, icon: Icon }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm text-left transition-all ${
                  isActive ? 'text-slate-200' : 'text-slate-600 hover:text-slate-300'
                }`}
                style={isActive ? {
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.07)',
                } : {
                  border: '1px solid transparent',
                }}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 rounded-r-full bg-slate-400" />
                )}
                <Icon size={14} className={isActive ? 'text-slate-300' : 'text-slate-700 group-hover:text-slate-500 transition'} />
                {label}
              </button>
            );
          })}
        </nav>

        {/* Status */}
        <div className="px-6 mt-6">
          <div className="rounded-lg px-3 py-3" style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}>
            <p className="text-[9px] text-slate-700 mb-1 font-mono tracking-widest uppercase">status</p>
            <p className="text-xs text-emerald-500 font-mono leading-relaxed">
              available_for_<br />opportunities
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
