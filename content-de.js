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
    { text: "Telegram-Bots",     project: "bots" },
    { text: "WhatsApp-Bots",     project: "bots" },
    { text: "Automatisierung",        project: "bots" },
    { text: "Buchungssysteme",   project: "hotel" },
    { text: "Tipptrainer",    project: "klavogin" },
    { text: "Apps schlüsselfertig",      project: "app" }
  ],

  // Counters
  stats: [
    { value: 15, suffix: "+",  label: "Social-Media-Bots hat unser Team gebaut" },
    { value: 4,  suffix: "+",  label: "große Projekte im Portfolio" },
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
        features: [
          "Zehnfinger-Lektionen Schritt für Schritt",
          "Heatmap von Fehlern und langsamen Tasten",
          "8 Sprachen und Layouts",
          "Modi: Zeit, Wörter, Sprichwörter, eigener Text",
          "Fortschrittsstatistik",
          "Ablenkungsfreier Modus"
        ],
        gallery: []
      }
    },
    {
      slug: "app",
      title: "Unsere App",
      year: "2025",
      status: "fertig",
      description:
        "Beschreibung der App, die wir gebaut haben: für wen sie ist, welches Problem sie löst und was das Beste daran ist.",
      tech: ["Python", "SQLite"],
      image: "",
      link: "",
      details: {
        task: "Welches Problem die App lösen sollte und für wen.",
        solution: "Wie sie funktioniert und was daran am wichtigsten ist.",
        result: "Das Ergebnis: wer sie nutzt, was sich geändert hat, Zahlen, falls vorhanden.",
        features: ["Funktion 1", "Funktion 2", "Funktion 3"],
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

  skills: ["JavaScript", "React", "Node.js", "Python", "SQL", "Telegram Bot API", "WhatsApp API", "Git"],

  experience: [
    { period: "2025 — heute", title: "Hotelplattform", place: "Teamprojekt" },
    { period: "2025 — heute", title: "Bots für Telegram und WhatsApp", place: "Auf Bestellung" },
    { period: "2024 — 2025", title: "App-Entwicklung", place: "Für einen Kunden" }
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
