
export interface Project {
  id: 'dabook' | 'banca-mifel' | 'sura' | 'gobierno'
  title: string
  organization: string
  period: string
  sector: string
  type: string
  contributionLabel: string
  summary: string
  challenge: string
  contribution: string[]
  technologies: string[]
  featured?: boolean
  commercial?: boolean
  url?: string
}

export const projects: Project[] = [
  {
    id: 'dabook',
    title: 'DaBook',
    organization: 'Proyecto comercial independiente',
    period: 'Julio 2025 — Julio 2026',
    sector: 'Artistas · Comercio digital · Educación',
    type: 'Producto completo',
    contributionLabel: 'Backend desarrollado por mí',
    summary:
      'Producto comercial en producción para que artistas creen perfiles profesionales, ofrezcan servicios y vendan productos y cursos. Desarrollé su backend con Java 17 y Spring Boot.',
    challenge:
      'Integrar en un mismo producto perfiles profesionales, comercio digital, cursos, membresías, pagos y control de acceso a contenido adquirido.',
    contribution: [
      'Desarrollo completo del backend y de la lógica de negocio con Java 17 y Spring Boot.',
      'Implementación de registro, autenticación, autorización, perfiles profesionales y currículums para artistas.',
      'Construcción de módulos para publicar servicios, productos, cursos y contenido digital.',
      'Desarrollo del modelo de membresías y permisos para habilitar funciones comerciales de los artistas.',
      'Integración de Stripe para pagos, seguimiento de transacciones y validación de compras.',
      'Implementación de órdenes, acceso a cursos y descargas protegidas de productos digitales.',
      'Diseño de persistencia con PostgreSQL, Spring Data JPA, Hibernate y migraciones con Flyway.',
      'Participación en configuración y despliegue del backend y la base de datos.',
    ],
    technologies: [
      'Java 17',
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'Hibernate',
      'PostgreSQL',
      'Flyway',
      'Stripe',
      'APIs REST',
    ],
    featured: true,
    commercial: true,
    url: 'https://dabook.com.mx/',
  },
  {
    id: 'banca-mifel',
    title: 'Evolución de funcionalidades críticas de banca móvil',
    organization: 'Banca Mifel',
    period: 'Octubre 2025 — Julio 2026',
    sector: 'Sector bancario',
    type: 'Evolución continua',
    contributionLabel: 'Frentes representativos',
    summary:
      'Mantenimiento y evolución de microservicios bancarios mediante historias de usuario, optimizaciones, integraciones, correcciones e incidencias.',
    challenge:
      'Realizar cambios de distinto alcance sobre flujos críticos sin afectar la seguridad, la integración con el núcleo bancario ni la operación de la aplicación móvil.',
    contribution: [
      'Autenticación y manejo diferenciado de credenciales inválidas, tiempos de espera agotados e indisponibilidad de proveedores.',
      'Optimización de validaciones para reducir solicitudes innecesarias hacia servicios centrales.',
      'Mejoras en transferencias Mifel-Mifel y a terceros, incluyendo la eliminación de una consulta de base de datos de alto costo.',
      'Integración de validaciones de Sentinel en el inicio de sesión, transferencias, DiMo, cambio de contraseña y actualización de datos.',
      'Integraciones REST y SOAP con sistemas internos, proveedores externos y núcleo bancario.',
      'Integración de notificaciones push y apoyo backend en certificaciones de CoDi.',
      'Soporte a producción mediante análisis de registros e investigación de incidencias.',
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
    ],
  },
  {
    id: 'sura',
    title: 'Facturación, integraciones y evolución de aplicaciones',
    organization: 'Seguros SURA',
    period: 'Octubre 2022 — Octubre 2024',
    sector: 'Sector asegurador',
    type: 'Evolución e integración',
    contributionLabel: 'Frentes representativos',
    summary:
      'Desarrollo y mantenimiento evolutivo de aplicaciones aseguradoras, participando en múltiples funcionalidades de facturación, servicios, integraciones y reglas de negocio.',
    challenge:
      'Adaptar aplicaciones corporativas a nuevas reglas operativas y fiscales, integrando backend, frontend, XML y servicios externos.',
    contribution: [
      'Módulo de facturación electrónica para pólizas de ingreso.',
      'Complementos de pago y notas de crédito.',
      'Servicios REST y reglas de validación con Spring y Spring Boot.',
      'Generación y validación de XML para timbrado.',
      'Integración de servicios SOAP para emisión de comprobantes ante el SAT.',
      'Integración del backend con aplicaciones Angular y AngularJS.',
      'Reingeniería de funcionalidades y optimización de consultas SQL.',
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
    ],
  },
  {
    id: 'gobierno',
    title: 'Ecosistema de sistemas institucionales y automatización',
    organization: 'Gobierno del Estado de México',
    period: 'Septiembre 2020 — Actualidad',
    sector: 'Sector gubernamental',
    type: 'Sistemas e iniciativas',
    contributionLabel: 'Iniciativas representativas',
    summary:
      'Desarrollo e integración de soluciones institucionales: aplicaciones web, APIs, automatizaciones, reportes y despliegues.',
    challenge:
      'Atender necesidades operativas variadas, modernizar procesos y conectar tecnologías actuales con sistemas y fuentes de información heredadas.',
    contribution: [
      'Plataforma integral de servicio social con instituciones, vacantes, postulaciones, expedientes, documentos y seguimiento.',
      'Integración de dispositivos biométricos para registro de asistencias y cálculo de horas.',
      'Procesamiento, validación y generación de reportes de nómina con Python, SQL, DBF y Excel.',
      'Desarrollo y liderazgo de aplicaciones institucionales como Cineclub y Biblioteca Virtual.',
      'Construcción de APIs, autenticación, roles, sesiones y reglas de negocio.',
      'Generación de reportes con JasperReports y consumo de servicios web.',
      'Configuración y despliegue de servicios en Linux, systemd y Apache Tomcat.',
      'Atención de incidencias y soporte técnico de sistemas institucionales.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'Python',
      'FastAPI',
      'SQL',
      'DBF',
      'JasperReports',
      'Linux',
      'systemd',
    ],
  },
]
