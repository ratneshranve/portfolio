import { motion } from "framer-motion";
import "./SectionHeading.css";

const eyebrowVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const titleVariants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] } },
};

export default function SectionHeading({ index, eyebrow, title, align = "left" }) {
  return (
    <motion.div
      className={`section-heading section-heading--${align}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
    >
      <motion.div className="section-eyebrow-row" variants={eyebrowVariants}>
        {index && <span className="section-index">{index}</span>}
        {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      </motion.div>

      <div className="section-title-mask">
        <motion.h2 className="section-title" variants={titleVariants}>
          {title}
        </motion.h2>
      </div>
    </motion.div>
  );
}
