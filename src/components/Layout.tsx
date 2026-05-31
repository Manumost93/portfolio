import { type ReactNode, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import ScrollProgress from './ScrollProgress';
import MagneticCursor from './MagneticCursor';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let raf: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    const STRENGTH = 14;
    const EASE = 0.055;

    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth  - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      targetX = -nx * STRENGTH;
      targetY = -ny * STRENGTH;
    };

    const tick = () => {
      currentX += (targetX - currentX) * EASE;
      currentY += (targetY - currentY) * EASE;
      if (bgRef.current) {
        bgRef.current.style.transform =
          `translate(${currentX}px, ${currentY}px) scale(1.06)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="min-h-screen relative" style={{ background: '#06070b' }}>
      {/* Baroque background with mouse parallax */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-[-6%] will-change-transform"
          style={{
            backgroundImage: "url('/bg-baroque.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none" style={{
        background: 'rgba(6,7,11,0.83)',
      }} />

      <MagneticCursor />
      <ScrollProgress />
      <Sidebar />
      <main className="lg:ml-60 pt-16 lg:pt-0 relative z-10">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-8 lg:py-12">
          {children}
        </div>
      </main>
    </div>
  );
}
