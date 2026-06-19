import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import Experience from "./components/Experience/Experience";
import Courses from "./components/Courses/Courses";
import Events from "./components/Events/Events";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Certifications />
      <Courses />
      <Skills />
      <Projects />
      <Events />
      <Contact />
    </>
  );
}

export default App;