import "./Certifications.css";
import Reveal from "../ui/Reveal";
import { ExternalLink } from "lucide-react";

import microsoftLogo from "../../assets/logos/microsoft.png";
import ciscoLogo from "../../assets/logos/cisco.png";
import ibmLogo from "../../assets/logos/ibm.png";

function Certifications() {
  const certifications = [
    {
      title: "AZ-900",
      subtitle: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      logo: microsoftLogo,
      link: "https://www.credly.com/badges/6c2f19fc-6566-4dda-9da3-9153fed35406/linked_in_profile",
      skills: ["Azure", "Cloud", "Infrastructure"],
      status: "Concluído",
    },
    {
      title: "Introduction to Cybersecurity",
      subtitle: "Cisco Networking Academy",
      issuer: "Cisco",
      logo: ciscoLogo,
      link: "https://www.credly.com/badges/4161edfc-8cb3-4482-b944-161e025ffb1e/linked_in_profile",
      skills: ["Cybersecurity", "Networks", "Security"],
      status: "Concluído",
    },
    {
      title: "Introduction to IoT",
      subtitle: "Cisco Networking Academy",
      issuer: "Cisco",
      logo: ciscoLogo,
      link: "https://www.credly.com/badges/395f7a96-3642-4365-9d46-5965ce6dff1b/linked_in_profile",
      skills: ["IoT", "Devices", "Networking"],
      status: "Concluído",
    },
    {
      title: "Introduction to Data Science",
      subtitle: "Cisco Networking Academy",
      issuer: "Cisco",
      logo: ciscoLogo,
      link: "https://www.credly.com/badges/f8397b55-894c-4e78-b8f5-891b9b0ea431/linked_in_profile",
      skills: ["Data", "Analytics", "Python"],
      status: "Concluído",
    },
    {
      title: "AI Fundamentals",
      subtitle: "IBM SkillsBuild",
      issuer: "IBM",
      logo: ibmLogo,
      link: "https://www.credly.com/badges/edaefa8d-dc4e-452b-b29b-eea2ad82b872/linked_in_profile",
      skills: ["AI", "Machine Learning", "Prompting"],
      status: "Concluído",
    },
    {
      title: "AI-900",
      subtitle: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      logo: microsoftLogo,
      link: "#",
      skills: ["Azure AI", "Machine Learning"],
      status: "Em preparação",
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <Reveal>
        <div className="certifications-header">
          <span className="section-tag">Certificações Internacionais</span>

          <h2>Conhecimentos validados por <span className="highlight">empresas globais</span></h2>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-top">
                <img src={cert.logo} alt={cert.issuer} className="cert-logo" />

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-link"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              <h3>{cert.title}</h3>

              <p className="cert-subtitle">{cert.subtitle}</p>

              <span
                className={
                  cert.status === "Em preparação"
                    ? "cert-status preparation"
                    : "cert-status"
                }
              >
                {cert.status}
              </span>

              <div className="cert-skills">
                {cert.skills.map((skill, i) => (
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

export default Certifications;
