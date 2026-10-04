import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../../../data/portfolioData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} {profile.name}. Crafted with React &amp; a lot of coffee.
        </p>
        <div className="footer-socials">
          <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" data-cursor="hover">
            <FiGithub />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="hover">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} data-cursor="hover">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
}
