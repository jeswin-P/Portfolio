import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
                href="https://github.com/jeswin-P"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4 social-icon"
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jeswin-p"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4 social-icon"
              >
                <FaLinkedin />
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/Jeswin_P_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4 social-icon"
              >
                <FaXTwitter />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/jeswin_.p?igsh=MXg0ZGplOGJza2g3NQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4 social-icon"
              >
                <FaInstagram />
              </a>

              {/* Mail */}
              <a
                href="jeswin.p.dev@gmail.com"
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
