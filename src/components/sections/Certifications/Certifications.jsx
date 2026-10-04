import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FiX, FiAward, FiZoomIn } from "react-icons/fi";
import SectionHeading from "../../common/SectionHeading";
import TiltCard from "../../common/TiltCard";
import { certifications, certificationChips, achievements } from "../../../data/portfolioData";
import "./Certifications.css";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
// Unique scroll motion for this section: cards rise up through a clip-path
// wipe (bottom to top), distinct from the fade/pop/flip used elsewhere.
const item = {
  hidden: { opacity: 0, clipPath: "inset(100% 0 0 0)", y: 16 },
  show: {
    opacity: 1,
    clipPath: "inset(0% 0 0 0)",
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};
const listItem = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export default function Certifications() {
  const [selected, setSelected] = useState(null);
  const sectionRef = useRef(null);

  // Scroll-scrubbed 3D: the grid shears into alignment as you scroll,
  // reversing smoothly when you scroll back up past the section.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.4"],
  });
  const skewY = useTransform(scrollYProgress, [0, 1], [4, 0]);
  const gridX = useTransform(scrollYProgress, [0, 1], [-40, 0]);

  return (
    <section id="certifications" className="section certifications" ref={sectionRef}>
      <div className="container">
        <SectionHeading index="05" eyebrow="Proof of Work" title="Certifications &amp; Achievements" />

        <motion.div
          className="cert-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          style={{ skewY, x: gridX }}
        >
          {certifications.map((c) => (
            <motion.div variants={item} key={c.id} whileTap={{ scale: 0.96 }}>
              <TiltCard className="cert-card" max={8}>
                <div
                  className="cert-image-wrap"
                  onClick={() => setSelected(c)}
                  data-cursor="hover"
                >
                  <img src={c.image} alt={c.name} />
                  <span className="cert-zoom">
                    <FiZoomIn />
                  </span>
                </div>
                <div className="cert-card-body">
                  <h4>{c.name}</h4>
                  <p>{c.org}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}

          {certificationChips.map((c, i) => (
            <motion.div variants={item} key={i} whileTap={{ scale: 0.96 }}>
              <TiltCard className="cert-card cert-card--chip" max={8}>
                <motion.div className="cert-chip-icon" whileHover={{ rotate: 12, scale: 1.1 }}>
                  <FiAward />
                </motion.div>
                <p className="cert-chip-text">{c}</p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="achievements-block">
          <h3>Achievements &amp; Participation</h3>
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {achievements.map((a, i) => (
              <motion.li variants={listItem} key={i}>
                {a}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="cert-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="cert-lightbox-content"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selected.image} alt={selected.name} />
              <button className="cert-lightbox-close" onClick={() => setSelected(null)}>
                <FiX />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
