import "./Certifications.css";
import Reveal from "../ui/Reveal";
import { ExternalLink } from "lucide-react";

import microsoftLogo from "../../assets/logos/microsoft.png";
import ciscoLogo from "../../assets/logos/cisco.png";
import ibmLogo from "../../assets/logos/ibm.png";
import awsLogo from "../../assets/logos/aws.png";

function Certifications() {
  const certifications = [
    {
      title: "AWS Academy Graduate",
      subtitle: "Cloud Foundations – Training Badge",
      issuer: "AWS Academy",
      logo: awsLogo,
      link: "https://www.credly.com/go/43CDyK5D",
      skills: ["AWS", "Cloud Computing", "Cloud Foundations"],
      status: "Concluído",
    },
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
      title: "AI-900",
      subtitle: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      logo: microsoftLogo,
      link: "https://www.credly.com/badges/619971f7-d881-41be-971f-05d5b9796001/public_url",
      skills: ["Azure AI", "Machine Learning", "IA Generativa"],
      status: "Concluído",
    },
    {
      title: "SC-900",
      subtitle: "Microsoft Security, Compliance, and Identity Fundamentals",
      issuer: "Microsoft",
      logo: microsoftLogo,
      link: "https://www.credly.com/badges/fe116034-0fb6-45d5-9e1a-4971bf22080d/public_url",
      skills: ["Security", "Compliance", "Identity"],
      status: "Concluído",
    },
    {
      title: "DP-900",
      subtitle: "Microsoft Azure Data Fundamentals",
      issuer: "Microsoft",
      logo: microsoftLogo,
      link: "https://www.credly.com/badges/4fda3e79-6818-4d0a-8630-2181d6357866/public_url",
      skills: ["Data", "Azure", "Cloud"],
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
  ];

  return (
    <section id="certifications" className="certifications">
      <Reveal>
        <div className="certifications-header">
          <span className="section-tag">
            Certificações e Credenciais
          </span>

          <h2>
            Formação contínua com{" "}
            <span className="highlight">empresas globais</span>
          </h2>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <article className="cert-card" key={cert.title}>
              <div className="cert-top">
                <img
                  src={cert.logo}
                  alt={`Logo da ${cert.issuer}`}
                  className="cert-logo"
                />

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-link"
                    aria-label={`Ver credencial ${cert.title}`}
                    title={`Ver credencial ${cert.title}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
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
                {cert.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Certifications;