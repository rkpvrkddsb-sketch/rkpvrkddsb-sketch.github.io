// =====================================================
//  SPANISH VERSION OF THE SITE TEXTS (auto-selected for es-* browsers).
//  Same structure as content-en.js — edit only what's in quotes.
//  Keep "slug" and "project" values the SAME as in content.js.
// =====================================================

const site_es = {
  name: "j13",
  role: "Equipo de desarrollo",
  location: "Planeta Tierra",
  available: "Abiertos a nuevos proyectos",

  // Main phrase on the first screen
  headline: "Apps, plataformas y bots.",
  // Short line under the main phrase ("" — none)
  tagline: "De la idea al lanzamiento.",
  intro: "Somos un pequeño equipo de desarrollo. Creamos plataformas web, apps y bots para empresas: de la idea al lanzamiento, y seguimos dando soporte después.",

  // Running line under the first screen
  marquee: [
    { text: "Plataformas web",     project: "hotel" },
    { text: "Juego móvil", project: "game" },
    { text: "Bots de Telegram",     project: "bots" },
    { text: "Bots de WhatsApp",     project: "bots" },
    { text: "Automatización",        project: "bots" },
    { text: "Sistemas de reservas",   project: "hotel" },
    { text: "Entrenador de mecanografía",    project: "klavogin" },
    { text: "Apps llave en mano",      project: "app" }
  ],

  // Counters
  stats: [
    { value: 15, suffix: "+",  label: "bots para redes sociales creados por nuestro equipo" },
    { value: 5,  suffix: "+",  label: "grandes proyectos en el portafolio" },
    { value: 24, suffix: "/7", label: "nuestros bots trabajan sin días libres" }
  ],

  projects: [
    {
      slug: "hotel",
      title: "Plataforma para hotel",
      year: "2026",
      status: "en desarrollo",
      live: true,
      description:
        "Un sistema para un hotel: reservas online, gestión de habitaciones, calendario de entradas y panel para el personal.",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: "",
      link: "",
      details: {
        task: "El problema: cómo funcionaba antes el hotel y qué era incómodo (hojas de cálculo, llamadas, reservas mezcladas).",
        solution: "Lo que estamos creando: una sola plataforma donde los huéspedes reservan online y el personal ve todas las habitaciones y entradas en un único calendario.",
        result: "Lo que gana el hotel: menos trabajo manual, cero reservas duplicadas y todo visible en tiempo real.",
        features: [
          "Reservas online para huéspedes",
          "Calendario de disponibilidad",
          "Panel para administración y personal",
          "Estados: libre, en limpieza, ocupada"
        ],
        gallery: []
      }
    },
    {
      slug: "game",
      title: "Nuestro juego móvil",
      year: "2026",
      status: "en desarrollo",
      description:
        "Un juego móvil para iOS y Android en el que nuestro equipo está trabajando ahora. Guardamos los detalles en secreto hasta el lanzamiento 🤫",
      tech: ["iOS", "Android", "Diseño de juegos"],
      mock: "game",
      image: "",
      link: "",
      details: {
        task: "Crear un juego al que apetezca volver: reglas sencillas al principio y una profundidad que se descubre con el tiempo.",
        solution: "Partidas cortas pensadas para el móvil, control fácil con un dedo y una dificultad que sube poco a poco para que no aburra.",
        result: "Ahora en desarrollo. Pronto mostraremos las primeras capturas y la fecha de lanzamiento: ¡atentos!",
        features: ["Para iOS y Android", "Control con un dedo", "Partidas cortas: juega donde sea", "Niveles cada vez más difíciles", "Tabla de récords"],
        gallery: []
      }
    },
    {
      slug: "klavogin",
      title: "Klavogin",
      year: "2026",
      status: "en marcha",
      live: true,
      description:
        "Un entrenador online de velocidad de escritura: lecciones de mecanografía al tacto, mapa de calor de errores y 8 idiomas. Gratis y sin registro.",
      tech: ["JavaScript", "HTML", "CSS"],
      image: "images/klavogin.jpg",
      link: "klavogin/",
      details: {
        task: "La mayoría de los entrenadores de mecanografía están llenos de anuncios, piden una cuenta o manejan mal las distribuciones de teclado no inglesas.",
        solution: "Un entrenador ligero que se abre al instante: escribes palabras, refranes o tu propio texto, y te muestra la velocidad, los errores y qué teclas mejorar.",
        result: "Funciona directamente en el navegador de cualquier ordenador, sin instalar nada. El progreso se guarda en el dispositivo, así ves cómo crece tu velocidad.",
        features: [
          "Lecciones de mecanografía paso a paso",
          "Mapa de calor de errores y teclas lentas",
          "8 idiomas y distribuciones",
          "Modos: tiempo, palabras, refranes, texto propio",
          "Estadísticas de progreso",
          "Modo sin distracciones"
        ],
        gallery: []
      }
    },
    {
      slug: "app",
      title: "Nuestra app",
      year: "2025",
      status: "terminado",
      description:
        "Descripción de la app que creamos: para quién es, qué problema resuelve y qué tiene de mejor.",
      tech: ["Python", "SQLite"],
      image: "",
      link: "",
      details: {
        task: "Qué problema debía resolver la app y para quién.",
        solution: "Cómo funciona y qué es lo más importante.",
        result: "El resultado: quién la usa, qué cambió, cifras si las hay.",
        features: ["Función 1", "Función 2", "Función 3"],
        gallery: []
      }
    },
    {
      slug: "bots",
      title: "Bots para Telegram y WhatsApp",
      year: "2025 — hoy",
      status: "por encargo",
      description:
        "Chatbots para empresas: reciben solicitudes y reservas, responden preguntas frecuentes y envían recordatorios.",
      tech: ["Telegram Bot API", "WhatsApp API", "Automatización"],
      mock: "chat",
      image: "",
      link: "",
      details: {
        task: "Las empresas pierden clientes cuando no responden a tiempo en los mensajeros, sobre todo por la noche y los fines de semana.",
        solution: "Un bot de Telegram o WhatsApp que responde solo a las preguntas típicas, recibe solicitudes y reservas y pasa al cliente a una persona cuando hace falta.",
        result: "Los clientes reciben respuesta en segundos, 24/7, y el dueño ve todas las solicitudes en un solo lugar.",
        features: [
          "Solicitudes y reservas",
          "Respuestas a preguntas frecuentes",
          "Recordatorios para clientes",
          "Pasar el chat a un responsable",
          "Avisos al dueño sobre nuevas solicitudes"
        ],
        gallery: []
      }
    }
  ],

  skills: ["JavaScript", "React", "Node.js", "Python", "SQL", "Telegram Bot API", "WhatsApp API", "Git"],

  experience: [
    { period: "2025 — hoy", title: "Plataforma para hotel", place: "Proyecto del equipo" },
    { period: "2025 — hoy", title: "Bots para Telegram y WhatsApp", place: "Por encargo" },
    { period: "2024 — 2025", title: "Desarrollo de apps", place: "Para un cliente" }
  ],

  // Testimonials — the section stays hidden while the list is empty.
  // { text: "The bot took half the calls off us in a week!", name: "Olena", role: "Café owner" },
  testimonials: [
  ],

  // How we work
  process: [
    { title: "Solicitud",    text: "Pulsas «Encargar» y nos cuentas en pocas palabras qué necesitas." },
    { title: "Conversación", text: "Aclaramos la tarea, proponemos una solución y acordamos precio y plazos." },
    { title: "Desarrollo", text: "Creamos el proyecto y te mostramos el avance por el camino." },
    { title: "Lanzamiento",     text: "Lanzamos, te enseñamos a usarlo y seguimos en contacto para el soporte." }
  ],

  faq: [
    {
      q: "¿Cuánto cuesta un bot?",
      a: "Depende de la tarea: un bot sencillo para solicitudes y preguntas frecuentes es asequible; uno complejo con pagos, CRM y varios flujos cuesta más. Cuéntanos qué necesitas y te daremos un precio exacto."
    },
    {
      q: "¿Cuánto tarda el desarrollo?",
      a: "Un bot sencillo, unos días. Un proyecto mayor, como una plataforma o un bot con integraciones, desde unas semanas. Los plazos se acuerdan al principio."
    },
    {
      q: "¿Se puede cambiar algo después?",
      a: "Sí. Textos, botones, flujos y nuevas funciones se pueden añadir tras el lanzamiento: seguimos en contacto y ayudamos con las actualizaciones."
    },
    {
      q: "¿Solo trabajáis con Telegram y WhatsApp?",
      a: "Los bots, sobre todo para ellos, porque ahí es donde ya hablan los clientes. También creamos plataformas web y apps para negocios concretos."
    }
  ],

  contacts: {
    email: "hello@example.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    telegram: "https://t.me/"
  }
};
