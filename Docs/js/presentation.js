/* =========================================================
   GameInsight Studios — Beyond the Reviews
   Motor da apresentação: navegação, etapas, contadores,
   gráficos e ilustrações generativas.
   Sem dependências externas.
   ========================================================= */
(() => {
'use strict';

/* ---------------------------------------------------------
   1. DADOS DO PROJETO (fonte única para os gráficos gerados)
   Valores conforme relatório técnico / prompt do projeto.
   --------------------------------------------------------- */
const DATA = {
  // Slide 7 — avaliação inicial (F1 = F1 da classe POSITIVA, não F1 Macro)
  initial: [
    { model: 'Multinomial NB',      acc: 84.09, f1pos: 90.16 },
    { model: 'Regressão Logística', acc: 86.84, f1pos: 91.62, hl: true },
    { model: 'Random Forest',       acc: 83.24, f1pos: 89.63 },
  ],
  recallNegInitialLR: 58.26,
  // Slide 8 — antes × depois (valores iniciais e recall negativo: figura
  // "Comparação antes e depois dos ajustes", 1 casa decimal;
  // F1 Macro ajustado: tabela do relatório, 2 casas)
  tuning: [
    { label: 'Naive Bayes',         sub: 'Multinomial → Complement', f1: [74.3, 80.12], rn: [43.9, 84.3] },
    { label: 'Regressão Logística', sub: 'inicial → ajustada',       f1: [80.5, 82.31], rn: [58.3, 81.0], hl: true },
    { label: 'Random Forest',       sub: 'inicial → ajustado',       f1: [72.9, 79.24], rn: [42.1, 68.5] },
  ],
  baselineF1Macro: 42.7,   // classificador de referência "sempre positiva"
  goalF1Macro: 80,
};

const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const easeIO = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeOut = t => 1 - Math.pow(1 - t, 3);
const fmt = (v, dec = 0) => v.toLocaleString('pt-BR', { minimumFractionDigits: dec, maximumFractionDigits: dec });
function rng(seed) { let s = seed >>> 0; return () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const NS = 'http://www.w3.org/2000/svg';
const el = (tag, attrs = {}, html) => { const e = document.createElement(tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (html != null) e.innerHTML = html; return e; };
const sv = (tag, attrs = {}) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); return e; };

/* ---------------------------------------------------------
   2. CONSTRUÇÃO DE ELEMENTOS GERADOS
   --------------------------------------------------------- */

// Slide 2 — nuvem de avaliações ILUSTRATIVAS (não são registros da base)
function buildCloud() {
  const host = $('#cloud'); if (!host) return;
  const texts = [
    'Crashes every 10 min.', 'Best co-op in years!', 'Not worth the price.', 'Servers always down.',
    '10/10 would play again.', 'Controls feel clunky.', 'Refunded after 2 hours.', 'So fun with friends.',
    'Too many paywalls.', 'Runs fine on my laptop.', 'Not bad for an indie.', 'Grindy, but addictive.',
    'A masterpiece.', 'Meh.', 'Can’t stop playing!', 'Feels unfinished.',
    'Amazing soundtrack.', 'Hidden gem!', 'Useless tutorial.', 'Story made me cry.',
    'Way too expensive.', 'Relaxing and charming.', 'Boring after an hour.', 'Worth every cent.',
  ];
  const R = rng(42), cols = 4, cw = 236, gap = 22, rh = 102;
  const order = texts.map((_, i) => i).sort(() => R() - .5);
  texts.forEach((t, i) => {
    const c = i % cols, r = Math.floor(i / cols);
    const x = c * (cw + gap) + (R() - .5) * 12, y = r * rh + (R() - .5) * 10;
    const card = el('div', { class: 'rcard', 'data-a': 'pop', style: `left:${x.toFixed(0)}px;top:${y.toFixed(0)}px;width:${cw}px;--d:${(.35 + order[i] * .075).toFixed(2)}s` });
    card.innerHTML = `<div class="meta"><span class="av"></span><span class="ln"></span><span class="ln s"></span></div>${t}`;
    card.style.rotate = `${((R() - .5) * 3).toFixed(1)}deg`;
    host.appendChild(card);
  });
}

// Slide 6 — grade TF-IDF e folds da validação cruzada
function buildMethod() {
  const g = $('#tfgrid'); if (g) {
    const R = rng(7);
    for (let r = 0; r < 3; r++) for (let c = 0; c < 7; c++) {
      g.appendChild(sv('rect', { x: 762 + c * 26, y: 60 + r * 26, width: 18, height: 18, rx: 4, fill: `rgba(145,103,248,${(.12 + R() * .8).toFixed(2)})` }));
    }
  }
  const f = $('#folds'); if (f) {
    for (let i = 0; i < 5; i++) {
      const r = sv('rect', { x: 1040 + i * 81, y: 346, width: 76, height: 34, rx: 8, fill: 'rgba(98,181,255,.22)' });
      if (!RM) {
        const vals = Array.from({ length: 5 }, (_, k) => k === i ? 'rgba(145,103,248,.9)' : 'rgba(98,181,255,.22)').join(';') + ';' + (i === 0 ? 'rgba(145,103,248,.9)' : 'rgba(98,181,255,.22)');
        r.appendChild(sv('animate', { attributeName: 'fill', values: vals, keyTimes: '0;.2;.4;.6;.8;1', dur: '5s', calcMode: 'discrete', repeatCount: 'indefinite' }));
      } else if (i === 0) r.setAttribute('fill', 'rgba(145,103,248,.9)');
      f.appendChild(r);
    }
  }
}

// Slide 7 — barras comparativas
function buildChart7() {
  const plot = $('#plot7'); if (!plot) return;
  [0, 25, 50, 75, 100].forEach(v => {
    const gl = el('div', { class: 'gl', style: `bottom:${v}%` }, `<span>${v}%</span>`);
    plot.appendChild(gl);
  });
  const groups = el('div', { class: 'groups' });
  DATA.initial.forEach((m, gi) => {
    const grp = el('div', { class: 'grp' + (m.hl ? ' hl' : '') });
    [['acc', m.acc], ['f1', m.f1pos]].forEach(([k, v], bi) => {
      const d = .5 + gi * .18 + bi * .1;
      const col = el('div', { class: 'col' });
      col.appendChild(el('div', { class: `bar ${k}`, 'data-a': 'grow-y', style: `height:${v}%;--d:${d}s` }));
      col.appendChild(el('div', { class: 'v', 'data-a': 'fade', 'data-count': v, 'data-dec': 2, 'data-suf': '%', style: `bottom:calc(${v}% + 12px);--d:${d + .2}s` }, '0'));
      grp.appendChild(col);
    });
    grp.appendChild(el('div', { class: 'xl' }, m.model));
    if (m.hl) {
      const b = el('div', { 'data-step': '1' });
      b.appendChild(el('div', { class: 'badge', 'data-a': 'pop', style: 'top:-46px' }, 'Maior acurácia'));
      grp.appendChild(b);
    }
    groups.appendChild(grp);
  });
  plot.appendChild(groups);

  const w = $('#waffle');
  if (w) {
    const filled = Math.round(DATA.recallNegInitialLR); // 58 de 100 ≈ 58,26%
    for (let i = 0; i < 100; i++) {
      const c = el('i', { class: i < filled ? 'f' : '' });
      c.style.transitionDelay = `${.4 + i * .012}s`;
      w.appendChild(c);
    }
  }
}

// Slide 8 — gráficos "haltere" (antes → depois)
function buildDumbbells() {
  const min = 40, max = 90, X = v => ((v - min) / (max - min)) * 100;
  const make = (host, title, sub, key, refs) => {
    if (!host) return;
    host.innerHTML = `<div class="ph"><h4>${title}<small>${sub}</small></h4>
      <div class="legend"><span><i style="border:3px solid rgba(155,169,188,.7);border-radius:50%;background:transparent"></i>inicial</span><span><i style="background:var(--sky);border-radius:50%"></i>ajustado</span></div></div>`;
    const rows = el('div', { class: 'drows' });
    DATA.tuning.forEach((m, i) => {
      const [a, b] = m[key];
      const c = m.hl ? '#62B5FF' : (key === 'rn' ? '#F16F78' : '#9167F8');
      const d = .2 + i * .18;
      const dec = Number.isInteger(b * 10) && key === 'rn' ? 1 : (String(b).split('.')[1] || '').length;
      const row = el('div', { class: 'drow' + (m.hl ? ' hl' : ''), style: `--c:${c}` });
      row.innerHTML = `<div class="rl">${m.label}<small>${m.sub}</small></div>`;
      const tr = el('div', { class: 'dtrack' });
      tr.appendChild(el('div', { class: 'dline', 'data-a': 'grow-x', style: `left:${X(a)}%;width:${X(b) - X(a)}%;--d:${d + .2}s` }));
      tr.appendChild(el('div', { class: 'ddot a', 'data-a': 'fade', style: `left:${X(a)}%;--d:${d}s` }));
      tr.appendChild(el('div', { class: 'ddot b', 'data-a': 'pop', style: `left:${X(b)}%;--d:${d + .9}s` }));
      tr.appendChild(el('div', { class: 'dval a', 'data-a': 'fade', style: `left:${X(a)}%;top:42px;--d:${d}s` }, fmt(a, 1)));
      tr.appendChild(el('div', { class: 'dval b', 'data-a': 'fade', style: `left:${X(b)}%;--d:${d + 1}s` }, fmt(b, dec || 1) + '%'));
      row.appendChild(tr);
      rows.appendChild(row);
    });
    refs.forEach(r => {
      const v = el('div', { class: `vref ${r.cls}`, 'data-a': 'fade', style: `left:${(250 + X(r.v) / 100 * 770).toFixed(1)}px;--d:.1s` });
      v.innerHTML = `<span class="vl">${r.label}</span>`;
      rows.appendChild(v);
    });
    host.appendChild(rows);
    const ax = el('div', { class: 'daxis' });
    for (let t = min; t <= max; t += 10) ax.appendChild(el('span', { style: `left:${X(t)}%` }, t + '%'));
    host.appendChild(ax);
  };
  make($('#dpA'), 'F1 Macro', 'inicial → ajustado', 'f1', [
    { v: DATA.goalF1Macro, cls: 'meta', label: 'meta 80%' },
    { v: DATA.baselineF1Macro, cls: 'base', label: 'referência “sempre positiva”: 42,7%' },
  ]);
  make($('#dpB'), 'Recall negativo', 'quantas negativas reais o modelo reconhece', 'rn', []);
}

// Slide 11 — termos começam embaralhados e se organizam
function buildTerms() {
  const R = rng(11);
  $$('.s-app .half').forEach(h => {
    const isNeg = h.classList.contains('neg');
    $$('.term', h).forEach((t, i) => {
      const sx = (isNeg ? 1 : -1) * (160 + R() * 380);
      t.style.setProperty('--sx', `${sx.toFixed(0)}px`);
      t.style.setProperty('--sy', `${(20 + R() * 120).toFixed(0)}px`);
      t.style.setProperty('--sr', `${((R() - .5) * 16).toFixed(1)}deg`);
      t.style.setProperty('--d', `${(R() * .45).toFixed(2)}s`);
    });
  });
}

/* ---------------------------------------------------------
   3. CAMPO GENERATIVO DE AVALIAÇÕES (capa e encerramento)
   Cada partícula é um "card" de avaliação que deriva e depois
   se organiza em grupos de sentimento (proporção 74/26).
   --------------------------------------------------------- */
const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
class Field {
  constructor(canvas, mode) {
    this.c = canvas; this.ctx = canvas.getContext('2d'); this.mode = mode; this.raf = 0; this.k = 1;
    const R = rng(mode === 'cover' ? 2026 : 1987);
    this.net = mode === 'network';
    this.cl = this.net
      ? [{ x: 1530, y: 330, r: 190, col: [54, 201, 143] }, { x: 1720, y: 700, r: 112, col: [241, 111, 120] }]
      : [{ x: 1440, y: 440, r: 200, col: [54, 201, 143] }, { x: 1700, y: 770, r: 116, col: [241, 111, 120] }];
    this.hub = { x: 1640, y: 520 };
    const N = this.net ? 160 : 150;
    this.p = [];
    for (let i = 0; i < N; i++) {
      const cls = R() < .7443 ? 0 : 1;
      const z = .45 + R() * .8;
      let hx = R() * 1920, hy = R() * 1080;
      if (!this.net && R() < .55) hx = 900 + R() * 1020; // capa: densidade maior à direita
      this.p.push({ cls, z, hx, hy, a: R() * Math.PI * 2, rad: Math.sqrt(R()) * this.cl[cls].r, ph: R() * 6.283, f1: .15 + R() * .35, f2: .12 + R() * .3, dl: R() * 1.1 });
    }
    this.p.sort((a, b) => a.z - b.z);
    this.links = this.p.map((_, i) => i).filter(i => i % 9 === 0);
  }
  resize(scale) {
    const k = clamp((window.devicePixelRatio || 1) * scale, 1, 2);
    this.k = k; this.c.width = Math.round(1920 * k); this.c.height = Math.round(1080 * k);
    if (!this.raf) this.draw(this.lastT ?? (RM ? 99 : 0));
  }
  start() { if (this.raf) return; this.t0 = performance.now(); if (RM) { this.draw(99); return; } const loop = now => { this.draw((now - this.t0) / 1000); this.raf = requestAnimationFrame(loop); }; this.raf = requestAnimationFrame(loop); }
  stop() { cancelAnimationFrame(this.raf); this.raf = 0; }
  draw(t) {
    this.lastT = t;
    const { ctx, k } = this; ctx.setTransform(k, 0, 0, k, 0, 0); ctx.clearRect(0, 0, 1920, 1080);
    mouse.x += (mouse.tx - mouse.x) * .05; mouse.y += (mouse.ty - mouse.y) * .05;
    const D = this.net ? .3 : 1.3, DUR = 2.4, pts = [];
    for (const p of this.p) {
      const kk = easeIO(clamp((t - D - p.dl) / DUR));
      const cl = this.cl[p.cls];
      const dx = p.hx + Math.sin(t * p.f1 + p.ph) * 26 * p.z + mouse.x * p.z * 22;
      const dy = p.hy + Math.cos(t * p.f2 + p.ph) * 18 * p.z + mouse.y * p.z * 14;
      const ang = p.a + t * .05 * (p.cls ? -1.3 : 1);
      const tx = cl.x + Math.cos(ang) * p.rad + mouse.x * p.z * 10;
      const ty = cl.y + Math.sin(ang) * p.rad * .9 + mouse.y * p.z * 8;
      const x = lerp(dx, tx, kk), y = lerp(dy, ty, kk);
      const n = [155, 169, 188], col = n.map((v, i) => Math.round(lerp(v, cl.col[i], kk)));
      let al = .16 + .5 * p.z;
      if (!this.net) al *= lerp(clamp((x - 300) / 900, .12, 1), 1, kk * .4);
      else al *= .75;
      pts.push({ x, y, col, al, kk, z: p.z, cls: p.cls });
    }
    // ligações (encerramento): conexões dentro dos grupos e até o núcleo
    if (this.net) {
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i]; if (a.kk < .6) continue;
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j]; if (b.cls !== a.cls || b.kk < .6) continue;
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 64) { ctx.strokeStyle = `rgba(${a.col},${((1 - d / 64) * .28 * Math.min(a.kk, b.kk)).toFixed(3)})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
      }
      const pulse = .5 + .5 * Math.sin(t * 1.6);
      for (const i of this.links) {
        const a = pts[i]; if (a.kk < .7) continue;
        ctx.strokeStyle = `rgba(98,181,255,${(.1 + .12 * pulse) * a.kk})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(this.hub.x, this.hub.y); ctx.stroke();
      }
      const hk = easeOut(clamp((t - 1.6) / 1.2));
      if (hk > 0) {
        const g = ctx.createRadialGradient(this.hub.x, this.hub.y, 0, this.hub.x, this.hub.y, 70);
        g.addColorStop(0, `rgba(145,103,248,${.55 * hk})`); g.addColorStop(1, 'rgba(145,103,248,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(this.hub.x, this.hub.y, 70, 0, 7); ctx.fill();
        ctx.fillStyle = `rgba(244,247,252,${.95 * hk})`; ctx.beginPath(); ctx.arc(this.hub.x, this.hub.y, 7 + pulse * 2, 0, 7); ctx.fill();
        ctx.strokeStyle = `rgba(98,181,255,${.5 * hk})`; ctx.beginPath(); ctx.arc(this.hub.x, this.hub.y, 22 + pulse * 6, 0, 7); ctx.stroke();
      }
    }
    // cards
    for (const q of pts) {
      const w = 30 * q.z * (1 - .3 * q.kk), h = w * .64, r = w * .2;
      ctx.fillStyle = `rgba(${q.col},${(q.al * .2).toFixed(3)})`;
      ctx.strokeStyle = `rgba(${q.col},${(q.al * .9).toFixed(3)})`;
      ctx.lineWidth = 1.1;
      ctx.beginPath(); ctx.roundRect(q.x - w / 2, q.y - h / 2, w, h, r); ctx.fill(); ctx.stroke();
      ctx.fillStyle = `rgba(${q.col},${(q.al * .7).toFixed(3)})`;
      ctx.fillRect(q.x - w * .32, q.y - h * .16, w * .5, Math.max(1, h * .1));
      ctx.fillRect(q.x - w * .32, q.y + h * .1, w * .32, Math.max(1, h * .1));
    }
  }
}

