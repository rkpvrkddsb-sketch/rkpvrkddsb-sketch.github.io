// =====================================================
//  ITALIAN VERSION OF THE SITE TEXTS (auto-selected for it-* browsers).
//  Same structure as content-en.js — edit only what's in quotes.
//  Keep "slug" and "project" values the SAME as in content.js.
// =====================================================

const site_it = {
  name: "j13",
  role: "Team di sviluppo",
  location: "Pianeta Terra",
  available: "Aperti a nuovi progetti",

  // Main phrase on the first screen
  headline: "App, piattaforme e bot.",
  // Short line under the main phrase ("" — none)
  tagline: "Dall'idea al lancio.",
  intro: "Siamo un piccolo team di sviluppo. Realizziamo piattaforme web, app e bot per le aziende: dall'idea al lancio, e poi restiamo al vostro fianco per l'assistenza.",

  // Running line under the first screen
  marquee: [
    { text: "Piattaforme web",     project: "hotel" },
    { text: "Bot Telegram",     project: "bots" },
    { text: "Bot WhatsApp",     project: "bots" },
    { text: "Automazione",        project: "bots" },
    { text: "Sistemi di prenotazione",   project: "hotel" },
    { text: "Allenatore di dattilografia",    project: "klavogin" },
    { text: "App chiavi in mano",      project: "app" }
  ],

  // Counters
  stats: [
    { value: 15, suffix: "+",  label: "bot per social creati dal nostro team" },
    { value: 4,  suffix: "+",  label: "grandi progetti nel portfolio" },
    { value: 24, suffix: "/7", label: "i nostri bot lavorano senza giorni liberi" }
  ],

  projects: [
    {
      slug: "hotel",
      title: "Piattaforma per hotel",
      year: "2026",
      status: "in sviluppo",
      live: true,
      description:
        "Un sistema per un hotel: prenotazioni online, gestione delle camere, calendario dei check-in e pannello per lo staff.",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: "",
      link: "",
      details: {
        task: "Il problema: come funzionava prima l'hotel e cosa non andava (fogli di calcolo, telefonate, prenotazioni confuse).",
        solution: "Cosa stiamo costruendo: un'unica piattaforma dove gli ospiti prenotano online e lo staff vede tutte le camere e i check-in in un solo calendario.",
        result: "Cosa ci guadagna l'hotel: meno lavoro manuale, niente doppie prenotazioni, tutto visibile in tempo reale.",
        features: [
          "Prenotazioni online per gli ospiti",
          "Calendario disponibilità camere",
          "Pannello per amministrazione e staff",
          "Stati: libera, pulizia, occupata"
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
        "Un allenatore online di velocità di scrittura: lezioni di dattilografia, mappa di calore degli errori e 8 lingue. Gratis, senza registrazione.",
      tech: ["JavaScript", "HTML", "CSS"],
      image: "images/klavogin.jpg",
      link: "klavogin/",
      details: {
        task: "La maggior parte degli allenatori di dattilografia è piena di pubblicità, richiede un account o gestisce male i layout non inglesi.",
        solution: "Un allenatore leggero che si apre all'istante: scrivi parole, proverbi o un tuo testo, e lui mostra velocità, errori e i tasti su cui lavorare.",
        result: "Funziona direttamente nel browser su qualsiasi computer, senza installare nulla. I progressi restano sul dispositivo, così vedi crescere la tua velocità.",
        features: [
          "Lezioni di dattilografia passo dopo passo",
          "Mappa di calore di errori e tasti lenti",
          "8 lingue e layout",
          "Modalità: tempo, parole, proverbi, testo personale",
          "Statistiche dei progressi",
          "Modalità senza distrazioni"
        ],
        gallery: []
      }
    },
    {
      slug: "app",
      title: "La nostra app",
      year: "2025",
      status: "completato",
      description:
        "Descrizione dell'app che abbiamo creato: per chi è, quale problema risolve e cosa ha di meglio.",
      tech: ["Python", "SQLite"],
      image: "",
      link: "",
      details: {
        task: "Quale problema doveva risolvere l'app e per chi.",
        solution: "Come funziona e cosa conta di più.",
        result: "Il risultato: chi la usa, cosa è cambiato, numeri se ci sono.",
        features: ["Funzione 1", "Funzione 2", "Funzione 3"],
        gallery: []
      }
    },
    {
      slug: "bots",
      title: "Bot per Telegram e WhatsApp",
      year: "2025 — oggi",
      status: "su ordinazione",
      description:
        "Chatbot per le aziende: ricevono richieste e prenotazioni, rispondono alle domande frequenti e inviano promemoria.",
      tech: ["Telegram Bot API", "WhatsApp API", "Automazione"],
      mock: "chat",
      image: "",
      link: "",
      details: {
        task: "Le aziende perdono clienti quando non riescono a rispondere in tempo sui messenger, soprattutto la sera e nel weekend.",
        solution: "Un bot Telegram o WhatsApp che risponde da solo alle domande tipiche, riceve richieste e prenotazioni e passa il cliente a una persona quando serve.",
        result: "I clienti ricevono una risposta in pochi secondi, 24/7, e il titolare vede tutte le richieste in un unico posto.",
        features: [
          "Richieste e prenotazioni",
          "Risposte alle domande frequenti",
          "Promemoria per i clienti",
          "Passaggio della chat a un operatore",
          "Avvisi al titolare sulle nuove richieste"
        ],
        gallery: []
      }
    }
  ],

  skills: ["JavaScript", "React", "Node.js", "Python", "SQL", "Telegram Bot API", "WhatsApp API", "Git"],

  experience: [
    { period: "2025 — oggi", title: "Piattaforma per hotel", place: "Progetto del team" },
    { period: "2025 — oggi", title: "Bot per Telegram e WhatsApp", place: "Su ordinazione" },
    { period: "2024 — 2025", title: "Sviluppo di app", place: "Per un cliente" }
  ],

  // Testimonials — the section stays hidden while the list is empty.
  // { text: "The bot took half the calls off us in a week!", name: "Olena", role: "Café owner" },
  testimonials: [
  ],

  // How we work
  process: [
    { title: "Richiesta",    text: "Clicchi su «Ordina» e ci scrivi in breve cosa ti serve." },
    { title: "Confronto", text: "Chiariamo il compito, proponiamo una soluzione e concordiamo prezzo e tempi." },
    { title: "Sviluppo", text: "Realizziamo il progetto e ti mostriamo i progressi lungo il percorso." },
    { title: "Lancio",     text: "Lanciamo, ti mostriamo come usarlo e restiamo in contatto per l'assistenza." }
  ],

  faq: [
    {
      q: "Quanto costa un bot?",
      a: "Dipende dal compito: un bot semplice per richieste e FAQ è economico; uno complesso con pagamenti, CRM e più flussi costa di più. Dicci cosa ti serve e ti daremo un prezzo esatto."
    },
    {
      q: "Quanto dura lo sviluppo?",
      a: "Un bot semplice richiede pochi giorni. Un progetto più grande, come una piattaforma o un bot con integrazioni, da qualche settimana. I tempi si concordano all'inizio."
    },
    {
      q: "Si può cambiare qualcosa dopo?",
      a: "Sì. Testi, pulsanti, flussi e nuove funzioni si possono aggiungere dopo il lancio: restiamo in contatto e aiutiamo con gli aggiornamenti."
    },
    {
      q: "Lavorate solo con Telegram e WhatsApp?",
      a: "I bot soprattutto per questi, perché è lì che i clienti già parlano. Realizziamo anche piattaforme web e app per aziende specifiche."
    }
  ],

  contacts: {
    email: "hello@example.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    telegram: "https://t.me/"
  }
};
