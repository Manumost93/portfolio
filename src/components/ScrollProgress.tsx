import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent pointer-events-none">
      {/* Gradiente metálico: azul acero → plata → cromo */}
      <div
        className="h-full transition-all duration-75 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #334155 0%, #64748b 30%, #94a3b8 60%, #cbd5e1 85%, #e2e8f0 100%)',
        }}
      />
      {progress > 2 && (
        <div
          className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full -translate-x-1/2 shadow-lg"
          style={{
            left: `${progress}%`,
            background: 'radial-gradient(circle, #e2e8f0 0%, #94a3b8 60%, #475569 100%)',
            boxShadow: '0 0 8px rgba(148,163,184,0.8), 0 0 16px rgba(148,163,184,0.3)',
          }}
        />
      )}
    </div>
  );
}
