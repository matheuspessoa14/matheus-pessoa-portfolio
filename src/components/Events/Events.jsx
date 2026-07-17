import "./Events.css";
import Reveal from "../ui/Reveal";
import { FaLinkedin } from "react-icons/fa";

import webSummitLogo from "../../assets/logos/websummit.png";
import riwLogo from "../../assets/logos/riw.png";

function Events() {
  const events = [
    {
      name: "Web Summit Rio",
      logo: webSummitLogo,
      logoAlt: "Logo do Web Summit Rio",
      years: ["2025", "2026"],
      description:
        "Participação em palestras, painéis e experiências sobre tecnologia, inteligência artificial, startups, inovação e transformação digital.",
      tags: ["IA", "Startups", "Networking", "Inovação"],
    },
    {
      name: "Rio Innovation Week",
      logo: riwLogo,
      logoAlt: "Logo do Rio Innovation Week",
      years: ["2025", "2026"],
      description:
        "Participação em palestras e experiências relacionadas a tecnologia, negócios, empreendedorismo, inovação e futuro do mercado.",
      tags: [
        "Tecnologia",
        "Negócios",
        "Empreendedorismo",
        "Comunidade",
        "Networking",
      ],
    },
  ];

  return (
    <section id="events" className="events">
      <Reveal>
        <div className="events-header">
          <span className="section-tag">Eventos e comunidade</span>

          <h2>
            Participação no{" "}
            <span className="highlight">ecossistema de inovação</span>
          </h2>

          <p>
            Participação em eventos de tecnologia e inovação para acompanhar
            tendências, ampliar conhecimentos e fortalecer conexões
            profissionais.
          </p>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <article className="event-card" key={event.name}>
              <div className="event-top">
                <div className="event-logo-wrapper">
                  <img
                    src={event.logo}
                    alt={event.logoAlt}
                    className="event-logo"
                  />
                </div>

                <div className="event-years">
                  {event.years.map((year) => (
                    <span key={year}>{year}</span>
                  ))}
                </div>
              </div>

              <h3>{event.name}</h3>

              <p>{event.description}</p>

              <div className="event-tags">
                {event.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <a
          href="https://www.linkedin.com/in/matheuspessoa1816"
          target="_blank"
          rel="noreferrer"
          className="network-box"
          aria-label="Acessar o LinkedIn de Matheus Pessoa"
        >
          <div className="network-icon">
            <FaLinkedin />
          </div>

          <div className="network-content">
            <h3>Rede profissional em crescimento</h3>

            <p>
              Mais de 1.300 conexões no LinkedIn, utilizando a plataforma para
              acompanhar empresas, interagir com profissionais, compartilhar
              projetos e conhecer oportunidades no mercado de tecnologia.
            </p>
          </div>

          <span className="network-link">Acessar LinkedIn →</span>
        </a>
      </Reveal>
    </section>
  );
}

export default Events;