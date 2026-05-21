import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, ChevronRight } from 'lucide-react';
import { experience } from '../data/experience';
import SectionHeader from './SectionHeader';

const typeConfig = {
  work: { icon: Briefcase, color: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
  internship: { icon: GraduationCap, color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
  personal: { icon: Code2, color: 'text-amber-400 bg-amber-400/10 border-amber-400/20' },
};

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <SectionHeader
        label="Experiencia"
        title="Trayectoria técnica"
        description="Combinación de experiencia laboral real en entornos técnicos y desarrollo activo de software."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-white/10 to-transparent hidden md:block" />

        <div className="space-y-5">
          {experience.map((item, i) => {
            const { icon: Icon, color } = typeConfig[item.type];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="md:pl-16 relative"
              >
                {/* Icon bubble */}
                <div className={`hidden md:flex absolute left-0 top-5 w-10 h-10 rounded-xl border items-center justify-center ${color}`}>
                  <Icon size={16} />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm p-5 hover:bg-white/6 transition">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <div>
                      <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                      {item.company && (
                        <p className="text-blue-400 text-xs font-medium mt-0.5">{item.company}</p>
                      )}
                    </div>
                    <span className="text-slate-500 text-xs font-mono whitespace-nowrap">{item.period}</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">{item.description}</p>
                  <div className="grid sm:grid-cols-2 gap-1">
                    {item.highlights.map((h, j) => (
                      <div key={j} className="flex items-start gap-1.5 text-xs text-slate-500">
                        <ChevronRight size={11} className="text-blue-500 mt-0.5 shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
