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
    { text: "Wissenskarten", project: "maps" },
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
    { value: 6,  suffix: "+",  label: "große Projekte im Portfolio" },
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
        "Ein Hotelsystem: Zimmermädchen sehen ihre Zimmer auf dem Handy, die Hausdame kontrolliert die Reinigung und die Rezeption weiß in Echtzeit, welche Zimmer bezugsfertig sind.",
      tech: ["Web-App", "Handy + PC", "Offline-Modus"],
      mock: "hotel",          // картка: ПК рецепції + телефон покоївки (скріни з gallery)
      image: "",
      link: "",
      details: {
        task: "Zimmerstatus wurden per Funk und auf Papier weitergegeben: Die Rezeption wusste nicht, ob ein Zimmer zur Ankunft fertig ist, und das Housekeeping nicht, wo es anfangen soll.",
        solution: "Ein System für alle Rollen: Zimmermädchen bekommen ihre Zimmer in der richtigen Reihenfolge, die Hausdame kontrolliert und sieht Risiken, die Rezeption hat ein Live-Board des ganzen Hotels am PC, die Technik bekommt Reparaturaufträge.",
        result: "Zimmer für frühe Anreisen sind rechtzeitig fertig, Risiken sind vorher sichtbar und das ganze Team ist an einem Ort verbunden — auch wenn das WLAN ausfällt.",
        features: ["Zimmerliste mit Prioritäten und Timer", "Reinigungskontrolle durch die Hausdame", "Rezeptions-Board: Status jedes Zimmers live", "Warnung, wenn der Gast vor der Fertigstellung anreist", "Morgenbriefing, Team-Chat und SOS-Taste", "Reparaturen, Fundsachen, funktioniert offline"],
        // скріншоти: kind "desk" — у рамці браузера, "phone" — у рамці телефона; cap — підпис
        gallery: [
          { src: "images/hotel-reception.jpg", kind: "desk", cap: "Rezeption: Live-Board des ganzen Hotels" },
          { src: "images/hotel-rooms.jpg", kind: "phone", cap: "Zimmermädchen: meine Zimmer heute" },
          { src: "images/hotel-room.jpg", kind: "phone", cap: "Zimmerkarte vor der Reinigung" },
          { src: "images/hotel-briefing.jpg", kind: "phone", cap: "Morgenbriefing der Hausdame" },
          { src: "images/hotel-inspect.jpg", kind: "phone", cap: "Hausdame: gefährdete Anreisen" },
          { src: "images/hotel-team.jpg", kind: "phone", cap: "Team im Dienst" }
        ]
      }
    },
    {
      slug: "maps",
      title: "Wissenskarten",
      year: "2026",
      status: "in Arbeit",
      description:
        "Wissenskarten fürs Team: Zerlege jedes Thema in Zweige, füge Erklärkarten, Fotos und Verknüpfungen hinzu und baue die Karten gemeinsam aus. Claude hilft beim Entwurf.",
      tech: ["Web-App", "Zusammenarbeit", "Claude AI"],
      mock: "duo",            // картка: великий скрін у браузері + телефон (з gallery)
      image: "",
      link: "",
      details: {
        task: "Teamwissen liegt verstreut in Notizen, Chats und Dokumenten — neue Leute brauchen eine Woche, um sich zurechtzufinden.",
        solution: "Lebendige Wissenskarten: Thema → Zweige → Karten wie «So funktioniert's», «Nuance», «Risiko». Team-, geteilte und private Karten, 6 Designs, Änderungsprotokoll, und Claude schlägt in Sekunden Unterthemen vor.",
        result: "Das Ziel: Ein komplexes Thema passt auf einen Bildschirm, jeder ergänzt die Karte, und Änderungen sind sofort für alle sichtbar. Gerade in Entwicklung.",
        features: ["Zweige und Unterthemen per Drag & Drop", "Karten: So funktioniert's, Nuance, Risiko, Beispiel…", "Claude entwirft Zweige, Karten und Erklärungen", "Team-, geteilte und private Karten", "6 Designs, eigene Farben und Schriften", "Fotos, Verknüpfungen, Änderungsprotokoll"],
        gallery: [
          { src: "images/km-map.jpg", kind: "desk", cap: "Karte «Eine Mobile App starten»" },
          { src: "images/km-home.jpg", kind: "desk", cap: "Alle Teamkarten" },
          { src: "images/km-phone.jpg", kind: "phone", cap: "Auf dem Handy" }
        ]
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
        gallery: [
          { src: "images/kl-home.jpg", kind: "desk", cap: "Start: vier Modi" },
          { src: "images/kl-lessons.jpg", kind: "desk", cap: "Zehnfinger-Lektionen" },
          { src: "images/kl-test.jpg", kind: "desk", cap: "Tempotest mit Bildschirmtastatur" },
          { src: "images/kl-arcade.jpg", kind: "desk", cap: "Arcade: Wörter fallen von oben" },
          { src: "images/kl-ach.jpg", kind: "desk", cap: "24 Erfolge" }
        ]
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
      mock: "phones",
      image: "",
      link: "",
      details: {
        task: "Aktive Menschen haben ihre Schritte in einer App, Routen in einer anderen und schreiben Freunden noch woanders. Wir wollten einen Ort, an dem Bewegung auch Gemeinschaft ist.",
        solution: "Plai holt deinen Tag aus Apple Health und Health Connect, zeichnet Läufe und Wanderungen per GPS auf, zeigt Routen in der Nähe und bringt das Soziale dazu: Freundes-Feed, Likes, Clubs, gemeinsame Touren und Challenges.",
        result: "Die App ist fertig und wird für den App Store vorbereitet. Alle Anforderungen von Apple sind schon erfüllt: Kontolöschung, Moderation und Datenschutz.",
        features: ["Schritte, Schlaf und Trainingsbereitschaft aus Apple Health", "GPS-Aufzeichnung für Läufe und Wanderungen: Tempo, Distanz, Höhenmeter", "Routen in der Nähe mit Bewertungen und Fotos", "Freundes-Feed, Kommentare, Clubs und gemeinsame Touren", "Challenges und Schritte-Rangliste unter Freunden", "Keine Werbung, kein Tracking, Privatsphäre-Zonen auf der Karte"],
        gallery: [
          { src: "images/plai-today.jpg", kind: "phone", cap: "Heute: neues Workout aus Apple Health" },
          { src: "images/plai-social.jpg", kind: "phone", cap: "Community: Freundes-Feed" },
          { src: "images/plai-explore.jpg", kind: "phone", cap: "Entdecken: Routen und Workouts" },
          { src: "images/plai-today2.jpg", kind: "phone", cap: "Schritte der Freunde heute" }
        ]
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
      mock: "phones",
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
        gallery: [
          { src: "images/bot-book.jpg", kind: "phone", cap: "Tischreservierung in 4 Schritten" },
          { src: "images/bot-menu.jpg", kind: "phone", cap: "Speisekarte und Antworten" },
          { src: "images/bot-human.jpg", kind: "phone", cap: "Übergabe an einen Mitarbeiter" }
        ]
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
