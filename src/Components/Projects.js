import React from "react";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website built with React.js and CSS animations.",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
    // Example: Laptop with code web dev theme (free @ Pexels) :contentReference[oaicite:2]{index=2}
    link: "https://yourproject1.live",
  },
  {
    id: 2,
    title: "E-commerce App",
    description: "Full‑stack e‑commerce app using React, Node.js, and MongoDB.",
    image:
      "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600",
    // Example: Online shopping / e‑commerce image (free @ Pexels) :contentReference[oaicite:3]{index=3}
    link: "https://yourproject2.live",
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "A responsive blog platform built with React and Firebase.",
    image:
      "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600",
    // Example: Blogging on laptop or writing image (free @ Pexels) :contentReference[oaicite:4]{index=4}
    link: "https://yourproject3.live",
  },
  {
    id: 4,
    title: "Task Manager",
    description: "A productivity app with CRUD features using React and LocalStorage.",
    image:
      "https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&w=600",
    // Example: Person planning/working at desk (free @ Pexels) :contentReference[oaicite:5]{index=5}
    link: "https://yourproject4.live",
  },
];


export const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-btn" target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
