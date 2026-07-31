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
  SiAngular,
  SiFastapi,
  SiGit,
  SiLinux,
  SiPostgresql,
  SiPython,
  SiSpringboot,
  SiTypescript,
} from 'react-icons/si'

import { FaJava } from 'react-icons/fa'

const metrics = [
  {
    value: '5+',
    label: 'Años de experiencia',
    icon: FaBriefcase,
  },
  {
    value: '3',
    label: 'Sectores empresariales',
    icon: FaBuilding,
  },
  {
    value: 'Productos',
    label: 'Desarrollo y evolución',
    icon: FaCode,
  },
  {
    value: 'Producción',
    label: 'Backend e integraciones',
    icon: FaGlobe,
  },
]

const mainTechnologies = [
  { name: 'Java', icon: FaJava },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Angular', icon: SiAngular },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Python', icon: SiPython },
  { name: 'FastAPI', icon: SiFastapi },
  { name: 'Git', icon: SiGit },
  { name: 'Linux', icon: SiLinux },
]

const sectors = [
  {
    name: 'Sector bancario',
    description:
      'Evolución continua de autenticación, transferencias, seguridad, integraciones y soporte a producción.',
    icon: FaLandmark,
  },
  {
    name: 'Sector asegurador',
    description:
      'Facturación electrónica, reglas de negocio, servicios REST y SOAP, y evolución de aplicaciones.',
    icon: FaShieldAlt,
  },
  {
    name: 'Sector gubernamental',
    description:
      'Ecosistema de sistemas institucionales, automatización, nómina, biométricos, reportes y despliegues.',
    icon: FaBuilding,
  },
  {
    name: 'Producto comercial',
    description:
      'Backend integral para una plataforma de artistas, cursos, productos, membresías y pagos.',
    icon: FaPalette,
  },
]

export function PortfolioOverview() {
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
          Mi trayectoria incluye productos completos, plataformas vivas,
          integraciones, automatizaciones y cambios funcionales de distinto
          alcance.
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
            <p className="panel-label">Stack principal</p>
            <h3>Tecnologías con experiencia práctica</h3>
          </header>

          <div className="technology-icons">
            {mainTechnologies.map((technology) => {
              const Icon = technology.icon

              return (
                <div
                  className="technology-icon-card"
                  key={technology.name}
                  title={technology.name}
                >
                  <Icon aria-hidden="true" />
                  <span>{technology.name}</span>
                </div>
              )
            })}
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
