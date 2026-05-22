import { useState, useEffect } from 'react';
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
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 border-b backdrop-blur-md"
        style={{ background: 'rgba(8,10,13,0.95)', borderColor: 'rgba(100,116,139,0.2)' }}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-200 font-semibold text-sm">{profile.name.split(' ')[0]} Honrado</span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-slate-800/50 transition"
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-[52px] left-0 right-0 z-40 border-b backdrop-blur-md py-2"
          style={{ background: 'rgba(8,10,13,0.98)', borderColor: 'rgba(100,116,139,0.2)' }}>
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => { scrollTo(id); setMobileOpen(false); }}
              className={`flex items-center gap-3 w-full px-5 py-3 text-sm transition text-left ${
                active === id ? 'text-slate-200 bg-slate-800/40' : 'text-slate-500 hover:text-slate-200 hover:bg-slate-800/30'
              }`}
            >
              <Icon size={15} className={active === id ? 'text-slate-300' : 'text-slate-600'} />
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-60 z-40 py-6 border-r"
        style={{
          background: 'rgba(6,8,11,0.88)',
          borderColor: 'rgba(100,116,139,0.15)',
          backdropFilter: 'blur(16px)',
          boxShadow: '1px 0 0 rgba(148,163,184,0.04), 4px 0 24px rgba(0,0,0,0.4)',
        }}>
        {/* Identity */}
        <div className="px-5 mb-8">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400 font-mono">online</span>
          </div>
          <p className="text-slate-200 font-semibold text-sm leading-tight">{profile.name}</p>
          <p className="text-slate-600 text-xs mt-0.5">{profile.subtitle}</p>
        </div>

        {/* Divider metálico */}
        <div className="mx-5 h-px mb-6" style={{
          background: 'linear-gradient(90deg, transparent, rgba(100,116,139,0.3), transparent)',
        }} />

        {/* Nav */}
        <nav className="flex-1 px-3 space-y-0.5">
          {navItems.map(({ id, label, icon: Icon }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm text-left transition-all group ${
                  isActive ? 'text-slate-200' : 'text-slate-600 hover:text-slate-300'
                }`}
                style={isActive ? {
                  background: 'rgba(100,116,139,0.12)',
                  border: '1px solid rgba(100,116,139,0.22)',
                  boxShadow: '0 1px 0 rgba(203,213,225,0.05) inset',
                } : {
                  border: '1px solid transparent',
                }}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-r-full"
                    style={{ background: 'linear-gradient(180deg, #cbd5e1, #64748b)' }} />
                )}
                <Icon size={15} className={isActive ? 'text-slate-400' : 'text-slate-700 group-hover:text-slate-500 transition'} />
                {label}
                {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-slate-400" />}
              </button>
            );
          })}
        </nav>

        {/* Status */}
        <div className="px-5 mt-4">
          <div className="rounded-xl p-3" style={{
            background: 'rgba(10,12,18,0.8)',
            border: '1px solid rgba(100,116,139,0.18)',
            boxShadow: '0 1px 0 rgba(203,213,225,0.04) inset',
          }}>
            <p className="text-xs text-slate-600 mb-1 font-mono">status</p>
            <p className="text-xs text-emerald-400 font-mono leading-relaxed">
              available_for_<br />opportunities
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
