// =====================================================
//  FRENCH VERSION OF THE SITE TEXTS (auto-selected for fr-* browsers).
//  Same structure as content-en.js — edit only what's in quotes.
//  Keep "slug" and "project" values the SAME as in content.js.
// =====================================================

const site_fr = {
  name: "j13",
  role: "Équipe de développement",
  location: "Planète Terre",
  available: "Ouverts aux nouveaux projets",

  // Main phrase on the first screen
  headline: "Applis, plateformes & bots.",
  // Short line under the main phrase ("" — none)
  tagline: "De l'idée au lancement.",
  intro: "Nous sommes une petite équipe de développement. Nous créons des plateformes web, des applis et des bots pour les entreprises — de l'idée au lancement, puis nous restons là pour le support.",

  // Running line under the first screen
  marquee: [
    { text: "Plateformes web",     project: "hotel" },
    { text: "Bots Telegram",     project: "bots" },
    { text: "Bots WhatsApp",     project: "bots" },
    { text: "Automatisation",        project: "bots" },
    { text: "Systèmes de réservation",   project: "hotel" },
    { text: "Entraîneur de frappe",    project: "klavogin" },
    { text: "Applis clés en main",      project: "app" }
  ],

  // Counters
  stats: [
    { value: 15, suffix: "+",  label: "bots pour réseaux sociaux créés par notre équipe" },
    { value: 4,  suffix: "+",  label: "grands projets dans le portfolio" },
    { value: 24, suffix: "/7", label: "nos bots travaillent sans jour de repos" }
  ],

  projects: [
    {
      slug: "hotel",
      title: "Plateforme hôtelière",
      year: "2026",
      status: "en cours",
      live: true,
      description:
        "Un système pour un hôtel : réservation en ligne, gestion des chambres, calendrier des arrivées et tableau de bord pour le personnel.",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: "",
      link: "",
      details: {
        task: "Le problème : comment l'hôtel fonctionnait avant et ce qui n'allait pas (tableurs, appels, réservations mélangées).",
        solution: "Ce que nous construisons : une seule plateforme où les clients réservent en ligne et le personnel voit toutes les chambres et arrivées dans un calendrier unique.",
        result: "Ce que l'hôtel y gagne : moins de travail manuel, plus de doubles réservations, tout visible en temps réel.",
        features: [
          "Réservation en ligne pour les clients",
          "Calendrier de disponibilité",
          "Tableau de bord admin et personnel",
          "Statuts : libre, ménage, occupée"
        ],
        gallery: []
      }
    },
    {
      slug: "klavogin",
      title: "Klavogin",
      year: "2026",
      status: "en ligne",
      live: true,
      description:
        "Un entraîneur de vitesse de frappe en ligne : leçons de dactylographie, carte thermique des erreurs et 8 langues. Gratuit, sans inscription.",
      tech: ["JavaScript", "HTML", "CSS"],
      image: "images/klavogin.jpg",
      link: "klavogin/",
      details: {
        task: "La plupart des entraîneurs de frappe sont bourrés de pub, exigent un compte ou gèrent mal les dispositions non anglaises.",
        solution: "Un entraîneur léger qui s'ouvre instantanément : tapez des mots, des proverbes ou votre propre texte, il affiche votre vitesse, vos erreurs et les touches à travailler.",
        result: "Fonctionne directement dans le navigateur sur n'importe quel ordinateur, rien à installer. La progression est enregistrée sur l'appareil pour voir sa vitesse augmenter.",
        features: [
          "Leçons de dactylo pas à pas",
          "Carte thermique des erreurs et touches lentes",
          "8 langues et dispositions",
          "Modes : temps, mots, proverbes, texte perso",
          "Statistiques de progression",
          "Mode sans distraction"
        ],
        gallery: []
      }
    },
    {
      slug: "app",
      title: "Notre appli",
      year: "2025",
      status: "terminé",
      description:
        "Description de l'appli que nous avons créée : pour qui, quel problème elle résout et ce qu'elle a de meilleur.",
      tech: ["Python", "SQLite"],
      image: "",
      link: "",
      details: {
        task: "Quel problème l'appli devait résoudre, et pour qui.",
        solution: "Comment elle fonctionne et ce qui compte le plus.",
        result: "Le résultat : qui l'utilise, ce qui a changé, des chiffres si possible.",
        features: ["Fonction 1", "Fonction 2", "Fonction 3"],
        gallery: []
      }
    },
    {
      slug: "bots",
      title: "Bots pour Telegram et WhatsApp",
      year: "2025 — aujourd'hui",
      status: "sur commande",
      description:
        "Des chatbots pour les entreprises : ils prennent demandes et réservations, répondent aux questions fréquentes et envoient des rappels.",
      tech: ["Telegram Bot API", "WhatsApp API", "Automatisation"],
      mock: "chat",
      image: "",
      link: "",
      details: {
        task: "Les entreprises perdent des clients quand elles ne répondent pas assez vite sur les messageries — surtout le soir et le week-end.",
        solution: "Un bot Telegram ou WhatsApp qui répond seul aux questions courantes, prend demandes et réservations et passe le client à une vraie personne si besoin.",
        result: "Les clients obtiennent une réponse en quelques secondes, 24h/24, et le gérant voit toutes les demandes au même endroit.",
        features: [
          "Demandes et réservations",
          "Réponses aux questions fréquentes",
          "Rappels pour les clients",
          "Transfert du chat à un conseiller",
          "Alertes au gérant pour chaque nouvelle demande"
        ],
        gallery: []
      }
    }
  ],

  skills: ["JavaScript", "React", "Node.js", "Python", "SQL", "Telegram Bot API", "WhatsApp API", "Git"],

  experience: [
    { period: "2025 — aujourd'hui", title: "Plateforme hôtelière", place: "Projet d'équipe" },
    { period: "2025 — aujourd'hui", title: "Bots pour Telegram et WhatsApp", place: "Sur commande" },
    { period: "2024 — 2025", title: "Développement d'applis", place: "Pour un client" }
  ],

  // Testimonials — the section stays hidden while the list is empty.
  // { text: "The bot took half the calls off us in a week!", name: "Olena", role: "Café owner" },
  testimonials: [
  ],

  // How we work
  process: [
    { title: "Demande",    text: "Vous cliquez sur « Commander » et décrivez brièvement votre besoin." },
    { title: "Échange", text: "Nous précisons la tâche, proposons une solution et convenons du prix et des délais." },
    { title: "Développement", text: "Nous réalisons le projet et vous montrons l'avancement en cours de route." },
    { title: "Lancement",     text: "Nous lançons, vous montrons comment l'utiliser et restons disponibles pour le support." }
  ],

  faq: [
    {
      q: "Combien coûte un bot ?",
      a: "Ça dépend de la tâche : un bot simple pour les demandes et la FAQ est abordable ; un bot complexe avec paiements, CRM et plusieurs scénarios coûte plus. Dites-nous ce qu'il vous faut et nous donnerons un prix exact."
    },
    {
      q: "Combien de temps prend le développement ?",
      a: "Un bot simple prend quelques jours. Un projet plus gros, comme une plateforme ou un bot avec intégrations, à partir de quelques semaines. Les délais sont fixés dès le départ."
    },
    {
      q: "Peut-on modifier des choses plus tard ?",
      a: "Oui. Textes, boutons, scénarios et nouvelles fonctions peuvent être ajoutés après le lancement — nous restons en contact et aidons aux mises à jour."
    },
    {
      q: "Travaillez-vous uniquement avec Telegram et WhatsApp ?",
      a: "Pour les bots, surtout ceux-là, car c'est là que les clients discutent déjà. Nous créons aussi des plateformes web et des applis pour des entreprises précises."
    }
  ],

  contacts: {
    email: "hello@example.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    telegram: "https://t.me/"
  }
};
