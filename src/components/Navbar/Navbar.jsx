import "./Navbar.css";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaFileAlt,
  FaChevronDown,
} from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const primaryLinks = [
    { id: "about", label: "Sobre" },
    { id: "education", label: "Formação" },
    { id: "experience", label: "Experiência" },
    { id: "certifications", label: "Certificações" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projetos" },
    { id: "contact", label: "Contato" },
  ];

  const additionalLinks = [
    { id: "courses", label: "Cursos complementares" },
    { id: "events", label: "Eventos" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const sectionIds = [
      "home",
      ...primaryLinks.map((link) => link.id),
      ...additionalLinks.map((link) => link.id),
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 1100) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", closeOnDesktop);

    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  const isAdditionalSectionActive = additionalLinks.some(
    (link) => link.id === activeSection
  );

  return (
    <header className="navbar">
      <a
        href="#home"
        className="navbar-brand"
        onClick={closeMenu}
        aria-label="Voltar ao início"
      >
        <img
          src="/favicon.png"
          alt=""
          className="navbar-logo"
          aria-hidden="true"
        />

        <span className="navbar-brand-text">
          <strong>Matheus Pessoa</strong>
          <small>Technology Portfolio</small>
        </span>
      </a>

      <nav
        className={`navbar-links ${isOpen ? "active" : ""}`}
        aria-label="Navegação principal"
      >
        {primaryLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={closeMenu}
            className={activeSection === link.id ? "active-link" : ""}
            aria-current={activeSection === link.id ? "page" : undefined}
          >
            {link.label}
          </a>
        ))}

        <details
          className={`navbar-more ${
            isAdditionalSectionActive ? "active-more" : ""
          }`}
        >
          <summary>
            Mais
            <FaChevronDown />
          </summary>

          <div className="navbar-more-menu">
            {additionalLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={closeMenu}
                className={activeSection === link.id ? "active-link" : ""}
              >
                {link.label}
              </a>
            ))}
          </div>
        </details>

        <div className="navbar-mobile-socials">
          <a
            href="https://github.com/matheuspessoa14"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/matheuspessoa1816"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </nav>

      <div className="navbar-actions">
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noreferrer"
          className="navbar-cv"
        >
          <FaFileAlt />
          <span>Currículo</span>
        </a>

        <a
          href="https://github.com/matheuspessoa14"
          target="_blank"
          rel="noreferrer"
          className="navbar-icon"
          aria-label="Acessar GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/matheuspessoa1816"
          target="_blank"
          rel="noreferrer"
          className="navbar-icon"
          aria-label="Acessar LinkedIn"
        >
          <FaLinkedin />
        </a>

        <button
          type="button"
          className="navbar-toggle"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;