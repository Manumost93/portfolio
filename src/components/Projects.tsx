import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import SectionHeader from './SectionHeader';
import GlowCard from './GlowCard';
import { GithubIcon } from './BrandIcons';

function TiltCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({
    transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
  });
  const [shine, setShine] = useState({ x: 50, y: 50, opacity: 0 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const nx  = (e.clientX - rect.left)  / rect.width;
    const ny  = (e.clientY - rect.top)   / rect.height;
    const rx  = (ny - 0.5) * -14;
    const ry  = (nx - 0.5) *  14;
    setStyle({ transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.03,1.03,1.03)` });
    setShine({ x: nx * 100, y: ny * 100, opacity: 0.18 });
  };

  const onLeave = () => {
    setStyle({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)' });
    setShine(p => ({ ...p, opacity: 0 }));
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ ...style, transition: 'transform 0.18s ease', transformStyle: 'preserve-3d', position: 'relative' }}
    >
      {children}
      {/* Shine overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(226,232,240,${shine.opacity}), transparent 65%)`,
          transition: 'opacity 0.3s',
          zIndex: 20,
        }}
      />
    </div>
  );
}

function ProjectMockup({ type }: { type: string }) {
  if (type === 'Fullstack App') {
    return (
      <div className="h-28 rounded-xl bg-[#080a0e] border border-slate-700/30 overflow-hidden p-3 flex flex-col gap-2">
        <div className="flex gap-1.5 items-center mb-1">
          <div className="w-2 h-2 rounded-full bg-blue-500/60" />
          <div className="h-1.5 w-20 bg-white/10 rounded" />
          <div className="ml-auto h-1.5 w-8 bg-blue-500/30 rounded" />
        </div>
        <div className="flex gap-2 flex-1">
          <div className="flex-1 bg-white/4 rounded-lg border border-white/6 p-2 space-y-1">
            {[70, 90, 55, 80].map((w, i) => <div key={i} className="h-1 bg-white/15 rounded" style={{ width: `${w}%` }} />)}
          </div>
          <div className="w-16 bg-white/4 rounded-lg border border-white/6 p-2 space-y-1.5">
            {['bg-emerald-500/40', 'bg-blue-500/40', 'bg-amber-500/40'].map((c, i) => <div key={i} className={`h-2 w-full rounded ${c}`} />)}
          </div>
        </div>
      </div>
    );
  }
  if (type === 'Facility Tech') {
    return (
      <div className="h-28 rounded-xl bg-[#080a0e] border border-slate-700/30 overflow-hidden p-3 flex flex-col gap-2">
        <div className="flex justify-between items-center mb-1">
          <div className="h-1.5 w-24 bg-emerald-500/30 rounded" />
          <div className="h-5 w-12 bg-emerald-500/20 border border-emerald-500/30 rounded text-[9px] text-emerald-400 flex items-center justify-center font-mono">OPEN</div>
        </div>
        <div className="space-y-1.5">
          {[
            { color: 'bg-red-500/50', w: '85%', label: 'CRÍTICA' },
            { color: 'bg-amber-500/50', w: '65%', label: 'MEDIA' },
            { color: 'bg-blue-500/50', w: '45%', label: 'BAJA' },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${row.color}`} />
              <div className="flex-1 h-1.5 bg-white/8 rounded overflow-hidden">
                <div className={`h-full ${row.color} rounded`} style={{ width: row.w }} />
              </div>
              <span className="text-[8px] text-slate-500 font-mono w-8">{row.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (type === 'Smart Buildings') {
    return (
      <div className="h-28 rounded-xl bg-[#080a0e] border border-slate-700/30 overflow-hidden p-3 flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <div className="h-1.5 w-16 bg-white/10 rounded" />
          <div className="ml-auto flex gap-1">
            {['bg-emerald-500/50', 'bg-emerald-500/50', 'bg-amber-500/50', 'bg-red-500/50'].map((c, i) => (
              <div key={i} className={`w-3 h-3 rounded ${c}`} />
            ))}
          </div>
        </div>
        <div className="flex gap-1.5 items-end h-12">
          {[40, 65, 50, 80, 55, 70, 45, 85].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-blue-500/40 border-t border-blue-400/30" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="flex justify-between">
          {['22°C', '65%HR', '850W', 'OK'].map((v, i) => (
            <span key={i} className="text-[8px] font-mono text-slate-400">{v}</span>
          ))}
        </div>
      </div>
    );
  }
  if (type === 'Salud & Reservas') {
    return (
      <div className="h-28 rounded-xl bg-[#080a0e] border border-slate-700/30 overflow-hidden p-3 flex flex-col gap-2">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-rose-400/70" />
            <div className="h-1.5 w-20 bg-white/10 rounded" />
          </div>
          <div className="h-4 w-14 bg-rose-500/20 border border-rose-500/30 rounded text-[8px] text-rose-400 flex items-center justify-center font-mono">RESERVAR</div>
        </div>
        <div className="grid grid-cols-4 gap-1">
          {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom', '—'].map((d, i) => (
            <div key={i} className={`h-5 rounded text-[7px] font-mono flex items-center justify-center ${i < 5 ? 'bg-rose-500/20 border border-rose-500/20 text-rose-300' : 'bg-white/4 border border-slate-700/20 text-slate-600'}`}>
              {d}
            </div>
          ))}
        </div>
        <div className="flex gap-1.5 mt-auto">
          <div className="flex-1 h-2 bg-emerald-500/30 rounded border border-emerald-500/20" />
          <div className="flex-1 h-2 bg-rose-500/30 rounded border border-rose-500/20" />
          <div className="w-8 h-2 bg-white/8 rounded border border-slate-700/20" />
        </div>
      </div>
    );
  }
  if (type === 'App Portable') {
    return (
      <div className="h-28 rounded-xl bg-[#080a0e] border border-slate-700/30 overflow-hidden p-3 flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-1">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-sm bg-orange-500/60" />
            <div className="w-2 h-2 rounded-sm bg-orange-400/40" />
          </div>
          <div className="h-1.5 w-16 bg-white/10 rounded" />
          <div className="ml-auto h-4 w-10 bg-orange-500/20 border border-orange-500/30 rounded text-[8px] text-orange-400 flex items-center justify-center font-mono">APP</div>
        </div>
        <div className="flex gap-2 flex-1">
          <div className="w-14 bg-white/4 rounded border border-slate-700/20 p-1.5 space-y-1">
            {['bg-orange-500/40', 'bg-white/15', 'bg-white/10', 'bg-white/8'].map((c, i) => (
              <div key={i} className={`h-1.5 w-full rounded ${c}`} />
            ))}
          </div>
          <div className="flex-1 bg-white/4 rounded border border-slate-700/20 p-1.5 space-y-1">
            {[80, 60, 90, 50].map((w, i) => (
              <div key={i} className="h-1.5 bg-white/12 rounded" style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="h-28 rounded-xl bg-[#080a0e] border border-slate-700/30 overflow-hidden p-3 flex flex-col gap-2">
      <div className="flex gap-2 mb-1">
        <div className="h-2 w-2 rounded-full bg-blue-500/50" />
        <div className="h-1.5 w-24 bg-white/10 rounded my-auto" />
      </div>
      <div className="grid grid-cols-3 gap-1.5 flex-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded bg-white/5 border border-slate-700/30" />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <SectionHeader
        label="Proyectos"
        title="Trabajo destacado"
        description="Proyectos que muestran mis capacidades técnicas y la conexión entre software y entornos operativos reales."
      />

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            <TiltCard>
            <GlowCard className="group card-metal rounded-2xl p-5 transition-all h-full" glowColor="148,163,184">
              <div className="mb-4">
                <ProjectMockup type={project.type} />
              </div>

              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-white font-semibold text-base leading-tight">{project.name}</h3>
                  <div className="flex items-center gap-1.5 flex-wrap mt-1">
                    <span className={`inline-block text-[10px] font-mono border px-2 py-0.5 rounded-full ${project.typeColor}`}>
                      {project.type}
                    </span>
                    {project.status === 'completado' && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono border px-2 py-0.5 rounded-full text-emerald-400 bg-emerald-400/10 border-emerald-400/20">
                        <span className="w-1 h-1 rounded-full bg-emerald-400" />
                        Completado
                      </span>
                    )}
                    {project.status === 'en-desarrollo' && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono border px-2 py-0.5 rounded-full text-amber-400 bg-amber-400/10 border-amber-400/20">
                        <span className="w-1 h-1 rounded-full bg-amber-400 animate-pulse" />
                        En desarrollo
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-1.5 shrink-0">
                  <a
                    href={project.demoUrl}
                    target={project.demoUrl !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`p-1.5 rounded-lg transition ${project.demoUrl === '#' ? 'text-slate-700 cursor-not-allowed' : 'text-slate-400 hover:text-slate-200'}`}
                    style={{ border: '1px solid rgba(100,116,139,0.2)' }}
                    aria-label="Ver demo"
                    title={project.demoUrl === '#' ? 'Demo no disponible' : 'Ver demo'}
                  >
                    <ExternalLink size={13} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 transition"
                    style={{ border: '1px solid rgba(100,116,139,0.2)' }}
                    aria-label="Ver repositorio en GitHub"
                  >
                    <GithubIcon size={13} />
                  </a>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-[10px] font-mono text-slate-500 px-2 py-0.5 rounded hover:text-slate-300 transition" style={{ background: 'rgba(20,24,32,0.8)', border: '1px solid rgba(100,116,139,0.15)' }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-1">
                {project.highlights.slice(0, 3).map((h, j) => (
                  <div key={j} className="flex items-start gap-1.5 text-xs text-slate-500">
                    <ChevronRight size={11} className="text-slate-500 mt-0.5 shrink-0" />
                    {h}
                  </div>
                ))}
              </div>
            </GlowCard>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
