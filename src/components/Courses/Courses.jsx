import "./Courses.css";
import Reveal from "../ui/Reveal";
import { ExternalLink } from "lucide-react";

import senacLogo from "../../assets/logos/senac.png";
import senaiLogo from "../../assets/logos/senai.png";
import udemyLogo from "../../assets/logos/udemy.png";

function Courses() {
  const courses = [
    {
      title: "Programador Back-End",
      institution: "SENAI",
      logo: senaiLogo,
      period: "180h • Abr/2026",
      status: "Concluído",
      link: "https://drive.google.com/file/d/1luCmLMt4GbNcg43iplkmRaCsYtEgVcV9/view?usp=sharing",
      skills: ["Backend", "Java","Spring Boot","Python", "APIs", "Lógica de Programação",],
    },
    {
      title: "Administrador de Banco de Dados",
      institution: "SENAI",
      logo: senaiLogo,
      period: "180h • Abr/2026",
      status: "Concluído",
      link: "https://drive.google.com/file/d/14W4MWDwfktNCaTt-Bcrys4ujRm6QyWKg/view?usp=sharing",
      skills: ["Banco de Dados", "MySQL", "SQL", "Modelagem"],
    },
    {
      title: "Operador de Infraestrutura de Redes",
      institution: "SENAI",
      logo: senaiLogo,
      period: "320h • Ago/2024",
      status: "Concluído",
      link: "https://drive.google.com/file/d/1lVWS5YmhicgJnuoZ6LyQwx8PSBdrihwY/view?usp=sharing",
      skills: ["Redes", "Infraestrutura", "TCP/IP"],
    },
    {
      title: "Inteligência Artificial aplicada à Indústria 4.0",
      institution: "SENAI",
      logo: senaiLogo,
      period: "200h • Jun/2026",
      status: "Concluído",
      link: "#",
      skills: ["Inteligência Artificial", "Indústria 4.0", "Machine Learning"],
    },
    {
      title: "Programador Front-End com IA",
      institution: "SENAC",
      logo: senacLogo,
      period: "80h • Jan/2026",
      status: "Concluído",
      link: "https://drive.google.com/file/d/1YrcGIfn_-eQh1K3HFvfaYmChjkM3htBE/view?usp=sharing",
      skills: ["Frontend", "IA", "HTML", "CSS", "JavaScript", "Angular", "React"],
    },
    {
      title: "Git & GitHub",
      institution: "Udemy",
      logo: udemyLogo,
      period: "2,5h • Dez/2025",
      status: "Concluído",
      link: "https://drive.google.com/file/d/1UwtyFk8B9sFe-hfMHGaJ4IR7XPRfOgqq/view?usp=sharing",
      skills: ["Git", "GitHub", "Versionamento"],
    },
  ];

  return (
    <section id="courses" className="courses">
      <Reveal>
        <div className="courses-header">
          <span className="section-tag">Cursos Complementares</span>

          <h2>Formação <span className="highlight">complementar</span></h2>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <div className="course-top">
                <img
                  src={course.logo}
                  alt={course.institution}
                  className="course-logo"
                />

                <a
                  href={course.link}
                  target="_blank"
                  rel="noreferrer"
                  className="course-link"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              <h3>{course.title}</h3>

              <p className="course-institution">{course.institution}</p>

              <div className="course-meta">
                <span
                  className={
                    course.status === "Concluído"
                      ? "course-status completed"
                      : "course-status current"
                  }
                >
                  {course.status}
                </span>

                <span className="course-period">{course.period}</span>
              </div>

              <div className="course-skills">
                {course.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Courses;
