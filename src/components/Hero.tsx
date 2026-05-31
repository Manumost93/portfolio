import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Mail, Download, ChevronRight } from 'lucide-react';
import { profile } from '../data/profile';
import { useTypewriter } from '../hooks/useTypewriter';

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>/\\|';

function useScramble(target: string, delay = 500) {
  const randomize = (t: string) =>
    t.split('').map(c => c === ' ' ? ' ' : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]).join('');
  const [display, setDisplay] = useState(() => randomize(target));
  const [done, setDone] = useState(false);

  useEffect(() => {
    let frame = 0;
    const TOTAL = 28;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        frame++;
        const revealed = Math.floor((frame / TOTAL) * target.length);
        setDisplay(
          target.split('').map((char, i) => {
            if (char === ' ') return ' ';
            if (i < revealed) return char;
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }).join('')
        );
        if (frame >= TOTAL) {
          clearInterval(interval);
          setDisplay(target);
          setDone(true);
        }
      }, 45);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, []);

  return { display, done };
}

const roles = [
  'React + TypeScript Developer',
  'Junior Fullstack Developer',
  'Facility Tech · BMS · Dashboards',
  '.NET · SQL · APIs REST',
  'Herramientas internas que resuelven problemas',
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

// ─── HeroOrb ──────────────────────────────────────────────────────────────────

function HeroOrb() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: globalThis.MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      setMouse({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #94a3b8 0%, #334155 50%, transparent 70%)',
          top: '5%',
          right: '-10%',
          transform: `translate(${mouse.x}px, ${mouse.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] rounded-full opacity-15 blur-2xl"
        style={{
          background: 'radial-gradient(circle, #cbd5e1 0%, transparent 70%)',
          bottom: '10%',
          left: '5%',
          transform: `translate(${-mouse.x * 0.5}px, ${-mouse.y * 0.5}px)`,
          transition: 'transform 0.4s ease-out',
        }}
      />
    </div>
  );
}

// ─── HackingTerminal ──────────────────────────────────────────────────────────

type LineType = 'normal' | 'error' | 'success' | 'data' | 'progress';

interface TermLine {
  text: string;
  type: LineType;
}

const BOOT_SEQUENCE: Array<{ delay: number; line: TermLine }> = [
  { delay: 500,  line: { text: 'Initializing system v2.4.1...', type: 'normal' } },
  { delay: 1100, line: { text: 'Checking auth_token...', type: 'normal' } },
  { delay: 1750, line: { text: '[ERR] Authentication failed — 401 Unauthorized', type: 'error' } },
  { delay: 2400, line: { text: 'Retrying connection...', type: 'progress' } },
  { delay: 3950, line: { text: '[OK] Access granted ✓', type: 'success' } },
  { delay: 4550, line: { text: 'Loading developer profile...', type: 'normal' } },
  { delay: 5300, line: { text: 'name     → Manuel Honrado Vega', type: 'data' } },
  { delay: 5900, line: { text: 'stack    → React · TS · .NET · SQL', type: 'data' } },
  { delay: 6500, line: { text: 'role     → Junior Fullstack Developer', type: 'data' } },
  { delay: 7100, line: { text: 'status   → available_for_opportunities ●', type: 'success' } },
];

function promptColor(type: LineType): string {
  if (type === 'error')   return '#dc2626';
  if (type === 'success') return '#059669';
  return '#475569';
}

function lineColor(type: LineType): string {
  if (type === 'error')   return '#f87171';
  if (type === 'success') return '#34d399';
  if (type === 'data')    return '#f1f5f9';
  return '#94a3b8';
}

function HackingTerminal() {
  const [lines, setLines] = useState<TermLine[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    BOOT_SEQUENCE.forEach(({ delay, line }, i) => {
      timers.push(setTimeout(() => {
        setLines(prev => [...prev, line]);
        if (i === BOOT_SEQUENCE.length - 1) {
          setTimeout(() => setDone(true), 800);
        }
      }, delay));
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="card-metal rounded-xl overflow-hidden">
      {/* title bar */}
      <div
        className="flex items-center gap-1.5 px-4 py-2.5"
        style={{ borderBottom: '1px solid rgba(100,116,139,0.18)', background: 'rgba(6,8,12,0.7)' }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
        <span className="ml-2 text-[10px] text-slate-500 font-mono tracking-wider">terminal — boot sequence</span>
      </div>

      {/* content */}
      <div className="p-4 space-y-2 min-h-[200px]">
        <AnimatePresence>
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="flex items-start gap-2"
            >
              {/* prompt */}
              <span
                className="font-mono text-xs select-none mt-0.5 shrink-0"
                style={{ color: promptColor(line.type) }}
              >
                {'>'}
              </span>

              {/* line content */}
              <div className="flex-1 font-mono text-xs">
                {line.type === 'data' ? (
                  /* key → value coloring */
                  (() => {
                    const [key, val] = line.text.split('→');
                    return (
                      <>
                        <span style={{ color: '#64748b' }}>{key}{'→'} </span>
                        <span style={{ color: '#f1f5f9' }}>{val?.trim()}</span>
                      </>
                    );
                  })()
                ) : (
                  <span style={{ color: lineColor(line.type) }}>{line.text}</span>
                )}

                {/* progress bar — only on 'progress' lines */}
                {line.type === 'progress' && (
                  <div
                    className="mt-1.5 h-1.5 rounded-full overflow-hidden"
                    style={{
                      background: 'rgba(15,18,26,0.9)',
                      border: '1px solid rgba(100,116,139,0.22)',
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="h-full rounded-full relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(90deg, #334155, #64748b, #cbd5e1)',
                        boxShadow: '0 0 8px rgba(148,163,184,0.6)',
                      }}
                    >
                      <div className="absolute inset-0 shimmer" />
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* blinking cursor — only while sequence is running */}
        {!done && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <span className="font-mono text-xs text-slate-700 select-none">{'>'}</span>
            <span className="w-1.5 h-3.5 bg-slate-500 animate-pulse rounded-sm" />
          </motion.div>
        )}
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  const typed = useTypewriter(roles, 70, 35, 2200);
  const { display: scrambledName, done: scrambleDone } = useScramble('Manuel Honrado Vega', 500);

  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center py-12">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
      {/* ── Left: all content ── */}
      <div className="flex-1 min-w-0">

      {/* Mobile avatar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center mb-8 lg:hidden"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full animate-pulse"
            style={{ background: 'radial-gradient(circle, rgba(148,163,184,0.2) 0%, transparent 70%)', transform: 'scale(1.15)' }} />
          <img
            src="/ImagenLikdn.png"
            alt="Manuel Honrado Vega"
            className="w-28 h-28 rounded-full object-cover object-top relative z-10"
            style={{ border: '2px solid rgba(148,163,184,0.3)', boxShadow: '0 0 24px rgba(148,163,184,0.15)' }}
          />
          <span className="absolute bottom-1 right-1 z-20 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#06070b]" />
        </div>
      </motion.div>

      {/* Availability badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-8 flex-wrap"
      >
        <span
          className="flex items-center gap-2.5 text-sm font-bold tracking-wide text-emerald-300 px-5 py-2.5 rounded-full"
          style={{
            border: '1px solid rgba(52,211,153,0.45)',
            background: 'rgba(52,211,153,0.08)',
            boxShadow: '0 0 24px rgba(52,211,153,0.15), 0 0 0 1px rgba(52,211,153,0.06)',
          }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
            <span className="relative w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </span>
          OPEN TO WORK
        </span>
        <span className="text-xs text-slate-500 font-mono hidden sm:block">{profile.availabilityLabel}</span>
      </motion.div>

      {/* Main heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p className="text-slate-400 text-base md:text-lg font-mono mb-2">Hola, soy</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5" style={{ color: '#e2e8f0' }}>
          {scrambleDone ? (
            <>
              Manuel{' '}
              <span className="text-metal">
                Honrado
              </span>{' '}
              Vega
            </>
          ) : (
            <>
              {scrambledName.split(' ').map((word, i) => (
                <span key={i} className="font-mono text-slate-300 inline-block mr-[0.25em]">{word}</span>
              ))}
            </>
          )}
        </h1>

        {/* Typewriter */}
        <div className="h-8 md:h-10 flex items-center mb-6">
          <span className="text-lg md:text-xl text-slate-300 font-mono">
            {typed}
            <span className="inline-block w-0.5 h-5 md:h-6 bg-slate-400 ml-0.5 align-middle animate-pulse" />
          </span>
        </div>
      </motion.div>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed mb-6 md:mb-10"
      >
        {profile.bio}
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap gap-3 mb-8 md:mb-14"
      >
        <button
          onClick={() => scrollTo('projects')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-slate-200 text-sm font-medium transition-all hover:text-white active:scale-95"
          style={{
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          Ver proyectos
          <ChevronRight size={14} />
        </button>

        <a
          href={profile.email}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-slate-400 hover:text-slate-200 text-sm font-medium transition-all active:scale-95"
          style={{ border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <Mail size={14} />
          Contactar conmigo
        </a>

        {profile.cvEnabled ? (
          <a
            href={profile.cv}
            download
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-slate-600 hover:text-slate-400 text-sm font-medium transition-all active:scale-95"
            style={{ border: '1px solid rgba(255,255,255,0.04)' }}
          >
            <Download size={14} />
            Descargar CV
          </a>
        ) : (
          <span
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-slate-700 text-sm font-medium cursor-not-allowed select-none"
            style={{ border: '1px solid rgba(255,255,255,0.03)' }}
          >
            <Download size={14} />
            Descargar CV
          </span>
        )}
      </motion.div>

      {/* Hacking Terminal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-xl"
      >
        <HackingTerminal />
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-12 flex items-center gap-2 text-slate-600 text-xs"
      >
        <ArrowDown size={13} className="animate-bounce" />
        <span>Desplázate para explorar</span>
      </motion.div>

      </div>{/* end left column */}

      {/* ── Right: desktop avatar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="hidden lg:flex flex-col items-center shrink-0"
      >
        <div className="relative">
          <img
            src="/ImagenLikdn.png"
            alt="Manuel Honrado Vega"
            className="w-52 h-52 rounded-full object-cover object-top"
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 0 48px rgba(0,0,0,0.6)',
            }}
          />
          <span className="absolute bottom-3 right-3 flex items-center justify-center w-5 h-5 rounded-full bg-[#06070b]"
            style={{ border: '1.5px solid rgba(52,211,153,0.4)' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </span>
        </div>
        {/* Name below photo */}
        <p className="mt-4 text-xs font-mono text-slate-500 tracking-widest uppercase">Manuel Honrado</p>
        <p className="text-[10px] font-mono text-slate-700 tracking-wider">Junior Fullstack Dev</p>
      </motion.div>

      </div>{/* end flex row */}
    </section>
  );
}
