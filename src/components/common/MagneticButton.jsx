import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./MagneticButton.css";

const lerp = (a, b, n) => a + (b - a) * n;

export default function MagneticButton({
  as = "a",
  className = "",
  children,
  strength = 0.4,
  ...rest
}) {
  const ref = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef(null);
  const Comp = motion[as] || motion.a;

  useEffect(() => {
    const tick = () => {
      const el = ref.current;
      if (el) {
        current.current.x = lerp(current.current.x, target.current.x, 0.18);
        current.current.y = lerp(current.current.y, target.current.y, 0.18);
        el.style.transform = `translate(${current.current.x.toFixed(2)}px, ${current.current.y.toFixed(2)}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    target.current.x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    target.current.y = (e.clientY - (rect.top + rect.height / 2)) * strength;
  };

  const handleLeave = () => {
    target.current.x = 0;
    target.current.y = 0;
  };

  return (
    <Comp
      ref={ref}
      className={`magnetic-btn ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.94 }}
      {...rest}
    >
      <span>{children}</span>
    </Comp>
  );
}
