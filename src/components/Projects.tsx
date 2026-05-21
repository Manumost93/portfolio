import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projects } from '../data/projects';
import SectionHeader from './SectionHeader';

function ProjectMockup({ type }: { type: string }) {
  if (type === 'Fullstack App') {
    return (
      <div className="h-28 rounded-xl bg-slate-900/80 border border-white/8 overflow-hidden p-3 flex flex-col gap-2">
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
      <div className="h-28 rounded-xl bg-slate-900/80 border border-white/8 overflow-hidden p-3 flex flex-col gap-2">
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
      <div className="h-28 rounded-xl bg-slate-900/80 border border-white/8 overflow-hidden p-3 flex flex-col gap-2">
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
  return (
    <div className="h-28 rounded-xl bg-slate-900/80 border border-white/8 overflow-hidden p-3 flex flex-col gap-2">
      <div className="flex gap-2 mb-1">
        <div className="h-2 w-2 rounded-full bg-blue-500/50" />
        <div className="h-1.5 w-24 bg-white/10 rounded my-auto" />
      </div>
      <div className="grid grid-cols-3 gap-1.5 flex-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded bg-white/5 border border-white/8" />
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
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -3 }}
            className="group rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm p-5 hover:bg-white/7 hover:border-white/18 transition-all"
          >
            {/* Type badge + mockup */}
            <div className="mb-4">
              <ProjectMockup type={project.type} />
            </div>

            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <h3 className="text-white font-semibold text-base leading-tight">{project.name}</h3>
                <span className={`inline-block mt-1 text-[10px] font-mono border px-2 py-0.5 rounded-full ${project.typeColor}`}>
                  {project.type}
                </span>
              </div>
              <div className="flex gap-1.5 shrink-0">
                {/* TODO: reemplaza href="#" con el enlace real de demo */}
                <a
                  href={project.demoUrl}
                  className="p-1.5 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/25 transition"
                  aria-label="Ver demo"
                  title="Ver demo"
                >
                  <ExternalLink size={13} />
                </a>
                {/* TODO: reemplaza href="#" con el enlace real de GitHub */}
                <a
                  href={project.githubUrl}
                  className="p-1.5 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/25 transition"
                  aria-label="Ver repositorio en GitHub"
                  title="GitHub"
                >
                  <GithubIcon size={13} />
                </a>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed mb-4">{project.description}</p>

            {/* Stack pills */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono bg-white/5 border border-white/8 text-slate-400 px-2 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-1">
              {project.highlights.slice(0, 3).map((h, j) => (
                <div key={j} className="flex items-start gap-1.5 text-xs text-slate-500">
                  <ChevronRight size={11} className="text-blue-500 mt-0.5 shrink-0" />
                  {h}
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
