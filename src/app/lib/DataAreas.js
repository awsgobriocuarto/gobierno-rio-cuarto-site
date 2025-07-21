// app/lib/DataAreas.js

export const areas = [
  {
    id: 1,
    title: "Desarrollo Web",
    description:
      "Creación de sitios y aplicaciones web modernas y escalables, enfocadas en la experiencia de usuario y el rendimiento. Incluye frontend con React/Next.js y backend con Node.js/Python.",
    image: "/images/bug.png", // Asegúrate de que esta imagen exista
    basicInfo: [
      "Horario de atención: Lunes a Viernes, 9:00 - 17:00",
      "Ubicación: Edificio Central, Oficina 101",
      "Contacto: desarrolloweb@ejemplo.com",
      "Teléfono: +54 9 11 1234-5678",
    ],
    formalities: [
      // Datos de ejemplo para trámites
      {
        id: 1,
        title: "Registro de Proyectos",
        text: "Proceso para inscribir nuevos proyectos web.",
        loguito: "/icons/servicio-de-auto.png",
      },
      {
        id: 2,
        title: "Soporte Técnico Web",
        text: "Solicitud de asistencia técnica para plataformas existentes.",
        loguito: "/icons/shiber.jpg",
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
    title: "Diseño UX/UI",
    description:
      "Diseño de experiencias de usuario intuitivas y atractivas, centrado en la usabilidad y la estética visual de interfaces digitales.",
    image: "/images/tap.png",
    basicInfo: [
      "Horario de atención: Lunes a Viernes, 10:00 - 18:00",
      "Ubicación: Edificio Anexo, Oficina 203",
      "Contacto: diseno@ejemplo.com",
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
    title: "Marketing Digital",
    description:
      "Estrategias integrales para posicionar tu marca, aumentar la visibilidad online y generar leads a través de canales digitales.",
    image: "/images/shiber.jpg",
    basicInfo: [
      "Horario de atención: Lunes a Viernes, 8:30 - 16:30",
      "Ubicación: Edificio Comercial, Planta Baja",
      "Contacto: marketing@ejemplo.com",
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
];

export const teamMembers = [
  {
    id: 1,
    name: "Juan Pérez",
    role: "Jefe de Área",
    photo: "/images/persona.jpg",
    areaId: 1, // Asocia a Desarrollo Web
  },
  {
    id: 2,
    name: "Ana Gómez",
    role: "Coordinadora",
    photo: "/images/persona2.jpg",
    areaId: 1,
  },
  {
    id: 3,
    name: "Carlos Ruiz",
    role: "Diseñador Senior",
    photo: "/images/pogba.jpeg",
    areaId: 2,
  },
  {
    id: 4,
    name: "Sofía López",
    role: "Especialista SEO",
    photo: "/images/persona.jpg",
    areaId: 3,
  },
  {
    id: 5,
    name: "Pedro Martínez",
    role: "Especialista SEM",
    photo: "/images/persona2.jpg",
    areaId: 3,
  },
];

// Asegúrate de tener estas imágenes de ejemplo en tu carpeta `public/images/team/`
// y los iconos en `public/icons/`