/* ---------------------------------------------------------
   4. MOTOR DA APRESENTAÇÃO
   --------------------------------------------------------- */
buildCloud(); buildMethod(); buildChart7(); buildDumbbells(); buildTerms();

const stage = $('#stage');
const slides = $$('.slide');
const N = slides.length;
let cur = -1, step = 0, scale = 1;

slides.forEach(s => {
  s._max = Math.max(0, ...$$('[data-step]', s).map(e => +e.dataset.step));
  s._els = $$('[data-a],[data-count]', s).map(e => { const h = e.closest('[data-step]'); return { e, need: h ? +h.dataset.step : 0 }; });
  const cv = $('canvas.field', s);
  if (cv) s._field = new Field(cv, s.dataset.field);
  $$('[data-count]', s).forEach(resetCount);
});

function parseTime(v) { v = (v || '').trim(); if (!v) return 0; return v.endsWith('ms') ? parseFloat(v) / 1000 : parseFloat(v) || 0; }
function resetCount(e) { cancelAnimationFrame(e._raf); e._run = false; const dec = +(e.dataset.dec || 0); e.textContent = fmt(0, dec) + (e.dataset.suf || ''); }
function runCount(e) {
  if (e._run) return; e._run = true;
  const to = +e.dataset.count, dec = +(e.dataset.dec || 0), suf = e.dataset.suf || '';
  if (RM) { e.textContent = fmt(to, dec) + suf; return; }
  const delay = parseTime(getComputedStyle(e).getPropertyValue('--d')) * 1000;
  const dur = to < 10 ? 900 : 1600, t0 = performance.now() + delay;
  const tick = now => {
    const p = clamp((now - t0) / dur);
    e.textContent = fmt(to * easeOut(p), dec) + suf;
    if (p < 1) e._raf = requestAnimationFrame(tick); else e.textContent = fmt(to, dec) + suf;
  };
  e._raf = requestAnimationFrame(tick);
}

