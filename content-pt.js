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
    { text: "Mapas de conhecimento", project: "maps" },
    { text: "Jogo mobile", project: "game" },
    { text: "Bots de Telegram",     project: "bots" },
    { text: "Bots de WhatsApp",     project: "bots" },
    { text: "Automação",        project: "bots" },
    { text: "Sistemas de reservas",   project: "hotel" },
    { text: "Treinador de digitação",    project: "klavogin" },
    { text: "App desportiva",      project: "plai" }
  ],

  // Counters
  stats: [
    { value: 15, suffix: "+",  label: "bots para redes sociais criados pela nossa equipa" },
    { value: 6,  suffix: "+",  label: "grandes projetos no portfólio" },
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
        "Um sistema para hotéis: as empregadas de quarto veem os seus quartos no telemóvel, a governanta inspeciona a limpeza e a receção sabe em tempo real que quartos estão prontos.",
      tech: ["App web", "Telemóvel + PC", "Modo offline"],
      mock: "hotel",          // картка: ПК рецепції + телефон покоївки (скріни з gallery)
      image: "",
      link: "",
      details: {
        task: "Os estados dos quartos passavam por rádio e em papel: a receção não sabia se o quarto estava pronto para a chegada e as empregadas não sabiam por onde começar.",
        solution: "Um sistema para todos os papéis: a empregada recebe os quartos na ordem certa, a governanta inspeciona e vê os riscos, a receção tem um painel do hotel inteiro no PC e a manutenção recebe os pedidos de reparação.",
        result: "Os quartos para chegadas antecipadas ficam prontos a tempo, os riscos veem-se com antecedência e a equipa toda comunica num só lugar — mesmo sem Wi‑Fi.",
        features: ["Lista de quartos com prioridades e temporizador", "Inspeção da limpeza pela governanta", "Painel da receção: estado de cada quarto ao vivo", "Aviso se o hóspede chegar antes do quarto estar pronto", "Briefing da manhã, chat da equipa e botão SOS", "Reparações, perdidos e achados, funciona offline"],
        // скріншоти: kind "desk" — у рамці браузера, "phone" — у рамці телефона; cap — підпис
        gallery: [
          { src: "images/hotel-reception.jpg", kind: "desk", cap: "Receção: painel ao vivo do hotel inteiro" },
          { src: "images/hotel-rooms.jpg", kind: "phone", cap: "Empregada: os meus quartos de hoje" },
          { src: "images/hotel-room.jpg", kind: "phone", cap: "Ficha do quarto antes da limpeza" },
          { src: "images/hotel-briefing.jpg", kind: "phone", cap: "Briefing da manhã da governanta" },
          { src: "images/hotel-inspect.jpg", kind: "phone", cap: "Governanta: chegadas em risco" },
          { src: "images/hotel-team.jpg", kind: "phone", cap: "Equipa de serviço" }
        ]
      }
    },
    {
      slug: "maps",
      title: "Mapas de conhecimento",
      year: "2026",
      status: "ativo",
      live: true,
      description:
        "Mapas de conhecimento em equipa: divide qualquer tema em ramos, junta cartões, fotos e ligações e fá-los crescer juntos. O Claude ajuda a criar os ramos.",
      tech: ["App web", "Trabalho em equipa", "Claude AI"],
      mock: "duo",            // картка: великий скрін у браузері + телефон (з gallery)
      image: "",
      link: "",
      details: {
        task: "O conhecimento da equipa está espalhado por notas, chats e documentos — uma pessoa nova demora uma semana a orientar-se.",
        solution: "Mapas vivos: tema → ramos → cartões «Como funciona», «Nuance», «Risco». Mapas de equipa, partilhados e pessoais, 6 temas, histórico de alterações, e o Claude sugere subtemas e explicações em segundos.",
        result: "Um tema complexo cabe num ecrã, cada membro completa o mapa e todos veem as mudanças na hora.",
        features: ["Ramos e subtemas com arrastar e largar", "Cartões: Como funciona, Nuance, Risco, Exemplo…", "O Claude cria ramos, cartões e explicações", "Mapas de equipa, partilhados e pessoais", "6 temas, cores e fontes próprias", "Fotos, ligações entre blocos, histórico"],
        gallery: [
          { src: "images/km-map.jpg", kind: "desk", cap: "Mapa «Como lançar uma app móvel»" },
          { src: "images/km-home.jpg", kind: "desk", cap: "Todos os mapas da equipa" },
          { src: "images/km-phone.jpg", kind: "phone", cap: "No telemóvel" }
        ]
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
        features: ["Lições de digitação passo a passo", "Teste de velocidade com mapa de calor de erros", "Arcade: escreve as palavras antes que caiam", "Corrida contra o fantasma e 24 conquistas", "Treino diário das tuas letras fracas", "Funciona offline e instala-se como app"],
        gallery: []
      }
    },
    {
      slug: "plai",
      title: "Plai",
      year: "2026",
      status: "a caminho da App Store",
      description:
        "Uma comunidade desportiva para quem gosta de se mexer: corrida, caminhada, trilhos e bicicleta. Treinos com GPS, rotas no mapa, desafios com amigos e dados do Apple Health num só lugar.",
      tech: ["iOS", "Android", "Apple Health", "Mapas e GPS"],
      mock: "plai",
      image: "",
      link: "",
      details: {
        task: "Quem é ativo tem os passos numa app, as rotas noutra e fala com os amigos noutro sítio. Queríamos um só lugar onde mexer-se é também uma comunidade.",
        solution: "O Plai junta o teu dia a partir do Apple Health e do Health Connect, grava corridas e trilhos com GPS, mostra rotas por perto e acrescenta o lado social: feed de amigos, gostos, clubes, saídas em grupo e desafios.",
        result: "A app está pronta e a ser preparada para a App Store. Todos os requisitos da Apple já estão cumpridos: eliminação de conta, moderação e privacidade.",
        features: ["Passos, sono e prontidão para treinar a partir do Apple Health", "Gravação GPS de corridas e trilhos: ritmo, distância, desnível", "Rotas por perto com avaliações e fotos", "Feed de amigos, comentários, clubes e saídas em grupo", "Desafios e ranking de passos entre amigos", "Sem anúncios nem rastreio, zonas de privacidade no mapa"],
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

  skills: ["JavaScript", "React", "React Native", "Node.js", "Python", "Swift", "SQL", "Supabase", "Apple Health", "Telegram Bot API", "WhatsApp API", "Git"],

  experience: [
    { period: "2026 — hoje", title: "Plataforma para hotel", place: "Projeto da equipa" },
    { period: "2026 — hoje", title: "Jogo mobile", place: "Projeto da equipa" },
    { period: "2025 — 2026", title: "Plai — app desportiva", place: "Projeto da equipa" },
    { period: "2026", title: "Klavogin — treinador de digitação", place: "Projeto da equipa" },
    { period: "2025 — hoje", title: "Bots para Telegram e WhatsApp", place: "Por encomenda" }
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
