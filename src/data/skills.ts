import type { IconType } from 'react-icons'
import { FaCode, FaDatabase, FaLaptopCode, FaShieldAlt, FaTools } from 'react-icons/fa'

export interface SkillGroup {
  title: string
  description: string
  skills: string[]
  icon: IconType
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend y arquitectura',
    description: 'Mi principal área de especialización y experiencia profesional.',
    skills: ['Java', 'Spring Boot', 'Spring Framework', 'Java EE', 'Microservicios', 'APIs REST', 'SOAP', 'Python', 'FastAPI'],
    icon: FaCode,
  },
  {
    title: 'Datos y persistencia',
    description: 'Persistencia, consultas, migraciones, reportes e intercambio de información.',
    skills: ['PostgreSQL', 'Spring Data JPA', 'Hibernate', 'Oracle', 'MySQL', 'SQL Server', 'SQL', 'DBF', 'XML', 'Flyway', 'JasperReports'],
    icon: FaDatabase,
  },
  {
    title: 'Seguridad e integraciones',
    description: 'Autenticación, autorización, pagos e integración con plataformas empresariales.',
    skills: ['Spring Security', 'JWT', 'Keycloak', 'REST', 'SOAP', 'Stripe', 'Modyo Connect', 'Sentinel'],
    icon: FaShieldAlt,
  },
  {
    title: 'Herramientas y despliegue',
    description: 'Herramientas utilizadas durante desarrollo, pruebas, colaboración y producción.',
    skills: ['Git', 'Linux', 'Maven', 'Gradle', 'GitHub', 'GitLab', 'Jira', 'Postman', 'JUnit', 'Mockito', 'systemd', 'Apache Tomcat', 'OpenShift', 'DigitalOcean'],
    icon: FaTools,
  },
  {
    title: 'Frontend funcional',
    description: 'Experiencia práctica como complemento al desarrollo backend, principalmente en consumo de APIs, validaciones, formularios y flujos de negocio.',
    skills: ['Angular', 'AngularJS', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'React'],
    icon: FaLaptopCode,
  },
]