function render(s, k) {
  for (const { e, need } of s._els) {
    const on = k >= need, has = e.classList.contains('in');
    if (on && !has) { e.classList.add('in'); if (e.dataset.count != null) runCount(e); }
    else if (!on && has) { e.classList.remove('in'); if (e.dataset.count != null) resetCount(e); }
  }
  for (let i = 1; i <= s._max; i++) s.classList.toggle('st-' + i, k >= i);
  s.dataset.cur = k;
}
function resetSlide(s) {
  for (const { e } of s._els) { e.classList.remove('in'); if (e.dataset.count != null) resetCount(e); }
  for (let i = 1; i <= s._max; i++) s.classList.remove('st-' + i);
}

function go(i, k = 0) {
  i = clamp(i, 0, N - 1);
  const s = slides[i];
  k = k === 'end' ? s._max : clamp(k, 0, s._max);
  if (i !== cur) {
    const old = slides[cur];
    slides.forEach((x, j) => x.classList.toggle('is-past', j < i));
    if (old) {
      old.classList.remove('is-active');
      old._field && old._field.stop();
      const oi = cur;
      setTimeout(() => { if (cur !== oi) resetSlide(old); }, 950);
    }
    cur = i; step = k;
    resetSlide(s);
    s.classList.add('is-active');
    s._field && (s._field.resize(scale), s._field.start());
    requestAnimationFrame(() => requestAnimationFrame(() => { if (cur === i) render(s, step); }));
    $('#live').textContent = `Slide ${i + 1} de ${N}: ${s.dataset.title}`;
  } else {
    step = k; render(s, step);
  }
  updateUI();
}
function next(skip) { const s = slides[cur]; if (!skip && step < s._max) go(cur, step + 1); else if (cur < N - 1) go(cur + 1, 0); }
function prev(skip) { if (!skip && step > 0) go(cur, step - 1); else if (cur > 0) go(cur - 1, skip ? 0 : 'end'); }

