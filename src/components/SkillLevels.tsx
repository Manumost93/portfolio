import { motion } from 'framer-motion';
import { skillLevels } from '../data/skills';
import SectionHeader from './SectionHeader';

export default function SkillLevels() {
  return (
    <section className="py-12">
      <SectionHeader
        label="Nivel"
        title="Dominio por área"
        description="Evaluación honesta de mis habilidades actuales. Junior con bases sólidas y aprendizaje constante."
      />

      <div className="rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm p-6 md:p-8 space-y-6">
        {skillLevels.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-slate-300">{skill.name}</span>
              <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.06 + 0.2, ease: 'easeOut' }}
                className={`h-full rounded-full ${skill.color}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
