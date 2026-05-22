import { useEffect, useRef } from 'react';

const CHARS = '01アイウエオカキクサシ<>{}[]=+\\01234567ABCDEF';
const FONT  = 13;

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let cols: number[] = [];
    let rafId: number;
    let frame = 0;

    function resize() {
      if (!canvas) return;
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      const n = Math.floor(canvas.width / FONT);
      cols = Array.from({ length: n }, () =>
        Math.floor(Math.random() * -(canvas!.height / FONT)),
      );
    }

    resize();
    window.addEventListener('resize', resize);

    function draw() {
      if (!ctx || !canvas) return;
      frame++;

      // Only update every 4th frame for a slow, atmospheric drop
      if (frame % 4 === 0) {
        // Fade trail — match the background color
        ctx.fillStyle = 'rgba(8,10,13,0.065)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${FONT}px monospace`;

        cols.forEach((y, x) => {
          const ch  = CHARS[Math.floor(Math.random() * CHARS.length)];
          const px  = x * FONT;
          const py  = y * FONT;

          // Head character — slightly brighter
          const isHead = Math.random() > 0.92;
          ctx.fillStyle = isHead
            ? 'rgba(226,232,240,0.13)'
            : 'rgba(148,163,184,0.07)';
          ctx.fillText(ch, px, py);

          // Wrap column back to top randomly
          if (py > canvas.height && Math.random() > 0.978) {
            cols[x] = 0;
          } else {
            cols[x]++;
          }
        });
      }

      rafId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    />
  );
}
