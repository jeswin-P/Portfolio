import React from "react";
import { FaDownload } from "react-icons/fa";
import "../Styles/Resume.css";

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <h2 className="section-title" data-aos="fade-up">
        Resume
      </h2>

      <p className="resume-text" data-aos="fade-up" data-aos-delay="100">
        Check out my resume to see my full work history and qualifications.
      </p>

      <div data-aos="zoom-in" data-aos-delay="200">
        <a
          href="/resume.pdf.pdf"
          download="Jeswin_Resume.pdf"
          className="resume-btn"
        >
          <FaDownload /> Download Resume
        </a>
      </div>
     
    </section>
  );
}

export default Resume;
