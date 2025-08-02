import React from "react";
import "./Project.css";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list">

        {/* Project 1: LifeSupport */}
        <div className="project-card">
          <img src={`${process.env.PUBLIC_URL}/assets/images/lifesupport.png`} alt="LifeSupport" className="project-image" />
          <div className="project-info">
            <h4 className="project-name">LifeSupport</h4>
            <span className="project-tech">MERN Stack</span>
            <p className="project-desc">
              A blood and organ donation platform connecting donors with recipients.
              Built with MongoDB, Express, React, and Node.js. Features secure authentication,
              real-time request management, and user-friendly UI.
            </p>
            <div className="project-links">
              <a
                className="project-link"
                href="https://github.com/ratneshranve/LifeSupport"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 2: Ghumophiro */}
        <div className="project-card">
          <img src={`${process.env.PUBLIC_URL}/assets/images/ghumophiro.png`} alt="Ghumophiro" className="project-image" />
          <div className="project-info">
            <h4 className="project-name">Ghumophiro</h4>
            <span className="project-tech">AI / Full Stack</span>
            <p className="project-desc">
              An AI-powered travel planner that helps users discover destinations, personalize
              itineraries, and organize trips based on preferences. Built with modern full-stack tools.
            </p>
            <div className="project-links">
              <a
                className="project-link"
                href="https://ghumophiro.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Ghumophiro
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
