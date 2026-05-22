import { useRef, useState, type ReactNode, type MouseEvent } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowCard({ children, className = '', glowColor = '59,130,246' }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden ${className}`}
      style={{
        background: hovered
          ? `radial-gradient(280px circle at ${pos.x}px ${pos.y}px, rgba(${glowColor},0.10), transparent 70%)`
          : undefined,
      }}
    >
      {/* Border glow on hover */}
      {hovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            background: `radial-gradient(180px circle at ${pos.x}px ${pos.y}px, rgba(${glowColor},0.18), transparent 60%)`,
            zIndex: 0,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
