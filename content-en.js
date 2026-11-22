// =====================================================
//  ENGLISH VERSION OF THE SITE TEXTS.
//  Same structure as content.js — edit only what's in quotes.
//  Keep "slug" and "project" values the SAME as in content.js.
// =====================================================

const site_en = {
  name: "j13",
  role: "Development team",
  location: "Planet Earth",
  available: "Open to new projects",

  // Main phrase on the first screen
  headline: "Apps, platforms & bots.",
  // Short line under the main phrase ("" — none)
  tagline: "From idea to launch.",
  intro: "We are a small development team. We build web platforms, apps and bots for businesses — from idea to launch, and we stay around for support.",

  // Running line under the first screen
  marquee: [
    { text: "Web platforms",     project: "hotel" },
    { text: "Mobile game", project: "game" },
    { text: "Telegram bots",     project: "bots" },
    { text: "WhatsApp bots",     project: "bots" },
    { text: "Automation",        project: "bots" },
    { text: "Booking systems",   project: "hotel" },
    { text: "Typing trainer",    project: "klavogin" },
    { text: "Sports app",      project: "plai" }
  ],

  // Counters
  stats: [
    { value: 15, suffix: "+",  label: "social media bots built by our team" },
    { value: 5,  suffix: "+",  label: "major projects in the portfolio" },
    { value: 24, suffix: "/7", label: "our bots work without days off" }
  ],

  projects: [
    {
      slug: "hotel",
      title: "Hotel platform",
      year: "2026",
      status: "in progress",
      live: true,
      description:
        "A hotel system: housekeepers see their rooms on the phone, the supervisor inspects the cleaning, and reception knows in real time which rooms are ready for check-in.",
      tech: ["Web app", "Phone + PC", "Offline mode"],
      mock: "hotel",          // картка: ПК рецепції + телефон покоївки (скріни з gallery)
      image: "",
      link: "",
      details: {
        task: "Room statuses were passed on by radio and on paper: reception didn't know if a room was ready for the guest's arrival, and housekeepers didn't know where to start.",
        solution: "One system for every role: housekeepers get their rooms in the right order, the supervisor inspects and sees risks, reception gets a live board of the whole hotel on the PC, and maintenance gets repair tickets.",
        result: "Rooms for early arrivals are ready on time, risks are visible in advance, and the whole team stays connected in one place — even when the Wi‑Fi drops.",
        features: ["Housekeeper room list with priorities and a timer", "Cleaning inspection by the supervisor", "Reception board: every room's status live", "Warnings when a guest arrives before the room is ready", "Morning briefing, team chat and an SOS button", "Repair tickets, Lost & Found, works offline"],
        // скріншоти: kind "desk" — у рамці браузера, "phone" — у рамці телефона; cap — підпис
        gallery: [
          { src: "images/hotel-reception.jpg", kind: "desk", cap: "Reception: live board of the whole hotel" },
          { src: "images/hotel-rooms.jpg", kind: "phone", cap: "Housekeeper: my rooms today" },
          { src: "images/hotel-room.jpg", kind: "phone", cap: "Room card before cleaning" },
          { src: "images/hotel-briefing.jpg", kind: "phone", cap: "Morning briefing from the supervisor" },
          { src: "images/hotel-inspect.jpg", kind: "phone", cap: "Supervisor: arrivals at risk" },
          { src: "images/hotel-team.jpg", kind: "phone", cap: "Team on shift" }
        ]
      }
    },
    {
      slug: "game",
      title: "Our mobile game",
      year: "2026",
      status: "in progress",
      description:
        "A mobile game for iOS and Android that our team is working on right now. We're keeping the details secret until release 🤫",
      tech: ["iOS", "Android", "Game design"],
      mock: "game",
      image: "",
      link: "",
      details: {
        task: "Make a game you want to come back to: simple rules at the start, with depth that opens up over time.",
        solution: "Short play sessions made for a phone, easy one-finger controls and a gradual difficulty curve so it never gets boring.",
        result: "In development now. First screenshots and a release date are coming soon — stay tuned.",
        features: ["For iOS and Android", "One-finger controls", "Short sessions — play anywhere", "Levels that gradually get harder", "Leaderboard"],
        gallery: []
      }
    },
    {
      slug: "klavogin",
      title: "Klavogin",
      year: "2026",
      status: "live",
      live: true,
      description:
        "An online typing speed trainer: touch-typing lessons, an error heatmap and 8 languages. Free, no sign-up.",
      tech: ["JavaScript", "HTML", "CSS"],
      image: "images/klavogin.jpg",
      link: "klavogin/",
      details: {
        task: "Most typing trainers are full of ads, require an account or handle non-English layouts poorly.",
        solution: "A lightweight trainer that opens instantly: type words, proverbs or your own text, and it shows your speed and mistakes and points out which keys to work on.",
        result: "Runs right in the browser on any computer, nothing to install. Progress is saved on the device, so you can watch your speed grow.",
        features: ["Step-by-step touch-typing lessons", "Speed test with an error heatmap", "Arcade: type the falling words before they land", "Ghost race and 24 achievements", "Daily training of your own weak letters", "Works offline and installs as an app"],
        gallery: []
      }
    },
    {
      slug: "plai",
      title: "Plai",
      year: "2026",
      status: "coming to the App Store",
      description:
        "A sports community for people who love to move: running, walking, hiking and cycling. GPS workouts, trails on the map, challenges with friends and Apple Health data in one place.",
      tech: ["iOS", "Android", "Apple Health", "Maps & GPS"],
      mock: "plai",
      image: "",
      link: "",
      details: {
        task: "Active people keep their steps in one app, routes in another and talk to friends somewhere else. We wanted one place where moving is also a community.",
        solution: "Plai pulls your day from Apple Health and Health Connect, records runs and hikes with GPS, shows trails nearby and adds the social side: a friends feed, likes, clubs, group outings and challenges.",
        result: "The app is finished and being prepared for the App Store. All of Apple's requirements are already covered: account deletion, moderation and privacy.",
        features: ["Steps, sleep and training readiness from Apple Health", "GPS recording for runs and hikes: pace, distance, elevation", "Trails nearby with reviews and photos", "Friends feed, comments, clubs and group outings", "Challenges and a friends' step leaderboard", "No ads, no tracking, privacy zones on the map"],
        gallery: []
      }
    },
    {
      slug: "bots",
      title: "Bots for Telegram and WhatsApp",
      year: "2025 — now",
      status: "made to order",
      description:
        "Chatbots for business: they take requests and bookings, answer common questions and send reminders.",
      tech: ["Telegram Bot API", "WhatsApp API", "Automation"],
      mock: "chat",
      image: "",
      link: "",
      details: {
        task: "Businesses lose customers when they can't reply in messengers fast enough — especially in the evenings and at weekends.",
        solution: "A Telegram or WhatsApp bot that answers typical questions on its own, takes requests and bookings, and hands the customer to a real person when needed.",
        result: "Customers get a reply within seconds, 24/7, and the owner sees every request in one place.",
        features: [
          "Requests and bookings",
          "Answers to common questions",
          "Reminders for customers",
          "Handing the chat to a manager",
          "Alerts to the owner about new requests"
        ],
        gallery: []
      }
    }
  ],

  skills: ["JavaScript", "React", "React Native", "Node.js", "Python", "Swift", "SQL", "Supabase", "Apple Health", "Telegram Bot API", "WhatsApp API", "Git"],

  experience: [
    { period: "2026 — now", title: "Hotel platform", place: "Team project" },
    { period: "2026 — now", title: "Mobile game", place: "Team project" },
    { period: "2025 — 2026", title: "Plai — sports app", place: "Team project" },
    { period: "2026", title: "Klavogin — typing trainer", place: "Team project" },
    { period: "2025 — now", title: "Bots for Telegram and WhatsApp", place: "Made to order" }
  ],

  // Testimonials — the section stays hidden while the list is empty.
  // { text: "The bot took half the calls off us in a week!", name: "Olena", role: "Café owner" },
  testimonials: [
  ],

  // How we work
  process: [
    { title: "Request",    text: "You hit “Order” and tell us briefly what you need." },
    { title: "Discussion", text: "We clarify the task, propose a solution and agree on price and timeline." },
    { title: "Development", text: "We build the project and show progress along the way." },
    { title: "Launch",     text: "We launch, show you how to use it and stay in touch for support." }
  ],

  faq: [
    {
      q: "How much does a bot cost?",
      a: "It depends on the task: a simple bot for requests and FAQs is affordable; a complex one with payments, a CRM and several flows costs more. Tell us what you need and we'll give you an exact price."
    },
    {
      q: "How long does development take?",
      a: "A simple bot takes a few days. A bigger project, like a platform or a bot with integrations, takes from a few weeks. We agree on the timeline at the start."
    },
    {
      q: "Can things be changed later?",
      a: "Yes. Texts, buttons, flows and new features can be added after launch — we stay in touch and help with updates."
    },
    {
      q: "Do you only work with Telegram and WhatsApp?",
      a: "Bots — mostly for those, because that's where customers already talk. We also build web platforms and apps for specific businesses."
    }
  ],

  contacts: {
    email: "hello@example.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    telegram: "https://t.me/"
  }
};
