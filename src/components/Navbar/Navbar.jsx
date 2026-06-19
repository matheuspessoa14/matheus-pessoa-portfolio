import "./Navbar.css";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <a href="#home" className="navbar-brand" onClick={closeMenu}>
        <span>Matheus</span>
        <strong>.</strong>
      </a>

      <nav className={`navbar-links ${isOpen ? "active" : ""}`}>
        <a href="#about" onClick={closeMenu}>Sobre</a>
        <a href="#education" onClick={closeMenu}>Formação</a>
        <a href="#experience" onClick={closeMenu}>Experiência</a>
        <a href="#certifications" onClick={closeMenu}>Certificações</a>
        <a href="#courses" onClick={closeMenu}>Cursos</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projetos</a>
        <a href="#events" onClick={closeMenu}>Eventos</a>
        <a href="#contact" onClick={closeMenu}>Contato</a>
      </nav>

      <div className="navbar-actions">
        <a href="/cv.pdf" target="_blank" rel="noreferrer" className="navbar-cv">
          Currículo
        </a>

        <a
          href="https://github.com/matheuspessoa14"
          target="_blank"
          rel="noreferrer"
          className="navbar-icon"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/matheuspessoa1816"
          target="_blank"
          rel="noreferrer"
          className="navbar-icon"
        >
          <FaLinkedin />
        </a>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;