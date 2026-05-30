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
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent pointer-events-none">
      <div
        className="h-full transition-all duration-75 ease-out relative overflow-hidden"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #334155 0%, #64748b 20%, #cbd5e1 55%, #f8fafc 80%, #ffffff 100%)',
          boxShadow: '0 0 10px rgba(203,213,225,0.9), 0 0 28px rgba(148,163,184,0.55), 0 0 2px rgba(255,255,255,0.6)',
        }}
      >
        <div className="absolute inset-0 chrome-sweep" />
      </div>
      {progress > 2 && (
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full -translate-x-1/2"
          style={{
            left: `${progress}%`,
            background: 'radial-gradient(circle, #ffffff 0%, #e2e8f0 40%, #94a3b8 80%)',
            boxShadow: '0 0 12px rgba(255,255,255,0.9), 0 0 28px rgba(203,213,225,0.8), 0 0 48px rgba(148,163,184,0.4)',
          }}
        />
      )}
    </div>
  );
}
