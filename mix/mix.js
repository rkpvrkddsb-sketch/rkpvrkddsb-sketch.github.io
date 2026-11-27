/* ДЕМО «Mix»: атмосфера «Касети» поверх /next/ — кінескоп, екранні написи, «рядки коду»,
   піксельне лого, глобус. Кнопка FX вимикає ефекти. */
(function () {
  const L = window.SITE_LANG || "en";
  const T = {
    uk: ["Проведіть курсором або пальцем: ми збираємо продукт з дрібниць, піксель за пікселем.", "Працюємо з усім світом", "Сайт сам говорить вісьмома мовами, а ми на зв'язку з клієнтами в будь-якому часовому поясі.", "ПЛАНЕТА ЗЕМЛЯ", "Демо «Mix»"],
    en: ["Move your cursor or finger: we build products from tiny details, pixel by pixel.", "We work worldwide", "The site speaks eight languages on its own, and we work with clients in any time zone.", "PLANET EARTH", "Demo “Mix”"],
    es: ["Mueve el cursor o el dedo: construimos productos a partir de detalles, píxel a píxel.", "Trabajamos con todo el mundo", "La web habla ocho idiomas por sí sola, y trabajamos con clientes en cualquier zona horaria.", "PLANETA TIERRA", "Demo «Mix»"],
    de: ["Bewegen Sie Cursor oder Finger: Wir bauen Produkte aus Details, Pixel für Pixel.", "Wir arbeiten weltweit", "Die Website spricht von selbst acht Sprachen, und wir arbeiten mit Kunden in jeder Zeitzone.", "PLANET ERDE", "Demo „Mix“"],
    fr: ["Bougez le curseur ou le doigt : nous construisons des produits pixel par pixel.", "Nous travaillons avec le monde entier", "Le site parle huit langues tout seul, et nous travaillons avec des clients sur tous les fuseaux horaires.", "PLANÈTE TERRE", "Démo « Mix »"],
    pl: ["Porusz kursorem lub palcem: budujemy produkty z detali, piksel po pikselu.", "Pracujemy z całym światem", "Strona sama mówi w ośmiu językach, a my pracujemy z klientami w każdej strefie czasowej.", "PLANETA ZIEMIA", "Demo „Mix”"],
    pt: ["Mova o cursor ou o dedo: construímos produtos a partir de detalhes, pixel a pixel.", "Trabalhamos com o mundo todo", "O site fala oito idiomas sozinho, e trabalhamos com clientes em qualquer fuso horário.", "PLANETA TERRA", "Demo “Mix”"],
    it: ["Muovi il cursore o il dito: costruiamo prodotti dai dettagli, pixel dopo pixel.", "Lavoriamo con tutto il mondo", "Il sito parla otto lingue da solo, e lavoriamo con clienti in ogni fuso orario.", "PIANETA TERRA", "Demo «Mix»"]
  }[L] || null;
  const TX = T || [/* запасний */ "Move your cursor or finger: we build products pixel by pixel.", "We work worldwide", "The site speaks eight languages, and we work with clients in any time zone.", "PLANET EARTH", "Demo “Mix”"];
  const D = document.documentElement, calm = () => D.classList.contains("mx-calm");
  try { if (localStorage.getItem("mix-calm") === "1" || matchMedia("(prefers-reduced-motion:reduce)").matches) D.classList.add("mx-calm") } catch (e) {}
  const vis = new Map(), vio = new IntersectionObserver(es => es.forEach(e => vis.set(e.target, e.isIntersecting)));
  const p2 = n => String(n).padStart(2, "0");

  /* кінескоп і зерно */
  document.body.insertAdjacentHTML("beforeend", '<div class="mx-crt" aria-hidden="true"></div><canvas id="mxGrain" aria-hidden="true"></canvas>');
  (() => { const c = document.getElementById("mxGrain"), x = c.getContext("2d"); c.width = 160; c.height = 100; const im = x.createImageData(160, 100); let f = 0;
    (function loop() { requestAnimationFrame(loop); if (calm() || f++ % 3) return; for (let i = 0; i < im.data.length; i += 4) { const v = Math.random() * 255; im.data[i] = im.data[i + 1] = im.data[i + 2] = v; im.data[i + 3] = 255 } x.putImageData(im, 0, 0) })() })();

  /* перший екран: «рядки коду» і екранні написи */
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.insertAdjacentHTML("afterbegin", `<canvas id="mxBars" aria-hidden="true"></canvas>
      <div class="mx-osd tl osd" aria-hidden="true">DECK J13<br>▶ PLAY<br><span id="mxTc">-0:00:00</span><span class="hide-s"><br>SP</span></div>
      <div class="mx-osd tr osd"><span class="mx-rec" aria-hidden="true">REC</span><br><span id="mxClk" aria-hidden="true">00:00:00</span><br><button type="button" class="mx-fx osd" id="mxFx"></button></div>
      <div class="mx-osd bl osd" aria-hidden="true">CH 01</div><div class="mx-osd br osd" aria-hidden="true">STEREO · LOC: ${TX[3]}</div>`);
    const fx = document.getElementById("mxFx");
    const paint = () => { fx.textContent = "FX: " + (calm() ? "OFF" : "ON"); fx.setAttribute("aria-pressed", !calm()) };
    fx.onclick = () => { D.classList.toggle("mx-calm"); try { localStorage.setItem("mix-calm", calm() ? "1" : "0") } catch (e) {} paint() };
    paint();
    const t0 = Date.now();
    setInterval(() => { const s = Math.floor((Date.now() - t0) / 1000), d = new Date(); document.getElementById("mxTc").textContent = `-0:${p2(Math.floor(s / 60) % 60)}:${p2(s % 60)}`; document.getElementById("mxClk").textContent = `${p2(d.getHours())}:${p2(d.getMinutes())}:${p2(d.getSeconds())}` }, 1000);

    const c = document.getElementById("mxBars"), x = c.getContext("2d"); vio.observe(c); let W, H, rows = [];
    const size = () => { const r = devicePixelRatio > 1 ? 1.5 : 1; W = c.width = c.offsetWidth * r; H = c.height = c.offsetHeight * r; rows = []; const lh = 26 * r;
      for (let y = lh; y < H; y += lh) rows.push({ y, segs: Array.from({ length: 1 + Math.floor(Math.random() * 3) }, () => ({ x: Math.random() * W, w: 50 * r + Math.random() * W * .3, a: .12 + Math.random() * .35 })), sp: (Math.random() - .5) * .25 * r }) };
    size(); addEventListener("resize", size);
    (function loop() { requestAnimationFrame(loop); if (vis.get(c) === false) return; x.clearRect(0, 0, W, H);
      for (const row of rows) for (const s of row.segs) { if (!calm()) { s.x += row.sp; if (s.x > W) s.x = -s.w; if (s.x < -s.w) s.x = W }
        x.fillStyle = `rgba(240,140,80,${s.a})`; for (let i = 0; i < s.w; i += 5) if (Math.sin((i + row.y) * .07) > -.6) x.fillRect(s.x + i, row.y, 3, 14) } })();
  }

  /* піксельне лого — перед проєктами */
  const proj = document.getElementById("projects");
  if (proj) {
    const box = document.createElement("div"); box.className = "wrap";
    box.innerHTML = `<div class="mx-pix reveal"><canvas id="mxPix" aria-label="j13"></canvas><div class="cap"><span class="osd">// PIXEL MODE</span><p>${TX[0]}</p></div></div>`;
    proj.parentNode.insertBefore(box, proj);
    const c = document.getElementById("mxPix"), x = c.getContext("2d"); vio.observe(c); let W, H, cell, cells = [], mx = -1e4, my = -1e4, born = 0;
    const COL = { in: "#efe9df", red: "#e0462f", yel: "#f2c45a", org: "#f0a24a", blu: "#3346d6" };
    const build = () => { const r = Math.min(2, devicePixelRatio || 1); W = c.width = c.offsetWidth * r; H = c.height = c.offsetHeight * r; cell = Math.max(8, Math.round(W / 70));
      const o = document.createElement("canvas"), ox = o.getContext("2d"), cw = Math.ceil(W / cell), ch = Math.ceil(H / cell); o.width = cw; o.height = ch;
      ox.fillStyle = "#fff"; ox.textAlign = "center"; ox.textBaseline = "middle"; ox.font = `italic 900 ${ch * .95}px "Inter Tight", Arial Black, sans-serif`;
      ox.save(); ox.translate(cw / 2, ch / 2 + ch * .04); ox.transform(1, 0, -.12, 1, 0, 0); ox.fillText("j13", 0, 0); ox.restore();
      const d = ox.getImageData(0, 0, cw, ch).data, on = (i, j) => i >= 0 && j >= 0 && i < cw && j < ch && d[(j * cw + i) * 4 + 3] > 110;
      cells = [];
      for (let j = 0; j < ch; j++) for (let i = 0; i < cw; i++) { const In = on(i, j); let edge = 0; for (const [a, b] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) if (on(i + a, j + b) !== In) edge++;
        const near = !In && (on(i + 2, j) || on(i - 2, j) || on(i, j + 2) || on(i, j - 2)); if (!In && !near && Math.random() > .012) continue;
        let k = In ? (edge ? (Math.random() < .5 ? "red" : Math.random() < .6 ? "yel" : "org") : "in") : (near ? (Math.random() < .08 ? "blu" : "out") : "dot"); if (In && !edge && Math.random() < .04) k = "org";
        cells.push({ i, j, k, fill: !(k === "out" || k === "dot" || (k !== "in" && Math.random() < .35)), d: Math.random() }) }
      born = performance.now() };
    build(); document.fonts && document.fonts.load('italic 900 40px "Inter Tight"').then(build, build); addEventListener("resize", build);
    new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { born = performance.now(); o.disconnect() } }, { threshold: .3 }).observe(c);
    c.addEventListener("pointermove", e => { const r = c.getBoundingClientRect(), k = W / r.width; mx = (e.clientX - r.left) * k; my = (e.clientY - r.top) * k });
    c.addEventListener("pointerleave", () => { mx = my = -1e4 });
    (function loop(t) { requestAnimationFrame(loop); if (vis.get(c) === false) return; x.fillStyle = "#0d0d10"; x.fillRect(0, 0, W, H); const age = calm() ? 1e9 : t - born;
      for (const p of cells) { if (age < p.d * 1400) continue; let px = p.i * cell, py = p.j * cell, s = cell - 2, k = p.k;
        const dx = px - mx, dy = py - my, dd = Math.hypot(dx, dy) || 1, R = cell * 6;
        if (dd < R && !calm()) { const f = 1 - dd / R; px += dx / dd * f * cell * 1.6; py += dy / dd * f * cell * 1.6; if (k === "in" && f > .55) k = f > .8 ? "red" : "yel" }
        if (k === "dot") { x.fillStyle = "#3a3a44"; x.fillRect(px + s / 2 - 1, py + s / 2 - 1, 2, 2); continue }
        const col = k === "out" ? "#55555f" : COL[k];
        if (p.fill && k !== "out") { x.fillStyle = col; x.fillRect(px, py, s, s); if (k !== "in") { x.strokeStyle = "#0d0d10"; x.lineWidth = 1; x.strokeRect(px + 2.5, py + 2.5, s - 5, s - 5) } }
        else { x.strokeStyle = col; x.lineWidth = Math.max(1.5, cell / 7); const q = k === "out" ? s * .5 : s; x.strokeRect(px + (s - q) / 2 + 1, py + (s - q) / 2 + 1, q - 2, q - 2) } } })(0);
  }

  /* глобус — перед контактами */
  const contact = document.getElementById("contact");
  if (contact) {
    const g = document.createElement("div"); g.className = "wrap";
    g.innerHTML = `<div class="mx-globe reveal"><canvas id="mxGlobe" aria-hidden="true"></canvas><div><span class="osd">LOC: ${TX[3]}</span><h2>${TX[1]}</h2><p>${TX[2]}</p></div></div>`;
    contact.parentNode.insertBefore(g, contact);
    const c = document.getElementById("mxGlobe"), x = c.getContext("2d"); vio.observe(c); let S, rot = 0;
    const size = () => { const r = Math.min(2, devicePixelRatio || 1); S = c.width = c.height = c.offsetWidth * r }; size(); addEventListener("resize", size);
    const ct = Math.cos(.38), st = Math.sin(.38);
    const P = (la, lo) => { la *= Math.PI / 180; lo = lo * Math.PI / 180 + rot; const X = Math.cos(la) * Math.sin(lo), Y = Math.sin(la), Z = Math.cos(la) * Math.cos(lo); return [X, -(Y * ct - Z * st), Y * st + Z * ct] };
    const line = (pts, R, cx, cy) => { for (let k = 1; k < pts.length; k++) { const a = pts[k - 1], b = pts[k]; x.globalAlpha = a[2] > 0 && b[2] > 0 ? .95 : .15; x.beginPath(); x.moveTo(cx + a[0] * R, cy + a[1] * R); x.lineTo(cx + b[0] * R, cy + b[1] * R); x.stroke() } };
    (function loop() { requestAnimationFrame(loop); if (vis.get(c) === false) return; if (!calm()) rot += .0035; const R = S * .36, cx = S / 2, cy = S / 2; x.clearRect(0, 0, S, S);
      x.strokeStyle = "#f3e6d6"; x.lineWidth = Math.max(1, S / 420); x.shadowColor = "#e8925a"; x.shadowBlur = calm() ? 0 : 8;
      for (let lo = 0; lo < 360; lo += 30) line(Array.from({ length: 37 }, (_, k) => P(-90 + k * 5, lo)), R, cx, cy);
      for (let la = -60; la <= 60; la += 30) line(Array.from({ length: 73 }, (_, k) => P(la, k * 5)), R, cx, cy);
      x.globalAlpha = 1; x.lineWidth *= 1.6; x.beginPath(); x.arc(cx, cy, R, 0, 7); x.stroke(); x.lineWidth = Math.max(1, S / 500);
      for (const [a, b, an] of [[1.32, .42, -.35], [1.18, .3, .55]]) { x.save(); x.translate(cx, cy); x.rotate(an + (calm() ? 0 : rot * .2)); x.globalAlpha = .7; x.beginPath(); x.ellipse(0, 0, R * a, R * b, 0, 0, 7); x.stroke();
        const m = performance.now() / 2400 * (a > 1.25 ? 1 : -1.3); x.globalAlpha = 1; x.fillStyle = "#f2c45a"; x.beginPath(); x.arc(Math.cos(m) * R * a, Math.sin(m) * R * b, S / 110, 0, 7); x.fill(); x.restore() }
      x.shadowBlur = 0 })();
  }

  /* нові блоки теж плавно з'являються */
  const rio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in", "visible"); rio.unobserve(e.target) } }), { threshold: .12 });
  document.querySelectorAll(".mx-pix, .mx-globe").forEach(el => rio.observe(el));

  /* на телефоні скрін «налаштовується», коли картка посередині екрана */
  if (matchMedia("(hover:none)").matches) { const tio = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle("mx-tuned", e.isIntersecting)), { rootMargin: "-35% 0px -35% 0px" }); document.querySelectorAll(".project").forEach(p => tio.observe(p)) }

  /* плашка демо */
  const note = document.querySelector(".nx-note");
  if (note) { const a = note.querySelector("a"); note.firstChild.textContent = TX[4] + " "; if (a) { const b = a.cloneNode(); b.href = "../demo5/"; b.textContent = "VHS"; b.style.marginRight = "10px"; note.insertBefore(b, a) } }
})();
