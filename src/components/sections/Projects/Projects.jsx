import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiLock, FiExternalLink, FiGithub, FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "../../common/SectionHeading";
import TiltCard from "../../common/TiltCard";
import ProjectModal from "./ProjectModal";
import {
  clientProjects,
  otherClientProjects,
  personalProjects,
} from "../../../data/portfolioData";
import "./Projects.css";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

// Unique scroll motion for this section: cards flip up out of the page in
// 3D (rotateX) rather than a flat fade/slide, echoing the tilt-card theme.
const flipItem = {
  hidden: { opacity: 0, rotateX: -35, y: 50 },
  show: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

function FeaturedCard({ p, onOpen }) {
  return (
    <motion.div
      variants={flipItem}
      style={{ transformPerspective: 1200 }}
      whileTap={{ scale: 0.97 }}
    >
      <TiltCard
        className="project-card"
        max={8}
        onClick={() => onOpen(p)}
        role="button"
        tabIndex={0}
        data-cursor="hover"
        onKeyDown={(e) => e.key === "Enter" && onOpen(p)}
      >
        <div className="project-card-top">
          <div className="project-card-heading">
            <h3>{p.name}</h3>
            <p className="project-tagline">{p.tagline}</p>
          </div>
          <span className="project-badge">
            <FiLock /> {p.badge}
          </span>
        </div>

        <p className="project-desc">{p.description}</p>

        {p.stats?.length > 0 && (
          <div className="project-stats">
            {p.stats.map((s) => (
              <div key={s.label} className="project-stat">
                <span className="accent-text">{s.value}</span>
                <small>{s.label}</small>
              </div>
            ))}
          </div>
        )}

        <div className="project-tech">
          {p.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        {/* Hover affordance previewing the click-to-expand detail popup */}
        <div className="project-card-hint">
          <span>View Case Study</span>
          <FiArrowUpRight />
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const dragViewportRef = useRef(null);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="Selected Work"
          title="Live products I've built &amp; shipped"
        />

        <motion.div
          className="projects-featured"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
        >
          {clientProjects.map((p) => (
            <FeaturedCard key={p.id} p={p} onOpen={setSelected} />
          ))}
        </motion.div>

        {/* Side-scrolling gallery: unique horizontal drag/scroll motion,
            distinct from every grid-based reveal elsewhere on the page. */}
        <p className="projects-other-hint">More client work — drag sideways to explore →</p>
        <div className="projects-other-viewport" ref={dragViewportRef}>
          <motion.div
            className="projects-other"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            drag="x"
            dragConstraints={dragViewportRef}
            dragElastic={0.12}
          >
            {otherClientProjects.map((p) => (
              <motion.div
                variants={item}
                key={p.id}
                className="project-chip"
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.96 }}
              >
                <h4>{p.name}</h4>
                <p>{p.tagline}</p>
                <div className="project-tech project-tech--chip">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="projects-personal-head">
          <h3>Personal Projects</h3>
          <p>Built independently, outside of client work.</p>
        </div>

        <motion.div
          className="projects-personal"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          {personalProjects.map((p) => (
            <motion.div variants={item} key={p.id} whileTap={{ scale: 0.97 }}>
              <TiltCard className="project-card project-card--personal" max={8}>
                <div className="project-card-top">
                  <div className="project-card-heading">
                    <h3>{p.name}</h3>
                    <p className="project-tagline">{p.tagline}</p>
                  </div>
                </div>
                <p className="project-desc">{p.description}</p>
                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {p.links.map((l) => (
                    <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" data-cursor="hover">
                      {l.label.toLowerCase().includes("github") ? <FiGithub /> : <FiExternalLink />}
                      {l.label}
                    </a>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
