import "./Education.css";
import Reveal from "../ui/Reveal";
import { CalendarDays } from "lucide-react";

import senacLogo from "../../assets/logos/senac.png";
import uvaLogo from "../../assets/logos/uva.png";

function Education() {
  return (
    <section id="education" className="education">
      <Reveal>
        <div className="education-header">
          <span className="section-tag">Educação</span>
          <h2>Minha formação <span className="highlight">acadêmica</span></h2>
        </div>

        <div className="education-grid">
          <div className="education-card">
            <div className="education-top">
              <img
                src={senacLogo}
                alt="Faculdade SENAC"
                className="education-logo"
              />
            </div>

            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <p className="institution">Faculdade SENAC</p>

            <p className="education-description">
              Formação focada em desenvolvimento de software, banco de dados,
              engenharia de software, arquitetura de sistemas e gestão de
              projetos.
            </p>

            <div className="education-meta">
              <span className="education-status">Em andamento</span>
              <span className="education-period">
                <CalendarDays size={14} />
                4º período • Dez/2026
              </span>
            </div>

            <div className="education-tags">
              <span>Java</span>
              <span>Python</span>
              <span>Spring Boot</span>
              <span>SQL</span>
              <span>Javascript</span>
              <span>API Rest</span>
              <span>JUnit</span>
              <span>Mockito</span>
              <span>Visual Studio Code</span>
              <span>Eclipse</span>
              <span>Microsoft Project</span>
            </div>
          </div>

          <div className="education-card">
            <div className="education-top">
              <img
                src={uvaLogo}
                alt="Universidade Veiga de Almeida"
                className="education-logo"
              />
            </div>

            <h3>Marketing</h3>
            <p className="institution">Universidade Veiga de Almeida</p>

            <p className="education-description">
              Formação voltada para estratégia, comunicação, comportamento do
              consumidor e desenvolvimento de produtos e negócios.
            </p>

            <div className="education-meta">
              <span className="education-status completed">Concluído</span>
              <span className="education-period">
                <CalendarDays size={14} />
                Maio/2026
              </span>
            </div>

            <div className="education-tags">
              <span>Estratégia</span>
              <span>Negócios</span>
              <span>Comunicação</span>
              <span>Marketing Digital</span>
              <span>Produto</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Education;
