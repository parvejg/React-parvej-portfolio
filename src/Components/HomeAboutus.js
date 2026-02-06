import './HomeAboutus.css'

import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <section className="home-about">
      {/* HERO / HOME SECTION */}
      <div className="home-section">
        <div className="home-content">
          <h1>
            Hi, I’m <span>Parvej</span> 👋
          </h1>
          <p>
            A passionate Frontend Developer building modern, responsive, and
            user-friendly web applications.
          </p>

          <div className="home-buttons">
            <Link to="/projects" className="btn primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn secondary">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="home-image">
          <img
            src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
            alt="Developer working"
          />
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="about-section">
        <h2>About Me</h2>
        <p>
          I am a self-motivated web developer with experience in React.js,
          JavaScript, HTML, CSS, and Bootstrap. I love creating clean UI and
          solving real-world problems through code.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML, CSS, Bootstrap</p>
          </div>
          <div className="about-card">
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code, Vercel</p>
          </div>
          <div className="about-card">
            <h3>Goals</h3>
            <p>Build scalable apps & grow as a full-stack developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
