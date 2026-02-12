import React from "react";
import "../Styles/About.css";

function About() {
    return (
        <section id="about" className="about-section">

            <div className="container">

                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >

                    <h2 className="section-title">
                        About Me
                    </h2>

                    <div className="row justify-content-center">

                        <div className="col-md-10 col-lg-8 text-center">

                            <p className="about-text mb-4">

                                I am a dedicated MERN Stack Developer
                                with a strong foundation in building
                                dynamic and responsive web applications.

                                My passion lies in creating seamless
                                user experiences through clean and
                                efficient code.

                            </p>

                            <p className="about-subtext">

                                I have hands-on experience working with MongoDB, Express.js, React, and
                                Node.js, and I enjoy solving complex problems and turning them into simple,
                                beautiful solutions. During my internship at Srishti Innovative, I worked
                                on real-world projects and improved my practical development skills.

                                I am constantly learning new
                                technologies to stay updated in
                                modern web development.

                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;
