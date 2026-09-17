# Portfolio de Héctor Talavera Jiménez

Portfolio profesional en español orientado a oportunidades como Desarrollador Java Backend en México. Desarrollado con React + TypeScript + Vite.

## Desarrollo

- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm run preview`

## Contenido

El sitio funciona únicamente en español. No utiliza selector de idioma, traducciones ni almacenamiento de preferencias.

- `src/App.tsx`: secciones, navegación y contenido general.
- `src/components/PortfolioOverview.tsx`: resumen profesional, métricas y tecnologías principales.
- `src/data/experience.ts` y `projects.ts`: experiencia y proyectos tipados.
- `src/data/skills.ts`: categorías con backend primero y frontend funcional como complemento.

Se conservan las empresas, fechas, cargos oficiales, nombres de productos, instituciones y tecnologías. DaBook es el proyecto destacado y el frontend se presenta como experiencia complementaria.

## CV

Reemplazar únicamente `public/cv/CV_Hector_Talavera_Jimenez_2026.pdf` con la nueva versión. Ambos enlaces usan la ruta pública `/cv/CV_Hector_Talavera_Jimenez_2026.pdf` y el atributo nativo `download` para descargar el archivo con el mismo nombre. El PDF existente no se modifica en este cambio.

El reemplazo del CV definitivo es manual. `dist` es exclusivamente la salida de Vite: `npm run build` copia automáticamente los archivos de `public`. No editar manualmente `dist` ni utilizarlo como fuente del CV.

## SEO

`index.html` incluye título, descripción y Open Graph en español, con `html lang="es"` y `og:locale="es_MX"`. No se incluye canonical ni `og:url` porque el repositorio no documenta un dominio público definitivo del portfolio; deben configurarse con la URL real al publicar. No se agrega seguimiento ni analítica.
