import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";
import SectionHeading from "../../common/SectionHeading";
import { experience, education } from "../../../data/portfolioData";
import "./Experience.css";

const dotVariants = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { duration: 0.35, ease: "backOut" } },
};
const cardVariants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  show: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.75, ease: [0.65, 0, 0.35, 1], delay: 0.12 },
  },
};

// Unique scroll motion for this section: each card "draws out" from its
// timeline dot via a clip-path wipe, rather than a plain fade/slide.
function TimelineItem({ icon, title, org, period, detail, points }) {
  return (
    <motion.div
      className="timeline-item"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.span className="timeline-dot" variants={dotVariants} whileHover={{ scale: 1.2 }}>
        {icon}
      </motion.span>
      <motion.div
        className="timeline-card glass"
        variants={cardVariants}
        whileHover={{ x: 6 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="timeline-card-head">
          <div>
            <h3>{title}</h3>
            <p className="timeline-org">{org}</p>
          </div>
          <span className="timeline-period">{period}</span>
        </div>
        {detail && <p className="timeline-detail">{detail}</p>}
        {points && (
          <ul className="timeline-points">
            {points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.3"],
  });
  const lineHeight = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionHeading index="02" eyebrow="Journey" title="Experience &amp; Education" />

        <div className="timeline" ref={ref}>
          <div className="timeline-track">
            <motion.div className="timeline-track-fill" style={{ scaleY: lineHeight }} />
          </div>

          <div className="timeline-group">
            <h3 className="timeline-group-title">Experience</h3>
            {experience.map((e) => (
              <TimelineItem
                key={e.id}
                icon={<FiBriefcase />}
                title={e.role}
                org={e.org}
                period={e.period}
                points={e.points}
              />
            ))}
          </div>

          <div className="timeline-group">
            <h3 className="timeline-group-title">Education</h3>
            {education.map((e) => (
              <TimelineItem
                key={e.id}
                icon={<FiBookOpen />}
                title={e.degree}
                org={e.school}
                period={e.period}
                detail={e.detail}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
