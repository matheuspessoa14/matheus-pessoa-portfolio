import "./Experience.css";
import Reveal from "../ui/Reveal";

import {
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import fjgLogo from "../../assets/logos/fjg.png";
import anaspsLogo from "../../assets/logos/anasps.png";

function Experience() {
  const experiences = [
    {
      company: "Instituto Fundação João Goulart (FJG)",
      companyDescription: "Prefeitura da Cidade do Rio de Janeiro",
      logo: fjgLogo,
      type: "Estágio",
      period: "Ago/2026 – Atualmente",
      location: "Rio de Janeiro, RJ",
      duration: "Atual",
      title: (
        <>
          Estagiário de Desenvolvimento Full Stack
          <span> — Dados & Tecnologia</span>
        </>
      ),
      description:
        "Atuação no desenvolvimento de soluções digitais no contexto da gestão pública, envolvendo desenvolvimento web, análise de dados e criação de soluções orientadas a evidências. A experiência também envolve o uso de ferramentas de design e prototipação para apoiar a construção e apresentação de soluções.",
      responsibilities: [
        "Desenvolvimento e manutenção de aplicações web",
        "Desenvolvimento e integração de APIs",
        "Análise, organização e interpretação de dados",
        "Apoio na construção de soluções orientadas a dados e evidências",
        "Criação e edição de interfaces, protótipos e materiais no Figma",
        "Apoio na visualização e apresentação de informações",
      ],
      skills: [
        "Desenvolvimento Web",
        "Full Stack",
        "APIs",
        "Análise de dados",
        "Visualização de dados",
        "Figma",
        "Tecnologia",
        "Dados",
      ],
    },

    {
      company: "ANASPS",
      companyDescription:
        "Associação Nacional dos Servidores Públicos da Previdência Social",
      logo: anaspsLogo,
      type: "Estágio",
      period: "Ago/2024 – Ago/2025",
      location: "Rio de Janeiro, RJ",
      duration: "1 ano e 1 mês",
      title: (
        <>
          Estagiário em Marketing e Administração
          <span> — Processos e Sistemas</span>
        </>
      ),
      description:
        "Atuação em rotinas administrativas e de marketing, com foco na organização de informações, criação de relatórios, apoio a sistemas internos e digitalização de processos. A experiência também envolveu contato com diferentes áreas da organização, fortalecendo minha capacidade de compreender demandas de negócio e apoiar soluções com o uso da tecnologia.",
      responsibilities: [
        "Criação, atualização e organização de relatórios e controles em Excel",
        "Organização de dados e informações utilizadas pelas áreas internas",
        "Apoio na utilização e no acompanhamento de sistemas internos",
        "Digitalização de documentos e melhoria de processos administrativos",
        "Suporte às demandas de atendimento, comunicação e marketing",
        "Interface entre atividades administrativas, processos e tecnologia",
      ],
      skills: [
        "Excel",
        "Relatórios",
        "Organização de dados",
        "Sistemas internos",
        "Melhoria de processos",
        "Marketing",
        "Comunicação",
        "Atendimento",
      ],
    },
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
            Experiência profissional combinando desenvolvimento de software,
            dados, tecnologia, processos e visão de negócio.
          </p>
        </div>

        {experiences.map((experience, index) => (
          <article
            className="experience-card"
            key={`${experience.company}-${experience.period}`}
          >
            <div className="experience-card-header">
              <div className="experience-company">
                <div className="experience-logo-wrapper">
                  <img
                    src={experience.logo}
                    alt={`Logo da ${experience.company}`}
                    className="experience-logo"
                  />
                </div>

                <div>
                  <h3>{experience.company}</h3>
                  <p>{experience.companyDescription}</p>
                </div>
              </div>

              <span className="experience-type">
                <BriefcaseBusiness size={14} />
                {experience.type}
              </span>
            </div>

            <div className="experience-content">
              <div className="experience-timeline">
                <span className="experience-dot"></span>

                {index < experiences.length - 1 && (
                  <span className="experience-line"></span>
                )}
              </div>

              <div className="experience-details">
                <div className="experience-meta">
                  <span>
                    <CalendarDays size={14} />
                    {experience.period}
                  </span>

                  <span>
                    <MapPin size={14} />
                    {experience.location}
                  </span>

                  <span>{experience.duration}</span>
                </div>

                <h4>{experience.title}</h4>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-responsibilities">
                  <h5>Principais atividades</h5>

                  <div className="responsibilities-grid">
                    {experience.responsibilities.map((responsibility) => (
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
                  {experience.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </Reveal>
    </section>
  );
}

export default Experience;