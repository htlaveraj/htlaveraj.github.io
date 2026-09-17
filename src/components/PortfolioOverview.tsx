import {
  FaBriefcase,
  FaBuilding,
  FaCode,
  FaGlobe,
  FaLandmark,
  FaPalette,
  FaShieldAlt,
} from 'react-icons/fa'

import {
  SiGit,
  SiLinux,
  SiPostgresql,
  SiSpringboot,
} from 'react-icons/si'

import { FaJava } from 'react-icons/fa'


export function PortfolioOverview() {
  const metrics = [
    {
      value: '5+',
      label: "Años de experiencia",
      icon: FaBriefcase,
    },
    {
      value: '4',
      label: "Sectores / entornos",
      icon: FaBuilding,
    },
    {
      value: "Producción",
      label: "Sistemas e integraciones",
      icon: FaGlobe,
    },
    {
      value: 'Integral',
      label: "Backend de producto",
      icon: FaCode,
    },
  ]

  const mainTechnologies = [
    { name: 'Java', icon: FaJava },
    { name: 'Spring Boot', icon: SiSpringboot },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'APIs REST', icon: FaCode },
    { name: 'Spring Security', icon: FaShieldAlt },
    { name: 'Git', icon: SiGit },
    { name: 'Linux', icon: SiLinux },
  ]

  const sectors = [
    {
      name: "Banca",
      description: "Evolución continua de autenticación, transferencias, seguridad, integraciones y soporte a producción.",
      icon: FaLandmark,
    },
    {
      name: "Seguros",
      description: "Facturación electrónica, reglas de negocio, servicios REST y SOAP, y evolución de aplicaciones.",
      icon: FaShieldAlt,
    },
    {
      name: "Gobierno",
      description: "Sistemas institucionales, automatización, nómina, biométricos, reportes y despliegues.",
      icon: FaBuilding,
    },
    {
      name: "Producto comercial",
      description: "Backend integral para una plataforma de artistas, cursos, productos, membresías y pagos.",
      icon: FaPalette,
    },
  ]

  return (
    <section
      className="section overview-section"
      aria-labelledby="overview-title"
    >
      <div className="overview-heading">
        <div>
          <p className="section-label">Resumen profesional</p>

          <h2 id="overview-title">
            Experiencia construyendo y evolucionando soluciones reales.
          </h2>
        </div>

        <p>
          Experiencia backend en banca, seguros, gobierno y producto comercial: desde lógica de negocio e integraciones hasta despliegue y soporte a producción.
        </p>
      </div>

      <div className="metrics-grid">
        {metrics.map((metric) => {
          const Icon = metric.icon

          return (
            <article className="metric-card" key={metric.label}>
              <div className="metric-icon" aria-hidden="true">
                <Icon />
              </div>

              <div>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            </article>
          )
        })}
      </div>

      <div className="overview-panels">
        <article className="overview-panel stack-panel">
          <header className="panel-heading">
            <p className="panel-label">Tecnologías principales</p>
            <h3>Java · Spring Boot · Microservicios · APIs REST</h3>
          </header>

          <div className="technology-icons">
            {mainTechnologies.map((technology) => {
              const Icon = technology.icon

              return (
                <div
                  className={`technology-icon-card ${['Java', 'Spring Boot'].includes(technology.name) ? 'technology-primary' : ''}`}
                  key={technology.name}
                  title={technology.name}
                >
                  <Icon aria-hidden="true" />
                  <span>{technology.name}</span>
                </div>
              )
            })}
          </div>
          <div className="complementary-stack">
            <p className="panel-label">Tecnologías complementarias</p>
            <div className="skill-items">
              {['Angular', 'TypeScript', 'Python', 'FastAPI', 'React'].map(name => <span key={name}>{name}</span>)}
            </div>
          </div>
        </article>

        <article className="overview-panel sectors-panel">
          <header className="panel-heading">
            <p className="panel-label">Tipos de experiencia</p>
            <h3>Entornos donde he desarrollado soluciones</h3>
          </header>

          <div className="sector-cards">
            {sectors.map((sector) => {
              const Icon = sector.icon

              return (
                <article className="sector-card" key={sector.name}>
                  <div className="sector-icon" aria-hidden="true">
                    <Icon />
                  </div>

                  <div>
                    <h4>{sector.name}</h4>
                    <p>{sector.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </article>
      </div>
    </section>
  )
}
