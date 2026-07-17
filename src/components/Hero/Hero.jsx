import "./Hero.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaFileAlt,
} from "react-icons/fa";

import heroImg from "/glidi-photo.png";

function Hero() {
  const technologies = [
    "React",
    "Java",
    "Spring Boot",
    "Python",
    "SQL",
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-status">
          <span className="status-dot"></span>
          Disponível para oportunidades de estágio em TI
        </div>

        <span className="hero-eyebrow">
          Desenvolvimento Web • Dados • Inteligência Artificial
        </span>

        <h1>
          Desenvolvo soluções digitais que conectam
          <span className="highlight"> código, dados e negócio</span>
        </h1>

        <p className="hero-description">
          Sou Matheus Pessoa Telles, graduado em Marketing e estudante de
          Análise e Desenvolvimento de Sistemas. Desenvolvo aplicações web e
          projetos full stack utilizando tecnologias como React, Java, Spring
          Boot, Python e bancos de dados.
        </p>

        <p className="hero-objective">
          Busco uma oportunidade para contribuir com projetos reais, aprender
          com profissionais experientes e evoluir nas áreas de desenvolvimento,
          dados e inteligência artificial.
        </p>

        <div className="hero-technologies">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            Ver projetos
            <FaArrowRight />
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <FaFileAlt />
            Ver currículo
          </a>

          <a href="#contact" className="btn-link">
            Falar comigo
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/matheuspessoa14"
            target="_blank"
            rel="noreferrer"
            aria-label="Acessar GitHub de Matheus Pessoa"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/matheuspessoa1816"
            target="_blank"
            rel="noreferrer"
            aria-label="Acessar LinkedIn de Matheus Pessoa"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="mailto:matheustelles1410@gmail.com"
            aria-label="Enviar e-mail para Matheus Pessoa"
          >
            <FaEnvelope />
            E-mail
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-image-glow"></div>

        <img
          src={heroImg}
          alt="Ilustração de Matheus Pessoa trabalhando com tecnologia"
          className="hero-character"
        />
      </div>
    </section>
  );
}

export default Hero;