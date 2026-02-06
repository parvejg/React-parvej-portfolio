// src/Components/Navbar.js
import { BsFillPersonFill, BsEnvelopeFill, BsHouseFill, BsCardChecklist } from 'react-icons/bs';
import './navbar.css'
import { Link } from 'react-router-dom';
import logo from "/Images/parvej-logo.jpg";

<img src={logo} className="logo" alt="logo" />

export function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo / Brand */}
        <Link className="navbar-brand" to="/">
          <img src='/images/parvej-logo.jpg' className='logo' alt="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <BsHouseFill className="me-1" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <BsFillPersonFill className="me-1" />
                About
              </Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                <BsCardChecklist className="me-1" />
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <BsEnvelopeFill className="me-1" />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

