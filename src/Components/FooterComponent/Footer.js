import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Ratnesh Ranve. All rights reserved.
        </p>
        {/* Optionally add icons/links below */}
        
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/ratnesh-ranve/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:ratneshranve@gmail.com">Email</a>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
