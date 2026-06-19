import "./Experience.css";
import Reveal from "../ui/Reveal";
import { CalendarDays } from "lucide-react";

import anaspsLogo from "../../assets/logos/anasps.png";

function Experience() {
  return (
    <section className="experience" id="experience">
      <Reveal>
        <div className="experience-header">
          <span className="section-tag">Experiência</span>
          <h2>Minha trajetória <span className="highlight">profissional</span></h2>
        </div>

        <div className="experience-card">
          <div className="experience-company-row">
            <img src={anaspsLogo} alt="ANASPS" className="experience-logo" />

            <div>
              <h3>ANASPS</h3>
              <p>
                Associação Nacional dos Servidores Públicos da Previdência
                Social
              </p>
            </div>
          </div>

          <div className="experience-role">
            <span className="experience-dot"></span>

            <div>
              <div className="experience-period">
                <CalendarDays size={14} />
                Ago/2024 - Ago/2025
              </div>

              <h4>Estagiário em Administração | Marketing</h4>

              <p>
                Atuação em rotinas administrativas e marketing, apoiando a
                organização de dados, criação de relatórios em Excel,
                digitalização de processos e suporte a sistemas internos.
              </p>

              <div className="experience-responsibilities">
                <span>• Criação e manutenção de relatórios em Excel</span>
                <span>• Organização e análise de dados</span>
                <span>• Apoio a sistemas internos</span>
                <span>• Digitalização e otimização de processos</span>
                <span>• Interface entre áreas administrativas e tecnologia</span>
              </div>
            </div>
          </div>

          <div className="experience-tags">
            <span>Excel</span>
            <span>Relatórios</span>
            <span>Dados</span>
            <span>Gestão de Pessoas & Liderança</span>
            <span>Processos</span>
            <span>Marketing</span>
            <span>Sistemas Internos</span>
            <span>Comunicação</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Experience;