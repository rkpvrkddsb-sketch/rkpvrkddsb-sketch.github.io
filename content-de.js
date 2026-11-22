// =====================================================
//  GERMAN VERSION OF THE SITE TEXTS (auto-selected for de-* browsers).
//  Same structure as content-en.js — edit only what's in quotes.
//  Keep "slug" and "project" values the SAME as in content.js.
// =====================================================

const site_de = {
  name: "j13",
  role: "Entwicklungsteam",
  location: "Planet Erde",
  available: "Offen für neue Projekte",

  // Main phrase on the first screen
  headline: "Apps, Plattformen & Bots.",
  // Short line under the main phrase ("" — none)
  tagline: "Von der Idee bis zum Launch.",
  intro: "Wir sind ein kleines Entwicklungsteam. Wir bauen Webplattformen, Apps und Bots für Unternehmen – von der Idee bis zum Launch, und danach kümmern wir uns um den Support.",

  // Running line under the first screen
  marquee: [
    { text: "Webplattformen",     project: "hotel" },
    { text: "Mobile Game", project: "game" },
    { text: "Telegram-Bots",     project: "bots" },
    { text: "WhatsApp-Bots",     project: "bots" },
    { text: "Automatisierung",        project: "bots" },
    { text: "Buchungssysteme",   project: "hotel" },
    { text: "Tipptrainer",    project: "klavogin" },
    { text: "Sport-App",      project: "plai" }
  ],

  // Counters
  stats: [
    { value: 15, suffix: "+",  label: "Social-Media-Bots hat unser Team gebaut" },
    { value: 5,  suffix: "+",  label: "große Projekte im Portfolio" },
    { value: 24, suffix: "/7", label: "unsere Bots arbeiten ohne freie Tage" }
  ],

  projects: [
    {
      slug: "hotel",
      title: "Hotelplattform",
      year: "2026",
      status: "in Arbeit",
      live: true,
      description:
        "Ein System für ein Hotel: Online-Buchung, Zimmerverwaltung, Check-in-Kalender und ein Dashboard fürs Personal.",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: "",
      link: "",
      details: {
        task: "Das Problem: wie das Hotel vorher gearbeitet hat und was unpraktisch war (Tabellen, Anrufe, durcheinandergeratene Buchungen).",
        solution: "Was wir bauen: eine Plattform, auf der Gäste online buchen und das Personal alle Zimmer und Check-ins in einem einzigen Kalender sieht.",
        result: "Was das Hotel davon hat: weniger Handarbeit, keine Doppelbuchungen, alles in Echtzeit sichtbar.",
        features: [
          "Online-Buchung für Gäste",
          "Belegungskalender",
          "Dashboard für Verwaltung und Personal",
          "Zimmerstatus: frei, Reinigung, belegt"
        ],
        gallery: []
      }
    },
    {
      slug: "game",
      title: "Unser Mobile Game",
      year: "2026",
      status: "in Arbeit",
      description:
        "Ein Mobile Game für iOS und Android, an dem unser Team gerade arbeitet. Details bleiben bis zum Release geheim 🤫",
      tech: ["iOS", "Android", "Game Design"],
      mock: "game",
      image: "",
      link: "",
      details: {
        task: "Ein Spiel, zu dem man gern zurückkehrt: einfache Regeln am Anfang, aber Tiefe, die sich mit der Zeit zeigt.",
        solution: "Kurze Spielrunden fürs Handy, einfache Ein-Finger-Steuerung und ein langsam steigender Schwierigkeitsgrad, damit es nie langweilig wird.",
        result: "Gerade in Entwicklung. Erste Screenshots und ein Release-Datum gibt es bald — bleib dran.",
        features: ["Für iOS und Android", "Ein-Finger-Steuerung", "Kurze Runden — überall spielbar", "Level werden nach und nach schwerer", "Bestenliste"],
        gallery: []
      }
    },
    {
      slug: "klavogin",
      title: "Klavogin",
      year: "2026",
      status: "online",
      live: true,
      description:
        "Ein Online-Trainer für Tippgeschwindigkeit: Lektionen im Zehnfingersystem, Fehler-Heatmap und 8 Sprachen. Kostenlos, ohne Anmeldung.",
      tech: ["JavaScript", "HTML", "CSS"],
      image: "images/klavogin.jpg",
      link: "klavogin/",
      details: {
        task: "Die meisten Tipptrainer sind voller Werbung, verlangen ein Konto oder kommen mit nicht-englischen Tastaturlayouts schlecht zurecht.",
        solution: "Ein leichter Trainer, der sofort startet: Wörter, Sprichwörter oder eigenen Text tippen – er zeigt Tempo und Fehler und sagt, an welchen Tasten man arbeiten sollte.",
        result: "Läuft direkt im Browser auf jedem Computer, ohne Installation. Der Fortschritt wird auf dem Gerät gespeichert, so sieht man, wie das Tempo wächst.",
        features: ["Zehnfinger-Lektionen Schritt für Schritt", "Tempotest mit Fehler-Heatmap", "Arcade: tippe die fallenden Wörter, bevor sie landen", "Rennen gegen den Geist und 24 Erfolge", "Tägliches Training deiner schwachen Buchstaben", "Funktioniert offline und lässt sich als App installieren"],
        gallery: []
      }
    },
    {
      slug: "plai",
      title: "Plai",
      year: "2026",
      status: "bald im App Store",
      description:
        "Eine Sport-Community für alle, die sich gern bewegen: Laufen, Gehen, Wandern und Radfahren. GPS-Workouts, Routen auf der Karte, Challenges mit Freunden und Apple-Health-Daten an einem Ort.",
      tech: ["iOS", "Android", "Apple Health", "Karten & GPS"],
      mock: "plai",
      image: "",
      link: "",
      details: {
        task: "Aktive Menschen haben ihre Schritte in einer App, Routen in einer anderen und schreiben Freunden noch woanders. Wir wollten einen Ort, an dem Bewegung auch Gemeinschaft ist.",
        solution: "Plai holt deinen Tag aus Apple Health und Health Connect, zeichnet Läufe und Wanderungen per GPS auf, zeigt Routen in der Nähe und bringt das Soziale dazu: Freundes-Feed, Likes, Clubs, gemeinsame Touren und Challenges.",
        result: "Die App ist fertig und wird für den App Store vorbereitet. Alle Anforderungen von Apple sind schon erfüllt: Kontolöschung, Moderation und Datenschutz.",
        features: ["Schritte, Schlaf und Trainingsbereitschaft aus Apple Health", "GPS-Aufzeichnung für Läufe und Wanderungen: Tempo, Distanz, Höhenmeter", "Routen in der Nähe mit Bewertungen und Fotos", "Freundes-Feed, Kommentare, Clubs und gemeinsame Touren", "Challenges und Schritte-Rangliste unter Freunden", "Keine Werbung, kein Tracking, Privatsphäre-Zonen auf der Karte"],
        gallery: []
      }
    },
    {
      slug: "bots",
      title: "Bots für Telegram und WhatsApp",
      year: "2025 — heute",
      status: "auf Bestellung",
      description:
        "Chatbots für Unternehmen: Sie nehmen Anfragen und Buchungen an, beantworten häufige Fragen und verschicken Erinnerungen.",
      tech: ["Telegram Bot API", "WhatsApp API", "Automatisierung"],
      mock: "chat",
      image: "",
      link: "",
      details: {
        task: "Unternehmen verlieren Kunden, wenn sie in Messengern nicht schnell genug antworten – besonders abends und am Wochenende.",
        solution: "Ein Telegram- oder WhatsApp-Bot, der typische Fragen selbst beantwortet, Anfragen und Buchungen annimmt und den Kunden bei Bedarf an einen Menschen übergibt.",
        result: "Kunden bekommen rund um die Uhr in Sekunden eine Antwort, und der Inhaber sieht alle Anfragen an einem Ort.",
        features: [
          "Anfragen und Buchungen",
          "Antworten auf häufige Fragen",
          "Erinnerungen für Kunden",
          "Übergabe des Chats an einen Mitarbeiter",
          "Benachrichtigung des Inhabers über neue Anfragen"
        ],
        gallery: []
      }
    }
  ],

  skills: ["JavaScript", "React", "React Native", "Node.js", "Python", "Swift", "SQL", "Supabase", "Apple Health", "Telegram Bot API", "WhatsApp API", "Git"],

  experience: [
    { period: "2026 — heute", title: "Hotelplattform", place: "Teamprojekt" },
    { period: "2026 — heute", title: "Mobile Game", place: "Teamprojekt" },
    { period: "2025 — 2026", title: "Plai — Sport-App", place: "Teamprojekt" },
    { period: "2026", title: "Klavogin — Tipptrainer", place: "Teamprojekt" },
    { period: "2025 — heute", title: "Bots für Telegram und WhatsApp", place: "Auf Bestellung" }
  ],

  // Testimonials — the section stays hidden while the list is empty.
  // { text: "The bot took half the calls off us in a week!", name: "Olena", role: "Café owner" },
  testimonials: [
  ],

  // How we work
  process: [
    { title: "Anfrage",    text: "Sie klicken auf „Bestellen“ und schreiben kurz, was Sie brauchen." },
    { title: "Besprechung", text: "Wir klären die Aufgabe, schlagen eine Lösung vor und vereinbaren Preis und Zeitplan." },
    { title: "Entwicklung", text: "Wir bauen das Projekt und zeigen unterwegs Zwischenstände." },
    { title: "Launch",     text: "Wir gehen live, zeigen Ihnen die Bedienung und bleiben für den Support erreichbar." }
  ],

  faq: [
    {
      q: "Was kostet ein Bot?",
      a: "Das hängt von der Aufgabe ab: Ein einfacher Bot für Anfragen und FAQs ist günstig, ein komplexer mit Zahlungen, CRM und mehreren Abläufen kostet mehr. Schreiben Sie uns, was Sie brauchen, und wir nennen einen genauen Preis."
    },
    {
      q: "Wie lange dauert die Entwicklung?",
      a: "Ein einfacher Bot dauert ein paar Tage. Ein größeres Projekt wie eine Plattform oder ein Bot mit Integrationen ab einigen Wochen. Den Zeitplan vereinbaren wir gleich am Anfang."
    },
    {
      q: "Kann man später noch etwas ändern?",
      a: "Ja. Texte, Buttons, Abläufe und neue Funktionen lassen sich nach dem Launch ergänzen – wir bleiben erreichbar und helfen bei Updates."
    },
    {
      q: "Arbeiten Sie nur mit Telegram und WhatsApp?",
      a: "Bots vor allem dafür, weil Kunden dort ohnehin schreiben. Außerdem bauen wir Webplattformen und Apps für konkrete Unternehmen."
    }
  ],

  contacts: {
    email: "hello@example.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    telegram: "https://t.me/"
  }
};
