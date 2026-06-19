import "./Hero.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import heroImg from "/glidi-photo.png";

function Hero() {
  return (
    <section id="home" className="hero">
      {/* TEXT CONTENT */}
      <div className="hero-content">
        <span className="badge">
          Desenvolvedor Full Stack • Dados • IA
        </span>

        <h1>
          Construindo aplicações que unem tecnologia, dados e  
          <span className="highlight"> negócio</span>
        </h1>

        <p>
          Hello World :) Meu nome é Matheus Pessoa Telles, tenho 21 anos, sou graduado em Marketing pela Universidade Veiga de Almeida e atualmente curso Análise e Desenvolvimento de Sistemas pela Faculdade Senac.
        </p>
        <p>
          Busco transformar conhecimento em experiência prática através de projetos, certificações e participação ativa no ecossistema de tecnologia, com foco em desenvolvimento web, dados e inteligência artificial.
        </p>

        <div className="hero-actions">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Ver Currículo
          </a>

          <a href="#projects" className="btn-secondary">
            Ver Projetos
          </a>

          <a href="#contact" className="btn-link">
            Vamos conversar →
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/matheuspessoa14"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/matheuspessoa1816"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a href="mailto:matheustelles1410@gmail.com">
            <FaEnvelope />
            Email
          </a>
        </div>
      </div>

      {/* VISUAL */}
      <div className="hero-visual">
        <img
          src={heroImg}
          alt="Matheus Pessoa"
          className="hero-character"
        />
      </div>
    </section>
  );
}

export default Hero;