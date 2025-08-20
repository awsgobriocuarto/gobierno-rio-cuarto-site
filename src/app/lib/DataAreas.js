// app/lib/DataAreas.js

export const areas = [
  {
    id: 1,
    title: "Secretaria de Economía e Innovación",
    slug: "secretaria-economia-e-innovacion",
    description: "Soporte y desarrollo de proyectos web para el gobierno.",
    image: "/images/area.svg", // Asegúrate de que esta imagen exista
    basicInfo: [
      "Horario de atención: Lunes a Viernes, 9:00 - 17:00",
      "Ubicación: Edificio Central, Oficina 101",
      "Contacto: ejemplo@ejemplo.com",
      "Teléfono: +54 9 11 1234-5678",
    ],
    formalities: [
      // Datos de ejemplo para trámites
      {
        id: 1,
        title: "Registro de Proyectos",
        text: "Proceso para inscribir nuevos proyectos web.",
        loguito: "/icons/servicio-de-.png",
      },
      {
        id: 2,
        title: "Soporte Técnico Web",
        text: "Solicitud de asistencia técnica para plataformas existentes.",
        loguito: "/icons/area.jpg",
      },
      {
        id: 3,
        title: "Consulta de Avance",
        text: "Verificación del estado de proyectos en curso.",
        loguito: "/icons/tap.png",
      },
    ],
  },
  {
    id: 2,
    title: "Secretaria de Deporte y Turismo",
    description:
      "Promoción y desarrollo de actividades deportivas y turísticas en la ciudad.",
    slug: "secretaria-deporte-y-turismo",
    image: "/images/area.svg",
    basicInfo: [
      "Horario de atención: Lunes a Viernes, 10:00 - 18:00",
      "Ubicación: Edificio Anexo, Oficina 203",
      "Contacto: ejemplo@ejemplo.com",
      "Teléfono: +54 9 11 9876-5432",
    ],
    formalities: [
      {
        id: 1,
        title: "Revisión de Prototipos",
        text: "Agenda una sesión para revisar tus prototipos.",
        loguito: "/icons/review.svg",
      },
      {
        id: 2,
        title: "Guía de Estilo",
        text: "Accede a las guías de estilo para tus diseños.",
        loguito: "/icons/guide.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Secretaria de Salud",
    description:
      "Gestión de trámites relacionados con la salud pública y servicios médicos.",
    slug: "secretaria-salud",
    image: "/images/area.svg",
    basicInfo: [
      "Horario de atención: Lunes a Viernes, 8:30 - 16:30",
      "Ubicación: Edificio Comercial, Planta Baja",
      "Contacto: ejemplo@ejemplo.com",
      "Teléfono: +54 9 11 5555-1111",
    ],
    formalities: [
      {
        id: 1,
        title: "Campaña Publicitaria",
        text: "Solicitud de desarrollo de nueva campaña publicitaria.",
        loguito: "/icons/campaign.svg",
      },
      {
        id: 2,
        title: "Análisis SEO",
        text: "Pide un análisis de optimización para motores de búsqueda.",
        loguito: "/icons/seo.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Secretaria de Desarrollo humano",
    slug: "secretaria-desarrollo-humano",
    description: "Desarrollo y gestión de proyectos sociales y comunitarios.",
    image: "/images/area.svg", // Asegúrate de que esta imagen exista
    basicInfo: [
      "Horario de atención: Lunes a Viernes, 9:00 - 17:00",
      "Ubicación: Edificio Central, Oficina 101",
      "Contacto: ejemplo@ejemplo.com",
      "Teléfono: +54 9 11 1234-5678",
    ],
    formalities: [
      // Datos de ejemplo para trámites
      {
        id: 1,
        title: "Registro de Proyectos",
        text: "Proceso para inscribir nuevos proyectos web.",
        loguito: "/icons/servicio-de-.png",
      },
      {
        id: 2,
        title: "Soporte Técnico Web",
        text: "Solicitud de asistencia técnica para plataformas existentes.",
        loguito: "/icons/area.jpg",
      },
      {
        id: 3,
        title: "Consulta de Avance",
        text: "Verificación del estado de proyectos en curso.",
        loguito: "/icons/tap.png",
      },
    ],
  },
  {
    id: 5,
    title: "Secretaria de Prevencion y Convivencia Ciudadana",
    slug: "secretaria-prevencion-y-convivencia-ciudadana",
    description:
      "Gestión de trámites relacionados con la seguridad y convivencia ciudadana.",
    image: "/images/area.svg", // Asegúrate de que esta imagen exista
    basicInfo: [
      "Horario de atención: Lunes a Viernes, 9:00 - 17:00",
      "Ubicación: Edificio Central, Oficina 101",
      "Contacto: ejemplo@ejemplo.com",
      "Teléfono: +54 9 11 1234-5678",
    ],
    formalities: [
      // Datos de ejemplo para trámites
      {
        id: 1,
        title: "Registro de Proyectos",
        text: "Proceso para inscribir nuevos proyectos web.",
        loguito: "/icons/servicio-de-.png",
      },
      {
        id: 2,
        title: "Soporte Técnico Web",
        text: "Solicitud de asistencia técnica para plataformas existentes.",
        loguito: "/icons/area.jpg",
      },
      {
        id: 3,
        title: "Consulta de Avance",
        text: "Verificación del estado de proyectos en curso.",
        loguito: "/icons/tap.png",
      },
    ],
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Juan Pérez",
    role: "Jefe de Área",
    photo: "/images/person.jpg",
    areaId: 1, // Asocia a Desarrollo Web
  },
  {
    id: 2,
    name: "Ana Gómez",
    role: "Coordinadora",
    photo: "/images/person.jpg",
    areaId: 1,
  },
  {
    id: 3,
    name: "Carlos Ruiz",
    role: "Diseñador Senior",
    photo: "/images/person.jpg",
    areaId: 2,
  },
  {
    id: 4,
    name: "Sofía López",
    role: "Especialista SEO",
    photo: "/images/person.jpg",
    areaId: 3,
  },
  {
    id: 5,
    name: "Pedro Martínez",
    role: "Especialista SEM",
    photo: "/images/person.jpg",
    areaId: 3,
  },
  {
    id: 6,
    name: "Sofía López",
    role: "Especialista SEO",
    photo: "/images/person.jpg",
    areaId: 3,
  },
  {
    id: 7,
    name: "Pedro Martínez",
    role: "Especialista SEM",
    photo: "/images/person.jpg",
    areaId: 3,
  },
];

// Asegúrate de tener estas imágenes de ejemplo en tu carpeta `public/images/team/`
// y los iconos en `public/icons/`
