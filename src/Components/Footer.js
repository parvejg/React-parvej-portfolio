// src/Components/Footer.js
import React from "react";
import { BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css"; // optional for custom styling

export const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-3">© 2026 Parvej. All rights reserved.</p>
        <div className="d-flex justify-content-center gap-4">
          <a
            href="https://github.com/parvejg"
            target="_blank"
            rel="noreferrer"
            className="text-light fs-4"
          >
            <BsGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile/"
            target="_blank"
            rel="noreferrer"
            className="text-light fs-4"
          >
            <BsLinkedin className="icon"/>
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-light fs-4"
          >
            <BsEnvelopeFill className="icon"/>
          </a>
        </div>
      </div>
    </footer>
  );
};
