import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
      <div id="links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </div>

      <div id="logo">
        <img
          id="image"
          src={`${process.env.PUBLIC_URL}/assets/images/logo1.png`}
          alt="logo"
        />
      </div>

      <div id="link">
        <ul className="flex space-x-4">
          <li>
            <Link to="/skills">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/skills.png`}
                alt="Skills"
                style={{ maxWidth: '50px', maxHeight: '50px', width: 'auto', height: 'auto' }}
              />
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/project.png`}
                alt="Projects"
                className="w-8 h-8"
              />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/contact.png`}
                alt="Contact"
                className="w-8 h-8"
              />
            </Link>
          </li>
        </ul>
      </div>

      {/* Profile Photo */}
      <div className="nav-profile-photo">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/ratnesh.jpg`}
          alt="Ratnesh Ranve"
          className="profile-photo"
        />
      </div>
    </div>
  );
}

export default Nav;
