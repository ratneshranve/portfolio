import './Nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="nav">
      {/* Hamburger Button */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      <div id="links" className={menuOpen ? 'open' : ''}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/resume" onClick={() => setMenuOpen(false)}>Resume</Link></li>
        </ul>
      </div>

      <div id="logo">
        <img
          id="image"
          src={`${process.env.PUBLIC_URL}/assets/images/logo1.png`}
          alt="logo"
        />
      </div>

      <div id="link" className={menuOpen ? 'open' : ''}>
        <ul className="nav-icon-list">
          <li>
            <Link to="/certificates" onClick={() => setMenuOpen(false)}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/certificates.png`}
                alt="Certificates"
                className="nav-icon"
              />
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={() => setMenuOpen(false)}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/skills.png`}
                alt="Skills"
                className="nav-icon"
              />
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/project.png`}
                alt="Projects"
                className="nav-icon"
              />
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/contact.png`}
                alt="Contact"
                className="nav-icon"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
