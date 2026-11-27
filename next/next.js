/* ДЕМО «j13 Next»: розділ «Сайт збирається наживо» + плашка демо */
(function () {
  const L = window.SITE_LANG === "uk" ? "uk" : "en";
  const TX = {
    uk: {
      lab: "Живий код", h: "Дивіться, як ми <span class=\"em\">робимо сайти</span>", p: "Це не відео: сайт збирається з коду просто зараз у вашому браузері.",
      desk: "Комп'ютер", phone: "Телефон", color: "Колір бренду:", live: "Живий код, а не запис", done: "✓ Сайт готовий",
      note: "Демо оновленого сайту", back: "← нинішній", nav: ["Меню", "Про нас", "Контакти"],
      biz: [
        { name: "Зерно", h: "Кава, заради якої варто прокинутись", p: "Свіже обсмаження щоранку. Замовляйте онлайн.", b: "Замовити", i: "☕", cards: [["Меню", "40+ напоїв"], ["Доставка", "за 30 хв"], ["Бонуси", "кожна 6-та кава"]] },
        { name: "Hotel Lumen", h: "Номери з видом на море", p: "Бронюйте напряму — без комісій і переплат.", b: "Забронювати", i: "🌊", cards: [["Номери", "24 види"], ["Сніданок", "включено"], ["Трансфер", "з аеропорту"]] },
        { name: "Барбер 13", h: "Стрижка, після якої хочеться фото", p: "Онлайн-запис за 10 секунд, нагадування в Telegram.", b: "Записатись", i: "✂️", cards: [["Майстри", "6 у команді"], ["Запис", "онлайн 24/7"], ["Ціни", "від 400 ₴"]] }
      ], cmt: n => `<!-- сайт для «${n}» -->`, cardsC: " …3 картки", phoneC: "/* телефон */", ok: "// ✓ готово"
    },
    en: {
      lab: "Live code", h: "Watch how we <span class=\"em\">build websites</span>", p: "Not a video: this site is being built from code right now, in your browser.",
      desk: "Desktop", phone: "Phone", color: "Brand color:", live: "Live code, not a recording", done: "✓ Site is ready",
      note: "Demo of the updated site", back: "← current", nav: ["Menu", "About", "Contact"],
      biz: [
        { name: "Bean", h: "Coffee worth waking up for", p: "Freshly roasted every morning. Order online.", b: "Order", i: "☕", cards: [["Menu", "40+ drinks"], ["Delivery", "in 30 min"], ["Rewards", "every 6th coffee"]] },
        { name: "Hotel Lumen", h: "Rooms with a sea view", p: "Book direct — no fees, no markups.", b: "Book now", i: "🌊", cards: [["Rooms", "24 types"], ["Breakfast", "included"], ["Transfer", "from the airport"]] },
        { name: "Barber 13", h: "A haircut worth a photo", p: "Book online in 10 seconds, reminders in Telegram.", b: "Book", i: "✂️", cards: [["Barbers", "6 on the team"], ["Booking", "online 24/7"], ["Prices", "from €15"]] }
      ], cmt: n => `<!-- website for "${n}" -->`, cardsC: " …3 cards", phoneC: "/* phone */", ok: "// ✓ done"
    }
  }[L];
  const PAL = [["#2f6b4f", "#f3ecdf", "#1f2a22"], ["#2b4fb8", "#eef2fb", "#141c33"], ["#c2552b", "#1b1816", "#f1e7dc"], ["#7a4fd6", "#f5f1fd", "#1f1633"], ["#d4a312", "#fffaf0", "#2b2412"]];
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const RM = matchMedia("(prefers-reduced-motion:reduce)").matches;
  const wait = ms => new Promise(r => setTimeout(r, RM ? 0 : ms));

  const sec = document.createElement("section");
  sec.className = "studio-sec"; sec.id = "live";
  sec.innerHTML = `<div class="wrap">
    <div class="studio-h reveal"><div><span class="label">${TX.lab}</span><h2>${TX.h}</h2></div><p>${TX.p}</p></div>
    <div class="studio reveal" id="nxStudio">
      <div class="stb"><div class="dots"><i></i><i></i><i></i></div><span class="tab">index.html</span>
        <div class="seg" id="nxDev"><button class="on" data-d="desk">${TX.desk}</button><button data-d="phone">${TX.phone}</button></div></div>
      <div class="sbody"><div class="code" id="nxCode"></div>
        <div class="prev"><div class="site" id="nxSite">
          <div class="s-nav"><b></b><span>${TX.nav.map(x => `<i>${x}</i>`).join("")}</span></div>
          <div class="s-hero"><div><h3></h3><p></p><span class="s-btn"></span></div><div class="s-img"></div></div>
          <div class="s-cards"></div></div>
          <div class="done" id="nxDone">${TX.done}</div></div></div>
      <div class="sfoot"><span>${TX.color}</span><div class="sw" id="nxSw">${PAL.map(p => `<button data-c="${p[0]}" style="background:${p[0]}" aria-label="${p[0]}"></button>`).join("")}</div><span class="r">${TX.live}</span></div>
    </div></div>`;
  const mq = document.querySelector(".marquee");
  (mq || document.querySelector("#projects")).insertAdjacentElement(mq ? "afterend" : "beforebegin", sec);
  // показати одразу, навіть якщо основний скрипт уже роздав «reveal»
  const ro = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); ro.unobserve(e.target) } }), { threshold: .1 });
  sec.querySelectorAll(".reveal").forEach(el => ro.observe(el));

  const $ = id => document.getElementById(id), site = $("nxSite"), code = $("nxCode"), dev = $("nxDev");
  const setC = ([c, c2, ct]) => { site.style.setProperty("--c", c); site.style.setProperty("--c2", c2); site.style.setProperty("--ct", ct); [...$("nxSw").children].forEach(b => b.classList.toggle("on", b.dataset.c === c)) };
  [...$("nxSw").children].forEach((b, i) => b.onclick = () => setC(PAL[i]));
  const setDev = d => { [...dev.children].forEach(x => x.classList.toggle("on", x.dataset.d === d)); site.classList.toggle("phone", d === "phone") };
  dev.onclick = e => { const b = e.target.closest("button"); if (b) setDev(b.dataset.d) };

  const line = () => { const d = document.createElement("div"); code.appendChild(d); while (code.children.length > 16) code.firstChild.remove(); return d };
  async function type(segs) {
    const d = line(); let done = "";
    for (const [cl, tx] of segs) { for (let k = 1; k <= tx.length; k++) { d.innerHTML = done + `<span class="${cl}">${esc(tx.slice(0, k))}</span><span class="cur"></span>`; await wait(14 + Math.random() * 22) } done += `<span class="${cl}">${esc(tx)}</span>` }
    d.innerHTML = done;
  }
  const show = i => site.children[i].classList.add("on");
  async function build(B, k) {
    code.innerHTML = ""; [...site.children].forEach(e => e.classList.remove("on")); $("nxDone").classList.remove("on");
    setC(PAL[k]); site.querySelector(".s-nav b").textContent = B.name; site.querySelector("h3").textContent = B.h; site.querySelector(".s-hero p").textContent = B.p;
    site.querySelector(".s-btn").textContent = B.b; site.querySelector(".s-img").textContent = B.i;
    site.querySelector(".s-cards").innerHTML = B.cards.map(([a, b]) => `<div><b>${esc(a)}</b>${esc(b)}</div>`).join("");
    await wait(400);
    await type([["c", TX.cmt(B.name)]]);
    await type([["t", "<header "], ["at", "class="], ["s", '"nav"'], ["t", ">"], ["", B.name], ["t", "</header>"]]); show(0); await wait(300);
    await type([["t", "<h1>"], ["", B.h.slice(0, 20) + "…"], ["t", "</h1>"]]);
    await type([["t", "<button "], ["at", "onclick="], ["s", '"order()"'], ["t", ">"], ["", B.b], ["t", "</button>"]]); show(1); await wait(300);
    await type([["t", "<section "], ["at", "class="], ["s", '"cards"'], ["t", ">"], ["c", TX.cardsC], ["t", " </section>"]]); show(2); await wait(300);
    await type([["p", ".brand"], ["", " { "], ["at", "color"], ["", ": "], ["s", PAL[k][0]], ["", " }"]]);
    await type([["p", "@media"], ["", " (max-width: 600px) { "], ["c", TX.phoneC], ["", " }"]]);
    await wait(300); setDev("phone"); await wait(1600); setDev("desk");
    await type([["c", TX.ok]]); $("nxDone").classList.add("on");
    await wait(4200);
  }
  let started = false;
  new IntersectionObserver(es => { if (es[0].isIntersecting && !started) { started = true; (async () => { for (let i = 0; ; i = (i + 1) % TX.biz.length) await build(TX.biz[i], i) })() } }, { threshold: .25 }).observe($("nxStudio"));

  // плашка «це демо»
  const n = document.createElement("div"); n.className = "nx-note";
  n.innerHTML = `${TX.note} <a href="../">${TX.back}</a>`;
  document.body.appendChild(n);
})();
