import React from "react";
import "../Styles/Skill.css";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostman,
  SiBootstrap,
  SiVercel,
  SiExpress,
  SiRender
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

 function SkillsAndTools() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "Express.js", icon: <SiExpress color="white" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
    { name: "VS Code", icon: <VscVscode color="#007ACC" /> },
    { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
    { name: "Vercel", icon: <SiVercel color="#ffffff" /> },
    { name: "render", icon: <SiRender color="#ffffff" /> },
  ];

  return (
    <section id="skills" className="skills-tools-section">
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Tools
        </motion.h2>

        {/* Modern Divider */}
        <div className="divider-wrapper">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="row g-4 mt-5">

          {/* ================= SKILLS ================= */}
          <div className="col-md-6">
            <motion.div
              className="box"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="box-title">My Skills</h3>

              <div className="icon-grid">
                {skills.map((skill, i) => (
                  <motion.div
                    className="icon-card"
                    key={i}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="icon">{skill.icon}</div>
                    <p>{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ================= TOOLS ================= */}
          <div className="col-md-6">
            <motion.div
              className="box"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="box-title">Tools & Platforms</h3>

              <div className="icon-grid">
                {tools.map((tool, i) => (
                  <motion.div
                    className="icon-card"
                    key={i}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="icon">{tool.icon}</div>
                    <p>{tool.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SkillsAndTools