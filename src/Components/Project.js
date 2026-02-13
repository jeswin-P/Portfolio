import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaInfoCircle,
} from "react-icons/fa";
import "../Styles/Project.css";
import Book from "../assest/Bookworld.png";
import addbook from "../assest/add book.png";
import detailbook from "../assest/detail book.png";
import list from "../assest/list.png";
import login from "../assest/login.png";
import profil from "../assest/profil.png";
import selectbook from "../assest/select book.png";
import portfolio from "../assest/portfolio.png";
import Skill from "../assest/skills.png";
import contact from "../assest/contact.png";
import project from "../assest/project.png";


const projects = [
  {
    title: "BOOKWORLD - Library Management",
    description:
      "A MERN stack library management system with role-based access, borrowing, and responsive UI.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    screenshots: [
      { img: Book, text: "Home Page with Book Listings" },
      { img: login, text: "Secure login system with role-based access for admin, staff, and students, ensuring protected and personalized user experience." },
      { img: profil, text: "User profile management system allowing users to view personal details, borrowed books, and activity history." },
      { img: selectbook, text:"Responsive book listing interface with real-time search and filtering for efficient navigation." },
      { img: detailbook, text: "Interactive book detail page providing complete information, availability status, and action options for borrowing and reviewing books." },
      { img: list, text: "Admin dashboard for monitoring registered users, tracking borrowed books, managing return status, and ensuring smooth library operations." },
      { img: addbook, text: "Admin panel for adding, updating, and managing books with real-time database synchronization." },
    ],
    extraDetails:
      "BookWorld is a complete library management platform built using the MERN stack. It supports role-based access for admins, staff, and students. Users can search, borrow, and manage books efficiently, while admins can control users and inventory.",

    github: "https://github.com/jeswin-P/BOOKWORLD",
    demo: "https://bookworld-nu.vercel.app/",
    category: "MERN",
  },

  {
    title: "Personal Portfolio Website",
    description:"A modern and responsive portfolio website showcasing projects, skills, and experience with smooth animations.",

    tech: ["React", "Bootstrap", "JavaScript", "Framer Motion", "Vercel"],

    screenshots: [
      { img: portfolio, text: "Landing Section" },
      { img: Skill, text: "Interactive skills section displaying technical expertise with icons and animations." },
      { img: contact, text: "Contact section with integrated email and social links for easy communication." },
      { img: project, text: "Project showcase section with detailed cards, filters, and popup view for better user experience." },
    ],

    extraDetails:"This portfolio presents my projects, skills,and experience using clean UI and smooth animations.",
    github: "https://github.com/jeswin-P/Portfolio",
    demo: "https://portfolio-jeswin-p.vercel.app",
    category: "React",
  },
];

function Projects() {
  const [active, setActive] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const modalBodyRef = useRef(null);

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  }


  /* Scroll modal to top when opened */
  useEffect(() => {
    if (modalOpen && modalBodyRef.current) {
      modalBodyRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [modalOpen]);

  return (
    <section id="projects" className="bg-black text-white p-5">
      <h2 className="section-title mb-4 text-center">My Projects</h2>

      {/* Filter Buttons */}
      <div className="mb-4 d-flex gap-3 justify-content-center flex-wrap">
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
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="project-card bg-dark p-3 rounded shadow h-100 position-relative">

                <FaInfoCircle
                  className="details-icon"
                  onClick={() => openModal(project)}
                />

                <div
                  className="overflow-hidden rounded mb-3"
                  onClick={() => openModal(project)}
                >
                  <img
                    src={project.screenshots[0].img}
                    alt={project.title}
                    className="img-fluid pro-img"
                  />
                </div>

                <h5 className="fw-bold">{project.title}</h5>

                <p className="text-secondary small">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mb-2 d-flex flex-wrap gap-1">
                  {project.tech.map((t, i) => (
                    <span key={i} className="badge bg-secondary">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="d-flex gap-2 mt-auto project-btns">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn w-50"
                  >
                    <FaGithub /> Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn w-50 demo-btn"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && selectedProject && (
          <motion.div
            className="pro-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              className="modal-box pop-box d-flex flex-column"
              initial={{ y: 80, scale: 0.9, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 80, scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >

              {/* Header */}
              <div className="modal-header cl-button">
                <h4>{selectedProject.title}</h4>

                <button
                  onClick={closeModal}
                  className="btn btn-outline-light"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Body */}
              <div
                className="modal-body smooth-scroll"
                ref={modalBodyRef}
              >

                <p className="text-secondary">
                  {selectedProject.description}
                </p>

                <p className="small mt-2">
                  {selectedProject.extraDetails}
                </p>

                {/* Tech */}
                <div className="mb-3 d-flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="badge bg-secondary">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="d-flex gap-3 mt-3 mb-3 flex-wrap">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light"
                  >
                    <FaGithub /> Code
                  </a>

                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>

                {/* Screenshots */}
                <div className="screenshots-grid">

                  {selectedProject.screenshots
                    .map((item, i) => (
                      <div key={i} className="screenshot-card">

                        <img
                          src={item.img}
                          alt={`screen-${i}`}
                          className="img-fluid rounded"
                        />

                        <p className="small text-center mt-1 text-secondary">
                          {item.text}
                        </p>

                      </div>
                    ))}

                </div>

              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Projects;








