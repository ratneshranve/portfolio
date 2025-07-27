import React from "react";
import "./Project.css";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list">
        <div className="project-card">
          <h4 className="project-name">Lifesupport</h4>
          <span className="project-tech">MERN Stack</span>
          <p className="project-desc">
            A blood and organ donation web platform built with MongoDB, Express, React, and Node.js.<br />
            Connects donors with recipients, manages requests, and provides an intuitive, secure donation interface.
          </p>
        </div>
        <div className="project-card">
          <h4 className="project-name">Ghumophiro</h4>
          <span className="project-tech">AI / Full Stack</span>
          <p className="project-desc">
            An AI-powered travel planner that helps users discover destinations, organize trips, and personalize travel
            itineraries based on user preferences.
          </p>
          <a
            className="project-link"
            href="https://ghumophiro.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Ghumophiro
          </a>
        </div>
        {/* Add more projects in this pattern if needed */}
      </div>
    </section>
  );
}

export default Projects;
