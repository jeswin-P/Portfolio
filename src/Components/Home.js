import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "../Styles/Home.css"
import jp from '../assest/jp.png'
import { FaGithub, FaLinkedin,  } from "react-icons/fa";


function Home() {
    return (
        <section id="home" className="home-section d-flex align-items-center">

            <div className="container">

                <div className="row align-items-center">

                    {/* LEFT SIDE */}
                    <div className="col-md-6 order-2 order-md-1 mt-4 mt-md-0">

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >

                            <h5 className="text-secondary mb-2">Hi, I'm</h5>

                            <h1 className="hero-name mb-3">Jeswin</h1>

                            <h3 className="mb-4">
                                I'm a{" "}
                                <span className="text-info">

                                    <TypeAnimation
                                        sequence={[
                                            "MERN Stack Developer",
                                            2000,
                                            "React Developer",
                                            2000,
                                        ]}
                                        speed={50}
                                        repeat={Infinity}
                                    />

                                </span>
                            </h3>

                            <p className="hero-text mb-3">
                                Passionate about building modern, responsive,
                                and scalable web applications.
                            </p>

                            {/* Social Links */}
                            <div className="home-social mt-2">

                                <a
                                    href="https://github.com/jeswin-P"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-icon github"
                                >
                                    <FaGithub />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/jeswin-p"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-icon linkedin"
                                >
                                    <FaLinkedin />
                                </a>

                                {/* <a
                                    href="https://instagram.com/yourusername"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-icon instagram"
                                >
                                    <FaInstagram />
                                </a> */}

                            </div>


                            <div className="d-flex gap-3 mt-4">

                                <a
                                    href="/resume.pdf.pdf"
                                    download
                                    className="btn  btn-lg btn-custom btn-resume"
                                >
                                    Download Resume
                                </a>

                                <Link to="contact" smooth={true} duration={500} offset={-70}>

                                    <button className="btn  btn-lg btn-custom btn-contact ">
                                        Contact Me
                                    </button>

                                </Link>

                            </div>

                        </motion.div>

                    </div>


                    {/* RIGHT SIDE */}
                    <div className="col-md-6 order-1 order-md-2 text-center">

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >

                            <div className="hero-img-box">

                                <img
                                    src={jp}
                                    alt="Jeswin"
                                    className="hero-img"
                                />

                            </div>

                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Home;

