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

      <div className="card-metal rounded-2xl p-6 md:p-8 space-y-6">
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
              <span className="text-xs font-mono text-slate-600">{skill.level}%</span>
            </div>
            {/* Track metálico */}
            <div className="h-1.5 rounded-full overflow-hidden" style={{
              background: 'rgba(20,24,32,0.9)',
              boxShadow: '0 1px 0 rgba(0,0,0,0.4) inset',
            }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.06 + 0.2, ease: 'easeOut' }}
                className="h-full rounded-full relative overflow-hidden"
                style={{
                  background: 'linear-gradient(90deg, #475569 0%, #94a3b8 40%, #e2e8f0 75%, #ffffff 100%)',
                  boxShadow: '0 0 10px rgba(203,213,225,0.6), 0 0 20px rgba(148,163,184,0.3)',
                }}
              >
                {/* Shimmer sweep */}
                <div className="absolute inset-0 shimmer" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
