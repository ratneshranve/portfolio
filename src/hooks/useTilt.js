import { useEffect, useRef } from "react";

const lerp = (a, b, n) => a + (b - a) * n;

// Pointer-tracked 3D tilt, smoothed with a rAF lerp loop instead of snapping
// directly to the pointer — this is what makes the motion read as premium
// rather than janky. Exposes CSS custom properties so each consumer styles
// its own glare/shadow off the same values.
export default function useTilt({ max = 14, scale = 1.04, ease = 0.12 } = {}) {
  const ref = useRef(null);
  const target = useRef({ rx: 0, ry: 0, gx: 50, gy: 50, s: 1, o: 0 });
  const current = useRef({ rx: 0, ry: 0, gx: 50, gy: 50, s: 1, o: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const tick = () => {
      const el = ref.current;
      const c = current.current;
      const t = target.current;
      if (el) {
        c.rx = lerp(c.rx, t.rx, ease);
        c.ry = lerp(c.ry, t.ry, ease);
        c.gx = lerp(c.gx, t.gx, ease);
        c.gy = lerp(c.gy, t.gy, ease);
        c.s = lerp(c.s, t.s, ease);
        c.o = lerp(c.o, t.o, ease);

        el.style.setProperty("--rx", `${c.rx.toFixed(2)}deg`);
        el.style.setProperty("--ry", `${c.ry.toFixed(2)}deg`);
        el.style.setProperty("--scale", c.s.toFixed(3));
        el.style.setProperty("--glare-x", `${c.gx.toFixed(1)}%`);
        el.style.setProperty("--glare-y", `${c.gy.toFixed(1)}%`);
        el.style.setProperty("--glare-o", c.o.toFixed(2));
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [ease]);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    target.current.ry = (px - 0.5) * max * 2;
    target.current.rx = (0.5 - py) * max * 2;
    target.current.s = scale;
    target.current.gx = px * 100;
    target.current.gy = py * 100;
    target.current.o = 1;
  };

  const onMouseLeave = () => {
    target.current.rx = 0;
    target.current.ry = 0;
    target.current.s = 1;
    target.current.o = 0;
  };

  return { ref, onMouseMove, onMouseLeave };
}
