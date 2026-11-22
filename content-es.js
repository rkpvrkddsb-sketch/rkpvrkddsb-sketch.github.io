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
    { text: "App deportiva",      project: "plai" }
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
        "Un sistema para hoteles: las camareras ven sus habitaciones en el móvil, la supervisora revisa la limpieza y recepción sabe en tiempo real qué habitaciones están listas.",
      tech: ["App web", "Móvil + PC", "Modo sin conexión"],
      mock: "hotel",          // картка: ПК рецепції + телефон покоївки (скріни з gallery)
      image: "",
      link: "",
      details: {
        task: "Los estados de las habitaciones se pasaban por radio y en papel: recepción no sabía si una habitación estaba lista para el huésped y las camareras no sabían por dónde empezar.",
        solution: "Un sistema para todos los roles: la camarera recibe sus habitaciones en el orden correcto, la supervisora revisa y ve los riesgos, recepción tiene un panel de todo el hotel en el PC y mantenimiento recibe las averías.",
        result: "Las habitaciones para llegadas tempranas están listas a tiempo, los riesgos se ven con antelación y todo el equipo se comunica en un solo lugar, incluso sin Wi‑Fi.",
        features: ["Lista de habitaciones con prioridades y temporizador", "Revisión de la limpieza por la supervisora", "Panel de recepción: estado de cada habitación en vivo", "Aviso si el huésped llega antes de que la habitación esté lista", "Briefing matinal, chat del equipo y botón SOS", "Averías, objetos perdidos y funciona sin conexión"],
        // скріншоти: kind "desk" — у рамці браузера, "phone" — у рамці телефона; cap — підпис
        gallery: [
          { src: "images/hotel-reception.jpg", kind: "desk", cap: "Recepción: panel en vivo de todo el hotel" },
          { src: "images/hotel-rooms.jpg", kind: "phone", cap: "Camarera: mis habitaciones de hoy" },
          { src: "images/hotel-room.jpg", kind: "phone", cap: "Ficha de la habitación antes de limpiar" },
          { src: "images/hotel-briefing.jpg", kind: "phone", cap: "Briefing matinal de la supervisora" },
          { src: "images/hotel-inspect.jpg", kind: "phone", cap: "Supervisora: llegadas en riesgo" },
          { src: "images/hotel-team.jpg", kind: "phone", cap: "Equipo en turno" }
        ]
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
        features: ["Lecciones de mecanografía paso a paso", "Test de velocidad con mapa de calor de errores", "Arcade: escribe las palabras antes de que caigan", "Carrera contra el fantasma y 24 logros", "Entrenamiento diario de tus letras débiles", "Funciona sin conexión y se instala como app"],
        gallery: []
      }
    },
    {
      slug: "plai",
      title: "Plai",
      year: "2026",
      status: "llegando al App Store",
      description:
        "Una comunidad deportiva para quienes aman moverse: correr, caminar, senderismo y bici. Entrenamientos con GPS, rutas en el mapa, retos con amigos y datos de Apple Health en un solo lugar.",
      tech: ["iOS", "Android", "Apple Health", "Mapas y GPS"],
      mock: "plai",
      image: "",
      link: "",
      details: {
        task: "La gente activa guarda los pasos en una app, las rutas en otra y habla con sus amigos en otro sitio. Queríamos un único lugar donde moverse sea también una comunidad.",
        solution: "Plai reúne tu día desde Apple Health y Health Connect, registra carreras y caminatas con GPS, muestra rutas cercanas y añade lo social: muro de amigos, likes, clubes, quedadas y retos.",
        result: "La app está terminada y en preparación para el App Store. Ya cumple todos los requisitos de Apple: borrado de cuenta, moderación y privacidad.",
        features: ["Pasos, sueño y preparación desde Apple Health", "Registro de carreras y rutas con GPS: ritmo, distancia, desnivel", "Rutas cercanas con reseñas y fotos", "Muro de amigos, comentarios, clubes y quedadas", "Retos y clasificación de pasos entre amigos", "Sin anuncios ni rastreo, zonas de privacidad en el mapa"],
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

  skills: ["JavaScript", "React", "React Native", "Node.js", "Python", "Swift", "SQL", "Supabase", "Apple Health", "Telegram Bot API", "WhatsApp API", "Git"],

  experience: [
    { period: "2026 — hoy", title: "Plataforma para hotel", place: "Proyecto del equipo" },
    { period: "2026 — hoy", title: "Juego móvil", place: "Proyecto del equipo" },
    { period: "2025 — 2026", title: "Plai — app deportiva", place: "Proyecto del equipo" },
    { period: "2026", title: "Klavogin — entrenador de mecanografía", place: "Proyecto del equipo" },
    { period: "2025 — hoy", title: "Bots para Telegram y WhatsApp", place: "Por encargo" }
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
