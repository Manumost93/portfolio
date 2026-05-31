import { motion } from 'framer-motion';
import { techCategories } from '../data/skills';
import SectionHeader from './SectionHeader';

const TECH_COLORS: Record<string, { color: string; bg: string; border: string }> = {
  TypeScript:          { color: '#3b82f6', bg: 'rgba(59,130,246,0.1)',   border: 'rgba(59,130,246,0.3)' },
  JavaScript:          { color: '#facc15', bg: 'rgba(250,204,21,0.08)',  border: 'rgba(250,204,21,0.28)' },
  React:               { color: '#38bdf8', bg: 'rgba(56,189,248,0.08)',  border: 'rgba(56,189,248,0.28)' },
  HTML5:               { color: '#fb923c', bg: 'rgba(251,146,60,0.08)',  border: 'rgba(251,146,60,0.28)' },
  CSS3:                { color: '#60a5fa', bg: 'rgba(96,165,250,0.08)',  border: 'rgba(96,165,250,0.28)' },
  'C#':                { color: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.28)' },
  SQL:                 { color: '#22d3ee', bg: 'rgba(34,211,238,0.08)',  border: 'rgba(34,211,238,0.25)' },
  'Tailwind CSS':      { color: '#06b6d4', bg: 'rgba(6,182,212,0.08)',   border: 'rgba(6,182,212,0.28)' },
  'Framer Motion':     { color: '#ec4899', bg: 'rgba(236,72,153,0.08)',  border: 'rgba(236,72,153,0.28)' },
  Recharts:            { color: '#60a5fa', bg: 'rgba(96,165,250,0.08)',  border: 'rgba(96,165,250,0.28)' },
  Vite:                { color: '#c084fc', bg: 'rgba(192,132,252,0.08)', border: 'rgba(192,132,252,0.28)' },
  'Node.js':           { color: '#4ade80', bg: 'rgba(74,222,128,0.08)',  border: 'rgba(74,222,128,0.28)' },
  Express:             { color: '#94a3b8', bg: 'rgba(148,163,184,0.06)', border: 'rgba(148,163,184,0.22)' },
  JWT:                 { color: '#f59e0b', bg: 'rgba(245,158,11,0.08)',  border: 'rgba(245,158,11,0.28)' },
  'ASP.NET Core':      { color: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.28)' },
  '.NET 8':            { color: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.28)' },
  'Entity Framework':  { color: '#a78bfa', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.28)' },
  SQLite:              { color: '#22d3ee', bg: 'rgba(34,211,238,0.08)',  border: 'rgba(34,211,238,0.25)' },
  'API REST':          { color: '#34d399', bg: 'rgba(52,211,153,0.08)',  border: 'rgba(52,211,153,0.25)' },
  'Material UI':       { color: '#60a5fa', bg: 'rgba(96,165,250,0.08)',  border: 'rgba(96,165,250,0.28)' },
  Git:                 { color: '#f87171', bg: 'rgba(248,113,113,0.08)', border: 'rgba(248,113,113,0.28)' },
  GitHub:              { color: '#e2e8f0', bg: 'rgba(226,232,240,0.05)', border: 'rgba(226,232,240,0.2)' },
  Vercel:              { color: '#e2e8f0', bg: 'rgba(226,232,240,0.05)', border: 'rgba(226,232,240,0.2)' },
  Render:              { color: '#818cf8', bg: 'rgba(129,140,248,0.08)', border: 'rgba(129,140,248,0.28)' },
  'VS Code':           { color: '#38bdf8', bg: 'rgba(56,189,248,0.08)',  border: 'rgba(56,189,248,0.28)' },
  Postman:             { color: '#fb923c', bg: 'rgba(251,146,60,0.08)',  border: 'rgba(251,146,60,0.28)' },
};

const DEFAULT_STYLE = { color: '#94a3b8', bg: 'rgba(20,24,32,0.8)', border: 'rgba(100,116,139,0.2)' };

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <SectionHeader
        label="Stack técnico"
        title="Tecnologías y herramientas"
        description="Tecnologías con las que trabajo en proyectos reales, organizadas por área."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {techCategories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-metal rounded-2xl p-5"
          >
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">{cat.name}</h3>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((tech) => {
                const s = TECH_COLORS[tech] ?? DEFAULT_STYLE;
                return (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-lg font-medium transition-all hover:scale-105 hover:brightness-125"
                    style={{
                      color: s.color,
                      background: s.bg,
                      border: `1px solid ${s.border}`,
                    }}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
