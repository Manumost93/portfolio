import { motion } from 'framer-motion';
import { Mail, Download, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { profile } from '../data/profile';
import SectionHeader from './SectionHeader';

const links = [
  {
    label: 'Email',
    // TODO: sustituye profile.email con tu dirección real: mailto:tu@email.com
    href: profile.email,
    icon: Mail,
    color: 'hover:border-blue-500/40 hover:text-blue-400',
    description: 'Escríbeme directamente',
  },
  {
    label: 'LinkedIn',
    // TODO: sustituye profile.linkedin con tu URL real de LinkedIn
    href: profile.linkedin,
    icon: LinkedinIcon,
    color: 'hover:border-blue-600/40 hover:text-blue-500',
    description: 'Conecta conmigo',
    external: true,
  },
  {
    label: 'GitHub',
    // TODO: sustituye profile.github con tu URL real de GitHub
    href: profile.github,
    icon: GithubIcon,
    color: 'hover:border-slate-400/40 hover:text-slate-200',
    description: 'Revisa mi código',
    external: true,
  },
  {
    label: 'Descargar CV',
    // TODO: añade el PDF en /public/CV_Manuel_Honrado.pdf
    href: profile.cv,
    icon: Download,
    color: 'hover:border-emerald-500/40 hover:text-emerald-400',
    description: 'Currículum en PDF',
    download: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <SectionHeader
        label="Contacto"
        title="¿Hablamos?"
        description="Estoy disponible para oportunidades como desarrollador junior, frontend React, fullstack junior, soporte de aplicaciones, facility tech, BMS junior o posiciones donde pueda combinar software y experiencia técnica real."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card-metal rounded-2xl p-6 md:p-8 mb-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl border border-blue-400/20 bg-blue-400/10 text-blue-400">
            <MessageCircle size={18} />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Manuel Honrado Vega</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400">{profile.availabilityLabel}</span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {links.map(({ label, href, icon: Icon, color, description, external, download }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              {...(download ? { download: true } : {})}
              className={`flex items-center gap-3 p-4 rounded-xl text-slate-400 transition-all group ${color}`}
              style={{ background: 'rgba(12,14,20,0.6)', border: '1px solid rgba(100,116,139,0.18)' }}
            >
              <Icon size={16} className="shrink-0" />
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-200 group-hover:text-current transition">{label}</p>
                <p className="text-xs text-slate-500">{description}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
