import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';
import { education } from '../data/experience';
import SectionHeader from './SectionHeader';

export default function Education() {
  return (
    <section id="education" className="py-12">
      <SectionHeader
        label="Formación"
        title="Base académica"
        description="Formación reglada y aprendizaje complementario orientado al desarrollo de software y sistemas técnicos."
      />

      <div className="space-y-5">
        {education.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm p-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl border border-blue-400/20 bg-blue-400/10 text-blue-400 shrink-0">
                <GraduationCap size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-white font-semibold text-sm leading-tight">{item.degree}</h3>
                    <p className="text-blue-400 text-xs font-medium mt-0.5">{item.institution}</p>
                  </div>
                  <span className="text-slate-500 text-xs font-mono">{item.period}</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed mt-3 mb-4">{item.description}</p>

                <div className="border-t border-white/8 pt-4">
                  <div className="flex items-center gap-1.5 mb-3">
                    <BookOpen size={12} className="text-slate-500" />
                    <span className="text-xs text-slate-500">Formación complementaria e intereses</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.extras.map((extra) => (
                      <span
                        key={extra}
                        className="text-[10px] font-mono text-slate-400 bg-white/5 border border-white/8 px-2.5 py-1 rounded-lg"
                      >
                        {extra}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
