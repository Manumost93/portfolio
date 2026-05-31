import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, ExternalLink, FileText } from 'lucide-react';
import { education, certifications, supplementaryCourses } from '../data/experience';
import SectionHeader from './SectionHeader';

export default function Education() {
  return (
    <section id="education" className="py-12">
      <SectionHeader
        label="Formación"
        title="Base académica"
        description="Formación reglada, certificaciones y aprendizaje complementario orientado al desarrollo de software y sistemas técnicos."
      />

      {/* Degree */}
      <div className="space-y-5 mb-10">
        {education.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-metal rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl border border-blue-400/20 bg-blue-400/10 shrink-0 flex items-center justify-center overflow-hidden">
                {item.logo ? (
                  <img src={item.logo} alt={item.institution} className="w-full h-full object-contain p-1" />
                ) : (
                  <GraduationCap size={18} className="text-blue-400" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="text-slate-200 font-semibold text-sm leading-tight">{item.degree}</h3>
                    <p className="text-slate-400 text-xs font-medium mt-0.5">{item.institution}</p>
                  </div>
                  <span className="text-slate-500 text-xs font-mono">{item.period}</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed mt-3 mb-4">{item.description}</p>

                <div className="pt-4" style={{ borderTop: '1px solid rgba(100,116,139,0.15)' }}>
                  <div className="flex items-center gap-1.5 mb-3">
                    <BookOpen size={12} className="text-slate-500" />
                    <span className="text-xs text-slate-500">Formación complementaria e intereses</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.extras.map((extra) => (
                      <span
                        key={extra}
                        className="text-[10px] font-mono text-slate-500 px-2.5 py-1 rounded-lg"
                        style={{ background: 'rgba(20,24,32,0.8)', border: '1px solid rgba(100,116,139,0.15)' }}
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

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-5">
          <Award size={14} className="text-amber-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">Certificaciones y bootcamps</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => {
            const CardWrapper = cert.url ? 'a' : 'div';
            const wrapperProps = cert.url
              ? { href: cert.url, target: '_blank', rel: 'noopener noreferrer' }
              : {};
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -2 }}
              >
                <CardWrapper
                  {...wrapperProps}
                  className={`card-metal rounded-2xl p-5 transition-all block h-full relative overflow-hidden ${cert.url ? 'hover:border-slate-400/50 cursor-pointer group' : 'hover:border-slate-500/40'}`}
                >
                  {/* Left color accent bar */}
                  <div className={`absolute left-0 top-4 bottom-4 w-0.5 rounded-r-full ${cert.color.split(' ')[2].replace('border-', 'bg-')}`}
                    style={{ opacity: 0.6 }} />

                  <div className="flex items-start gap-4 pl-3">
                    {/* Logo */}
                    <div className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border ${cert.color}`}
                      style={{ background: 'rgba(10,13,20,0.8)' }}>
                      {cert.logo ? (
                        <img
                          src={cert.logo}
                          alt={cert.issuer}
                          className="w-7 h-7 object-contain"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                      ) : (
                        <Award size={16} className={cert.color.split(' ')[0]} />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-slate-200 font-semibold text-sm leading-snug">{cert.name}</h3>
                        <span className="text-slate-600 text-[10px] font-mono shrink-0">{cert.period}</span>
                      </div>
                      <p className="text-slate-400 text-xs mb-3">{cert.issuer}</p>

                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center gap-1 text-[10px] font-mono border px-2 py-0.5 rounded-full ${cert.color}`}>
                          <Award size={8} />
                          Certificado
                        </span>
                        {cert.url && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                            <span className="w-1 h-1 rounded-full bg-emerald-400" />
                            Verificado
                          </span>
                        )}
                        {cert.url && (
                          <span className="ml-auto flex items-center gap-1 text-[10px] text-slate-600 group-hover:text-slate-300 transition-colors">
                            Ver certificado <ExternalLink size={9} />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Formación complementaria */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6"
      >
        <p className="text-[10px] font-mono uppercase tracking-widest text-slate-600 mb-3">
          Formación complementaria
        </p>
        <div className="flex flex-wrap gap-2">
          {supplementaryCourses.map((course) => (
            <a
              key={course.name}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] text-slate-500 hover:text-slate-300 transition-all group"
              style={{ background: 'rgba(15,18,26,0.7)', border: '1px solid rgba(100,116,139,0.15)' }}
            >
              <FileText size={10} className="shrink-0 group-hover:text-slate-400 transition-colors" />
              <span>{course.name}</span>
              <span className="text-slate-700 group-hover:text-slate-500 transition-colors">· {course.issuer}</span>
              <ExternalLink size={8} className="ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
