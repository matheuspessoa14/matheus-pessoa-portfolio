import "./Education.css";
import Reveal from "../ui/Reveal";
import {
  CalendarDays,
  GraduationCap,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

import senacLogo from "../../assets/logos/senac.png";
import uvaLogo from "../../assets/logos/uva.png";

function Education() {
  const educationData = [
    {
      institution: "Centro Universitário Senac",
      course: "Análise e Desenvolvimento de Sistemas",
      logo: senacLogo,
      logoAlt: "Logo do Centro Universitário Senac",
      status: "Em andamento",
      statusType: "current",
      period: "5º período",
      conclusion: "Conclusão prevista: Dez/2026",
      description:
        "Formação voltada ao desenvolvimento de software, bancos de dados, engenharia de software, arquitetura de sistemas, testes e gestão de projetos.",
      tags: [
        "Java",
        "Python",
        "Spring Boot",
        "JavaScript",
        "SQL",
        "APIs REST",
        "JUnit",
        "Mockito",
        "Git",
        "Microsoft Project",
      ],
    },
    {
      institution: "Universidade Veiga de Almeida",
      course: "Marketing",
      logo: uvaLogo,
      logoAlt: "Logo da Universidade Veiga de Almeida",
      status: "Concluído",
      statusType: "completed",
      period: "Graduação concluída",
      conclusion: "Maio/2026",
      description:
        "Formação em estratégia, comunicação, comportamento do consumidor, produtos e negócios, contribuindo para uma visão orientada ao usuário e aos objetivos organizacionais.",
      tags: [
        "Estratégia",
        "Negócios",
        "Comunicação",
        "Marketing Digital",
        "Produtos",
        "Comportamento do consumidor",
      ],
    },
  ];

  return (
    <section id="education" className="education">
      <Reveal>
        <div className="education-header">
          <span className="section-tag">Educação</span>

          <h2>
            Formação
            <span className="highlight"> acadêmica</span>
          </h2>

          <p>
            Minha trajetória acadêmica combina tecnologia, desenvolvimento de
            software, comunicação e compreensão das necessidades de usuários e
            organizações.
          </p>
        </div>

        <div className="education-grid">
          {educationData.map((education) => (
            <article
              className={`education-card ${education.statusType}`}
              key={education.course}
            >
              <div className="education-card-top">
                <div className="education-logo-wrapper">
                  <img
                    src={education.logo}
                    alt={education.logoAlt}
                    className="education-logo"
                  />
                </div>

                <span
                  className={`education-status ${education.statusType}`}
                >
                  {education.statusType === "completed" ? (
                    <CheckCircle2 size={14} />
                  ) : (
                    <BookOpen size={14} />
                  )}

                  {education.status}
                </span>
              </div>

              <div className="education-content">
                <span className="education-type">
                  <GraduationCap size={15} />
                  Graduação
                </span>

                <h3>{education.course}</h3>

                <p className="education-institution">
                  {education.institution}
                </p>

                <p className="education-description">
                  {education.description}
                </p>

                <div className="education-meta">
                  <span>
                    <CalendarDays size={14} />
                    {education.period}
                  </span>

                  <span>{education.conclusion}</span>
                </div>

                <div className="education-tags">
                  {education.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Education;