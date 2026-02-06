import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight, BsHouseFill, BsFillPersonFill, BsLaptop } from "react-icons/bs";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

const phrases = ["Web Developer", "React Developer", "UI Designer", "Frontend Lover"];

const Home = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="home-section" id="home">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>

        <div className="home-content container" data-aos="fade-up">
          <div className="home-left">
            <h1>
              Hi, I'm <span className="text-primary">Md Parvez</span>
            </h1>

            <div className="animated-phrases">
              {phrases.map((p, i) => (
                <span key={i} className={`phrase phrase-${i + 1}`}>
                  {p}
                </span>
              ))}
            </div>

            <div className="home-buttons mt-4">
              <Link to="/projects" className="btn btn-primary btn-lg">
                View Projects <BsArrowRight className="ms-2" />
              </Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg ms-3">
                Contact Me
              </Link>
            </div>

            <div className="home-social mt-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" data-aos="fade-right">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" data-aos="fade-right" data-aos-delay="100">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" data-aos="fade-right" data-aos-delay="200">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>

          <div className="home-right" data-aos="fade-left">
            <div className="profile-circle">
              <img src="/Images/parvej-picc.jpg" alt="parvez-image" className="home-image" />
              <div className="glow-ring"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="home-about container " data-aos="fade-up">
        <h2 className="about-title text-center">About Me</h2>
        <p className="about-description text-center">
          I'm a self-motivated web developer passionate about building clean UI and scalable web applications using React.js, JavaScript, HTML, CSS, and Bootstrap.
        </p>

        <div className="about-cards d-flex flex-wrap justify-content-center ">
          <div className="about-card" data-aos="zoom-in">
            <h3><BsHouseFill /> Frontend</h3>
            <p>React, JavaScript, HTML, CSS, Bootstrap</p>
          </div>
          <div className="about-card" data-aos="zoom-in" data-aos-delay="100">
            <h3><BsFillPersonFill /> Tools</h3>
            <p>Git, GitHub, VS Code, Vercel</p>
          </div>
          <div className="about-card" data-aos="zoom-in" data-aos-delay="200">
            <h3><BsLaptop /> Goals</h3>
            <p>Build scalable apps & grow as a full-stack developer</p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="home-cta text-center" data-aos="fade-up">
        <h2>Interested in working together?</h2>
        <Link to="/contact" className="btn btn-primary btn-lg mt-3">
          Let's Talk <BsArrowRight className="ms-2"/>
        </Link>
      </section>
    </div>
  );
};

export default Home;
