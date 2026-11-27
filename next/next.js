/* ДЕМО «j13 Next»: живий конструктор сайту на першому екрані, новий підзаголовок,
   однакові номери розділів, 8 мов. Підключається після основного скрипта сайту. */
(function () {
  const BIZ_ICONS = ["☕", "🌊", "✂️"];
  const TXS = {
    uk: { lead: "Команда j13: сайти, програми й боти для вашого бізнесу — від ідеї до запуску.",
      cap: "Живий код", desk: "Комп'ютер", phone: "Телефон", color: "Колір бренду:", live: "Сайт збирається просто зараз", done: "✓ Сайт готовий",
      note: "Демо оновленого сайту", back: "← нинішній", nav: ["Меню", "Про нас", "Контакти"], sec: { projects: "Проєкти", demo: "Бот наживо", process: "Процес" },
      biz: [["Зерно", "Кава, заради якої варто прокинутись", "Свіже обсмаження щоранку. Замовляйте онлайн.", "Замовити", [["Меню", "40+ напоїв"], ["Доставка", "за 30 хв"], ["Бонуси", "кожна 6-та кава"]]],
            ["Hotel Lumen", "Номери з видом на море", "Бронюйте напряму — без комісій і переплат.", "Забронювати", [["Номери", "24 види"], ["Сніданок", "включено"], ["Трансфер", "з аеропорту"]]],
            ["Барбер 13", "Стрижка, після якої хочеться фото", "Онлайн-запис за 10 секунд, нагадування в Telegram.", "Записатись", [["Майстри", "6 у команді"], ["Запис", "онлайн 24/7"], ["Ціни", "від 400 ₴"]]]],
      cmt: "сайт для", cards: "…3 картки", ph: "телефон", ok: "// ✓ готово" },
    en: { lead: "j13 is a dev team: websites, apps and bots for your business — from idea to launch.",
      cap: "Live code", desk: "Desktop", phone: "Phone", color: "Brand color:", live: "This site is being built right now", done: "✓ Site is ready",
      note: "Demo of the updated site", back: "← current", nav: ["Menu", "About", "Contact"], sec: { projects: "Projects", demo: "Live bot", process: "Process" },
      biz: [["Bean", "Coffee worth waking up for", "Freshly roasted every morning. Order online.", "Order", [["Menu", "40+ drinks"], ["Delivery", "in 30 min"], ["Rewards", "every 6th coffee"]]],
            ["Hotel Lumen", "Rooms with a sea view", "Book direct — no fees, no markups.", "Book now", [["Rooms", "24 types"], ["Breakfast", "included"], ["Transfer", "from the airport"]]],
            ["Barber 13", "A haircut worth a photo", "Book online in 10 seconds, reminders in Telegram.", "Book", [["Barbers", "6 on the team"], ["Booking", "online 24/7"], ["Prices", "from €15"]]]],
      cmt: "website for", cards: "…3 cards", ph: "phone", ok: "// ✓ done" },
    es: { lead: "j13 es un equipo de desarrollo: webs, apps y bots para tu negocio, de la idea al lanzamiento.",
      cap: "Código en vivo", desk: "Ordenador", phone: "Móvil", color: "Color de marca:", live: "La web se está creando ahora mismo", done: "✓ Web lista",
      note: "Demo del sitio renovado", back: "← actual", nav: ["Menú", "Nosotros", "Contacto"], sec: { projects: "Proyectos", demo: "Bot en vivo", process: "Proceso" },
      biz: [["Grano", "Un café por el que vale la pena madrugar", "Tostado fresco cada mañana. Pide online.", "Pedir", [["Menú", "40+ bebidas"], ["Envío", "en 30 min"], ["Puntos", "cada 6.º café"]]],
            ["Hotel Lumen", "Habitaciones con vista al mar", "Reserva directo, sin comisiones.", "Reservar", [["Habitaciones", "24 tipos"], ["Desayuno", "incluido"], ["Traslado", "desde el aeropuerto"]]],
            ["Barbería 13", "Un corte que merece una foto", "Reserva online en 10 segundos, avisos por Telegram.", "Reservar", [["Barberos", "6 en el equipo"], ["Citas", "online 24/7"], ["Precios", "desde 15 €"]]]],
      cmt: "web para", cards: "…3 tarjetas", ph: "móvil", ok: "// ✓ listo" },
    de: { lead: "j13 ist ein Entwicklerteam: Websites, Apps und Bots für Ihr Unternehmen – von der Idee bis zum Start.",
      cap: "Live-Code", desk: "Desktop", phone: "Handy", color: "Markenfarbe:", live: "Die Website entsteht gerade jetzt", done: "✓ Website fertig",
      note: "Demo der neuen Website", back: "← aktuell", nav: ["Menü", "Über uns", "Kontakt"], sec: { projects: "Projekte", demo: "Live-Bot", process: "Ablauf" },
      biz: [["Bohne", "Kaffee, für den sich das Aufstehen lohnt", "Jeden Morgen frisch geröstet. Online bestellen.", "Bestellen", [["Karte", "40+ Getränke"], ["Lieferung", "in 30 Min."], ["Bonus", "jeder 6. Kaffee"]]],
            ["Hotel Lumen", "Zimmer mit Meerblick", "Direkt buchen – ohne Gebühren.", "Buchen", [["Zimmer", "24 Typen"], ["Frühstück", "inklusive"], ["Transfer", "vom Flughafen"]]],
            ["Barber 13", "Ein Haarschnitt fürs Foto", "Online-Termin in 10 Sekunden, Erinnerung per Telegram.", "Termin", [["Barbiere", "6 im Team"], ["Termine", "online 24/7"], ["Preise", "ab 15 €"]]]],
      cmt: "Website für", cards: "…3 Karten", ph: "Handy", ok: "// ✓ fertig" },
    fr: { lead: "j13 est une équipe de développement : sites, applis et bots pour votre entreprise, de l'idée au lancement.",
      cap: "Code en direct", desk: "Ordinateur", phone: "Mobile", color: "Couleur de marque :", live: "Le site se construit en ce moment", done: "✓ Site prêt",
      note: "Démo du site renouvelé", back: "← actuel", nav: ["Menu", "À propos", "Contact"], sec: { projects: "Projets", demo: "Bot en direct", process: "Méthode" },
      biz: [["Grain", "Un café qui vaut le réveil", "Torréfié chaque matin. Commandez en ligne.", "Commander", [["Carte", "40+ boissons"], ["Livraison", "en 30 min"], ["Fidélité", "chaque 6e café"]]],
            ["Hôtel Lumen", "Chambres avec vue sur la mer", "Réservez en direct, sans frais.", "Réserver", [["Chambres", "24 types"], ["Petit-déj", "inclus"], ["Navette", "depuis l'aéroport"]]],
            ["Barbier 13", "Une coupe qui mérite une photo", "Réservation en 10 secondes, rappels sur Telegram.", "Réserver", [["Barbiers", "6 dans l'équipe"], ["Rendez-vous", "en ligne 24/7"], ["Prix", "dès 15 €"]]]],
      cmt: "site pour", cards: "…3 cartes", ph: "mobile", ok: "// ✓ prêt" },
    pl: { lead: "j13 to zespół deweloperów: strony, aplikacje i boty dla Twojej firmy — od pomysłu do startu.",
      cap: "Kod na żywo", desk: "Komputer", phone: "Telefon", color: "Kolor marki:", live: "Strona powstaje właśnie teraz", done: "✓ Strona gotowa",
      note: "Demo odświeżonej strony", back: "← obecna", nav: ["Menu", "O nas", "Kontakt"], sec: { projects: "Projekty", demo: "Bot na żywo", process: "Proces" },
      biz: [["Ziarno", "Kawa, dla której warto wstać", "Świeżo palona co rano. Zamów online.", "Zamów", [["Menu", "40+ napojów"], ["Dostawa", "w 30 min"], ["Bonusy", "co 6. kawa"]]],
            ["Hotel Lumen", "Pokoje z widokiem na morze", "Rezerwuj bezpośrednio, bez prowizji.", "Rezerwuj", [["Pokoje", "24 typy"], ["Śniadanie", "w cenie"], ["Transfer", "z lotniska"]]],
            ["Barber 13", "Strzyżenie warte zdjęcia", "Zapis online w 10 sekund, przypomnienia w Telegramie.", "Zapisz się", [["Barberzy", "6 w zespole"], ["Zapisy", "online 24/7"], ["Ceny", "od 60 zł"]]]],
      cmt: "strona dla", cards: "…3 karty", ph: "telefon", ok: "// ✓ gotowe" },
    pt: { lead: "A j13 é uma equipe de desenvolvimento: sites, apps e bots para o seu negócio — da ideia ao lançamento.",
      cap: "Código ao vivo", desk: "Computador", phone: "Celular", color: "Cor da marca:", live: "O site está sendo montado agora", done: "✓ Site pronto",
      note: "Demo do site renovado", back: "← atual", nav: ["Menu", "Sobre", "Contato"], sec: { projects: "Projetos", demo: "Bot ao vivo", process: "Processo" },
      biz: [["Grão", "Um café que vale acordar cedo", "Torrado toda manhã. Peça online.", "Pedir", [["Menu", "40+ bebidas"], ["Entrega", "em 30 min"], ["Pontos", "a cada 6º café"]]],
            ["Hotel Lumen", "Quartos com vista para o mar", "Reserve direto, sem taxas.", "Reservar", [["Quartos", "24 tipos"], ["Café da manhã", "incluso"], ["Transfer", "do aeroporto"]]],
            ["Barbearia 13", "Um corte que merece foto", "Agende online em 10 segundos, lembretes no Telegram.", "Agendar", [["Barbeiros", "6 na equipe"], ["Agenda", "online 24/7"], ["Preços", "a partir de €15"]]]],
      cmt: "site para", cards: "…3 cards", ph: "celular", ok: "// ✓ pronto" },
    it: { lead: "j13 è un team di sviluppo: siti, app e bot per la tua attività, dall'idea al lancio.",
      cap: "Codice dal vivo", desk: "Computer", phone: "Telefono", color: "Colore del brand:", live: "Il sito si sta costruendo adesso", done: "✓ Sito pronto",
      note: "Demo del sito rinnovato", back: "← attuale", nav: ["Menu", "Chi siamo", "Contatti"], sec: { projects: "Progetti", demo: "Bot dal vivo", process: "Metodo" },
      biz: [["Chicco", "Un caffè per cui vale la pena svegliarsi", "Tostato fresco ogni mattina. Ordina online.", "Ordina", [["Menu", "40+ bevande"], ["Consegna", "in 30 min"], ["Punti", "ogni 6° caffè"]]],
            ["Hotel Lumen", "Camere vista mare", "Prenota diretto, senza commissioni.", "Prenota", [["Camere", "24 tipi"], ["Colazione", "inclusa"], ["Transfer", "dall'aeroporto"]]],
            ["Barbiere 13", "Un taglio da fotografare", "Prenota online in 10 secondi, promemoria su Telegram.", "Prenota", [["Barbieri", "6 nel team"], ["Prenotazioni", "online 24/7"], ["Prezzi", "da 15 €"]]]],
      cmt: "sito per", cards: "…3 card", ph: "telefono", ok: "// ✓ fatto" }
  };
  const TX = TXS[window.SITE_LANG] || TXS.en;
  const PAL = [["#2f6b4f", "#f3ecdf", "#1f2a22"], ["#2b4fb8", "#eef2fb", "#141c33"], ["#c2552b", "#1b1816", "#f1e7dc"], ["#7a4fd6", "#f5f1fd", "#1f1633"], ["#d4a312", "#fffaf0", "#2b2412"]];
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const RM = matchMedia("(prefers-reduced-motion:reduce)").matches;
  const wait = ms => new Promise(r => setTimeout(r, RM ? 0 : ms));

  /* ── перший екран: новий підзаголовок + конструктор праворуч ── */
  const intro = document.getElementById("intro");
  if (intro) intro.textContent = TX.lead;
  const hw = document.querySelector(".hero .wrap");
  const studio = document.createElement("div");
  studio.className = "studio mini fade-in"; studio.style.setProperty("--d", ".5s"); studio.id = "nxStudio";
  studio.innerHTML = `
    <div class="stb"><div class="dots"><i></i><i></i><i></i></div><span class="cap">${esc(TX.cap)}</span>
      <div class="seg" id="nxDev" role="group" aria-label="${esc(TX.desk)} / ${esc(TX.phone)}"><button type="button" class="on" data-d="desk" aria-pressed="true">${esc(TX.desk)}</button><button type="button" data-d="phone" aria-pressed="false">${esc(TX.phone)}</button></div></div>
    <div class="sbody"><div class="code" id="nxCode" aria-hidden="true"></div>
      <div class="prev"><div class="site" id="nxSite" aria-hidden="true">
        <div class="s-nav"><b></b><span>${TX.nav.map(x => `<i>${esc(x)}</i>`).join("")}</span></div>
        <div class="s-hero"><div><h3></h3><p></p><span class="s-btn"></span></div><div class="s-img"></div></div>
        <div class="s-cards"></div></div>
        <div class="done" id="nxDone">${esc(TX.done)}</div></div></div>
    <div class="sfoot"><span>${esc(TX.color)}</span><div class="sw" id="nxSw">${PAL.map(p => `<button type="button" data-c="${p[0]}" style="background:${p[0]}" aria-label="${esc(TX.color)} ${p[0]}"></button>`).join("")}</div><span class="r">${esc(TX.live)}</span></div>`;
  if (hw) {
    const left = document.createElement("div");
    while (hw.firstChild) left.appendChild(hw.firstChild);
    const cols = document.createElement("div"); cols.className = "nx-cols";
    cols.append(left, studio); hw.appendChild(cols);
  }

  /* ── однакові номери над кожним розділом ── */
  const order = [["projects", TX.sec.projects], ["about"], ["demo", TX.sec.demo], ["process", TX.sec.process], ["faq"], ["contact"]];
  let n = 0;
  order.forEach(([id, name]) => {
    const sec = document.getElementById(id);
    if (!sec || sec.hidden) return;
    n++;
    const num = `<b>${String(n).padStart(2, "0")}</b>`;
    const lab = sec.querySelector(".label");
    if (lab) { lab.insertAdjacentHTML("afterbegin", num); return; }
    const h = sec.querySelector("h2"); if (!h) return;
    const el = document.createElement("span"); el.className = "label nx-made"; el.innerHTML = num + esc(name || "");
    const head = h.closest(".sec-head");
    if (head) head.prepend(el); else h.insertAdjacentElement("beforebegin", el);
  });

  /* ── живий конструктор ── */
  const $ = id => document.getElementById(id), site = $("nxSite"), code = $("nxCode"), dev = $("nxDev");
  const setC = ([c, c2, ct]) => { site.style.setProperty("--c", c); site.style.setProperty("--c2", c2); site.style.setProperty("--ct", ct); [...$("nxSw").children].forEach(b => b.classList.toggle("on", b.dataset.c === c)) };
  [...$("nxSw").children].forEach((b, i) => b.onclick = () => setC(PAL[i]));
  const setDev = d => { [...dev.children].forEach(x => { const on = x.dataset.d === d; x.classList.toggle("on", on); x.setAttribute("aria-pressed", on) }); site.classList.toggle("phone", d === "phone") };
  dev.onclick = e => { const b = e.target.closest("button"); if (b) setDev(b.dataset.d) };

  const line = () => { const d = document.createElement("div"); code.appendChild(d); while (code.children.length > 16) code.firstChild.remove(); return d };
  async function type(segs) {
    const d = line(); let done = "";
    for (const [cl, tx] of segs) { for (let k = 1; k <= tx.length; k++) { d.innerHTML = done + `<span class="${cl}">${esc(tx.slice(0, k))}</span><span class="cur"></span>`; await wait(14 + Math.random() * 22) } done += `<span class="${cl}">${esc(tx)}</span>` }
    d.innerHTML = done; code.scrollTop = code.scrollHeight;
  }
  const show = i => site.children[i].classList.add("on");
  async function build(B, k) {
    const [name, h, p, btn, cards] = B;
    code.innerHTML = ""; [...site.children].forEach(e => e.classList.remove("on")); $("nxDone").classList.remove("on");
    setC(PAL[k]); site.querySelector(".s-nav b").textContent = name; site.querySelector("h3").textContent = h; site.querySelector(".s-hero p").textContent = p;
    site.querySelector(".s-btn").textContent = btn; site.querySelector(".s-img").textContent = BIZ_ICONS[k];
    site.querySelector(".s-cards").innerHTML = cards.map(([a, b]) => `<div><b>${esc(a)}</b>${esc(b)}</div>`).join("");
    await wait(400);
    await type([["c", `<!-- ${TX.cmt} «${name}» -->`]]);
    await type([["t", "<header "], ["at", "class="], ["s", '"nav"'], ["t", ">"], ["", name], ["t", "</header>"]]); show(0); await wait(300);
    await type([["t", "<h1>"], ["", h.slice(0, 18) + "…"], ["t", "</h1>"]]);
    await type([["t", "<button>"], ["", btn], ["t", "</button>"]]); show(1); await wait(300);
    await type([["t", "<section "], ["at", "class="], ["s", '"cards"'], ["t", ">"], ["c", TX.cards], ["t", "</section>"]]); show(2); await wait(300);
    await type([["p", ".brand"], ["", " { "], ["at", "color"], ["", ": "], ["s", PAL[k][0]], ["", " }"]]);
    await type([["p", "@media"], ["", " (max-width:600px) { "], ["c", `/* ${TX.ph} */`], ["", " }"]]);
    await wait(300); setDev("phone"); await wait(1600); setDev("desk");
    await type([["c", TX.ok]]); $("nxDone").classList.add("on");
    await wait(4200);
  }
  // стартує, коли конструктор видно і заставка вже зникла
  let started = false;
  const go = () => { if (started || document.documentElement.classList.contains("loading") || document.body.classList.contains("loading")) return false; started = true; (async () => { for (let i = 0; ; i = (i + 1) % TX.biz.length) await build(TX.biz[i], i) })(); return true };
  new IntersectionObserver((es, o) => { if (!es[0].isIntersecting) return; const t = setInterval(() => { if (go()) { clearInterval(t); o.disconnect() } }, 300) }, { threshold: .2 }).observe(studio);

  /* плашка «це демо» */
  const nt = document.createElement("div"); nt.className = "nx-note";
  nt.innerHTML = `${esc(TX.note)} <a href="../">${esc(TX.back)}</a>`;
  document.body.appendChild(nt);
})();
