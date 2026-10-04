import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiMail } from "react-icons/fi";
import MagneticButton from "../../common/MagneticButton";
import { Hero3DField } from "./Hero3D";
import useTilt from "../../../hooks/useTilt";
import { profile } from "../../../data/portfolioData";
import "./Hero.css";

function useTypewriter(words, { typeSpeed = 65, deleteSpeed = 38, pause = 1300 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, deleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);
  const sectionRef = useRef(null);
  const scrollRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => scrollYProgress.on("change", (v) => (scrollRef.current = v)), [scrollYProgress]);

  const bgTextY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const photoRotateY = useTransform(scrollYProgress, [0, 1], [0, 16]);
  const photoRotateX = useTransform(scrollYProgress, [0, 1], [0, -6]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -36]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const tilt = useTilt({ max: 12, scale: 1.02 });

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <div className="hero3d-field-wrap">
        <Hero3DField scrollRef={scrollRef} />
      </div>

      <motion.span className="hero-bg-text" style={{ y: bgTextY }} aria-hidden="true">
        DEVELOPER
      </motion.span>

      <div className="container hero-grid">
        <motion.div className="hero-copy" style={{ y: copyY, opacity: copyOpacity }}>
          <motion.span
            className="hero-greeting"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="hero-dot" /> Available for Internships &amp; Freelance
          </motion.span>

          <h1 className="hero-name">
            <span className="hero-name-line-mask">
              <motion.span
                className="hero-name-line"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1], delay: 0.15 }}
              >
                Hi, I'm
              </motion.span>
            </span>
            <span className="hero-name-line-mask">
              <motion.span
                className="hero-name-line accent-text"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1], delay: 0.26 }}
              >
                {profile.name}
              </motion.span>
            </span>
          </h1>

          <h2 className="hero-role">
            {typed}
            <span className="hero-caret">_</span>
          </h2>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <MagneticButton
              as="a"
              className="magnetic-btn--primary"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              data-cursor="hover"
            >
              View Projects <FiArrowUpRight />
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              data-cursor="hover"
            >
              <FiMail /> Let's Talk
            </MagneticButton>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {profile.stats.map((s) => (
              <div className="hero-stat" key={s.label}>
                <span className="hero-stat-value accent-text">
                  {s.value}
                  {s.suffix}
                </span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-photo-wrap"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ y: photoY, scale: photoScale, rotateY: photoRotateY, rotateX: photoRotateX }}
        >
          <div
            className="hero-photo-frame"
            ref={tilt.ref}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
          >
            <div className="hero-photo-inner">
              <img src={profile.photo} alt={profile.name} />
              <span className="hero-photo-glare" />
            </div>

            <motion.div
              className="hero-badge hero-badge--top"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="accent-text">MERN</span>
              <small>Stack</small>
            </motion.div>

            <motion.div
              className="hero-badge hero-badge--bottom"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <small>Interning @</small>
              <span className="accent-text">Appzeto</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero-scroll-cue"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        data-cursor="hover"
      >
        <FiArrowDown /> Scroll
      </motion.a>
    </section>
  );
}
