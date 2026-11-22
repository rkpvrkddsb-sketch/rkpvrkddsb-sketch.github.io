// =====================================================
//  POLISH VERSION OF THE SITE TEXTS (auto-selected for pl-* browsers).
//  Same structure as content-en.js — edit only what's in quotes.
//  Keep "slug" and "project" values the SAME as in content.js.
// =====================================================

const site_pl = {
  name: "j13",
  role: "Zespół deweloperski",
  location: "Planeta Ziemia",
  available: "Otwarci na nowe projekty",

  // Main phrase on the first screen
  headline: "Aplikacje, platformy i boty.",
  // Short line under the main phrase ("" — none)
  tagline: "Od pomysłu do startu.",
  intro: "Jesteśmy małym zespołem deweloperskim. Tworzymy platformy internetowe, aplikacje i boty dla firm — od pomysłu do startu, a potem zapewniamy wsparcie.",

  // Running line under the first screen
  marquee: [
    { text: "Platformy internetowe",     project: "hotel" },
    { text: "Gra mobilna", project: "game" },
    { text: "Boty Telegram",     project: "bots" },
    { text: "Boty WhatsApp",     project: "bots" },
    { text: "Automatyzacja",        project: "bots" },
    { text: "Systemy rezerwacji",   project: "hotel" },
    { text: "Trener pisania",    project: "klavogin" },
    { text: "Aplikacja sportowa",      project: "plai" }
  ],

  // Counters
  stats: [
    { value: 15, suffix: "+",  label: "botów do social mediów stworzył nasz zespół" },
    { value: 5,  suffix: "+",  label: "duże projekty w portfolio" },
    { value: 24, suffix: "/7", label: "nasze boty pracują bez dni wolnych" }
  ],

  projects: [
    {
      slug: "hotel",
      title: "Platforma dla hotelu",
      year: "2026",
      status: "w trakcie",
      live: true,
      description:
        "System dla hotelu: rezerwacje online, zarządzanie pokojami, kalendarz zameldowań i panel dla personelu.",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: "",
      link: "",
      details: {
        task: "Problem: jak hotel działał wcześniej i co było niewygodne (arkusze, telefony, pomylone rezerwacje).",
        solution: "Co budujemy: jedną platformę, na której goście rezerwują online, a personel widzi wszystkie pokoje i zameldowania w jednym kalendarzu.",
        result: "Co zyskuje hotel: mniej ręcznej pracy, zero podwójnych rezerwacji, wszystko widoczne w czasie rzeczywistym.",
        features: [
          "Rezerwacje online dla gości",
          "Kalendarz dostępności pokoi",
          "Panel dla administratora i personelu",
          "Statusy pokoi: wolny, sprzątanie, zajęty"
        ],
        gallery: []
      }
    },
    {
      slug: "game",
      title: "Nasza gra mobilna",
      year: "2026",
      status: "w trakcie",
      description:
        "Gra mobilna na iOS i Androida, nad którą właśnie pracuje nasz zespół. Szczegóły trzymamy w tajemnicy do premiery 🤫",
      tech: ["iOS", "Android", "Projektowanie gier"],
      mock: "game",
      image: "",
      link: "",
      details: {
        task: "Stworzyć grę, do której chce się wracać: proste zasady na start i głębia, która odkrywa się z czasem.",
        solution: "Krótkie sesje pod telefon, łatwe sterowanie jednym palcem i stopniowo rosnący poziom trudności, żeby się nie nudziło.",
        result: "Teraz w produkcji. Wkrótce pokażemy pierwsze screeny i datę premiery — bądźcie czujni.",
        features: ["Na iOS i Androida", "Sterowanie jednym palcem", "Krótkie sesje — graj wszędzie", "Poziomy coraz trudniejsze", "Tabela rekordów"],
        gallery: []
      }
    },
    {
      slug: "klavogin",
      title: "Klavogin",
      year: "2026",
      status: "działa",
      live: true,
      description:
        "Internetowy trener szybkiego pisania: lekcje pisania bezwzrokowego, mapa cieplna błędów i 8 języków. Za darmo, bez rejestracji.",
      tech: ["JavaScript", "HTML", "CSS"],
      image: "images/klavogin.jpg",
      link: "klavogin/",
      details: {
        task: "Większość trenerów pisania jest pełna reklam, wymaga konta albo słabo obsługuje nieangielskie układy klawiatury.",
        solution: "Lekki trener, który otwiera się od razu: piszesz słowa, przysłowia lub własny tekst, a on pokazuje szybkość, błędy i podpowiada, nad którymi klawiszami popracować.",
        result: "Działa prosto w przeglądarce na każdym komputerze, bez instalacji. Postęp zapisuje się na urządzeniu, więc widać, jak rośnie szybkość.",
        features: ["Lekcje pisania bezwzrokowego krok po kroku", "Test szybkości z mapą cieplną błędów", "Arkada: wpisz spadające słowa, zanim spadną", "Wyścig z duchem i 24 osiągnięcia", "Codzienny trening Twoich słabych liter", "Działa offline i instaluje się jak aplikacja"],
        gallery: []
      }
    },
    {
      slug: "plai",
      title: "Plai",
      year: "2026",
      status: "wkrótce w App Store",
      description:
        "Sportowa społeczność dla tych, którzy kochają ruch: bieganie, chodzenie, hiking i rower. Treningi z GPS, trasy na mapie, wyzwania ze znajomymi i dane z Apple Health w jednym miejscu.",
      tech: ["iOS", "Android", "Apple Health", "Mapy i GPS"],
      mock: "plai",
      image: "",
      link: "",
      details: {
        task: "Aktywni ludzie mają kroki w jednej aplikacji, trasy w drugiej, a ze znajomymi rozmawiają jeszcze gdzie indziej. Chcieliśmy jednego miejsca, gdzie ruch to także społeczność.",
        solution: "Plai zbiera Twój dzień z Apple Health i Health Connect, zapisuje biegi i wędrówki z GPS, pokazuje trasy w pobliżu i dodaje część społeczną: tablicę znajomych, polubienia, kluby, wspólne wyjścia i wyzwania.",
        result: "Aplikacja jest gotowa i przygotowywana do App Store. Wszystkie wymagania Apple są już spełnione: usuwanie konta, moderacja i prywatność.",
        features: ["Kroki, sen i gotowość do treningu z Apple Health", "Zapis biegów i wędrówek z GPS: tempo, dystans, przewyższenie", "Trasy w pobliżu z opiniami i zdjęciami", "Tablica znajomych, komentarze, kluby i wspólne wyjścia", "Wyzwania i ranking kroków wśród znajomych", "Bez reklam i śledzenia, strefy prywatności na mapie"],
        gallery: []
      }
    },
    {
      slug: "bots",
      title: "Boty dla Telegram i WhatsApp",
      year: "2025 — teraz",
      status: "na zamówienie",
      description:
        "Chatboty dla biznesu: przyjmują zgłoszenia i rezerwacje, odpowiadają na częste pytania i wysyłają przypomnienia.",
      tech: ["Telegram Bot API", "WhatsApp API", "Automatyzacja"],
      mock: "chat",
      image: "",
      link: "",
      details: {
        task: "Firmy tracą klientów, gdy nie nadążają z odpowiedziami w komunikatorach — zwłaszcza wieczorami i w weekendy.",
        solution: "Bot w Telegramie lub WhatsAppie, który sam odpowiada na typowe pytania, przyjmuje zgłoszenia i rezerwacje, a w razie potrzeby przekazuje klienta człowiekowi.",
        result: "Klienci dostają odpowiedź w kilka sekund, 24/7, a właściciel widzi wszystkie zgłoszenia w jednym miejscu.",
        features: [
          "Zgłoszenia i rezerwacje",
          "Odpowiedzi na częste pytania",
          "Przypomnienia dla klientów",
          "Przekazanie rozmowy menedżerowi",
          "Powiadomienia dla właściciela o nowych zgłoszeniach"
        ],
        gallery: []
      }
    }
  ],

  skills: ["JavaScript", "React", "React Native", "Node.js", "Python", "Swift", "SQL", "Supabase", "Apple Health", "Telegram Bot API", "WhatsApp API", "Git"],

  experience: [
    { period: "2026 — teraz", title: "Platforma dla hotelu", place: "Projekt zespołu" },
    { period: "2026 — teraz", title: "Gra mobilna", place: "Projekt zespołu" },
    { period: "2025 — 2026", title: "Plai — aplikacja sportowa", place: "Projekt zespołu" },
    { period: "2026", title: "Klavogin — trener pisania", place: "Projekt zespołu" },
    { period: "2025 — teraz", title: "Boty dla Telegram i WhatsApp", place: "Na zamówienie" }
  ],

  // Testimonials — the section stays hidden while the list is empty.
  // { text: "The bot took half the calls off us in a week!", name: "Olena", role: "Café owner" },
  testimonials: [
  ],

  // How we work
  process: [
    { title: "Zgłoszenie",    text: "Klikasz „Zamów” i krótko piszesz, czego potrzebujesz." },
    { title: "Omówienie", text: "Doprecyzowujemy zadanie, proponujemy rozwiązanie i ustalamy cenę oraz terminy." },
    { title: "Realizacja", text: "Tworzymy projekt i po drodze pokazujemy postępy." },
    { title: "Start",     text: "Uruchamiamy, pokazujemy, jak korzystać, i zostajemy w kontakcie, by wspierać." }
  ],

  faq: [
    {
      q: "Ile kosztuje bot?",
      a: "To zależy od zadania: prosty bot do zgłoszeń i częstych pytań jest niedrogi, złożony z płatnościami, CRM i kilkoma scenariuszami kosztuje więcej. Napisz, czego potrzebujesz, a podamy dokładną cenę."
    },
    {
      q: "Ile trwa realizacja?",
      a: "Prosty bot to kilka dni. Większy projekt, jak platforma czy bot z integracjami, od kilku tygodni. Terminy ustalamy na początku."
    },
    {
      q: "Czy można coś zmienić później?",
      a: "Tak. Teksty, przyciski, scenariusze i nowe funkcje można dodać po starcie — zostajemy w kontakcie i pomagamy przy aktualizacjach."
    },
    {
      q: "Pracujecie tylko z Telegramem i WhatsAppem?",
      a: "Boty — głównie dla nich, bo tam klienci już rozmawiają. Tworzymy też platformy internetowe i aplikacje dla konkretnych firm."
    }
  ],

  contacts: {
    email: "hello@example.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    telegram: "https://t.me/"
  }
};
