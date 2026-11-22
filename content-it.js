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
    { text: "Gioco mobile", project: "game" },
    { text: "Bot Telegram",     project: "bots" },
    { text: "Bot WhatsApp",     project: "bots" },
    { text: "Automazione",        project: "bots" },
    { text: "Sistemi di prenotazione",   project: "hotel" },
    { text: "Allenatore di dattilografia",    project: "klavogin" },
    { text: "App sportiva",      project: "plai" }
  ],

  // Counters
  stats: [
    { value: 15, suffix: "+",  label: "bot per social creati dal nostro team" },
    { value: 5,  suffix: "+",  label: "grandi progetti nel portfolio" },
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
        "Un sistema per hotel: le cameriere ai piani vedono le loro camere sul telefono, la governante controlla la pulizia e la reception sa in tempo reale quali camere sono pronte.",
      tech: ["Web app", "Telefono + PC", "Modalità offline"],
      mock: "hotel",          // картка: ПК рецепції + телефон покоївки (скріни з gallery)
      image: "",
      link: "",
      details: {
        task: "Gli stati delle camere passavano via radio e su carta: la reception non sapeva se una camera era pronta per l'arrivo e le cameriere da dove iniziare.",
        solution: "Un sistema per tutti i ruoli: la cameriera riceve le camere nell'ordine giusto, la governante controlla e vede i rischi, la reception ha una bacheca di tutto l'hotel sul PC e la manutenzione riceve le richieste di riparazione.",
        result: "Le camere per gli arrivi anticipati sono pronte in tempo, i rischi si vedono prima e tutto il team comunica in un unico posto — anche senza Wi‑Fi.",
        features: ["Elenco camere con priorità e timer", "Controllo della pulizia da parte della governante", "Bacheca reception: stato di ogni camera in tempo reale", "Avviso se l'ospite arriva prima che la camera sia pronta", "Briefing mattutino, chat del team e pulsante SOS", "Riparazioni, oggetti smarriti, funziona offline"],
        // скріншоти: kind "desk" — у рамці браузера, "phone" — у рамці телефона; cap — підпис
        gallery: [
          { src: "images/hotel-reception.jpg", kind: "desk", cap: "Reception: bacheca live di tutto l'hotel" },
          { src: "images/hotel-rooms.jpg", kind: "phone", cap: "Cameriera: le mie camere di oggi" },
          { src: "images/hotel-room.jpg", kind: "phone", cap: "Scheda camera prima della pulizia" },
          { src: "images/hotel-briefing.jpg", kind: "phone", cap: "Briefing mattutino della governante" },
          { src: "images/hotel-inspect.jpg", kind: "phone", cap: "Governante: arrivi a rischio" },
          { src: "images/hotel-team.jpg", kind: "phone", cap: "Team in servizio" }
        ]
      }
    },
    {
      slug: "game",
      title: "Il nostro gioco mobile",
      year: "2026",
      status: "in sviluppo",
      description:
        "Un gioco mobile per iOS e Android a cui il nostro team sta lavorando adesso. Teniamo i dettagli segreti fino all'uscita 🤫",
      tech: ["iOS", "Android", "Game design"],
      mock: "game",
      image: "",
      link: "",
      details: {
        task: "Creare un gioco a cui viene voglia di tornare: regole semplici all'inizio e una profondità che si scopre col tempo.",
        solution: "Partite brevi pensate per il telefono, controlli facili con un dito e una difficoltà che cresce piano piano, così non annoia mai.",
        result: "Ora in sviluppo. Presto mostreremo i primi screenshot e la data d'uscita: restate sintonizzati.",
        features: ["Per iOS e Android", "Controlli con un dito", "Partite brevi: gioca ovunque", "Livelli sempre più difficili", "Classifica"],
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
        features: ["Lezioni di dattilografia passo dopo passo", "Test di velocità con mappa di calore degli errori", "Arcade: scrivi le parole prima che cadano", "Gara contro il fantasma e 24 obiettivi", "Allenamento quotidiano sulle tue lettere deboli", "Funziona offline e si installa come app"],
        gallery: []
      }
    },
    {
      slug: "plai",
      title: "Plai",
      year: "2026",
      status: "in arrivo sull'App Store",
      description:
        "Una community sportiva per chi ama muoversi: corsa, camminata, trekking e bici. Allenamenti con GPS, percorsi sulla mappa, sfide con gli amici e dati di Apple Health in un unico posto.",
      tech: ["iOS", "Android", "Apple Health", "Mappe e GPS"],
      mock: "plai",
      image: "",
      link: "",
      details: {
        task: "Chi è attivo tiene i passi in un'app, i percorsi in un'altra e parla con gli amici altrove. Volevamo un unico posto dove muoversi è anche una community.",
        solution: "Plai raccoglie la tua giornata da Apple Health e Health Connect, registra corse ed escursioni con il GPS, mostra i percorsi vicini e aggiunge il lato social: bacheca degli amici, like, club, uscite di gruppo e sfide.",
        result: "L'app è pronta e in preparazione per l'App Store. Tutti i requisiti di Apple sono già soddisfatti: eliminazione dell'account, moderazione e privacy.",
        features: ["Passi, sonno e prontezza all'allenamento da Apple Health", "Registrazione GPS di corse ed escursioni: ritmo, distanza, dislivello", "Percorsi vicini con recensioni e foto", "Bacheca amici, commenti, club e uscite di gruppo", "Sfide e classifica dei passi tra amici", "Niente pubblicità né tracciamento, zone privacy sulla mappa"],
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

  skills: ["JavaScript", "React", "React Native", "Node.js", "Python", "Swift", "SQL", "Supabase", "Apple Health", "Telegram Bot API", "WhatsApp API", "Git"],

  experience: [
    { period: "2026 — oggi", title: "Piattaforma per hotel", place: "Progetto del team" },
    { period: "2026 — oggi", title: "Gioco mobile", place: "Progetto del team" },
    { period: "2025 — 2026", title: "Plai — app sportiva", place: "Progetto del team" },
    { period: "2026", title: "Klavogin — allenatore di dattilografia", place: "Progetto del team" },
    { period: "2025 — oggi", title: "Bot per Telegram e WhatsApp", place: "Su ordinazione" }
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
