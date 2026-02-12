import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../Styles/Project.css"

const projects = [
  {
    title: "BOOKWORLD-Library Management ",
    description: "A real-time chat application with authentication, friend requests, and improved UI.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "https://via.placeholder.com/600x400/2a2a2a/ffffff?text=Chat+App",
    github: "#",
    demo: "#",
    category: "MERN"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce site with cart, payment gateway, and admin dashboard.",
    tech: ["React", "Redux", "Bootstrap", "Node.js", "Stripe"],
    image: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=E-Commerce",
    github: "#",
    demo: "#",
    category: "MERN"
  },
  {
    title: "Task Management Tool",
    description: "Productivity tool for managing daily tasks with drag-and-drop functionality.",
    tech: ["React", "Firebase", "Framer Motion"],
    image: "https://via.placeholder.com/600x400/3a3a3a/ffffff?text=Task+Manager",
    github: "#",
    demo: "#",
    category: "React"
  }
];

function Projects() {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="bg-black text-white p-5">
      <h2 className="section-title mb-4" data-aos="fade-down">
        My Projects
      </h2>

      {/* Filter Buttons */}
      <div className="mb-4 d-flex gap-3 justify-content-center">
        {["All", "MERN", "React"].map((btn) => (
          <button
            key={btn}
            onClick={() => setActive(btn)}
            className={`filter-btn ${active === btn ? "active" : ""}`}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="row g-4">
        {filteredProjects.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <motion.div
              whileHover={{scale: 1.05, }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="project-card bg-dark p-3 rounded shadow h-100">
                <div className="overflow-hidden rounded mb-3">
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  />
                </div>
                <h5 className="fw-bold">{project.title}</h5>
                <p className="text-secondary">{project.description}</p>
                <div className="mb-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="badge bg-secondary me-1 mb-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="d-flex gap-2 mt-auto project-btns">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn  w-50 d-flex align-items-center justify-content-center gap-1"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn  w-50 d-flex align-items-center justify-content-center gap-1 demo-btn"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;







