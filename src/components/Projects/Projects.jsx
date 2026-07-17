import "./Projects.css";
import Reveal from "../ui/Reveal";
import {
  FaGithub,
  FaCheckCircle,
  FaClock,
  FaFolderOpen,
  FaExternalLinkAlt,
} from "react-icons/fa";

import gastocertoImg from "../../assets/projects/gastocerto.png";
import repertorioImg from "../../assets/projects/repertorio.png";

function Projects() {
  return (
    <section id="projects" className="projects">
      <Reveal>
        <div className="projects-header">
          <span className="section-tag">Projetos</span>
          <h2>
            Projetos em <span className="highlight">destaque</span>
          </h2>
        </div>

        <div className="featured-project">
          <div className="project-image">
            <img src={gastocertoImg} alt="Preview do projeto GastoCerto" />
          </div>

          <div className="featured-content">
            <div className="project-heading">
              <span className="project-status completed">
                <FaCheckCircle />
                Projeto concluído
              </span>

              <span className="project-type">Full Stack Web</span>
            </div>

            <h3>GastoCerto</h3>

            <p>
              Aplicação para controle financeiro pessoal, com autenticação,
              cadastro de receitas e despesas, organização de transações e
              persistência de dados.
            </p>

            <div className="project-highlights">
              <span>Autenticação</span>
              <span>CRUD completo</span>
              <span>API Flask</span>
              <span>Banco SQLite</span>
            </div>

            <div className="project-tags">
              <span>React</span>
              <span>Python</span>
              <span>Flask</span>
              <span>SQLite</span>
              <span>SQLAlchemy</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/matheuspessoa14/fullstack-flask-react-expense-tracker-gastocerto.git"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                Ver repositório
              </a>
            </div>
          </div>
        </div>

        <div className="featured-project repertorio-project">
          <div className="project-image repertorio-image">
            <img src={repertorioImg} alt="Preview do projeto RepertóRio" />
          </div>

          <div className="featured-content">
            <div className="project-heading">
              <span className="project-status completed">
                <FaCheckCircle />
                Projeto concluído
              </span>

              <span className="project-type">Frontend Web</span>
            </div>

            <h3>RepertóRio</h3>

            <p>
              Aplicação frontend desenvolvida em React para uma avaliação
              técnica da Fundação João Goulart, com interface responsiva, dados
              dinâmicos e navegação entre publicações da plataforma RepertóRio.
            </p>

            <div className="project-highlights">
              <span>Interface responsiva</span>
              <span>Dados dinâmicos</span>
              <span>Filtro por categoria</span>
              <span>Publicações relacionadas</span>
            </div>

            <div className="project-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>Vite</span>
              <span>CSS</span>
              <span>JSON</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/matheuspessoa14/technical-challenge-frontend-react-repertorio-fjg"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                Ver repositório
              </a>

              <a
                href="https://repertorio-fjg-matheus-pessoa.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
                Ver aplicação
              </a>
            </div>
          </div>
        </div>

        <div className="future-projects">
          <div className="future-card">
            <div className="project-heading">
              <span className="project-status completed">
                <FaCheckCircle />
                Projeto concluído
              </span>

              <span className="project-type">Full Stack Mobile</span>
            </div>

            <h3>CondoFlow</h3>

            <p>
              Aplicação mobile full stack para gestão condominial, com controle
              de acesso por perfil, cadastro de moradores, visitantes,
              encomendas, reservas e ocorrências.
            </p>

            <div className="project-highlights">
              <span>Controle de acesso</span>
              <span>CRUD completo</span>
              <span>API REST</span>
              <span>Banco MySQL</span>
            </div>

            <div className="project-tags">
              <span>React Native</span>
              <span>Expo</span>
              <span>Java</span>
              <span>Spring Boot</span>
              <span>MySQL</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/matheuspessoa14/fullstack-mobile-condoflow-app"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                Ver repositório
              </a>
            </div>
          </div>

          <div className="future-card">
            <div className="future-top">
              <FaClock />
              <span>Em desenvolvimento</span>
            </div>

            <h3>DevFlow</h3>

            <p>
              Plataforma para gerenciamento de tarefas e organização de fluxos
              de desenvolvimento.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>Spring Boot</span>
              <span>MySQL</span>
            </div>
          </div>
        </div>

        <div className="github-section">
          <div className="github-icon">
            <FaFolderOpen />
          </div>

          <div className="github-content">
            <h3>Mais projetos, estudos e experimentos</h3>

            <p>
              Além dos projetos em destaque, mantenho repositórios com estudos
              acadêmicos, exercícios, testes de software e práticas em
              desenvolvimento web.
            </p>

            <div className="github-items">
              <span>Projetos acadêmicos</span>
              <span>Java & Spring</span>
              <span>Banco de dados</span>
              <span>Testes</span>
              <span>Frontend</span>
            </div>
          </div>

          <a
            href="https://github.com/matheuspessoa14"
            target="_blank"
            rel="noreferrer"
            className="github-button"
          >
            <FaGithub />
            Explorar GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default Projects;
