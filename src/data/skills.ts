import type { IconType } from 'react-icons'

import {
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaShieldAlt,
  FaTools,
} from 'react-icons/fa'

export interface SkillGroup {
  title: string
  description: string
  skills: string[]
  icon: IconType
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend y arquitectura',
    description:
      'Mi área principal de especialización y experiencia profesional.',
    skills: [
      'Java',
      'Spring Boot',
      'Spring Framework',
      'Java EE',
      'Microservicios',
      'APIs REST',
      'SOAP',
      'FastAPI',
      'Python',
    ],
    icon: FaCode,
  },
  {
    title: 'Frontend funcional',
    description:
      'Experiencia práctica en integración de servicios, validaciones y flujos de negocio.',
    skills: [
      'Angular',
      'AngularJS',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'React',
    ],
    icon: FaLaptopCode,
  },
  {
    title: 'Datos e integración',
    description:
      'Persistencia, consultas, migraciones, reportes e intercambio de información.',
    skills: [
      'Oracle',
      'PostgreSQL',
      'MySQL',
      'SQL Server',
      'SQL',
      'DBF',
      'XML',
      'Flyway',
      'JasperReports',
    ],
    icon: FaDatabase,
  },
  {
    title: 'Herramientas y despliegue',
    description:
      'Herramientas utilizadas durante desarrollo, pruebas, colaboración y producción.',
    skills: [
      'Maven',
      'Gradle',
      'GitHub',
      'GitLab',
      'Jira',
      'Postman',
      'JUnit',
      'Mockito',
      'Linux',
      'systemd',
      'Apache Tomcat',
      'OpenShift',
      'DigitalOcean',
    ],
    icon: FaTools,
  },
  {
    title: 'Seguridad, pagos y plataformas',
    description:
      'Autenticación, autorización, pagos e integración con plataformas empresariales.',
    skills: [
      'Spring Security',
      'JWT',
      'Keycloak',
      'Stripe',
      'Modyo Connect',
      'Sentinel',
      'Sesiones',
      'Roles y permisos',
      'Sistemas core',
    ],
    icon: FaShieldAlt,
  },
]
