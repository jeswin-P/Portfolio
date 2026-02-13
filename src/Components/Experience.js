import React from "react";
import "../Styles/Experience.css";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">

        {/* Section Title */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience & Education
        </motion.h2>

        {/* Timeline */}
        <div className="timeline">

          {/* Center Line */}
          <div className="timeline-line"></div>

          {/* ===== ITEM 1 ===== */}
          <div className="row timeline-item">

            {/* Left Content */}
            <div className="col-md-5">
              <motion.div
                className="timeline-box left"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h4>MERN Stack Intern</h4>
                <h6 className="company">Srishti Innovative</h6>
                <span className="date">June 2024 - january 2025</span>
                <p>
                  MERN Stack Intern at Srishti Innovative, developing a library management
                  system with user authentication, REST APIs, and responsive full-stack applications using MongoDB, Express,
                  React, and Node.js.  
                </p>
              </motion.div>
            </div>

            {/* Icon */}
            <div className="col-md-2 d-none d-md-flex justify-content-center">
              <div className="timeline-icon work">
                <FaBriefcase />
              </div>
            </div>

            {/* Empty */}
            <div className="col-md-5"></div>
          </div>

          {/* ===== ITEM 2 ===== */}
          <div className="row timeline-item">

            {/* Empty */}
            <div className="col-md-5"></div>

            {/* Icon */}
            <div className="col-md-2 d-none d-md-flex justify-content-center">
              <div className="timeline-icon edu">
                <FaGraduationCap />
              </div>
            </div>

            {/* Right Content */}
            <div className="col-md-5">
              <motion.div
                className="timeline-box right"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h4>B.E -Computer Science and Engineering</h4>
                <h6 className="company">Ponjesly College of Engineering</h6>
                <span className="date">2020 - 2024</span>
                <p>
                  Focused on software engineering, algorithms, and web
                  technologies. Built academic projects and participated in
                  hackathons.
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;