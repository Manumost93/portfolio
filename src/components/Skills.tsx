import { motion } from 'framer-motion';
import { techCategories } from '../data/skills';
import SectionHeader from './SectionHeader';

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
              {cat.items.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-slate-400 px-2.5 py-1 rounded-lg transition hover:text-slate-200"
                  style={{
                    background: 'rgba(20,24,32,0.8)',
                    border: '1px solid rgba(100,116,139,0.2)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
