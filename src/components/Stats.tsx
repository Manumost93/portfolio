import { motion } from 'framer-motion';
import { stats } from '../data/stats';
import { useCounter } from '../hooks/useCounter';
import GlowCard from './GlowCard';

interface StatCardProps {
  value: string;
  label: string;
  icon: React.ElementType;
  color: string;
  index: number;
}

function parseStatValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseInt(match[1]), suffix: match[2] };
}

function StatCard({ value, label, icon: Icon, color, index }: StatCardProps) {
  const { num, suffix } = parseStatValue(value);
  const { count, ref } = useCounter(num, 1600);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <GlowCard className="card-metal rounded-2xl p-5 hover:border-slate-500/40 transition-all cursor-default h-full" glowColor="148,163,184">
        <Icon size={20} className={`${color} mb-3`} />
        <p className="text-2xl md:text-3xl font-bold mb-1 tabular-nums" style={{ color: '#cbd5e1' }}>
          {count}{suffix}
        </p>
        <p className="text-slate-500 text-xs leading-snug">{label}</p>
      </GlowCard>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} index={i} />
        ))}
      </div>
    </section>
  );
}