/* ---------- Interface ---------- */
const prog = $('#prog');
slides.forEach((s, i) => {
  const b = el('button', { 'aria-label': `Ir para o slide ${i + 1}: ${s.dataset.title}`, title: `${i + 1} · ${s.dataset.title}` }, '<i></i>');
  b.addEventListener('click', e => { e.stopPropagation(); go(i, 0); });
  prog.appendChild(b);
});
function updateUI() {
  const s = slides[cur];
  $$('button', prog).forEach((b, i) => {
    b.classList.toggle('done', i < cur); b.classList.toggle('cur', i === cur);
    b.style.setProperty('--p', i === cur ? `${((step + 1) / (s._max + 1)) * 100}%` : '0%');
  });
  $('#cnt').innerHTML = `<b>${String(cur + 1).padStart(2, '0')}</b> / ${N}`;
  $('#topline').style.width = `${(cur / (N - 1)) * 100}%`;
  $('#bPrev').disabled = cur === 0 && step === 0;
  $('#bNext').disabled = cur === N - 1 && step === s._max;
  const b1 = $('.ambient .b1'), b2 = $('.ambient .b2');
  b1.style.transform = `translate(${cur * 38}px, ${Math.sin(cur) * 60}px)`;
  b2.style.transform = `translate(${-cur * 30}px, ${Math.cos(cur) * 50}px)`;
  try { history.replaceState(null, '', `#${cur + 1}${step ? '.' + step : ''}`); } catch (_) {}
}

