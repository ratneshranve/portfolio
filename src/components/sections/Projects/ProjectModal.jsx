import { useEffect } from "react";
import { motion } from "framer-motion";
import { FiX, FiLock, FiCheck } from "react-icons/fi";
import "./ProjectModal.css";

const backdropVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const panelVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 28 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 26 },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 16,
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  },
};

const row = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

function initials(name) {
  const parts = name
    .trim()
    .split(/\s+/)
    .flatMap((w) => w.split(/(?=[A-Z])/))
    .filter(Boolean);
  let result = parts.map((p) => p[0]).join("").toUpperCase();
  if (result.length < 2) result = name.slice(0, 2).toUpperCase();
  return result.slice(0, 2);
}

export default function ProjectModal({ project: p, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="project-modal-backdrop"
      variants={backdropVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        className="project-modal"
        variants={panelVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="project-modal-close" onClick={onClose} data-cursor="hover" aria-label="Close">
          <FiX />
        </button>

        <motion.div
          className="project-modal-media"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <span className="project-modal-grid" aria-hidden="true" />
          <motion.span
            className="project-modal-monogram"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {initials(p.name)}
          </motion.span>
          <span className="project-modal-media-fade" />
        </motion.div>

        <div className="project-modal-body">
          <motion.div
            className="project-modal-head"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
          >
            <motion.span className="project-badge" variants={row} transition={{ duration: 0.4 }}>
              <FiLock /> {p.badge}
            </motion.span>
            <motion.h3 variants={row} transition={{ duration: 0.4 }}>
              {p.name}
            </motion.h3>
            <motion.p className="project-tagline" variants={row} transition={{ duration: 0.4 }}>
              {p.tagline}
            </motion.p>
            <motion.p className="project-modal-desc" variants={row} transition={{ duration: 0.4 }}>
              {p.description}
            </motion.p>
          </motion.div>

          {p.stats?.length > 0 && (
            <div className="project-stats project-modal-stats">
              {p.stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="project-stat"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.05 }}
                >
                  <span className="accent-text">{s.value}</span>
                  <small>{s.label}</small>
                </motion.div>
              ))}
            </div>
          )}

          {p.highlights?.length > 0 && (
            <div className="project-modal-highlights">
              <h4>Key Features</h4>
              <ul>
                {p.highlights.map((h, i) => (
                  <motion.li
                    key={h}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  >
                    <FiCheck /> {h}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          <motion.div
            className="project-tech"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            {p.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
