import { motion } from 'framer-motion';
import { stats } from '../data/stats';

export default function Stats() {
  return (
    <section id="stats" className="py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -2 }}
              className="rounded-2xl border border-white/10 bg-white/4 backdrop-blur-sm p-5 transition hover:bg-white/7 hover:border-white/15"
            >
              <Icon size={20} className={`${stat.color} mb-3`} />
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-slate-500 text-xs leading-snug">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
