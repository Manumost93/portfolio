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
      <div
        className="h-full transition-all duration-75 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #475569 0%, #94a3b8 25%, #cbd5e1 55%, #f1f5f9 80%, #ffffff 100%)',
          boxShadow: '0 0 8px rgba(203,213,225,0.7), 0 0 20px rgba(148,163,184,0.4)',
        }}
      />
      {progress > 2 && (
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full -translate-x-1/2"
          style={{
            left: `${progress}%`,
            background: 'radial-gradient(circle, #ffffff 0%, #cbd5e1 50%, #64748b 100%)',
            boxShadow: '0 0 10px rgba(203,213,225,1), 0 0 24px rgba(148,163,184,0.7), 0 0 40px rgba(148,163,184,0.3)',
          }}
        />
      )}
    </div>
  );
}
