import "./Contact.css";
import Reveal from "../ui/Reveal";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <Reveal>
        <div className="contact-container">
          <div className="contact-hero">
            <span className="section-tag">Vamos conversar!?</span>

            <h2>Tem uma <span className="highlight">oportunidade</span> ou projeto em mente?</h2>

            <p>
              Estou aberto a oportunidades de estágio em tecnologia, com foco em
              desenvolvimento web, dados e inteligência artificial.
            </p>
          </div>

          <div className="contact-panel">
            <div className="contact-main">
              <h3>Matheus Pessoa</h3>
              <span>Full Stack Developer | Data & AI</span>

              <p>
                Se meu perfil fizer sentido para sua equipe, projeto ou
                oportunidade, entre em contato pelo canal que preferir.
              </p>
            </div>

            <div className="contact-actions">
              <a href="mailto:matheustelles1410@gmail.com" className="contact-action primary">
                <FaEnvelope />
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/matheuspessoa1816"
                target="_blank"
                rel="noreferrer"
                className="contact-action"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href="https://github.com/matheuspessoa14"
                target="_blank"
                rel="noreferrer"
                className="contact-action"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://wa.me/5521975715380"
                target="_blank"
                rel="noreferrer"
                className="contact-action"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>
          </div>

          <footer className="contact-footer">
            <span>© 2026 Matheus Pessoa Telles</span>
            <span>Built with React + Vite</span>
          </footer>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;