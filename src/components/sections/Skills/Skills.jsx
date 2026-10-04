import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../../common/SectionHeading";
import TiltCard from "../../common/TiltCard";
import { skillGroups, marqueeSkills } from "../../../data/portfolioData";
import "./Skills.css";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
// Unique scroll motion for this section: cards pop in with a slight
// overshoot scale instead of the slide/fade used elsewhere.
const item = {
  hidden: { opacity: 0, scale: 0.75 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: "backOut" },
  },
};

export default function Skills() {
  const sectionRef = useRef(null);
  const loopSkills = [...marqueeSkills, ...marqueeSkills];

  // Scroll-scrubbed 3D: the grid rises out of the floor and levels off,
  // continuously tied to scroll so it plays in reverse on the way back up.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.35"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const gridY = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <div className="container">
        <SectionHeading index="03" eyebrow="What I Work With" title="Skills &amp; Tech Stack" />

        <motion.div
          className="skills-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          style={{ rotateX, y: gridY, transformPerspective: 1400 }}
        >
          {skillGroups.map((g) => (
            <motion.div variants={item} key={g.category} whileTap={{ scale: 0.95 }}>
              <TiltCard className="skills-card" max={6}>
                <h3 className="skills-card-title">{g.category}</h3>
                <div className="skills-pills">
                  {g.skills.map((s) => (
                    <span className="skill-pill" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="skills-marquee">
        <div className="skills-marquee-track">
          {loopSkills.map((s, i) => (
            <span key={i} className="skills-marquee-item">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
