import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-card">
        <h2 className="resume-title">Resume</h2>
        <div className="resume-block">
          <h3 className="block-title">Education</h3>
          <ul className="edu-list">
            <li>
              <span className="edu-degree">B.Tech, Computer Science & IT</span>
              <br />
              <span className="edu-school">IPS Academy, Institute of Engineering & Science, Indore</span>
              <br />
              <span className="edu-year">2023 - 2027&nbsp; | &nbsp;Current: 3rd Year</span>
            </li>
            <li>
              <span className="edu-degree">Class XII – 89.6%</span>
              <br />
              <span className="edu-school">St. Stephens Convent School, Chhanera</span>
              <br />
              <span className="edu-year">2023</span>
            </li>
            <li>
              <span className="edu-degree">Class X – 92.4%</span>
              <br />
              <span className="edu-school">St. Stephens Convent School, Chhanera</span>
              <br />
              <span className="edu-year">2021</span>
            </li>
          </ul>
        </div>
       <div className="resume-block">
  <h3 className="block-title">Experience / Internship</h3>
  <ul className="exp-list">
    <li>
      <span className="exp-role">Intern</span>, Ypsilon IT Solutions Pvt. Ltd. <span className="exp-year">May - June 2025</span>
      <br />
      <span className="exp-desc">
        Worked as an intern in web development using the MERN Stack. Contributed to an assigned client project, demonstrating exceptional skills and dedication. Gained valuable experience and knowledge in real-world project development during the internship.
      </span>
    </li>
  </ul>
</div>

      </div>
    </section>
  );
}

export default Resume;
