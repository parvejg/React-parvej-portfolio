import { BsFillPersonFill, BsEnvelopeFill, BsHouseFill, BsCardChecklist } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import './navbar.css';

export function Navbar() {
  const collapseRef = useRef(null);

  const closeMenu = () => {
    if (window.innerWidth < 992 && collapseRef.current) {
      collapseRef.current.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

      <Link className="navbar-brand" to="/" onClick={closeMenu}>
  <img src="/Images/parvej-logo.jpg" className="logo" alt="logo" />
</Link>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          ref={collapseRef}
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>
                <BsHouseFill /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMenu}>
                <BsFillPersonFill /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={closeMenu}>
                <BsCardChecklist /> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeMenu}>
                <BsEnvelopeFill /> Contact
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}
