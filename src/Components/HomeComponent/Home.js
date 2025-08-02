import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Ratnesh Ranve</h1>
        <h2 className="hero-subtitle">MERN Stack Developer & Computer Science Student</h2>
        <p className="hero-intro">
          I specialize in building full-stack web applications using MongoDB,
          Express, React, and Node.js. I help businesses and individuals bring
          their ideas to life with clean, responsive, and scalable code.
        </p>
        <a> <Link className="hero-cta" to = "/projects">See My Projects</Link></a>
        {/* Optional second button:
        <a href="mailto:youremail@example.com" className="hero-cta secondary">Hire Me</a>
        */}
      </div>
    </section>
  );
}

export default Home;
