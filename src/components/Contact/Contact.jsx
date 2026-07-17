import "./Contact.css";
import Reveal from "../ui/Reveal";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaBriefcase,
  FaPlane,
  FaHome,
} from "react-icons/fa";

function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="contact" id="contact">
      <Reveal>
        <div className="contact-container">
          <div className="contact-hero">
            <span className="section-tag">Contato</span>

            <h2>
              Vamos conversar sobre{" "}
              <span className="highlight">oportunidades</span>
            </h2>

            <p>
              Estou disponível para oportunidades em tecnologia, com interesse
              em desenvolvimento web, dados e inteligência artificial, nos
              modelos presencial, híbrido ou remoto.
            </p>
          </div>

          <div className="contact-panel">
            <div className="contact-main">
              <div className="contact-status">
                <span className="contact-status-dot"></span>
                Disponível para oportunidades em TI
              </div>

              <h3>Matheus Pessoa Telles</h3>

              <span className="contact-role">
                Desenvolvimento Web • Dados • Inteligência Artificial
              </span>

              <p>
                Tenho disponibilidade para atuar no Rio de Janeiro e em São
                Paulo, presencialmente ou em modelo híbrido, além de estar
                aberto a oportunidades remotas. Também possuo disponibilidade
                para viagens e mudança de cidade, conforme as necessidades da
                oportunidade.
              </p>

              <div className="contact-meta">
                <span>
                  <FaMapMarkerAlt />
                  Rio de Janeiro e São Paulo
                </span>

                <span>
                  <FaHome />
                  Presencial, híbrido ou remoto
                </span>

                <span>
                  <FaPlane />
                  Disponibilidade para viagens
                </span>

                <span>
                  <FaBriefcase />
                  Disponibilidade para mudança
                </span>
              </div>
            </div>

            <div className="contact-actions">
              <a
                href="mailto:matheustelles1410@gmail.com"
                className="contact-action primary"
                aria-label="Enviar e-mail para Matheus Pessoa"
              >
                <FaEnvelope />
                E-mail
              </a>

              <a
                href="https://www.linkedin.com/in/matheuspessoa1816"
                target="_blank"
                rel="noreferrer"
                className="contact-action"
                aria-label="Acessar LinkedIn de Matheus Pessoa"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href="https://github.com/matheuspessoa14"
                target="_blank"
                rel="noreferrer"
                className="contact-action"
                aria-label="Acessar GitHub de Matheus Pessoa"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://wa.me/5521975715380"
                target="_blank"
                rel="noreferrer"
                className="contact-action"
                aria-label="Entrar em contato com Matheus Pessoa pelo WhatsApp"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>
          </div>

          <footer className="contact-footer">
            <span>© {currentYear} Matheus Pessoa Telles</span>
            <span>Desenvolvido com React + Vite</span>
          </footer>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;