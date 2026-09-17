
export interface Experience {
  id: 'dgp-actual' | 'mifel' | 'sura' | 'dgp-inicial'
  company: string
  role: string
  period: string
  location: string
  description: string
  highlights: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    id: 'dgp-actual',
    company: 'Dirección General de Personal',
    role: 'Desarrollador de Software / Analista de Sistemas',
    period: 'Octubre 2024 — Actualidad',
    location: 'Gobierno del Estado de México · Toluca',
    description:
      'Desarrollo, integración, automatización y despliegue de soluciones backend institucionales para procesos internos.',
    highlights: [
      'Desarrollo y mantenimiento de servicios backend con Java, Spring Boot y PostgreSQL.',
      'Desarrollo de módulos de una plataforma integral de servicio social para instituciones, usuarios, vacantes, postulaciones, expedientes, documentos y seguimiento.',
      'Integración de APIs REST, autenticación, autorización por roles, manejo de sesiones y validación de información.',
      'Integración de dispositivos biométricos mediante servicios desarrollados con FastAPI y Java para registrar asistencias y calcular horas.',
      'Desarrollo de herramientas con Python y SQL para procesar, validar y generar reportes de nómina desde archivos DBF y Excel.',
      'Configuración y despliegue de servicios en Linux mediante systemd, Uvicorn y Spring Boot.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'REST',
      'PostgreSQL',
      'Python',
      'FastAPI',
      'Linux',
      'systemd',
    ],
  },
  {
    id: 'mifel',
    company: 'Banca Mifel',
    role: 'Analista Desarrollador Java Backend',
    period: 'Octubre 2025 — Julio 2026',
    location: 'Modalidad remota',
    description:
      'Desarrollo y mantenimiento evolutivo de microservicios con Java y Spring Boot para una aplicación de banca móvil.',
    highlights: [
      'Corrección del flujo de autenticación para diferenciar credenciales incorrectas, tiempos de espera agotados e indisponibilidad de proveedores externos.',
      'Optimización de validaciones del inicio de sesión para reducir solicitudes innecesarias hacia servicios centrales.',
      'Mejora del tiempo de respuesta de transferencias mediante la optimización del flujo y eliminación de una consulta de base de datos de alto costo.',
      'Desarrollo de microservicios con Java y Spring Boot para su consumo por la aplicación de banca móvil.',
      'Integración de validaciones de Sentinel en el inicio de sesión, transferencias, DiMo, cambio de contraseña y actualización de datos.',
      'Desarrollo de clientes REST y SOAP conectados con sistemas internos, proveedores externos y el núcleo bancario.',
      'Integración de notificaciones push, apoyo en certificaciones de CoDi y soporte a producción mediante análisis de registros.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Microservicios',
      'REST',
      'SOAP',
      'Oracle',
      'Keycloak',
      'Sentinel',
      'Modyo Connect',
      'GitLab',
      'Jira',
    ],
  },
  {
    id: 'sura',
    company: 'Seguros SURA',
    role: 'Programador Java / Full Stack',
    period: 'Octubre 2022 — Octubre 2024',
    location: 'Área de Soporte Web · Ciudad de México',
    description:
      'Desarrollo y mantenimiento de aplicaciones empresariales para procesos de facturación y operación de seguros.',
    highlights: [
      'Desarrollo de un módulo de facturación electrónica para pólizas de ingreso, complementos de pago y notas de crédito.',
      'Implementación de servicios REST y reglas de validación con Spring y Spring Boot.',
      'Integración de servicios backend con aplicaciones desarrolladas en Angular y AngularJS.',
      'Generación y validación de XML para el timbrado de comprobantes.',
      'Integración de servicios SOAP para la emisión de comprobantes ante el SAT.',
      'Reingeniería y mantenimiento de aplicaciones conforme a nuevas reglas de negocio.',
      'Diseño de componentes funcionales en Angular y optimización de consultas SQL.',
    ],
    technologies: [
      'Java',
      'Spring',
      'Spring Boot',
      'REST',
      'SOAP',
      'XML',
      'SQL',
      'Angular',
      'AngularJS',
      'TypeScript',
      'Git',
    ],
  },
  {
    id: 'dgp-inicial',
    company: 'Unidad de Informática',
    role: 'Programador / Soporte a Nómina',
    period: 'Septiembre 2020 — Octubre 2022',
    location: 'Dirección General de Personal · Toluca',
    description:
      'Desarrollo de herramientas institucionales, consultas de nómina, automatización y soporte técnico.',
    highlights: [
      'Desarrollo de consultas SQL para extraer información de nómina y generar reportes operativos y de auditoría.',
      'Creación de herramientas de automatización para reducir tareas manuales y mejorar la precisión de la información.',
      'Liderazgo del proyecto Cineclub mediante una aplicación web con arquitectura MVC.',
      'Generación de reportes con JasperReports, carga de archivos CSV y consumo de servicios web.',
      'Liderazgo del proyecto Biblioteca Virtual utilizando Java, Thymeleaf y MVC.',
      'Configuración y despliegue de aplicaciones mediante Apache Tomcat.',
    ],
    technologies: [
      'Java',
      'SQL',
      'MVC',
      'Thymeleaf',
      'JasperReports',
      'CSV',
      'Apache Tomcat',
    ],
  },
]
