import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { profile } from '../data/profile';

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2.5, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <span className="absolute inset-0 rounded-full animate-ping opacity-30 bg-emerald-400" style={{ animationDuration: '2s' }} />
      <a
        href={profile.email}
        className="relative flex items-center justify-center gap-2 w-12 h-12 sm:w-auto sm:h-auto sm:px-5 sm:py-3 rounded-full text-sm font-semibold text-emerald-300 transition-all hover:scale-105 hover:text-emerald-200 active:scale-95"
        style={{
          background: 'rgba(4,8,14,0.92)',
          border: '1px solid rgba(52,211,153,0.45)',
          boxShadow: '0 0 24px rgba(52,211,153,0.18), 0 8px 32px rgba(0,0,0,0.5)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <Mail size={15} />
        <span className="hidden sm:inline">¿Hablamos?</span>
      </a>
    </motion.div>
  );
}
