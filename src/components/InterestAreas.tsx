import { motion } from 'framer-motion';
import { Monitor, Settings, Building2, Wrench, Shield } from 'lucide-react';
import { interestAreas } from '../data/skills';
import SectionHeader from './SectionHeader';
import GlowCard from './GlowCard';

const iconMap: Record<string, React.ElementType> = {
  Monitor, Settings, Building2, Wrench, Shield,
};

export default function InterestAreas() {
  return (
    <section id="interests" className="py-12">
      <SectionHeader
        label="Intereses"
        title="Áreas de enfoque profesional"
        description="Sectores y dominios donde quiero aplicar y desarrollar mis habilidades técnicas."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {interestAreas.map((area, i) => {
          const Icon = iconMap[area.icon];
          return (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -2 }}
            >
              <GlowCard
                className="card-metal rounded-2xl p-5 h-full transition-all"
                glowColor={area.glowRgb ?? '148,163,184'}
              >
                <div className={`inline-flex p-2.5 rounded-xl border mb-4 ${area.color}`}>
                  <Icon size={18} />
                </div>
                <h3 className="text-slate-200 font-semibold text-sm mb-2">{area.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{area.description}</p>
              </GlowCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
