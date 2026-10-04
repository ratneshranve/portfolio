import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiAward, FiBookOpen, FiMapPin, FiCode } from "react-icons/fi";
import SectionHeading from "../../common/SectionHeading";
import TiltCard from "../../common/TiltCard";
import { profile } from "../../../data/portfolioData";
import "./About.css";

const facts = [
  { icon: <FiBookOpen />, label: "B.Tech (IT)", value: "3rd Year · IPS Academy" },
  { icon: <FiAward />, label: "CGPA", value: "9.1 / 10" },
  { icon: <FiCode />, label: "Focus", value: "MERN Stack Development" },
  { icon: <FiMapPin />, label: "Based In", value: profile.location },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, x: 50, rotate: 3 },
  show: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  const sectionRef = useRef(null);

  // Scroll-scrubbed 3D tilt: the whole grid continuously rotates in/out of
  // the page as you scroll through the section, and reverses cleanly when
  // scrolling back up (not a one-shot viewport trigger).
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.3"],
  });
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);
  const gridScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.94]);

  return (
    <section id="about" className="section about" ref={sectionRef}>
      <div className="container">
        <SectionHeading index="01" eyebrow="About Me" title="The developer behind the code" />

        {/* Unique scroll motion for this section: copy and facts converge from
            opposite sides while the whole grid tilts in 3D, scrubbed directly
            to scroll position (so it plays forward and backward). */}
        <motion.div
          className="about-grid"
          style={{ rotateY, scale: gridScale, transformPerspective: 1400 }}
        >
          <motion.p
            className="about-text"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            {profile.summary}
          </motion.p>

          <motion.div
            className="about-facts"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {facts.map((f) => (
              <motion.div variants={item} key={f.label} whileTap={{ scale: 0.95 }}>
                <TiltCard className="about-fact" max={8}>
                  <div className="about-fact-icon">{f.icon}</div>
                  <div>
                    <p className="about-fact-label">{f.label}</p>
                    <p className="about-fact-value">{f.value}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
