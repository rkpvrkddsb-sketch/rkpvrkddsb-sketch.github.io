// =====================================================
//  PORTUGUESE VERSION OF THE SITE TEXTS (auto-selected for pt-* browsers).
//  Same structure as content-en.js — edit only what's in quotes.
//  Keep "slug" and "project" values the SAME as in content.js.
// =====================================================

const site_pt = {
  name: "j13",
  role: "Equipa de desenvolvimento",
  location: "Planeta Terra",
  available: "Abertos a novos projetos",

  // Main phrase on the first screen
  headline: "Apps, plataformas e bots.",
  // Short line under the main phrase ("" — none)
  tagline: "Da ideia ao lançamento.",
  intro: "Somos uma pequena equipa de desenvolvimento. Criamos plataformas web, apps e bots para empresas — da ideia ao lançamento, e continuamos por perto para dar suporte.",

  // Running line under the first screen
  marquee: [
    { text: "Plataformas web",     project: "hotel" },
    { text: "Jogo mobile", project: "game" },
    { text: "Bots de Telegram",     project: "bots" },
    { text: "Bots de WhatsApp",     project: "bots" },
    { text: "Automação",        project: "bots" },
    { text: "Sistemas de reservas",   project: "hotel" },
    { text: "Treinador de digitação",    project: "klavogin" },
    { text: "Apps chave na mão",      project: "app" }
  ],

  // Counters
  stats: [
    { value: 15, suffix: "+",  label: "bots para redes sociais criados pela nossa equipa" },
    { value: 5,  suffix: "+",  label: "grandes projetos no portfólio" },
    { value: 24, suffix: "/7", label: "os nossos bots trabalham sem folgas" }
  ],

  projects: [
    {
      slug: "hotel",
      title: "Plataforma para hotel",
      year: "2026",
      status: "em desenvolvimento",
      live: true,
      description:
        "Um sistema para um hotel: reservas online, gestão de quartos, calendário de check-ins e painel para a equipa.",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: "",
      link: "",
      details: {
        task: "O problema: como o hotel funcionava antes e o que era incómodo (folhas de cálculo, chamadas, reservas trocadas).",
        solution: "O que estamos a construir: uma única plataforma onde os hóspedes reservam online e a equipa vê todos os quartos e check-ins num só calendário.",
        result: "O que o hotel ganha: menos trabalho manual, nenhuma reserva duplicada, tudo visível em tempo real.",
        features: [
          "Reservas online para hóspedes",
          "Calendário de disponibilidade",
          "Painel para administração e equipa",
          "Estados: livre, limpeza, ocupado"
        ],
        gallery: []
      }
    },
    {
      slug: "game",
      title: "O nosso jogo mobile",
      year: "2026",
      status: "em desenvolvimento",
      description:
        "Um jogo mobile para iOS e Android em que a nossa equipa está a trabalhar agora. Guardamos os detalhes em segredo até ao lançamento 🤫",
      tech: ["iOS", "Android", "Game design"],
      mock: "game",
      image: "",
      link: "",
      details: {
        task: "Criar um jogo a que apetece voltar: regras simples no início e uma profundidade que se revela com o tempo.",
        solution: "Partidas curtas pensadas para o telemóvel, controlo fácil com um dedo e dificuldade gradual para nunca aborrecer.",
        result: "Em desenvolvimento. Em breve mostramos as primeiras imagens e a data de lançamento — fica atento.",
        features: ["Para iOS e Android", "Controlo com um dedo", "Partidas curtas — joga em qualquer lado", "Níveis cada vez mais difíceis", "Tabela de recordes"],
        gallery: []
      }
    },
    {
      slug: "klavogin",
      title: "Klavogin",
      year: "2026",
      status: "ativo",
      live: true,
      description:
        "Um treinador online de velocidade de digitação: lições de digitação cega, mapa de calor de erros e 8 idiomas. Grátis e sem registo.",
      tech: ["JavaScript", "HTML", "CSS"],
      image: "images/klavogin.jpg",
      link: "klavogin/",
      details: {
        task: "A maioria dos treinadores de digitação está cheia de anúncios, exige conta ou lida mal com teclados que não são ingleses.",
        solution: "Um treinador leve que abre num instante: escreves palavras, provérbios ou o teu próprio texto, e ele mostra a velocidade, os erros e as teclas a melhorar.",
        result: "Funciona diretamente no navegador em qualquer computador, sem instalar nada. O progresso fica guardado no dispositivo, para veres a velocidade a crescer.",
        features: [
          "Lições de digitação passo a passo",
          "Mapa de calor de erros e teclas lentas",
          "8 idiomas e teclados",
          "Modos: tempo, palavras, provérbios, texto próprio",
          "Estatísticas de progresso",
          "Modo sem distrações"
        ],
        gallery: []
      }
    },
    {
      slug: "app",
      title: "A nossa app",
      year: "2025",
      status: "concluído",
      description:
        "Descrição da app que criámos: para quem é, que problema resolve e o que tem de melhor.",
      tech: ["Python", "SQLite"],
      image: "",
      link: "",
      details: {
        task: "Que problema a app tinha de resolver e para quem.",
        solution: "Como funciona e o que é mais importante.",
        result: "O resultado: quem a usa, o que mudou, números se houver.",
        features: ["Função 1", "Função 2", "Função 3"],
        gallery: []
      }
    },
    {
      slug: "bots",
      title: "Bots para Telegram e WhatsApp",
      year: "2025 — hoje",
      status: "por encomenda",
      description:
        "Chatbots para empresas: recebem pedidos e reservas, respondem a perguntas frequentes e enviam lembretes.",
      tech: ["Telegram Bot API", "WhatsApp API", "Automação"],
      mock: "chat",
      image: "",
      link: "",
      details: {
        task: "As empresas perdem clientes quando não respondem a tempo nas mensagens — sobretudo à noite e aos fins de semana.",
        solution: "Um bot de Telegram ou WhatsApp que responde sozinho às perguntas típicas, recebe pedidos e reservas e passa o cliente a uma pessoa quando é preciso.",
        result: "Os clientes recebem resposta em segundos, 24/7, e o dono vê todos os pedidos num só lugar.",
        features: [
          "Pedidos e reservas",
          "Respostas a perguntas frequentes",
          "Lembretes para clientes",
          "Passar a conversa a um gestor",
          "Alertas ao dono sobre novos pedidos"
        ],
        gallery: []
      }
    }
  ],

  skills: ["JavaScript", "React", "Node.js", "Python", "SQL", "Telegram Bot API", "WhatsApp API", "Git"],

  experience: [
    { period: "2025 — hoje", title: "Plataforma para hotel", place: "Projeto da equipa" },
    { period: "2025 — hoje", title: "Bots para Telegram e WhatsApp", place: "Por encomenda" },
    { period: "2024 — 2025", title: "Desenvolvimento de apps", place: "Para um cliente" }
  ],

  // Testimonials — the section stays hidden while the list is empty.
  // { text: "The bot took half the calls off us in a week!", name: "Olena", role: "Café owner" },
  testimonials: [
  ],

  // How we work
  process: [
    { title: "Pedido",    text: "Carregas em «Encomendar» e dizes em poucas palavras o que precisas." },
    { title: "Conversa", text: "Esclarecemos a tarefa, propomos uma solução e combinamos preço e prazos." },
    { title: "Desenvolvimento", text: "Construímos o projeto e mostramos o progresso pelo caminho." },
    { title: "Lançamento",     text: "Lançamos, mostramos como usar e ficamos em contacto para dar suporte." }
  ],

  faq: [
    {
      q: "Quanto custa um bot?",
      a: "Depende da tarefa: um bot simples para pedidos e perguntas frequentes é acessível; um complexo com pagamentos, CRM e vários fluxos custa mais. Diz-nos o que precisas e damos-te um preço exato."
    },
    {
      q: "Quanto tempo demora o desenvolvimento?",
      a: "Um bot simples leva alguns dias. Um projeto maior, como uma plataforma ou um bot com integrações, a partir de algumas semanas. Combinamos os prazos logo no início."
    },
    {
      q: "Dá para mudar coisas depois?",
      a: "Sim. Textos, botões, fluxos e novas funções podem ser adicionados depois do lançamento — ficamos em contacto e ajudamos com as atualizações."
    },
    {
      q: "Só trabalham com Telegram e WhatsApp?",
      a: "Os bots, sobretudo para esses, porque é lá que os clientes já conversam. Também criamos plataformas web e apps para negócios específicos."
    }
  ],

  contacts: {
    email: "hello@example.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    telegram: "https://t.me/"
  }
};
