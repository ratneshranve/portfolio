import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiCopy,
  FiCheck,
} from "react-icons/fi";
import SectionHeading from "../../common/SectionHeading";
import MagneticButton from "../../common/MagneticButton";
import { profile } from "../../../data/portfolioData";
import "./Contact.css";

const socialLinks = [
  { icon: <FiGithub />, label: "GitHub", url: profile.socials.github },
  { icon: <FiLinkedin />, label: "LinkedIn", url: profile.socials.linkedin },
  { icon: <FiTwitter />, label: "Twitter", url: profile.socials.twitter },
  { icon: <FiInstagram />, label: "Instagram", url: profile.socials.instagram },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.95", "start 0.45"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [14, 0]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — ignore, link below still works
    }
  };

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      <div className="container">
        <SectionHeading index="06" eyebrow="Get In Touch" title="Let's build something great" />

        {/* Unique scroll motion for this section: the panel settles out of a
            3D tilt and zooms in from a blur as a closing "final CTA" moment,
            scrubbed continuously to scroll position. */}
        <motion.div
          className="contact-panel glass"
          initial={{ opacity: 0, scale: 0.88, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ rotateX, transformPerspective: 1200 }}
        >
          <p className="contact-intro">
            I'm open to internship and freelance opportunities. Whether you have a project in
            mind or just want to say hi, my inbox is always open.
          </p>

          <div className="contact-rows">
            <motion.button
              className="contact-row"
              onClick={copyEmail}
              data-cursor="hover"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiMail />
              <span>{profile.email}</span>
              {copied ? <FiCheck className="contact-copied" /> : <FiCopy className="contact-copy" />}
            </motion.button>
            <motion.a
              className="contact-row"
              href={`tel:${profile.phone}`}
              data-cursor="hover"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiPhone />
              <span>{profile.phone}</span>
            </motion.a>
            <div className="contact-row contact-row--static">
              <FiMapPin />
              <span>{profile.location}</span>
            </div>
          </div>

          <div className="contact-actions">
            <MagneticButton
              as="a"
              className="magnetic-btn--primary"
              href={`mailto:${profile.email}`}
              data-cursor="hover"
            >
              <FiMail /> Say Hello
            </MagneticButton>
          </div>

          <div className="contact-socials">
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social"
                aria-label={s.label}
                data-cursor="hover"
                whileTap={{ scale: 0.9 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
