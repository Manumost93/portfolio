import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import AnimatedBackground from './AnimatedBackground';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#060912] relative">
      <AnimatedBackground />

      <Sidebar />

      {/* Content area — offset for sidebar on desktop, top bar on mobile */}
      <main className="lg:ml-60 pt-16 lg:pt-0 relative z-10">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-8 lg:py-12">
          {children}
        </div>
      </main>
    </div>
  );
}
