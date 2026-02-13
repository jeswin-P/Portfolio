import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home.js';
import About from './Components/About.js';
import AOS from "aos";
import "aos/dist/aos.css";
import Skills from './Components/Skill.js';
import Experience from './Components/Experience.js';
import Projects from './Components/Project.js';
import Resume from './Components/Resume.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';
import Navigation from './Components/Navbar.js';

import { useEffect } from 'react';




function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out"
    });
  }, []);
  return (
    <>
      <Navigation/>
      <Home />
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Resume/>
      <Contact/>
      <Footer/>
      
    </>
    
  );
}

export default App;
