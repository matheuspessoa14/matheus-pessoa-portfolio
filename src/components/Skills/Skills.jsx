import "./Skills.css";
import Reveal from "../ui/Reveal";

import {
  Monitor,
  Server,
  Database,
  ShieldCheck,
  BarChart3,
  BriefcaseBusiness,
} from "lucide-react";

function Skills() {
  return (
    <section id="skills" className="skills">
      <Reveal>
        <div className="skills-header">
          <span className="section-tag">
            Hard Skills & Habilidades
          </span>

          <h2>
            Tecnologias, <span className="highlight">Ferramentas</span> e Conhecimentos
          </h2>

        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-icon">
              <Monitor size={24} />
            </div>

            <h3>Frontend</h3>

            <div className="skill-tags">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Angular</span>
              <span>Bootstrap</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <Server size={24} />
            </div>

            <h3>Backend</h3>

            <div className="skill-tags">
              <span>Java</span>
              <span>Python</span>
              <span>APIs REST</span>
              <span>Spring Boot</span>
              <span>Flask</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <Database size={24} />
            </div>

            <h3>Banco de Dados</h3>

            <div className="skill-tags">
              <span>SQL</span>
              <span>MySQL</span>
              <span>PostgreSQL</span>
              <span>SQLite</span>
              <span>Modelagem</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <ShieldCheck size={24} />
            </div>

            <h3>Qualidade de Software</h3>

            <div className="skill-tags">
              <span>JUnit</span>
              <span>Mockito</span>
              <span>Testes Unitários</span>
              <span>Boas Práticas</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <BarChart3 size={24} />
            </div>

            <h3>Dados & BI</h3>

            <div className="skill-tags">
              <span>Excel</span>
              <span>Power BI</span>
              <span>Análise de Dados</span>
              <span>Dashboards</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <BriefcaseBusiness size={24} />
            </div>

            <h3>Ferramentas & Gestão </h3>

            <div className="skill-tags">
              <span>Visual Studio Code</span>
              <span>Eclipse</span>
              <span>Microsoft Project</span>
              <span>Scrum</span>
              <span>Cisco Packet Tracer</span>
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
}

export default Skills;