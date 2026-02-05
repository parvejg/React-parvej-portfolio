import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "./Home.css";

const phrases = ["Web Developer", "React Developer", "UI Designer", "Frontend Lover" ];

const Home = () => {
  return (
    <section className="home-section" id="home">
      {/* Animated background blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
      <div className="blob blob4"></div>
      <div className="blob blob5"></div>


      <div className="home-content container">
        <div className="home-left">
          <h1 className="home-title">Hi, I'm <span className="text-primary">Md Parvez</span></h1>

          <div className="animated-phrases">
            {phrases.map((p, i) => (
              <span key={i} className={`phrase phrase-${i+1}`}>{p}</span>
            ))}
          </div>

          <div className="home-buttons">
            <Link to="/projects" className="btn btn-primary btn-lg">
              View Projects <BsArrowRight className="ms-2"/>
            </Link>
            <Link to="/contact" className="btn btn-outline-light btn-lg ms-3">
              Contact Me
            </Link>
          </div>

          <div className="home-social">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>
          </div>
        </div>

        <div className="home-right">
          <div className="profile-circle">
            <img
              src="/Images/parvej-picc.jpg"
              alt="Md Parvez"
              className="home-image"
            />
            <div className="glow-ring"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
