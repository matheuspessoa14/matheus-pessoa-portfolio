import "./Experience.css";
import Reveal from "../ui/Reveal";

import {
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import anaspsLogo from "../../assets/logos/anasps.png";

function Experience() {
  const responsibilities = [
    "Criação, atualização e organização de relatórios e controles em Excel",
    "Organização de dados e informações utilizadas pelas áreas internas",
    "Apoio na utilização e no acompanhamento de sistemas internos",
    "Digitalização de documentos e melhoria de processos administrativos",
    "Suporte às demandas de atendimento, comunicação e marketing",
    "Interface entre atividades administrativas, processos e tecnologia",
  ];

  const skills = [
    "Excel",
    "Relatórios",
    "Organização de dados",
    "Sistemas internos",
    "Melhoria de processos",
    "Marketing",
    "Comunicação",
    "Atendimento",
  ];

  return (
    <section className="experience" id="experience">
      <Reveal>
        <div className="experience-header">
          <span className="section-tag">Experiência profissional</span>

          <h2>
            Experiência 
            <span className="highlight"> Profissional</span>
          </h2>

          <p>
            Experiência profissional envolvendo organização de informações,
            apoio a sistemas, produção de relatórios e melhoria de rotinas
            administrativas.
          </p>
        </div>

        <article className="experience-card">
          <div className="experience-card-header">
            <div className="experience-company">
              <div className="experience-logo-wrapper">
                <img
                  src={anaspsLogo}
                  alt="Logo da ANASPS"
                  className="experience-logo"
                />
              </div>

              <div>
                <h3>ANASPS</h3>

                <p>
                  Associação Nacional dos Servidores Públicos da Previdência
                  Social
                </p>
              </div>
            </div>

            <span className="experience-type">
              <BriefcaseBusiness size={14} />
              Estágio
            </span>
          </div>

          <div className="experience-content">
            <div className="experience-timeline">
              <span className="experience-dot"></span>
              <span className="experience-line"></span>
            </div>

            <div className="experience-details">
              <div className="experience-meta">
                <span>
                  <CalendarDays size={14} />
                  Ago/2024 – Ago/2025
                </span>

                <span>
                  <MapPin size={14} />
                  Rio de Janeiro, RJ
                </span>

                <span>1 ano e 1 mês</span>
              </div>

              <h4>
                Estagiário em Marketing e Administração
                <span> — Processos e Sistemas</span>
              </h4>

              <p className="experience-description">
                Atuação em rotinas administrativas e de marketing, com foco na
                organização de informações, criação de relatórios, apoio a
                sistemas internos e digitalização de processos. A experiência
                também envolveu contato com diferentes áreas da organização,
                fortalecendo minha capacidade de compreender demandas de
                negócio e apoiar soluções com o uso da tecnologia.
              </p>

              <div className="experience-responsibilities">
                <h5>Principais atividades</h5>

                <div className="responsibilities-grid">
                  {responsibilities.map((responsibility) => (
                    <div
                      className="responsibility-item"
                      key={responsibility}
                    >
                      <CheckCircle2 size={16} />
                      <span>{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="experience-tags">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}

export default Experience;