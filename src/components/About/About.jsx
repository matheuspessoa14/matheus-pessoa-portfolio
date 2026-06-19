import "./About.css";
import Reveal from "../ui/Reveal";
import { GraduationCap, Award, FolderKanban } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">
      <Reveal>
        <div className="about-header">
          <span className="section-tag">Sobre mim</span>

          <h2>Entre negócios, <span className="highlight">tecnologia</span> e produtos digitais</h2>

          <div className="about-text">
            <p>
              Sou graduado em Marketing pela Universidade Veiga de Almeida e
              atualmente curso Análise e Desenvolvimento de Sistemas pela
              Faculdade Senac, unindo visão de negócio com formação técnica.
            </p>

            <p>
              Hoje concentro meus estudos e projetos em desenvolvimento web,
              engenharia de software, dados e inteligência artificial,
              construindo soluções como GastoCerto, DevFlow e CondoFlow.
            </p>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <GraduationCap />
            <h3>2</h3>
            <span>Graduações</span>
          </div>

          <div className="stat-card">
            <Award />
            <h3>6+</h3>
            <span>Certificações</span>
          </div>

          <div className="stat-card">
            <FaLinkedin />
            <h3>1300+</h3>
            <span>Conexões LinkedIn</span>
          </div>

          <div className="stat-card">
            <FolderKanban />
            <h3>4</h3>
            <span>Projetos Reais</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default About;