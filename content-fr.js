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
    { text: "Jeu mobile", project: "game" },
    { text: "Bots Telegram",     project: "bots" },
    { text: "Bots WhatsApp",     project: "bots" },
    { text: "Automatisation",        project: "bots" },
    { text: "Systèmes de réservation",   project: "hotel" },
    { text: "Entraîneur de frappe",    project: "klavogin" },
    { text: "Appli sportive",      project: "plai" }
  ],

  // Counters
  stats: [
    { value: 15, suffix: "+",  label: "bots pour réseaux sociaux créés par notre équipe" },
    { value: 5,  suffix: "+",  label: "grands projets dans le portfolio" },
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
        "Un système pour hôtel : les femmes de chambre voient leurs chambres sur le téléphone, la gouvernante contrôle le ménage et la réception sait en temps réel quelles chambres sont prêtes.",
      tech: ["Appli web", "Téléphone + PC", "Mode hors ligne"],
      mock: "hotel",          // картка: ПК рецепції + телефон покоївки (скріни з gallery)
      image: "",
      link: "",
      details: {
        task: "Les statuts des chambres passaient par talkie-walkie et sur papier : la réception ne savait pas si une chambre était prête pour l'arrivée, et les femmes de chambre par où commencer.",
        solution: "Un seul système pour tous les rôles : la femme de chambre reçoit ses chambres dans le bon ordre, la gouvernante contrôle et voit les risques, la réception a un tableau de tout l'hôtel sur PC, la maintenance reçoit les demandes de réparation.",
        result: "Les chambres des arrivées anticipées sont prêtes à temps, les risques se voient à l'avance et toute l'équipe communique au même endroit — même sans Wi‑Fi.",
        features: ["Liste des chambres avec priorités et minuteur", "Contrôle du ménage par la gouvernante", "Tableau de réception : statut de chaque chambre en direct", "Alerte si le client arrive avant que la chambre soit prête", "Briefing du matin, chat d'équipe et bouton SOS", "Réparations, objets trouvés, fonctionne hors ligne"],
        // скріншоти: kind "desk" — у рамці браузера, "phone" — у рамці телефона; cap — підпис
        gallery: [
          { src: "images/hotel-reception.jpg", kind: "desk", cap: "Réception : tableau en direct de tout l'hôtel" },
          { src: "images/hotel-rooms.jpg", kind: "phone", cap: "Femme de chambre : mes chambres du jour" },
          { src: "images/hotel-room.jpg", kind: "phone", cap: "Fiche de la chambre avant le ménage" },
          { src: "images/hotel-briefing.jpg", kind: "phone", cap: "Briefing du matin de la gouvernante" },
          { src: "images/hotel-inspect.jpg", kind: "phone", cap: "Gouvernante : arrivées à risque" },
          { src: "images/hotel-team.jpg", kind: "phone", cap: "Équipe en service" }
        ]
      }
    },
    {
      slug: "game",
      title: "Notre jeu mobile",
      year: "2026",
      status: "en cours",
      description:
        "Un jeu mobile pour iOS et Android sur lequel notre équipe travaille en ce moment. On garde les détails secrets jusqu'à la sortie 🤫",
      tech: ["iOS", "Android", "Game design"],
      mock: "game",
      image: "",
      link: "",
      details: {
        task: "Créer un jeu auquel on a envie de revenir : des règles simples au départ et une profondeur qui se révèle avec le temps.",
        solution: "Des parties courtes pensées pour le téléphone, une prise en main à un doigt et une difficulté progressive pour ne jamais s'ennuyer.",
        result: "En développement. Premières captures et date de sortie très bientôt — restez à l'écoute.",
        features: ["Pour iOS et Android", "Contrôle à un doigt", "Parties courtes — jouez partout", "Niveaux de plus en plus difficiles", "Classement"],
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
        features: ["Leçons de dactylo pas à pas", "Test de vitesse avec carte thermique des erreurs", "Arcade : tapez les mots avant qu'ils ne tombent", "Course contre le fantôme et 24 succès", "Entraînement quotidien de vos lettres faibles", "Fonctionne hors ligne et s'installe comme une appli"],
        gallery: []
      }
    },
    {
      slug: "plai",
      title: "Plai",
      year: "2026",
      status: "bientôt sur l'App Store",
      description:
        "Une communauté sportive pour ceux qui aiment bouger : course, marche, randonnée et vélo. Entraînements GPS, parcours sur la carte, défis entre amis et données Apple Health au même endroit.",
      tech: ["iOS", "Android", "Apple Health", "Cartes & GPS"],
      mock: "plai",
      image: "",
      link: "",
      details: {
        task: "Les sportifs ont leurs pas dans une appli, leurs parcours dans une autre et parlent à leurs amis ailleurs. Nous voulions un seul endroit où bouger, c'est aussi une communauté.",
        solution: "Plai récupère votre journée depuis Apple Health et Health Connect, enregistre courses et randos au GPS, montre les parcours à proximité et ajoute le social : fil d'amis, likes, clubs, sorties de groupe et défis.",
        result: "L'appli est terminée et en préparation pour l'App Store. Toutes les exigences d'Apple sont déjà remplies : suppression du compte, modération et confidentialité.",
        features: ["Pas, sommeil et forme du jour depuis Apple Health", "Enregistrement GPS des courses et randos : allure, distance, dénivelé", "Parcours à proximité avec avis et photos", "Fil d'amis, commentaires, clubs et sorties de groupe", "Défis et classement des pas entre amis", "Sans pub ni pistage, zones de confidentialité sur la carte"],
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

  skills: ["JavaScript", "React", "React Native", "Node.js", "Python", "Swift", "SQL", "Supabase", "Apple Health", "Telegram Bot API", "WhatsApp API", "Git"],

  experience: [
    { period: "2026 — aujourd'hui", title: "Plateforme hôtelière", place: "Projet d'équipe" },
    { period: "2026 — aujourd'hui", title: "Jeu mobile", place: "Projet d'équipe" },
    { period: "2025 — 2026", title: "Plai — appli sportive", place: "Projet d'équipe" },
    { period: "2026", title: "Klavogin — entraîneur de frappe", place: "Projet d'équipe" },
    { period: "2025 — aujourd'hui", title: "Bots pour Telegram et WhatsApp", place: "Sur commande" }
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