function toggleFS() {
  const d = document;
  if (!d.fullscreenElement && !d.webkitFullscreenElement) (d.documentElement.requestFullscreen || d.documentElement.webkitRequestFullscreen)?.call(d.documentElement);
  else (d.exitFullscreen || d.webkitExitFullscreen)?.call(d);
}
$('#bPrev').addEventListener('click', e => { e.stopPropagation(); prev(); });
$('#bNext').addEventListener('click', e => { e.stopPropagation(); next(); });
$('#bFull').addEventListener('click', e => { e.stopPropagation(); toggleFS(); });

let hintT = setTimeout(() => $('#hint').classList.add('gone'), 7000);
function hideHint() { clearTimeout(hintT); $('#hint').classList.add('gone'); }

document.addEventListener('keydown', e => {
  if (e.altKey || e.ctrlKey || e.metaKey) return;
  const k = e.key;
  if (['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter'].includes(k)) { e.preventDefault(); next(e.shiftKey); hideHint(); }
  else if (['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'].includes(k)) { e.preventDefault(); prev(e.shiftKey); hideHint(); }
  else if (k === 'Home') { e.preventDefault(); go(0, 0); }
  else if (k === 'End') { e.preventDefault(); go(N - 1, 'end'); }
  else if (k === 'f' || k === 'F') { e.preventDefault(); toggleFS(); }
  else if (/^[1-9]$/.test(k)) { go(+k - 1, 0); }
  else if (k === '0') { go(9, 0); }
});
stage.addEventListener('click', e => { if (e.target.closest('.ui, button, a')) return; next(); hideHint(); });
stage.addEventListener('contextmenu', e => { e.preventDefault(); prev(); });

