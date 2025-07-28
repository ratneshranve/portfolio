import React, { useState } from "react";
import "./Certificates.css";

const certificateData = [
  {
    img: `${process.env.PUBLIC_URL}/assets/images/internship.jpg`,
    alt: "Internship Certificate at Ypsilon IT Solutions",
    name: "Internship - MERN Stack Development",
    org: "- Ypsilon IT Solutions · 2025"
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/images/java.png`,
    alt: "Java Certificate from IIT Bombay",
    name: "Java Training",
    org: "- IIT Bombay · 2024"
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/images/python.png`,
    alt: "Python Certificate from IIT Bombay",
    name: "Python 3.4.3 Training",
    org: "- IIT Bombay · 2025"
  }
];

function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    
    <section id="certificates" className="certificates-section">
      
      <div className="certificates-card">
        <h2 className="certificates-title">Certificates</h2>
        <ul className="certificates-list">
          {certificateData.map((cert, idx) => (
            <li className="certificate-item" key={idx}>
              <img
                src={cert.img}
                alt={cert.alt}
                className="certificate-img"
                onClick={() => setSelected(cert.img)}
                style={{ cursor: "pointer" }}
              />
              <div>
                <span className="certificate-name">{cert.name}</span>
                <span className="certificate-org">{cert.org}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* LIGHTBOX OVERLAY */}
      {selected && (
        <div className="certificate-lightbox" onClick={() => setSelected(null)}>
          <div className="certificate-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selected} alt="Certificate" />
            <button className="lightbox-close" onClick={() => setSelected(null)}>×</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
