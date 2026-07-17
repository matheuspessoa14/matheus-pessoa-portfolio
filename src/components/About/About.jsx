import "./About.css";
import Reveal from "../ui/Reveal";

import {
  GraduationCap,
  Award,
  FolderKanban,
  Users,
  BriefcaseBusiness,
  Code2,
  Lightbulb,
} from "lucide-react";

function About() {
  const differentials = [
    {
      icon: <BriefcaseBusiness />,
      title: "Visão de negócio",
      description:
        "Compreensão de usuários, processos, comunicação e objetivos organizacionais.",
    },
    {
      icon: <Code2 />,
      title: "Experiência prática",
      description:
        "Desenvolvimento de interfaces, APIs REST, bancos de dados e aplicações full stack.",
    },
    {
      icon: <Lightbulb />,
      title: "Aprendizado contínuo",
      description:
        "Formação complementada por projetos, monitorias, certificações e estudos independentes.",
    },
  ];

  const stats = [
    {
      icon: <GraduationCap />,
      value: "2",
      label: "Graduações na trajetória",
    },
    {
      icon: <Award />,
      value: "7+",
      label: "Certificações e badges",
    },
    {
      icon: <FolderKanban />,
      value: "5+",
      label: "Projetos práticos",
    },
    {
      icon: <Users />,
      value: "2",
      label: "Monitorias acadêmicas",
    },
  ];

  return (
    <section id="about" className="about">
      <Reveal>
        <div className="about-header">
          <span className="section-tag">Sobre mim</span>

          <h2>
            Visão de negócio aplicada à
            <span className="highlight"> construção de tecnologia</span>
          </h2>
        </div>

        <div className="about-layout">
          <div className="about-text">
            <p>
              Minha formação em Marketing me proporcionou conhecimentos sobre
              comportamento do usuário, comunicação, processos e objetivos de
              negócio. Atualmente, na graduação em Análise e Desenvolvimento de
              Sistemas, aprofundo essa visão por meio do desenvolvimento de
              aplicações e da construção de soluções tecnológicas.
            </p>

            <p>
              Essa integração está presente em projetos como GastoCerto,
              CondoFlow e RepertóRio, nos quais trabalhei com frontend, backend,
              APIs REST, bancos de dados e interfaces responsivas. Também
              participei de monitorias acadêmicas e busco ampliar meus
              conhecimentos por meio de formações da Microsoft, AWS, Cisco e
              IBM.
            </p>
          </div>

          <div className="about-differentials">
            {differentials.map((item) => (
              <article className="differential-card" key={item.title}>
                <div className="differential-icon">{item.icon}</div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="about-stats">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <div className="stat-icon">{stat.icon}</div>

              <div>
                <h3>{stat.value}</h3>
                <span>{stat.label}</span>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default About;