let tx0 = null;
stage.addEventListener('touchstart', e => { tx0 = e.touches[0].clientX; }, { passive: true });
stage.addEventListener('touchend', e => {
  if (tx0 == null) return; const dx = e.changedTouches[0].clientX - tx0; tx0 = null;
  if (Math.abs(dx) > 50) { e.preventDefault(); dx < 0 ? next() : prev(); }
});

let idleT;
document.addEventListener('mousemove', e => {
  const r = stage.getBoundingClientRect();
  mouse.tx = ((e.clientX - r.left) / r.width - .5) * 2; mouse.ty = ((e.clientY - r.top) / r.height - .5) * 2;
  stage.classList.add('ui-active'); stage.classList.remove('hide-cursor');
  clearTimeout(idleT); idleT = setTimeout(() => { stage.classList.remove('ui-active'); if (document.fullscreenElement) stage.classList.add('hide-cursor'); }, 2500);
});

function fit() {
  scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
  stage.style.transform = `translate(-50%, -50%) scale(${scale})`;
  slides.forEach(s => s._field && s._field.resize(scale));
}
window.addEventListener('resize', fit);
fit();

// Início: aceita #N ou #N.etapa
const m = location.hash.match(/^#(\d+)(?:\.(\d+))?/);
go(m ? +m[1] - 1 : 0, m && m[2] ? +m[2] : 0);

// API mínima para testes/automação
window.presentation = { go, next, prev, get index() { return cur; }, get step() { return step; }, slides };
})();
