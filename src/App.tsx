import { useState } from 'react'

import {
  FaBars,
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFileDownload,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaMapMarkerAlt,
  FaTimes,
} from 'react-icons/fa'

import './App.css'

import { PortfolioOverview } from './components/PortfolioOverview'
import { experiences } from './data/experience'
import { projects } from './data/projects'
import { skillGroups } from './data/skills'

const CV_PATH = '/cv/CV_Hector_Talavera_Jimenez_2026.pdf'
const EMAIL = 'httjimenez@gmail.com'
const GITHUB_URL = 'https://github.com/htlaveraj'
const LINKEDIN_URL =
  'https://www.linkedin.com/in/hector-talavera-jimenez-270340219/'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedExperiences, setExpandedExperiences] = useState<Set<string>>(
    new Set(),
  )
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(
    new Set(),
  )


  const downloadCv = async (
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault()

    try {
      const response = await fetch(CV_PATH, { cache: 'no-store' })
      const contentType = response.headers.get('content-type') ?? ''

      if (!response.ok || !contentType.includes('application/pdf')) {
        throw new Error('El archivo PDF no se encontró en public/cv.')
      }

      const blob = await response.blob()
      const objectUrl = URL.createObjectURL(blob)
      const link = document.createElement('a')

      link.href = objectUrl
      link.download = 'CV_Hector_Talavera_Jimenez_2026.pdf'
      document.body.appendChild(link)
      link.click()
      link.remove()
      URL.revokeObjectURL(objectUrl)
    } catch (error) {
      console.error(error)
      window.alert(
        'No se encontró el CV. Verifica que exista en public/cv/CV_Hector_Talavera_Jimenez_2026.pdf',
      )
    }
  }

  const closeMenu = () => setIsMenuOpen(false)

  const toggleExperience = (experienceId: string) => {
    setExpandedExperiences((current) => {
      const updated = new Set(current)

      if (updated.has(experienceId)) {
        updated.delete(experienceId)
      } else {
        updated.add(experienceId)
      }

      return updated
    })
  }

  const toggleProject = (projectId: string) => {
    setExpandedProjects((current) => {
      const updated = new Set(current)

      if (updated.has(projectId)) {
        updated.delete(projectId)
      } else {
        updated.add(projectId)
      }

      return updated
    })
  }

  return (
    <div className="site">
      <header className="navbar">
        <a
          className="logo"
          href="#inicio"
          aria-label="Ir al inicio"
          onClick={closeMenu}
        >
          HT<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav
          className={`navigation ${isMenuOpen ? 'navigation-open' : ''}`}
          id="main-navigation"
          aria-label="Navegación principal"
        >
          <a href="#sobre-mi" onClick={closeMenu}>
            Sobre mí
          </a>
          <a href="#tecnologias" onClick={closeMenu}>
            Tecnologías
          </a>
          <a href="#experiencia" onClick={closeMenu}>
            Experiencia
          </a>
          <a href="#proyectos" onClick={closeMenu}>
            Proyectos
          </a>
          <a href="#formacion" onClick={closeMenu}>
            Formación
          </a>
          <a href="#contacto" onClick={closeMenu}>
            Contacto
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <p className="eyebrow">
              Backend Java · Spring Boot · Experiencia Full Stack
            </p>

            <h1>
              Hola, soy
              <span> Héctor Talavera Jiménez.</span>
            </h1>

            <p className="hero-description">
              Desarrollo aplicaciones empresariales, microservicios y APIs
              orientadas a resolver problemas reales. Mi principal fortaleza
              está en el backend con Java, complementada con experiencia
              funcional en Angular, TypeScript y React.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#proyectos">
                Ver mis proyectos
              </a>

              <a
                className="button button-secondary"
                href={CV_PATH}
                onClick={downloadCv}
              >
                <FaFileDownload aria-hidden="true" />
                Descargar CV
              </a>
            </div>
          </div>

          <aside className="profile-card">
            <div className="status">
              <span className="status-indicator" />
              Perfil profesional
            </div>

            <h2>Analista Desarrollador Java Backend</h2>

            <p>
              Más de cinco años desarrollando e integrando soluciones para los
              sectores bancario, asegurador, gubernamental y comercial.
            </p>

            <div className="profile-data">
              <div>
                <span>Especialidad</span>
                <strong>Java y Spring Boot</strong>
              </div>

              <div>
                <span>Integraciones</span>
                <strong>REST, SOAP y servicios externos</strong>
              </div>

              <div>
                <span>Experiencia frontend</span>
                <strong>Angular y React</strong>
              </div>
            </div>
          </aside>
        </section>

        <section className="section" id="sobre-mi">
          <div className="section-heading">
            <p className="section-number">01</p>

            <div>
              <p className="section-label">Sobre mí</p>
              <h2>Construyo soluciones que funcionan.</h2>
            </div>
          </div>

          <div className="about-grid">
            <article className="about-description">
              <p>
                Soy analista desarrollador Java Backend con experiencia en
                aplicaciones empresariales, sistemas financieros, plataformas
                institucionales y productos comerciales. He participado en el
                análisis, desarrollo, mantenimiento, integración y soporte de
                funcionalidades críticas.
              </p>

              <p>
                Mi especialidad es Java y Spring Boot. También puedo trabajar
                la parte funcional de interfaces con AngularJS, Angular,
                TypeScript y React, principalmente en consumo de APIs,
                validaciones, formularios y flujos de negocio.
              </p>
            </article>

            <div className="specialties">
              <article className="specialty-card">
                <span>Backend</span>
                <h3>Java y Spring Boot</h3>
                <p>
                  Microservicios, lógica de negocio, seguridad, integraciones y
                  APIs empresariales.
                </p>
              </article>

              <article className="specialty-card">
                <span>Producto</span>
                <h3>De la idea a producción</h3>
                <p>
                  Análisis, diseño técnico, base de datos, servicios,
                  integraciones y despliegue.
                </p>
              </article>

              <article className="specialty-card">
                <span>Enfoque</span>
                <h3>Resolver problemas reales</h3>
                <p>
                  Soluciones funcionales, mantenibles y alineadas con las
                  reglas del negocio.
                </p>
              </article>
            </div>
          </div>
        </section>

        <PortfolioOverview />

        <section className="section skills-section" id="tecnologias">
          <div className="section-heading">
            <p className="section-number">02</p>

            <div>
              <p className="section-label">Competencias técnicas</p>
              <h2>Tecnologías utilizadas en proyectos reales.</h2>

              <p className="section-introduction">
                Mi especialidad principal es el desarrollo backend con Java y
                Spring Boot, complementada con experiencia en frontend, bases
                de datos, seguridad, pagos, automatización y despliegue.
              </p>
            </div>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => {
              const Icon = group.icon

              return (
                <article className="skill-group-card" key={group.title}>
                  <header>
                    <span className="skill-group-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <h3>{group.title}</h3>
                  </header>

                  <p>{group.description}</p>

                  <div
                    className="skill-items"
                    aria-label={`Tecnologías de ${group.title}`}
                  >
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section experience-section" id="experiencia">
          <div className="section-heading">
            <p className="section-number">03</p>

            <div>
              <p className="section-label">Experiencia profesional</p>
              <h2>Soluciones empresariales en distintos sectores.</h2>

              <p className="section-introduction">
                Experiencia en banca, seguros y gobierno, principalmente en
                backend, integración de servicios, optimización de procesos y
                soporte de aplicaciones críticas.
              </p>
            </div>
          </div>

          <div className="experience-list">
            {experiences.map((experience) => {
              const isExpanded = expandedExperiences.has(experience.id)
              const visibleHighlights = isExpanded
                ? experience.highlights
                : experience.highlights.slice(0, 3)

              return (
                <article className="experience-card" key={experience.id}>
                  <div className="experience-sidebar">
                    <span className="experience-period">
                      {experience.period}
                    </span>

                    <span className="experience-location">
                      {experience.location}
                    </span>
                  </div>

                  <div className="experience-content">
                    <header className="experience-header">
                      <p className="experience-company">
                        {experience.company}
                      </p>
                      <h3>{experience.role}</h3>
                    </header>

                    <p className="experience-description">
                      {experience.description}
                    </p>

                    <ul
                      className="experience-highlights"
                      id={`experience-details-${experience.id}`}
                    >
                      {visibleHighlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>

                    {experience.highlights.length > 3 && (
                      <button
                        className="expand-button"
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={`experience-details-${experience.id}`}
                        onClick={() => toggleExperience(experience.id)}
                      >
                        {isExpanded ? (
                          <>
                            Ver menos <FaChevronUp aria-hidden="true" />
                          </>
                        ) : (
                          <>
                            Ver más <FaChevronDown aria-hidden="true" />
                          </>
                        )}
                      </button>
                    )}

                    <div
                      className="experience-technologies"
                      aria-label={`Tecnologías utilizadas en ${experience.company}`}
                    >
                      {experience.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section projects-section" id="proyectos">
          <div className="section-heading">
            <p className="section-number">04</p>

            <div>
              <p className="section-label">Casos representativos</p>
              <h2>Productos, evolutivos e iniciativas con impacto real.</h2>

              <p className="section-introduction">
                Esta sección muestra una selección de productos, iniciativas y
                frentes funcionales. No representa el total de desarrollos,
                evolutivos, integraciones, optimizaciones e incidencias que he
                atendido durante mi trayectoria.
              </p>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project) => {
              const isExpanded = expandedProjects.has(project.id)
              const visibleContribution = isExpanded
                ? project.contribution
                : project.contribution.slice(0, 3)

              return (
                <article
                  className={`project-card ${
                    project.featured ? 'project-card-featured' : ''
                  }`}
                  key={project.id}
                >
                  <header className="project-header">
                    <div className="project-badges">
                      {project.commercial && (
                        <span className="project-badge project-badge-commercial">
                          Producto comercial en producción
                        </span>
                      )}

                      <span className="project-badge project-badge-type">
                        {project.type}
                      </span>

                      <span className="project-badge">{project.sector}</span>
                    </div>
                  </header>

                  <div className="project-main">
                    <div className="project-meta">
                      <p className="project-organization">
                        {project.organization}
                      </p>
                      <span>{project.period}</span>
                    </div>

                    <h3>{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>
                  </div>

                  <div className="project-challenge">
                    <span>El reto</span>
                    <p>{project.challenge}</p>
                  </div>

                  <div className="project-contribution">
                    <span>{project.contributionLabel}</span>

                    <ul id={`project-details-${project.id}`}>
                      {visibleContribution.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {project.contribution.length > 3 && (
                    <button
                      className="expand-button"
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={`project-details-${project.id}`}
                      onClick={() => toggleProject(project.id)}
                    >
                      {isExpanded ? (
                        <>
                          Ver menos <FaChevronUp aria-hidden="true" />
                        </>
                      ) : (
                        <>
                          Ver más <FaChevronDown aria-hidden="true" />
                        </>
                      )}
                    </button>
                  )}

                  {project.url && (
                    <a
                      className="project-link"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visitar {project.title}
                      <FaExternalLinkAlt aria-hidden="true" />
                    </a>
                  )}

                  <div
                    className="project-technologies"
                    aria-label={`Tecnologías utilizadas en ${project.title}`}
                  >
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section education-section" id="formacion">
          <div className="section-heading">
            <p className="section-number">05</p>

            <div>
              <p className="section-label">Formación académica</p>
              <h2>Fundamentos que respaldan mi experiencia.</h2>
            </div>
          </div>

          <div className="education-grid">
            <article className="education-card">
              <span className="education-icon" aria-hidden="true">
                <FaGraduationCap />
              </span>

              <div>
                <p className="education-period">2017 — 2023</p>
                <h3>Ingeniería en Sistemas Computacionales</h3>
                <p>
                  Tecnológico de Estudios Superiores de Tianguistenco, Estado
                  de México.
                </p>
                <strong>Título y certificado obtenidos</strong>
              </div>
            </article>

            <article className="education-card">
              <span className="education-icon" aria-hidden="true">
                <FaGraduationCap />
              </span>

              <div>
                <p className="education-period">2011 — 2014</p>
                <h3>Técnico en Operación de Microcomputadoras</h3>
                <p>
                  Academia de Estudios Avanzados en Computación, Tenango del
                  Valle.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section contact-section" id="contacto">
          <div className="contact-copy">
            <p className="section-label">Contacto</p>
            <h2>Hablemos de tu próximo proyecto.</h2>

            <p>
              Estoy abierto a colaborar en proyectos backend, integraciones,
              APIs y soluciones empresariales con Java y Spring Boot.
            </p>

            <a className="contact-email" href={`mailto:${EMAIL}`}>
              <FaEnvelope aria-hidden="true" />
              {EMAIL}
            </a>
          </div>

          <div className="contact-actions">
            <a
              className="contact-card"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub aria-hidden="true" />
              <span>
                <strong>GitHub</strong>
                Ver repositorios públicos
              </span>
              <FaExternalLinkAlt aria-hidden="true" />
            </a>

            <a
              className="contact-card"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin aria-hidden="true" />
              <span>
                <strong>LinkedIn</strong>
                Conectar profesionalmente
              </span>
              <FaExternalLinkAlt aria-hidden="true" />
            </a>

            <a
              className="contact-card"
              href={CV_PATH}
              onClick={downloadCv}
            >
              <FaFileDownload aria-hidden="true" />
              <span>
                <strong>Currículum</strong>
                Descargar versión PDF
              </span>
              <FaChevronDown aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p>Héctor Talavera Jiménez</p>
          <span>Analista Desarrollador Java Backend</span>
        </div>

        <p className="footer-location">
          <FaMapMarkerAlt aria-hidden="true" />
          Estado de México, México
        </p>
      </footer>
    </div>
  )
}

export default App
