import "./Skills.css";
import Reveal from "../ui/Reveal";

import {
  Monitor,
  Server,
  Database,
  ShieldCheck,
  BarChart3,
  Cloud,
} from "lucide-react";

function Skills() {
  const skillGroups = [
    {
      icon: <Monitor size={23} />,
      title: "Frontend",
      description:
        "Construção de interfaces responsivas, componentes reutilizáveis e experiências para web e mobile.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "React Native",
        "Angular",
        "Bootstrap",
      ],
    },
    {
      icon: <Server size={23} />,
      title: "Backend & APIs",
      description:
        "Desenvolvimento de regras de negócio, APIs REST e integração entre aplicações e bancos de dados.",
      skills: [
        "Java",
        "Python",
        "Spring Boot",
        "Flask",
        "APIs REST",
        "JPA",
        "Hibernate",
        "Maven",
      ],
    },
    {
      icon: <Database size={23} />,
      title: "Bancos de dados",
      description:
        "Modelagem, persistência e manipulação de dados em bancos relacionais.",
      skills: [
        "SQL",
        "MySQL",
        "SQL Server",
        "PostgreSQL",
        "SQLite",
        "Modelagem de dados",
      ],
    },
    {
      icon: <ShieldCheck size={23} />,
      title: "Qualidade & Versionamento",
      description:
        "Práticas para aumentar a confiabilidade do código e organizar o desenvolvimento colaborativo.",
      skills: [
        "Git",
        "GitHub",
        "JUnit",
        "Mockito",
        "Selenium",
        "Testes unitários",
        "Boas práticas",
      ],
    },
    {
      icon: <BarChart3 size={23} />,
      title: "Dados & BI",
      description:
        "Organização, análise e visualização de informações para apoiar decisões.",
      skills: [
        "Excel",
        "Power BI",
        "Análise de dados",
        "Dashboards",
        "Indicadores",
        "Visualização de dados",
      ],
    },
    {
      icon: <Cloud size={23} />,
      title: "Cloud, infraestrutura & ferramentas",
      description:
        "Conhecimentos fundamentais em nuvem, redes e ferramentas utilizadas no desenvolvimento.",
      skills: [
        "Microsoft Azure",
        "AWS",
        "Cloud Computing",
        "Figma",
        "Redes",
        "Cisco Packet Tracer",
        "VS Code",
        "Eclipse",
        "Microsoft Project",
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <Reveal>
        <div className="skills-header">
          <span className="section-tag">Competências técnicas</span>

          <h2>
            Tecnologias e conhecimentos aplicados em
            <span className="highlight"> projetos práticos</span>
          </h2>

          <p>
            Competências desenvolvidas durante minha formação acadêmica,
            certificações, estudos independentes e construção de aplicações.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-header">
                <div className="skill-icon">{group.icon}</div>

                <h3>{group.title}</h3>
              </div>

              <p className="skill-description">{group.description}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Skills;