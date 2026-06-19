import "./Events.css";
import Reveal from "../ui/Reveal";
import { FaLinkedin } from "react-icons/fa";

import webSummitLogo from "../../assets/logos/websummit.png";
import riwLogo from "../../assets/logos/riw.png";

function Events() {
  return (
    <section id="events" className="events">
      <Reveal>
        <div className="events-header">
          <span className="section-tag">Eventos & Comunidade</span>
          <h2>Conectado ao <span className="highlight">ecossistema de inovação.</span></h2>
        </div>

        <div className="events-grid">
          <div className="event-card">
            <div className="event-top">
              <img
                src={webSummitLogo}
                alt="Web Summit Rio"
                className="event-logo"
              />
            </div>

            <h3>Web Summit Rio</h3>

            <div className="event-meta">
              <span>2025</span>
              <span>2026</span>
            </div>

            <p>
              Participação em conteúdos sobre tecnologia, inteligência
              artificial, startups, inovação e transformação digital.
            </p>

            <div className="event-tags">
              <span>IA</span>
              <span>Startups</span>
              <span>Networking</span>
              <span>Inovação</span>
            </div>
          </div>

          <div className="event-card">
            <div className="event-top">
              <img
                src={riwLogo}
                alt="Rio Innovation Week"
                className="event-logo"
              />
            </div>

            <h3>Rio Innovation Week</h3>

            <div className="event-meta">
              <span>2025</span>
              <span>2026</span>
            </div>

            <p>
              Participação em painéis e experiências voltadas para tecnologia,
              negócios, empreendedorismo e futuro do mercado.
            </p>

            <div className="event-tags">
              <span>Tecnologia</span>
              <span>Negócios</span>
              <span>Futuro</span>
              <span>Comunidade</span>
              <span>Networking</span>
            </div>
          </div>
        </div>

        <div className="network-box">
          <FaLinkedin />

          <div>
            <h3>Networking em crescimento</h3>

            <p>
              Mais de 1.300 conexões no LinkedIn, acompanhando profissionais,
              empresas, oportunidades e tendências do mercado de tecnologia.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Events;