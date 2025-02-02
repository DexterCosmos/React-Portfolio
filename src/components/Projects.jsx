// src/components/Projects.js
import React from "react";

const projects = [
  {
    id: 1,
    title: "Creative & experienced digital design studio",
    subtitle: "Web, Product",
    image: "src/assets/images/project-1.gif",
    alt: "Project poster: Creative & experienced digital design studio",
  },
  {
    id: 2,
    title: "Front End Development & Maintenance",
    subtitle: "Web, Product",
    image: "./assets/images/project-2.gif",
    alt: "Project poster: Front End Development & Maintenance",
  },
  {
    id: 3,
    title: "Flutter Framework & Warframe Design",
    subtitle: "Web, Product",
    image: "./assets/images/project-3.gif",
    alt: "Project poster: Flutter Framework & Warframe Design",
  },
  {
    id: 4,
    title: "Full Web Development Project With JavaScript",
    subtitle: "Web, Product",
    image: "./assets/images/project-4.gif",
    alt: "Project poster: Full Web Development Project With JavaScript",
  },
  {
    id: 5,
    title: "Cloud Migration & AWS Services",
    subtitle: "Web, Product",
    image: "./assets/images/project-5.gif",
    alt: "Project poster: Cloud Migration & AWS Services",
  },
];

const Projects = () => {
  return (
    <section className="section project" aria-label="my latest projects" id="project">
      <ul className="slider-list">
        {projects.map((project) => (
          <li className="slider-item" key={project.id}>
            <div className="project-card text-center">
              <div
                className="card-banner img-holder has-before"
                style={{ "--width": "1000", "--height": "763" }}
              >
                <img
                  src={project.image}
                  width="1000"
                  height="763"
                  loading="lazy"
                  alt={project.alt}
                  className="img-cover"
                />

                <a href="#" className="btn btn:hover">
                  <span className="span">Project Details</span>
                  <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                </a>
              </div>

              <div className="card-content">
                <p className="card-subtitle">{project.subtitle}</p>
                <h3 className="title h3">
                  <a href="#" className="card-title">
                    {project.title}
                  </a>
                </h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
