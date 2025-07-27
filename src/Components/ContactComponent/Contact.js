import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-text">
          Feel free to reach out for collaboration, questions, or connections!
        </p>
        <div className="contact-links">
          <a
            href="mailto:ratneshranve@gmail.com"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/ratnesh-ranve"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ratneshranve"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://x.com/RatneshR42111"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/_ratnez_"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="tel:+917000000000"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Phone
          </a>
          {/* Add or remove contacts as needed */}
        </div>
        {/* Optional: Add your location or response note below */}
        <div className="contact-extra">
          <p><b>Based in:</b> Indore, India</p>
          <p className="contact-remark"><em>Typically replies within 1-2 days.</em></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
