import { useEffect, useRef, useState } from 'react';

export default function MagneticCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse   = useRef({ x: -200, y: -200 });
  const ring    = useRef({ x: -200, y: -200 });
  const rafRef  = useRef<number | null>(null);
  const [hovered,  setHovered]  = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible,  setVisible]  = useState<boolean>(false);

  useEffect(() => {
    // Only show on fine-pointer (mouse) devices
    if (!window.matchMedia('(pointer: fine)').matches) return;

    document.body.style.cursor = 'none';

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top  = `${e.clientY}px`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest('a, button, [data-hover]');
      if (t) setHovered(true);
    };
    const onOut = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest('a, button, [data-hover]');
      if (t) setHovered(false);
    };
    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    // Lagged ring via RAF lerp
    function animate() {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top  = `${ring.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove',  onMove);
    window.addEventListener('mouseover',  onOver);
    window.addEventListener('mouseout',   onOut);
    window.addEventListener('mousedown',  onDown);
    window.addEventListener('mouseup',    onUp);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove',  onMove);
      window.removeEventListener('mouseover',  onOver);
      window.removeEventListener('mouseout',   onOut);
      window.removeEventListener('mousedown',  onDown);
      window.removeEventListener('mouseup',    onUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!visible) return null;

  const dotSize   = clicking ? 4  : 7;
  const ringSize  = hovered  ? 56 : 34;
  const ringAlpha = hovered  ? 0.55 : 0.28;

  return (
    <>
      {/* Inner dot — snaps instantly */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          width:     `${dotSize}px`,
          height:    `${dotSize}px`,
          borderRadius: '50%',
          transform: 'translate(-50%,-50%)',
          background: hovered
            ? 'rgba(241,245,249,0.95)'
            : 'rgba(203,213,225,0.85)',
          boxShadow: hovered
            ? '0 0 14px rgba(203,213,225,1), 0 0 28px rgba(148,163,184,0.6)'
            : '0 0 7px rgba(148,163,184,0.6)',
          transition: 'width 0.12s, height 0.12s, background 0.2s, box-shadow 0.2s',
          willChange: 'left, top',
        }}
      />

      {/* Outer ring — follows with lag */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998]"
        style={{
          width:     `${ringSize}px`,
          height:    `${ringSize}px`,
          borderRadius: '50%',
          transform: 'translate(-50%,-50%)',
          border: `1px solid rgba(148,163,184,${ringAlpha})`,
          background: hovered ? 'rgba(148,163,184,0.06)' : 'transparent',
          boxShadow: hovered
            ? '0 0 24px rgba(148,163,184,0.25), inset 0 0 12px rgba(148,163,184,0.08)'
            : 'none',
          transition: 'width 0.35s ease, height 0.35s ease, border-color 0.3s, background 0.3s, box-shadow 0.3s',
          willChange: 'left, top',
        }}
      />
    </>
  );
}
