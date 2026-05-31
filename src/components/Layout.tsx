import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import ScrollProgress from './ScrollProgress';
import MagneticCursor from './MagneticCursor';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen relative" style={{ background: '#06070b' }}>
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
