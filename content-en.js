// =====================================================
//  ENGLISH VERSION OF THE SITE TEXTS.
//  Same structure as content.js — edit only what's in quotes.
//  Keep "slug" and "project" values the SAME as in content.js.
// =====================================================

const site_en = {
  name: "Your Name",
  role: "Product Developer",
  location: "Dublin, Ireland",
  available: "Open to new projects",

  // Main phrase on the first screen
  headline: "I build apps and platforms that are a pleasure to use.",
  intro: "A couple of sentences about you: what you do, what you care about and how you help the people you work with.",

  // Running line under the first screen
  marquee: [
    { text: "Web platforms",     project: "hotel" },
    { text: "Telegram bots",     project: "bots" },
    { text: "WhatsApp bots",     project: "bots" },
    { text: "Automation",        project: "bots" },
    { text: "Booking systems",   project: "hotel" },
    { text: "Turnkey apps",      project: "app" }
  ],

  // Counters
  stats: [
    { value: 3,  suffix: "+",  label: "major projects in the portfolio" },
    { value: 2,  suffix: "",   label: "messengers for bots — Telegram and WhatsApp" },
    { value: 24, suffix: "/7", label: "my bots work without days off" }
  ],

  projects: [
    {
      slug: "hotel",
      title: "Hotel platform",
      year: "2026",
      status: "in progress",
      live: true,
      description:
        "A system for a hotel: online booking, room management, a check-in calendar and a staff dashboard.",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: "",
      link: "",
      details: {
        task: "The problem: how the hotel worked before and what was inconvenient (spreadsheets, phone calls, mixed-up bookings).",
        solution: "What we're building: one platform where guests book online and staff see every room and check-in in a single calendar.",
        result: "What it gives the hotel: less manual work, no double bookings, everything visible in real time.",
        features: [
          "Online booking for guests",
          "Room availability calendar",
          "Admin and staff dashboard",
          "Room statuses: free, cleaning, occupied"
        ],
        gallery: []
      }
    },
    {
      slug: "app",
      title: "Our app",
      year: "2025",
      status: "done",
      description:
        "A description of the app we built: who it's for, what problem it solves and what's best about it.",
      tech: ["Python", "SQLite"],
      image: "",
      link: "",
      details: {
        task: "What problem the app had to solve, and for whom.",
        solution: "How it works and what matters most in it.",
        result: "The outcome: who uses it, what changed, numbers if you have them.",
        features: ["Feature 1", "Feature 2", "Feature 3"],
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

  skills: ["JavaScript", "React", "Node.js", "Python", "SQL", "Telegram Bot API", "WhatsApp API", "Git"],

  experience: [
    { period: "2025 — now", title: "Hotel platform", place: "Own project" },
    { period: "2025 — now", title: "Bots for Telegram and WhatsApp", place: "Freelance / made to order" },
    { period: "2024 — 2025", title: "App development", place: "Team / company" }
  ],

  // Testimonials — the section stays hidden while the list is empty.
  // { text: "The bot took half the calls off us in a week!", name: "Olena", role: "Café owner" },
  testimonials: [
  ],

  faq: [
    {
      q: "How much does a bot cost?",
      a: "It depends on the task: a simple bot for requests and FAQs is affordable; a complex one with payments, a CRM and several flows costs more. Tell me what you need and I'll give you an exact price."
    },
    {
      q: "How long does development take?",
      a: "A simple bot takes a few days. A bigger project, like a platform or a bot with integrations, takes from a few weeks. We agree on the timeline at the start."
    },
    {
      q: "Can things be changed later?",
      a: "Yes. Texts, buttons, flows and new features can be added after launch — I stay in touch and help with updates."
    },
    {
      q: "Do you only work with Telegram and WhatsApp?",
      a: "Bots — mostly for those, because that's where customers already talk. I also build web platforms and apps for specific businesses."
    }
  ],

  contacts: {
    email: "hello@example.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    telegram: "https://t.me/"
  }
};
