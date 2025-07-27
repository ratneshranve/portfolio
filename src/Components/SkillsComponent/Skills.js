import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-card">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-list">
          <div className="skill-item">C</div>
          <div className="skill-item">C++</div>
          <div className="skill-item">Java <span className="skill-note">(Basic)</span></div>
          <div className="skill-item">Python <span className="skill-note">(Basic)</span></div>
          <div className="skill-item">MERN Stack</div>
          <div className="skill-item">React.js</div>
          <div className="skill-item">Node.js</div>
          <div className="skill-item">MongoDB</div>
          <div className="skill-item">Express.js</div>
          <div className="skill-item">HTML / CSS</div>
          {/* Add more skills as needed */}
        </div>
      </div>
    </section>
  );
}

export default Skills;
