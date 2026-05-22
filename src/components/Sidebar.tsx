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

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-[52px] left-0 right-0 z-40 bg-slate-950/98 border-b border-white/10 backdrop-blur-md py-2">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => { scrollTo(id); setMobileOpen(false); }}
              className={`flex items-center gap-3 w-full px-5 py-3 text-sm transition text-left ${active === id ? 'text-white bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
            >
              <Icon size={15} className={active === id ? 'text-blue-400' : 'text-slate-500'} />
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-60 bg-slate-950/80 border-r border-white/8 backdrop-blur-md z-40 py-6">
        {/* Identity */}
        <div className="px-5 mb-8">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400 font-mono">online</span>
          </div>
          <p className="text-white font-semibold text-sm leading-tight">{profile.name}</p>
          <p className="text-slate-500 text-xs mt-0.5">{profile.subtitle}</p>
        </div>

        <div className="mx-5 h-px bg-white/8 mb-6" />

        {/* Nav */}
        <nav className="flex-1 px-3 space-y-0.5">
          {navItems.map(({ id, label, icon: Icon }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm text-left transition-all group ${
                  isActive
                    ? 'text-white bg-blue-500/10 border border-blue-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/6 border border-transparent'
                }`}
              >
                {/* Active indicator */}
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-blue-400 rounded-r-full" />
                )}
                <Icon
                  size={15}
                  className={isActive ? 'text-blue-400' : 'text-slate-500 group-hover:text-blue-400 transition'}
                />
                {label}
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400" />
                )}
              </button>
            );
          })}
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
