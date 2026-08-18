import "./Contact.css";
import Reveal from "../ui/Reveal";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaCode,
  FaDatabase,
  FaCloud,
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
              Vamos <span className="highlight">conversar?</span>
            </h2>

            <p>
              Estou aberto a trocar ideias sobre tecnologia, desenvolvimento
              de software, dados e inteligência artificial, além de projetos,
              networking e futuras oportunidades.
            </p>
          </div>

          <div className="contact-panel">
            <div className="contact-main">
              <div className="contact-status">
                <span className="contact-status-dot"></span>
                Aberto a networking e novas conexões
              </div>

              <h3>Matheus Pessoa Telles</h3>

              <span className="contact-role">
                Full Stack Development • Dados • Cloud • Inteligência Artificial
              </span>

              <p>
                Atualmente atuo como Desenvolvedor Full Stack no Instituto
                Fundação João Goulart (FJG), no Rio de Janeiro. Continuo
                evoluindo profissionalmente por meio de projetos, estudos e
                experiências práticas em tecnologia.
              </p>

              <div className="contact-meta">
                <span>
                  <FaMapMarkerAlt />
                  Rio de Janeiro, RJ
                </span>

                <span>
                  <FaCode />
                  Desenvolvimento Web
                </span>

                <span>
                  <FaDatabase />
                  Dados & Inteligência Artificial
                </span>

                <span>
                  <FaCloud />
                  Cloud
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