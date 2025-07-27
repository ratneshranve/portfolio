import React from "react";
import "./Home.css";  // Import regular CSS

function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Ratnesh Ranve</h1>
        <h2 className="hero-subtitle">
          B.Tech Student &middot; Computer Science &amp; IT
        </h2>
        <p className="hero-intro">
         
          Explore my portfolio to learn more about my work, projects, and skills.
        </p>
        {/* Optional: <a href="#projects" className="hero-cta">See My Projects</a> */}
      </div>
    </section>
  );
}

export default Home;
