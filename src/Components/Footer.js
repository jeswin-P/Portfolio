import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-4 border-top border-secondary">
      <div className="container">

        <div className="row align-items-center">

          {/* Left */}
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Jeswin. All rights reserved.
            </p>
          </div>

          {/* Right */}
          <div className="col-md-6 text-center text-md-end">

            <div className="d-flex justify-content-center justify-content-md-end gap-3">

              {/* Github */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4 social-icon"
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4 social-icon"
              >
                <FaLinkedin />
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4 social-icon"
              >
                <FaTwitter />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4 social-icon"
              >
                <FaInstagram />
              </a>

              {/* Mail */}
              <a
                href="mailto:jeswin@example.com"
                className="text-white fs-4 social-icon"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
