import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Download, ChevronRight } from 'lucide-react';
import { profile } from '../data/profile';
import { useTypewriter } from '../hooks/useTypewriter';

const roles = [
  'React + TypeScript Developer',
  'Junior Fullstack Developer',
  'Facility Tech · BMS · Dashboards',
  '.NET · SQL · APIs REST',
  'Herramientas internas que resuelven problemas',
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function HeroOrb() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: globalThis.MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      setMouse({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #94a3b8 0%, #334155 50%, transparent 70%)',
          top: '5%',
          right: '-10%',
          transform: `translate(${mouse.x}px, ${mouse.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full opacity-15 blur-2xl"
        style={{
          background: 'radial-gradient(circle, #cbd5e1 0%, transparent 70%)',
          bottom: '10%',
          left: '5%',
          transform: `translate(${-mouse.x * 0.5}px, ${-mouse.y * 0.5}px)`,
          transition: 'transform 0.4s ease-out',
        }}
      />
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(roles, 70, 35, 2200);

  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center py-12">
      <HeroOrb />

      {/* Availability badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-8"
      >
        <span className="flex items-center gap-2 text-xs font-mono border border-emerald-500/30 bg-emerald-500/8 text-emerald-400 px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {profile.availabilityLabel}
        </span>
      </motion.div>

      {/* Main heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p className="text-slate-400 text-base md:text-lg font-mono mb-2">Hola, soy</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5" style={{ color: '#e2e8f0' }}>
          Manuel{' '}
          <span className="text-metal" style={{ filter: 'drop-shadow(0 0 18px rgba(203,213,225,0.5))' }}>
            Honrado
          </span>{' '}
          Vega
        </h1>

        {/* Typewriter */}
        <div className="h-8 md:h-10 flex items-center mb-6">
          <span className="text-lg md:text-xl text-slate-300 font-mono">
            {typed}
            <span className="inline-block w-0.5 h-5 md:h-6 bg-slate-400 ml-0.5 align-middle animate-pulse" />
          </span>
        </div>
      </motion.div>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed mb-10"
      >
        {profile.bio}
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap gap-3 mb-14"
      >
        <button
          onClick={() => scrollTo('projects')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-slate-200 text-sm font-medium transition-all active:scale-95"
          style={{
            background: 'linear-gradient(135deg, rgba(71,85,105,0.8) 0%, rgba(51,65,85,0.9) 100%)',
            border: '1px solid rgba(148,163,184,0.25)',
            boxShadow: '0 1px 0 rgba(203,213,225,0.08) inset, 0 4px 16px rgba(0,0,0,0.3)',
          }}
        >
          Ver proyectos
          <ChevronRight size={15} />
        </button>

        <a
          href={profile.email}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-slate-300 text-sm font-medium transition-all active:scale-95 card-metal hover:border-slate-500/40"
        >
          <Mail size={15} />
          Contactar conmigo
        </a>

        <a
          href={profile.cv}
          download
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-slate-500 hover:text-slate-400 text-sm font-medium transition-all active:scale-95"
          style={{ border: '1px solid rgba(100,116,139,0.15)' }}
        >
          <Download size={15} />
          Descargar CV
        </a>
      </motion.div>

      {/* Terminal block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-xl"
      >
        <div className="card-metal rounded-xl overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-2.5" style={{ borderBottom: '1px solid rgba(100,116,139,0.15)', background: 'rgba(8,10,14,0.6)' }}>
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
            <span className="ml-2 text-xs text-slate-600 font-mono">terminal</span>
          </div>
          <div className="p-4 space-y-1.5">
            {profile.terminalLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.2 }}
                className="flex items-center gap-2"
              >
                <span className="text-slate-500 font-mono text-xs select-none">{'>'}</span>
                <span className="text-slate-300 font-mono text-xs">{line}</span>
              </motion.div>
            ))}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-slate-500 font-mono text-xs select-none">{'>'}</span>
              <span className="w-1.5 h-3.5 bg-slate-400 animate-pulse rounded-sm" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-16 flex items-center gap-2 text-slate-600 text-xs"
      >
        <ArrowDown size={13} className="animate-bounce" />
        <span>Desplázate para explorar</span>
      </motion.div>
    </section>
  );
}
