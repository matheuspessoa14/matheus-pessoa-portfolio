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
  const technologies = ["React", "Java", "Spring Boot", "Python", "SQL"];

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <span className="hero-eyebrow">
          Desenvolvimento Web • Dados • Inteligência Artificial
        </span>

        <h1>
          Desenvolvo soluções digitais que conectam
          <span className="highlight"> código, dados e negócio</span>
        </h1>

        <p className="hero-description">
          Sou Matheus Pessoa Telles, graduado em Marketing e estudante de
          Análise e Desenvolvimento de Sistemas. Atualmente, atuo como
          Desenvolvedor Full Stack no Instituto Fundação João Goulart (FJG),
          desenvolvendo soluções web com React, JavaScript, Spring Boot, 
          Python, Figma e bancos de dados.
        </p>

        <p className="hero-objective">
          Minha trajetória combina tecnologia e visão de negócios, com foco em
          desenvolvimento, dados, Cloud e Inteligência Artificial. Busco
          transformar conhecimentos em soluções práticas que gerem valor.
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
