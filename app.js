(function () {
  'use strict';
  var TRIP = new Date(2026, 10, 16); // 16 de noviembre de 2026
  var KEY = 'aprendetai.v1';
  var INTERVALS = [0, 1, 2, 4, 7, 14, 30]; // días por caja (repaso espaciado)
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var view = $('#view');

  // ---------------- Estado ----------------
  var DEFAULTS = {
    gender: 'm', rate: 0.85, autoplay: true, speakOut: true, xp: 0, unlocked: 1, passed: {},
    items: {}, days: {}, onboarded: false, eurRate: 38, history: [], saved: []
  };
  var S = load();
  function load() {
    try { return Object.assign({}, DEFAULTS, JSON.parse(localStorage.getItem(KEY) || '{}')); }
    catch (e) { return Object.assign({}, DEFAULTS); }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { } updateXp(); }
  function updateXp() { $('#xp').textContent = '⭐ ' + S.xp; }

  function dayKey(d) {
    d = d || new Date();
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }
  function today0() { var d = new Date(); d.setHours(0, 0, 0, 0); return d; }
  function addDays(n) { var d = today0(); d.setDate(d.getDate() + n); return dayKey(d); }
  function daysToTrip() { return Math.round((TRIP - today0()) / 86400000); }
  function dayRec(k) { k = k || dayKey(); return S.days[k] || (S.days[k] = { daily: null, studied: 0, xp: 0 }); }
  function streak() {
    var n = 0, d = today0();
    if (!(S.days[dayKey(d)] && S.days[dayKey(d)].daily != null)) d.setDate(d.getDate() - 1);
    while (S.days[dayKey(d)] && S.days[dayKey(d)].daily != null) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  // ---------------- Contenido ----------------
  var ALL = [];
  var TOPICS = window.TOPICS || [];
  var NL = LEVELS.length; // niveles con progresión; los temas (TOPICS) van aparte y siempre abiertos
  function isTopic(id) { return id > NL; }
  function lvlObj(id) { return isTopic(id) ? TOPICS.filter(function (T) { return T.id === id; })[0] : LEVELS[id - 1]; }
  function corePassed() { return Object.keys(S.passed).filter(function (k) { return +k <= NL; }).length; }
  LEVELS.concat(TOPICS).forEach(function (L) {
    L.items.forEach(function (raw, i) { ALL.push({ id: L.id + '-' + i, lvl: L.id, raw: raw }); });
  });
  function levelItems(lvl) { return ALL.filter(function (x) { return x.lvl === lvl; }); }
  function R(it) {
    var m = S.gender === 'm';
    var q = it.raw[2].charAt(0) === '¿';
    var p = m ? 'ครับ' : (q ? 'คะ' : 'ค่ะ');
    var pr = m ? 'khráp' : (q ? 'khá' : 'khâ');
    var I = m ? 'ผม' : 'ฉัน', Ir = m ? 'phǒm' : 'chǎn';
    return {
      th: it.raw[0].replace('{p}', p).replace('{I}', I),
      ro: it.raw[1].replace('{pr}', pr).replace('{Ir}', Ir),
      es: it.raw[2],
      alt: it.raw[3] || []
    };
  }
  function prog(it) { return S.items[it.id] || null; }
  function mark(it, ok) {
    var p = S.items[it.id] || (S.items[it.id] = { box: 0, due: dayKey(), ok: 0, ko: 0 });
    if (ok) { p.box = Math.min(p.box + 1, INTERVALS.length - 1); p.ok++; }
    else { p.box = 0; p.ko++; }
    p.due = addDays(INTERVALS[p.box]);
  }
  function seen(it) {
    if (!S.items[it.id]) S.items[it.id] = { box: 0, due: addDays(1), ok: 0, ko: 0 };
  }
  function levelMastery(lvl) {
    var its = levelItems(lvl), sum = 0;
    its.forEach(function (it) { var p = prog(it); if (p) sum += Math.min(p.box, 3) / 3; });
    return Math.round(100 * sum / its.length);
  }
  function levelSeen(lvl) { return levelItems(lvl).filter(function (it) { return !!prog(it); }).length; }

  // ---------------- Utilidades ----------------
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function sample(a, n) { return shuffle(a).slice(0, n); }
  var toastT;
  function toast(msg, ms) {
    var t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove('show'); }, ms || 2600);
  }
  function lev(a, b) {
    var m = a.length, n = b.length; if (!m) return n; if (!n) return m;
    var prev = [], cur = []; for (var j = 0; j <= n; j++) prev[j] = j;
    for (var i = 1; i <= m; i++) {
      cur = [i];
      for (j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  }
  function normTh(s) {
    return String(s || '').toLowerCase()
      .replace(/ครับผม|ครับ|ค่ะ|คะ|นะคะ|จ้ะ|จ้า/g, '')
      .replace(/[\s.,!?¿¡'"“”\-:;()]/g, '');
  }
  function normEs(s) {
    return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/\(.*?\)/g, '').replace(/[^a-z0-9ñ ]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  var TONES = /[\u0E48-\u0E4B]/g;
  function similarity(heardList, it) {
    var r = R(it);
    var targets = [normTh(r.th)].concat(r.alt.map(normTh)).filter(Boolean);
    var best = 0, bestText = heardList[0] || '';
    heardList.forEach(function (h) {
      var n = normTh(h);
      targets.forEach(function (t) {
        var s = n.indexOf(t) >= 0 ? 1 : 1 - lev(n, t) / Math.max(n.length, t.length, 1);
        // Un tono mal pronunciado cambia la palabra: sin marcas de tono puntúa algo menos, pero cuenta
        var n2 = n.replace(TONES, ''), t2 = t.replace(TONES, '');
        var s2 = 0.9 * (n2.indexOf(t2) >= 0 ? 1 : 1 - lev(n2, t2) / Math.max(n2.length, t2.length, 1));
        s = Math.max(s, s2);
        if (s > best) { best = s; bestText = h; }
      });
    });
    return { score: best, text: bestText };
  }
  function ask(msg, okText, cb) {
    var d = document.createElement('div'); d.className = 'modal';
    d.innerHTML = '<div class="box"><div class="msg">' + esc(msg) + '</div><div class="grid2"><button class="btn alt" data-a="no">Cancelar</button><button class="btn bad" data-a="ok">' + esc(okText) + '</button></div></div>';
    var prevBack = window.onBack;
    function close() { d.remove(); window.onBack = prevBack; }
    d.querySelector('[data-a=no]').onclick = close;
    d.querySelector('[data-a=ok]').onclick = function () { close(); cb(); };
    d.onclick = function (e) { if (e.target === d) close(); };
    window.onBack = function () { close(); return true; };
    document.body.appendChild(d);
  }
  function hasThai(s) { return /[฀-๿]/.test(s); }

  // ---------------- Voz (Android nativo o navegador) ----------------
  var Speech = (function () {
    var A = window.Android;
    var ttsCbs = {}, idn = 0, listener = null;
    window.onTts = function (type, id) {
      var cb = ttsCbs[id];
      if (cb && (type === 'done' || type === 'error')) { delete ttsCbs[id]; cb(type); }
    };
    window.onTtsReady = function (ok) { if (!ok) toast('No se pudo iniciar la voz del móvil'); };
    window.onMicPermission = function (ok) { toast(ok ? 'Micrófono activado. ¡Pulsa otra vez para hablar!' : 'Sin permiso de micrófono no puedo escucharte'); };
    window.onSpeech = function (type, payload) {
      var l = listener; if (!l) return;
      if (type === 'partial') { try { var p = JSON.parse(payload); if (p[0] && l.onPartial) l.onPartial(p[0]); } catch (e) { } }
      else if (type === 'results') { listener = null; var list = []; try { list = JSON.parse(payload); } catch (e) { } l.onResult(list); }
      else if (type === 'error') { listener = null; l.onError(payload); }
      else if (type === 'begin' && l.onBegin) l.onBegin();
    };
    var rec = null;
    function voiceFor(lang) {
      var vs = window.speechSynthesis ? speechSynthesis.getVoices() : [];
      return vs.filter(function (v) { return v.lang.replace('_', '-').toLowerCase().indexOf(lang.slice(0, 2)) === 0; })[0];
    }
    return {
      native: !!A,
      speak: function (text, lang, rate, cb) {
        rate = rate || S.rate;
        if (A) {
          var id = 'u' + (++idn); if (cb) ttsCbs[id] = cb;
          if (!A.speak(text, lang, rate, id)) { toast('La voz aún se está cargando…'); if (cb) cb('error'); }
          return;
        }
        if (!window.speechSynthesis) { if (cb) cb('error'); return; }
        speechSynthesis.cancel();
        var u = new SpeechSynthesisUtterance(text); u.lang = lang; u.rate = rate;
        var v = voiceFor(lang); if (v) u.voice = v;
        u.onend = function () { if (cb) cb('done'); }; u.onerror = function () { if (cb) cb('error'); };
        speechSynthesis.speak(u);
      },
      stopSpeaking: function () { if (A) A.stopSpeaking(); else if (window.speechSynthesis) speechSynthesis.cancel(); },
      listen: function (lang, h) {
        this.stopSpeaking();
        // Si el reconocedor corta sin resultado final pero ya había oído algo, usamos lo oído
        var last = '';
        var w = {
          onPartial: function (t) { last = t; if (h.onPartial) h.onPartial(t); },
          onBegin: h.onBegin,
          onResult: function (list) { list = (list || []).filter(Boolean); if (!list.length && last) list = [last]; if (list.length) h.onResult(list); else h.onError('7'); },
          onError: function (code) {
            code = String(code);
            if (last && ['6', '7', 'no-speech', 'aborted'].indexOf(code) >= 0) { h.onResult([last]); return; }
            if (A && A.listenDialog && !w.retried && ['3', '5', '8', '11', '12', '13', 'unavailable'].indexOf(code) >= 0) {
              // El reconocedor integrado falla en algunos móviles: pasamos a la ventana de voz de Google
              w.retried = true; S.micMode = 'dialog'; save();
              toast('Uso la ventana de voz de Google, que funciona mejor en tu móvil');
              listener = w; A.listenDialog(lang); return;
            }
            h.onError(code);
          }
        };
        if (A) {
          listener = w;
          if (S.micMode === 'dialog' && A.listenDialog) A.listenDialog(lang); else A.listen(lang);
          return true;
        }
        var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SR) { h.onError('unavailable'); return false; }
        try { if (rec) rec.abort(); } catch (e) { }
        rec = new SR(); rec.lang = lang; rec.interimResults = true; rec.maxAlternatives = 5; rec.continuous = false;
        var done = false;
        rec.onresult = function (e) {
          var full = '', allFinal = true;
          for (var i = 0; i < e.results.length; i++) { full += e.results[i][0].transcript; if (!e.results[i].isFinal) allFinal = false; }
          if (allFinal) {
            done = true;
            var list = [full];
            var r = e.results[e.results.length - 1];
            if (e.results.length === 1) for (var j = 1; j < r.length; j++) list.push(r[j].transcript);
            w.onResult(list);
          } else w.onPartial(full);
        };
        rec.onerror = function (e) { if (done) return; done = true; w.onError(e.error); };
        rec.onend = function () { if (!done) { done = true; w.onError('7'); } };
        try { rec.start(); } catch (e) { done = true; w.onError('busy'); }
        return true;
      },
      stopListening: function () { if (A) A.stopListening(); else if (rec) try { rec.stop(); } catch (e) { } },
      thaiVoiceOk: function () {
        if (A) return A.ttsLangStatus('th-TH') >= 0;
        return !!voiceFor('th');
      }
    };
  })();
  function sayTh(text, rate, cb) { Speech.speak(text, 'th-TH', rate, cb); }
  function sayEs(text, cb) { Speech.speak(text, 'es-ES', 1.0, cb); }
  function speechErr(code) {
    var m = {
      'permission': 'Necesito permiso de micrófono. Acepta el aviso y vuelve a pulsar.',
      'not-allowed': 'Necesito permiso de micrófono.',
      'unavailable': Speech.native ? 'Este móvil no tiene reconocimiento de voz. Instala o actualiza la app de Google.' : 'Aquí el micrófono no está disponible. Usa «Escribir» y el micrófono del teclado del móvil.',
      'cancel': '', 'aborted': '',
      '1': 'Sin conexión: el reconocimiento de voz necesita internet.', '2': 'Sin conexión: el reconocimiento de voz necesita internet.',
      'network': 'Sin conexión: el reconocimiento de voz necesita internet.',
      'service-not-allowed': 'El iPhone no deja usar el micrófono aquí. Activa Dictado (Ajustes › General › Teclado) o usa «Escribir» con el micrófono del teclado.',
      '6': 'No te he oído. Pulsa y habla.', 'no-speech': 'No te he oído. Pulsa y habla.',
      '7': 'No te he entendido, prueba otra vez.', '8': 'El micrófono está ocupado, espera un momento.',
      '9': 'Necesito permiso de micrófono.', '12': 'Falta el idioma tailandés en el reconocimiento de voz de Google.',
      '13': 'Falta el idioma tailandés en el reconocimiento de voz de Google.'
    };
    return m[code] != null ? m[code] : ('Error de voz (' + code + '). Prueba otra vez.');
  }

  // ---------------- Navegación ----------------
  var stack = [];
  var SCREENS = {};
  function go(name, arg, opts) {
    opts = opts || {};
    Speech.stopSpeaking(); Speech.stopListening();
    if (opts.root) stack = [];
    if (!opts.replace || !stack.length) stack.push({ name: name, arg: arg });
    else stack[stack.length - 1] = { name: name, arg: arg };
    render();
  }
  function back() {
    if (stack.length > 1) { stack.pop(); Speech.stopSpeaking(); Speech.stopListening(); render(); return true; }
    if (stack[0] && stack[0].name !== 'home') { go('home', null, { root: true }); return true; }
    return false;
  }
  window.onBack = back;
  function render() {
    var top = stack[stack.length - 1];
    view.innerHTML = '';
    view.scrollTop = 0;
    $('#backBtn').style.visibility = stack.length > 1 ? 'visible' : 'hidden';
    var tab = { home: 'home', levels: 'levels', level: 'levels', translator: 'translator', phrases: 'phrases', settings: 'settings' }[stack[0].name];
    $$('#tabs button').forEach(function (b) { b.classList.toggle('on', b.dataset.tab === tab); });
    document.body.classList.toggle('translating', top.name === 'translator');
    SCREENS[top.name](top.arg);
  }
  function setTitle(t) { $('#title').textContent = t; }
  function html(s) { view.insertAdjacentHTML('beforeend', s); }
  function on(sel, ev, fn) { $$(sel, view).forEach(function (el) { el.addEventListener(ev, function (e) { fn(e, el); }); }); }
  $('#backBtn').addEventListener('click', back);
  $$('#tabs button').forEach(function (b) { b.addEventListener('click', function () { go(b.dataset.tab, null, { root: true }); }); });

  // ---------------- Inicio ----------------
  SCREENS.home = function () {
    if (!S.onboarded) return go('welcome', null, { replace: true });
    setTitle('Sawadee 🇹🇭');
    var d = daysToTrip(), st = streak(), rec = S.days[dayKey()];
    var dailyDone = rec && rec.daily != null;
    var cur = Math.min(S.unlocked, LEVELS.length);
    var L = LEVELS[cur - 1];
    var allPassed = corePassed() >= LEVELS.length;
    var heroTxt = d > 0 ? '<div class="big">' + d + '</div><small>días para Tailandia 🇹🇭 (16 nov)</small>'
      : '<div class="big">🇹🇭</div><small>¡Ya estás en Tailandia! Usa el traductor y las frases rápidas.</small>';
    var dots = ''; for (var i = 6; i >= 0; i--) { var k = addDays(-i); dots += '<i class="' + (S.days[k] && S.days[k].daily != null ? 'on' : '') + '"></i>'; }
    var pace = '';
    if (d > 0 && !allPassed) {
      var left = LEVELS.length - corePassed();
      pace = '<div class="muted" style="margin-top:8px;font-size:14px">Te quedan ' + left + ' niveles: ' +
        (d >= left ? 'aprueba uno cada ' + Math.max(1, Math.floor(d / left)) + ' días y llegas sobrado.' : 'ritmo intensivo, más de un nivel al día.') + '</div>';
    }
    html('<div class="card hero"><div class="row"><div class="grow">' + heroTxt + '</div>' +
      '<div class="center"><div class="big" style="font-size:34px">🔥' + st + '</div><small>días seguidos</small></div></div>' +
      '<div class="streak">' + dots + '</div></div>');
    if (Speech.native && !Speech.thaiVoiceOk()) {
      html('<div class="card"><h3>🔈 Falta la voz tailandesa</h3><div class="muted">Para oír la pronunciación instala la voz tailandesa de Google (es gratis).</div><button class="btn" id="instVoice">Instalar voz tailandesa</button></div>');
      on('#instVoice', 'click', function () { window.Android.installThaiVoice(); });
    }
    var ios = /iPhone|iPad|iPod/.test(navigator.userAgent);
    var standalone = window.navigator.standalone || (window.matchMedia && matchMedia('(display-mode: standalone)').matches);
    if (ios && !standalone && !Speech.native) {
      html('<div class="tip">📲 Instálala en el iPhone: pulsa <b>Compartir</b> (el cuadrado con la flecha) y luego <b>Añadir a pantalla de inicio</b>.</div>');
    }
    html('<h2>Plan de hoy</h2>');
    html('<div class="card"><div class="row"><div class="grow"><h3>' + (dailyDone ? '✅' : '🎯') + ' Prueba diaria</h3>' +
      '<div class="muted">' + (dailyDone ? 'Hecha hoy: ' + rec.daily + '%. Puedes repetirla.' : '12 preguntas de escuchar y hablar, con repaso de lo que fallas.') + '</div></div></div>' +
      '<button class="btn ' + (dailyDone ? 'alt' : 'gold') + '" id="daily">' + (dailyDone ? 'Repetir prueba' : 'Empezar prueba diaria') + '</button></div>');
    if (!allPassed) {
      html('<div class="card"><div class="level"><div class="ico">' + L.icon + '</div><div class="grow"><h3>Nivel ' + L.id + ': ' + L.title + '</h3>' +
        '<div class="bar"><i style="width:' + levelMastery(L.id) + '%"></i></div><div class="muted" style="font-size:13px;margin-top:4px">' +
        levelSeen(L.id) + '/' + L.items.length + ' frases vistas · dominio ' + levelMastery(L.id) + '%</div></div></div>' +
        '<div class="grid2"><button class="btn alt" id="study">📖 Estudiar</button><button class="btn" id="exam">📝 Examen</button></div></div>');
      on('#study', 'click', function () { go('study', { lvl: L.id }); });
      on('#exam', 'click', function () { startExam(L.id); });
    } else {
      html('<div class="card center"><div class="result-emoji">🏆</div><h3>¡Has aprobado los 10 niveles!</h3><div class="muted">Sigue con la prueba diaria para no olvidar nada.</div></div>');
    }
    if (TOPICS.length) {
      html('<div class="card"><div class="row"><div class="grow"><h3>🆕 Temas libres</h3><div class="muted">' + TOPICS.length + ' temas siempre abiertos: ' +
        TOPICS.map(function (T) { return T.icon; }).join(' ') + '</div></div></div><button class="btn alt" id="topics">Ver temas</button></div>');
      on('#topics', 'click', function () {
        go('levels', null, { root: true });
        setTimeout(function () { var h = document.getElementById('topicsH'); if (h) h.scrollIntoView({ behavior: 'smooth' }); }, 50);
      });
    }
    html('<div class="grid2">' +
      '<button class="tile" id="tTrans"><span>🗣️</span>Traductor por voz<small>Español ⇄ Tailandés</small></button>' +
      '<button class="tile" id="tPhr"><span>⚡</span>Frases rápidas<small>Funcionan sin internet</small></button>' +
      '</div>');
    on('#daily', 'click', startDaily);
    on('#tTrans', 'click', function () { go('translator', null, { root: true }); });
    on('#tPhr', 'click', function () { go('phrases', null, { root: true }); });
  };

  SCREENS.welcome = function () {
    setTitle('Bienvenido');
    html('<div class="card hero center"><div style="font-size:60px">🇪🇸 ⇄ 🇹🇭</div><h2>สวัสดีครับ</h2><div>Curso intensivo de tailandés para tu viaje</div></div>' +
      '<div class="card"><h3>¿Cómo quieres hablar?</h3><div class="muted" style="margin-bottom:8px">En tailandés cambia la forma de ser educado según quien habla.</div>' +
      '<div class="seg" id="g"><button data-g="m">Hombre (khráp)</button><button data-g="f">Mujer (khâ)</button></div></div>' +
      '<div class="card"><h3>¿Cómo funciona?</h3><div class="muted">1. Un test rápido detecta tu nivel.<br>2. Cada día haces una prueba de escuchar y hablar.<br>3. Estudias el nivel y, si apruebas su examen con un 80%, se abre el siguiente.<br>4. El traductor por voz te sirve durante el viaje.</div></div>' +
      '<button class="btn gold" id="place">Hacer test de nivel (3 min)</button><button class="btn alt" id="zero">Empiezo desde cero</button>');
    function paint() { $$('#g button', view).forEach(function (b) { b.classList.toggle('on', b.dataset.g === S.gender); }); }
    paint();
    on('#g button', 'click', function (e, b) { S.gender = b.dataset.g; save(); paint(); sayTh(S.gender === 'm' ? 'สวัสดีครับ' : 'สวัสดีค่ะ'); });
    on('#place', 'click', function () { S.onboarded = true; save(); startPlacement(); });
    on('#zero', 'click', function () { S.onboarded = true; save(); go('home', null, { root: true }); });
  };

  // ---------------- Niveles ----------------
  SCREENS.levels = function () {
    setTitle('Niveles');
    html('<div class="muted" style="margin-bottom:10px">Aprueba el examen de cada nivel (80%) para desbloquear el siguiente.</div>');
    LEVELS.forEach(function (L) {
      var locked = L.id > S.unlocked, passed = !!S.passed[L.id];
      var badge = passed ? '<span class="badge ok">Aprobado</span>' : locked ? '<span class="badge">🔒 Bloqueado</span>' : '<span class="badge cur">En curso</span>';
      html('<div class="card level ' + (locked ? 'locked' : '') + '" data-l="' + L.id + '"><div class="ico">' + L.icon + '</div><div class="grow">' +
        '<div class="row"><h3 class="grow">' + L.id + '. ' + L.title + '</h3>' + badge + '</div>' +
        '<div class="bar"><i style="width:' + levelMastery(L.id) + '%"></i></div></div></div>');
    });
    if (TOPICS.length) {
      html('<h2 id="topicsH" style="margin-top:18px">Temas libres</h2><div class="muted" style="margin-bottom:10px">Siempre abiertos: estudia el que quieras, cuando quieras.</div>');
      TOPICS.forEach(function (T) {
        var badge = S.passed[T.id] ? '<span class="badge ok">Aprobado</span>' : '<span class="badge cur">Nuevo</span>';
        if (!S.passed[T.id] && levelSeen(T.id)) badge = '<span class="badge cur">' + levelSeen(T.id) + '/' + T.items.length + '</span>';
        html('<div class="card level" data-l="' + T.id + '"><div class="ico">' + T.icon + '</div><div class="grow">' +
          '<div class="row"><h3 class="grow">' + T.title + '</h3>' + badge + '</div>' +
          '<div class="bar"><i style="width:' + levelMastery(T.id) + '%"></i></div></div></div>');
      });
    }
    html('<button class="btn alt" id="replace">Repetir test de nivel</button>');
    on('.level', 'click', function (e, el) {
      var id = +el.dataset.l;
      if (!isTopic(id) && id > S.unlocked) return toast('Aprueba el examen del nivel ' + (id - 1) + ' para desbloquearlo');
      go('level', id);
    });
    on('#replace', 'click', startPlacement);
  };

  SCREENS.level = function (id) {
    var L = lvlObj(id);
    setTitle(isTopic(id) ? 'Tema' : 'Nivel ' + id);
    html('<div class="card"><div class="level"><div class="ico">' + L.icon + '</div><div class="grow"><h2 style="margin:0">' + L.title + '</h2>' +
      '<div class="muted">' + L.items.length + ' frases · dominio ' + levelMastery(id) + '%' + (S.passed[id] ? ' · ✅ aprobado' : '') + '</div></div></div></div>' +
      '<div class="tip">💡 ' + esc(L.tip) + '</div>' +
      '<div class="grid2"><button class="btn alt" id="study">📖 Estudiar</button><button class="btn" id="exam">📝 Examen</button></div>' +
      '<button class="btn alt" id="practice">🎧 Práctica rápida (sin nota)</button><h2 style="margin-top:18px">Frases</h2><div class="card" id="list"></div>');
    var list = $('#list');
    levelItems(id).forEach(function (it) {
      var r = R(it), p = prog(it);
      list.insertAdjacentHTML('beforeend', '<div class="phrase"><button data-id="' + it.id + '">🔊</button><div class="grow"><div class="t">' + esc(r.th) +
        '</div><div class="r">' + esc(r.ro) + '</div><div class="e">' + esc(r.es) + '</div></div><span>' + (p ? (p.box >= 3 ? '🟢' : p.box >= 1 ? '🟡' : '🔴') : '⚪') + '</span></div>');
    });
    on('#list button', 'click', function (e, b) { sayTh(R(byId(b.dataset.id)).th); });
    on('#study', 'click', function () { go('study', { lvl: id }); });
    on('#exam', 'click', function () { startExam(id); });
    on('#practice', 'click', function () {
      runQuiz({ title: 'Práctica · ' + (isTopic(id) ? L.title : 'Nivel ' + id), questions: buildQuestions(sample(levelItems(id), 8), ['listen', 'speak', 'meaning', 'repeat']), kind: 'practice' });
    });
  };
  function byId(id) { for (var i = 0; i < ALL.length; i++) if (ALL[i].id === id) return ALL[i]; }

  // ---------------- Estudiar (tarjetas) ----------------
  SCREENS.study = function (a) {
    var its = levelItems(a.lvl);
    if (a.i == null) {
      // empieza por la primera frase que no has visto aún
      a.i = 0; for (var k = 0; k < its.length; k++) { if (!prog(its[k])) { a.i = k; break; } }
    }
    var it = its[a.i], r = R(it);
    setTitle(isTopic(a.lvl) ? 'Estudiar · Tema' : 'Estudiar · Nivel ' + a.lvl);
    html('<div class="progress-q"><span>Frase ' + (a.i + 1) + ' de ' + its.length + '</span><span>' + lvlObj(a.lvl).title + '</span></div>' +
      '<div class="bar" style="margin-bottom:12px"><i style="width:' + Math.round(100 * (a.i + 1) / its.length) + '%"></i></div>' +
      '<div class="card center"><div class="th">' + esc(r.th) + '</div><div class="ro">' + esc(r.ro) + '</div><div class="es">' + esc(r.es) + '</div>' +
      '<div class="row" style="justify-content:center;margin-top:14px;gap:10px"><button class="btn small" id="play">🔊 Escuchar</button><button class="btn small alt" id="slow">🐢 Lento</button></div></div>' +
      '<div class="card center"><div class="muted">Ahora dilo tú:</div><button class="mic" id="mic">🎤</button><div class="heard" id="heard"></div><div class="score" id="score"></div></div>' +
      '<div class="grid2"><button class="btn alt" id="prev" ' + (a.i ? '' : 'disabled') + '>‹ Anterior</button><button class="btn" id="next">' + (a.i === its.length - 1 ? 'Terminar ✓' : 'Siguiente ›') + '</button></div>');
    if (S.autoplay) setTimeout(function () { sayTh(r.th); }, 250);
    on('#play', 'click', function () { sayTh(r.th); });
    on('#slow', 'click', function () { sayTh(r.th, 0.55); });
    on('#mic', 'click', function () { listenAndScore(it, $('#mic'), $('#heard'), $('#score'), function (ok) { if (ok) { S.xp += 2; save(); } }); });
    on('#prev', 'click', function () { a.i--; render(); });
    on('#next', 'click', function () {
      seen(it); var rec = dayRec(); rec.studied++; S.xp += 1; save();
      if (a.i < its.length - 1) { a.i++; render(); }
      else go('studyDone', a.lvl, { replace: true });
    });
  };
  SCREENS.studyDone = function (lvl) {
    setTitle('¡Bien hecho!');
    html('<div class="card center"><div class="result-emoji">🎉</div><h2>Has repasado todo el nivel ' + lvl + '</h2><div class="muted">Cuando te sientas seguro, haz el examen. Necesitas un 80% para desbloquear el siguiente nivel.</div>' +
      '<button class="btn gold" id="exam">📝 Hacer examen ahora</button><button class="btn alt" id="again">Repasar otra vez</button><button class="btn alt" id="home">Volver al inicio</button></div>');
    on('#exam', 'click', function () { startExam(lvl); });
    on('#again', 'click', function () { go('study', { lvl: lvl, i: 0 }, { replace: true }); });
    on('#home', 'click', function () { go('home', null, { root: true }); });
  };

  function listenAndScore(it, micEl, heardEl, scoreEl, cb) {
    if (micEl.classList.contains('on')) { Speech.stopListening(); return; }
    micEl.classList.add('on'); heardEl.textContent = 'Escuchando…'; scoreEl.textContent = ''; scoreEl.className = 'score';
    Speech.listen('th-TH', {
      onPartial: function (t) { heardEl.textContent = t; },
      onResult: function (list) {
        micEl.classList.remove('on');
        var s = similarity(list, it), pct = Math.round(s.score * 100);
        heardEl.textContent = '«' + (s.text || '…') + '»';
        var ok = s.score >= 0.55;
        scoreEl.textContent = s.score >= 0.85 ? '¡Perfecto! ' + pct + '% 🎯' : ok ? '¡Bien! ' + pct + '% 👍' : 'Casi… ' + pct + '%. Escucha y repite.';
        scoreEl.className = 'score ' + (s.score >= 0.85 ? 'ok' : ok ? 'mid' : 'bad');
        cb(ok, s);
      },
      onError: function (code) {
        micEl.classList.remove('on'); heardEl.textContent = ''; scoreEl.textContent = speechErr(code); scoreEl.className = 'score bad';
        cb(null);
      }
    });
  }

  // ---------------- Motor de preguntas ----------------
  function distractors(it, n, field) {
    var pool = levelItems(it.lvl).filter(function (x) { return x.id !== it.id; });
    if (pool.length < n) pool = pool.concat(ALL.filter(function (x) { return x.lvl !== it.lvl; }));
    var used = {}; used[R(it)[field]] = 1;
    return shuffle(pool).filter(function (x) { var v = R(x)[field]; if (used[v]) return false; used[v] = 1; return true; }).slice(0, n);
  }
  function buildQuestions(items, types) {
    return items.map(function (it, i) { return { it: it, type: types[i % types.length] }; });
  }

  function runQuiz(cfg) { go('quiz', { cfg: cfg, i: 0, results: [] }); }

  SCREENS.quiz = function (st) {
    var cfg = st.cfg, q = cfg.questions[st.i], it = q.it, r = R(it);
    var total = cfg.questions.length;
    var okCount = st.results.filter(function (x) { return x.ok; }).length;
    setTitle(cfg.title);
    html('<div class="progress-q"><span>Pregunta ' + (st.i + 1) + ' de ' + total + '</span><span>✅ ' + okCount + '</span></div>' +
      '<div class="bar" style="margin-bottom:12px"><i style="width:' + Math.round(100 * st.i / total) + '%"></i></div>');
    var answered = false;
    function finish(ok, extra) {
      if (answered) return; answered = true;
      st.results.push({ it: it, ok: ok, type: q.type });
      if (cfg.kind !== 'placement') mark(it, ok);
      if (ok) S.xp += cfg.kind === 'exam' ? 15 : 10;
      save();
      var fb = '<div class="card center"><div class="score ' + (ok ? 'ok' : 'bad') + '">' + (ok ? '¡Correcto! 🎉' : 'No era esa 😅') + '</div>' +
        (extra || '') + '<div class="th" style="font-size:26px;margin-top:8px">' + esc(r.th) + '</div><div class="ro">' + esc(r.ro) + '</div><div class="es" style="font-size:17px">' + esc(r.es) + '</div>' +
        '<button class="btn" id="cont">' + (st.i + 1 < total ? 'Siguiente ›' : 'Ver resultado') + '</button></div>';
      html(fb);
      if (!ok || q.type === 'meaning') sayTh(r.th);
      on('#cont', 'click', function () {
        if (st.i + 1 < total) { st.i++; render(); }
        else go('result', { cfg: cfg, results: st.results }, { replace: true });
      });
      var c = $('#cont'); if (c) c.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    function options(list, isThai) {
      html('<div class="opts" id="opts">' + list.map(function (x, i) {
        var rx = R(x);
        return '<button class="opt" data-i="' + i + '">' + (isThai ? '<div style="font-size:22px;font-weight:700">' + esc(rx.th) + '</div><div class="ro">' + esc(rx.ro) + '</div>' : esc(rx.es)) + '</button>';
      }).join('') + '</div>');
      on('#opts .opt', 'click', function (e, b) {
        if (answered) return;
        var chosen = list[+b.dataset.i];
        $$('#opts .opt', view).forEach(function (o) { if (list[+o.dataset.i].id === it.id) o.classList.add('right'); });
        if (chosen.id !== it.id) b.classList.add('wrong');
        finish(chosen.id === it.id);
      });
    }
    if (q.type === 'listen') {
      html('<div class="card center"><div class="muted">Escucha y elige qué significa</div><button class="playbig" id="pl">🔊</button><button class="btn small alt" id="sl">🐢 Más lento</button></div>');
      on('#pl', 'click', function () { sayTh(r.th); }); on('#sl', 'click', function () { sayTh(r.th, 0.55); });
      setTimeout(function () { sayTh(r.th); }, 300);
      options(shuffle([it].concat(distractors(it, 3, 'es'))), false);
    } else if (q.type === 'th2es') {
      html('<div class="card center"><div class="muted">¿Qué significa?</div><div class="th">' + esc(r.th) + '</div><div class="ro">' + esc(r.ro) + '</div><button class="btn small alt" id="pl" style="margin-top:10px">🔊 Escuchar</button></div>');
      on('#pl', 'click', function () { sayTh(r.th); });
      options(shuffle([it].concat(distractors(it, 3, 'es'))), false);
    } else if (q.type === 'meaning') {
      html('<div class="card center"><div class="muted">¿Cómo se dice?</div><div class="es" style="font-size:24px;font-weight:700">' + esc(r.es) + '</div></div>');
      options(shuffle([it].concat(distractors(it, 3, 'th'))), true);
    } else { // speak o repeat
      var isRepeat = q.type === 'repeat';
      html('<div class="card center">' + (isRepeat
        ? '<div class="muted">Escucha y repite en voz alta</div><button class="playbig" id="pl">🔊</button>'
        : '<div class="muted">Dilo en tailandés</div><div class="es" style="font-size:24px;font-weight:700">' + esc(r.es) + '</div><button class="btn small alt" id="hint" style="margin-top:10px">💡 Pista</button><div id="hintbox"></div>') +
        '<button class="mic" id="mic">🎤</button><div class="heard" id="heard">Pulsa el micrófono y habla</div><div class="score" id="score"></div>' +
        '<div id="fallback"></div></div>');
      var hinted = false;
      if (isRepeat) { on('#pl', 'click', function () { sayTh(r.th); }); setTimeout(function () { sayTh(r.th); }, 300); }
      on('#hint', 'click', function () { hinted = true; $('#hintbox').innerHTML = '<div class="ro">' + esc(r.ro) + '</div>'; sayTh(r.th); });
      var tries = 0;
      on('#mic', 'click', function () {
        if (answered) return;
        listenAndScore(it, $('#mic'), $('#heard'), $('#score'), function (ok, s) {
          if (ok === null) { showSelfEval(); return; }
          tries++;
          if (ok) finish(true, '<div class="muted">Oí: «' + esc(s.text) + '» · ' + Math.round(s.score * 100) + '%' + (hinted ? ' (con pista)' : '') + '</div>');
          else if (tries >= 2) finish(false, '<div class="muted">Oí: «' + esc(s.text) + '» · ' + Math.round(s.score * 100) + '%</div>');
          else { $('#score').textContent += ' Te queda 1 intento.'; sayTh(r.th); }
        });
      });
      function showSelfEval() {
        var fbx = $('#fallback'); if (!fbx || fbx.innerHTML) return;
        fbx.innerHTML = '<div class="muted" style="margin-top:8px">¿Sin micro? Dilo en voz alta, escucha la respuesta y evalúate:</div>' +
          '<button class="btn small alt" id="reveal" style="margin-top:6px">Ver respuesta</button>';
        on('#reveal', 'click', function () {
          fbx.innerHTML = '<div class="th" style="font-size:26px">' + esc(r.th) + '</div><div class="ro">' + esc(r.ro) + '</div>' +
            '<div class="grid2"><button class="btn ok" id="selfok">Lo dije bien</button><button class="btn bad" id="selfko">Fallé</button></div>';
          sayTh(r.th);
          on('#selfok', 'click', function () { fbx.innerHTML = ''; finish(true); });
          on('#selfko', 'click', function () { fbx.innerHTML = ''; finish(false); });
        });
      }
      html('<button class="btn alt" id="skip" style="margin-top:4px">No puedo hablar ahora</button>');
      on('#skip', 'click', function () { $('#skip').remove(); showSelfEval(); });
    }
  };

  SCREENS.result = function (a) {
    var cfg = a.cfg, res = a.results, ok = res.filter(function (x) { return x.ok; }).length;
    var pct = Math.round(100 * ok / res.length);
    setTitle('Resultado');
    if (cfg.onFinish) { var custom = cfg.onFinish(pct, res); if (custom) return; }
    var passed = pct >= 80;
    var emoji = pct >= 90 ? '🏆' : pct >= 80 ? '🎉' : pct >= 50 ? '💪' : '📚';
    var msg = '';
    if (cfg.kind === 'exam') {
      if (passed && isTopic(cfg.lvl)) {
        S.passed[cfg.lvl] = true; S.xp += 50; save();
        msg = '¡Tema aprobado! Sus frases entran en tu repaso diario.';
      } else if (passed) {
        S.passed[cfg.lvl] = true; S.unlocked = Math.max(S.unlocked, Math.min(cfg.lvl + 1, LEVELS.length)); S.xp += 50; save();
        msg = cfg.lvl < LEVELS.length ? '¡Aprobado! Has desbloqueado el nivel ' + (cfg.lvl + 1) + ': ' + LEVELS[cfg.lvl].title + '.' : '¡Has aprobado el último nivel! 🇹🇭';
      } else msg = 'Necesitas un 80% para aprobar. Repasa las frases que fallaste y vuelve a intentarlo.';
    } else if (cfg.kind === 'daily') {
      var rec = dayRec(); rec.daily = Math.max(rec.daily || 0, pct); save();
      var sk = streak(); msg = 'Prueba diaria completada. Llevas ' + sk + (sk === 1 ? ' día seguido' : ' días seguidos') + ' 🔥';
    } else msg = 'Práctica terminada.';
    var wrong = res.filter(function (x) { return !x.ok; });
    html('<div class="card center"><div class="result-emoji">' + emoji + '</div><h2>' + ok + ' de ' + res.length + ' (' + pct + '%)</h2><div>' + msg + '</div></div>');
    if (wrong.length) {
      html('<h2>Para repasar</h2><div class="card" id="wr"></div>');
      wrong.forEach(function (x) {
        var r = R(x.it);
        $('#wr').insertAdjacentHTML('beforeend', '<div class="phrase"><button data-id="' + x.it.id + '">🔊</button><div class="grow"><div class="t">' + esc(r.th) + '</div><div class="r">' + esc(r.ro) + '</div><div class="e">' + esc(r.es) + '</div></div></div>');
      });
      on('#wr button', 'click', function (e, b) { sayTh(R(byId(b.dataset.id)).th); });
    }
    if (cfg.kind === 'exam' && passed && cfg.lvl < LEVELS.length && !isTopic(cfg.lvl)) {
      html('<button class="btn gold" id="nextl">Ir al nivel ' + (cfg.lvl + 1) + ' ›</button>');
      on('#nextl', 'click', function () { go('level', cfg.lvl + 1, { root: true }); stack.unshift({ name: 'levels' }); render(); });
    }
    if (cfg.kind === 'exam' && !passed) {
      html('<button class="btn" id="retry">Repetir examen</button>');
      on('#retry', 'click', function () { startExam(cfg.lvl, true); });
    }
    html('<button class="btn alt" id="home">Volver al inicio</button>');
    on('#home', 'click', function () { go('home', null, { root: true }); });
  };

  function startExam(lvl, replace) {
    var its = sample(levelItems(lvl), 12);
    var types = ['listen', 'speak', 'meaning', 'repeat', 'listen', 'speak', 'th2es', 'repeat', 'meaning', 'speak', 'listen', 'repeat'];
    var cfg = { title: 'Examen · ' + (isTopic(lvl) ? lvlObj(lvl).title : 'Nivel ' + lvl), kind: 'exam', lvl: lvl, questions: buildQuestions(its, shuffle(types)) };
    if (replace) go('quiz', { cfg: cfg, i: 0, results: [] }, { replace: true }); else runQuiz(cfg);
  }

  function startDaily() {
    var tk = dayKey();
    var unlocked = ALL.filter(function (x) { return x.lvl <= S.unlocked || (isTopic(x.lvl) && prog(x)); });
    var due = shuffle(unlocked.filter(function (x) { var p = prog(x); return p && p.due <= tk; }))
      .sort(function (a, b) { return prog(a).box - prog(b).box; });
    var fresh = shuffle(levelItems(Math.min(S.unlocked, LEVELS.length)).filter(function (x) { return !prog(x); }));
    var seenOthers = shuffle(unlocked.filter(function (x) { return prog(x) && due.indexOf(x) < 0; }));
    var picked = due.slice(0, 8);
    picked = picked.concat(fresh.slice(0, 12 - picked.length));
    picked = picked.concat(seenOthers.slice(0, 12 - picked.length));
    if (picked.length < 12) picked = picked.concat(shuffle(unlocked.filter(function (x) { return picked.indexOf(x) < 0; })).slice(0, 12 - picked.length));
    var types = ['listen', 'speak', 'repeat', 'meaning', 'listen', 'speak', 'th2es', 'repeat', 'listen', 'speak', 'meaning', 'repeat'];
    var qs = buildQuestions(shuffle(picked), types);
    // Las frases nuevas no se piden de memoria: primero se escuchan y se repiten
    qs.forEach(function (q) { if (!prog(q.it) && q.type === 'speak') q.type = 'repeat'; if (!prog(q.it) && q.type === 'meaning') q.type = 'listen'; });
    runQuiz({ title: 'Prueba diaria', kind: 'daily', questions: qs });
  }

  // Test de nivel: 3 preguntas por nivel, sube mientras aciertes 2 de 3
  function startPlacement() {
    var lvl = 1, passedUpTo = 0;
    function block() {
      var its = sample(levelItems(lvl), 3);
      var cfg = {
        title: 'Test de nivel · ' + lvl + '/' + LEVELS.length, kind: 'placement',
        questions: buildQuestions(its, shuffle(['listen', 'th2es', 'meaning'])),
        onFinish: function (pct, res) {
          var ok = res.filter(function (x) { return x.ok; }).length;
          if (ok >= 2) { passedUpTo = lvl; if (lvl < LEVELS.length) { lvl++; setTimeout(block, 0); return true; } }
          finishPlacement(); return true;
        }
      };
      go('quiz', { cfg: cfg, i: 0, results: [] }, { replace: stack.length && (stack[stack.length - 1].name === 'quiz' || stack[stack.length - 1].name === 'result') });
    }
    function finishPlacement() {
      for (var l = 1; l <= passedUpTo; l++) {
        S.passed[l] = true;
        levelItems(l).forEach(function (it) { if (!S.items[it.id]) S.items[it.id] = { box: 2, due: addDays(Math.floor(Math.random() * 4)), ok: 1, ko: 0 }; });
      }
      S.unlocked = Math.max(S.unlocked, Math.min(passedUpTo + 1, LEVELS.length)); save();
      go('placementDone', passedUpTo, { replace: true });
    }
    block();
  }
  SCREENS.placementDone = function (n) {
    setTitle('Tu nivel');
    var start = Math.min(n + 1, LEVELS.length);
    html('<div class="card center"><div class="result-emoji">' + (n ? '🚀' : '🌱') + '</div><h2>' + (n ? 'Has superado ' + n + ' nivel' + (n > 1 ? 'es' : '') : 'Empezamos desde el principio') + '</h2>' +
      '<div class="muted">Empiezas en el nivel ' + start + ': ' + LEVELS[start - 1].title + '. Los niveles superados entran en tu repaso diario.</div>' +
      '<button class="btn gold" id="go">Empezar a estudiar</button><button class="btn alt" id="home">Ir al inicio</button></div>');
    on('#go', 'click', function () { go('study', { lvl: start }, { root: true }); stack.unshift({ name: 'home' }); render(); });
    on('#home', 'click', function () { go('home', null, { root: true }); });
  };

  // ---------------- Traductor ----------------
  // ---------------- Traducción ----------------
  // Google (gratuito, sin clave) bloquea con error 429 si se usa mucho; entonces pasamos a MyMemory.
  var httpCbs = {}, httpN = 0;
  window.onHttp = function (id, code, body) { var cb = httpCbs[id]; if (cb) { delete httpCbs[id]; cb(code, body); } };
  function getJson(url) {
    if (window.Android && Android.httpGet) {
      return new Promise(function (resolve, reject) {
        var id = 'h' + (++httpN);
        var timer = setTimeout(function () { delete httpCbs[id]; reject(new Error('timeout')); }, 15000);
        httpCbs[id] = function (code, body) {
          clearTimeout(timer);
          if (code < 200 || code >= 300) return reject(new Error('http ' + code));
          try { resolve(JSON.parse(body)); } catch (e) { reject(e); }
        };
        Android.httpGet(url, id);
      });
    }
    var ctrl = window.AbortController ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 12000);
    return fetch(url, ctrl ? { signal: ctrl.signal } : {}).then(function (r) {
      clearTimeout(timer); if (!r.ok) throw new Error('http ' + r.status); return r.json();
    }, function (e) { clearTimeout(timer); throw e; });
  }
  function decodeEntities(t) { var ta = document.createElement('textarea'); ta.innerHTML = t; return ta.value; }
  var googleDownUntil = 0;
  function viaGoogle(text, from, to) {
    if (Date.now() < googleDownUntil) return Promise.reject(new Error('google-down'));
    return getJson('https://translate.googleapis.com/translate_a/single?client=gtx&sl=' + from + '&tl=' + to + '&dt=t&q=' + encodeURIComponent(text))
      .then(function (d) {
        var out = (d && d[0] || []).map(function (x) { return x[0] || ''; }).join('');
        if (!out) throw new Error('empty');
        return out;
      }, function (e) { googleDownUntil = Date.now() + 10 * 60000; throw e; });
  }
  function viaMyMemory(text, from, to) {
    return getJson('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=' + from + '|' + to)
      .then(function (d) {
        var out = d && d.responseData && d.responseData.translatedText;
        if (!out || (d.responseStatus && +d.responseStatus !== 200) || d.quotaFinished) throw new Error('mymemory');
        return decodeEntities(out);
      });
  }
  // Trozos de hasta ~450 caracteres, cortando por frases (MyMemory admite 500 por petición)
  function chunksOf(text) {
    var parts = text.match(/[^.!?。\n]+[.!?。]*\n*|\n+/g) || [text], out = [], cur = '';
    parts.forEach(function (p) {
      if ((cur + p).length > 450 && cur) { out.push(cur); cur = ''; }
      while (p.length > 450) { out.push(p.slice(0, 450)); p = p.slice(450); }
      cur += p;
    });
    if (cur) out.push(cur);
    return out;
  }
  function translateChunk(c, from, to) {
    if (!c.trim()) return Promise.resolve(c);
    var lead = c.match(/^\s*/)[0], tail = c.match(/\s*$/)[0];
    return viaGoogle(c.trim(), from, to).catch(function () { return viaMyMemory(c.trim(), from, to); })
      .then(function (t) { return lead + t + tail; });
  }
  function translate(text, from, to) {
    var chunks = chunksOf(text), out = [];
    return chunks.reduce(function (p, c) {
      return p.then(function () { return translateChunk(c, from, to).then(function (t) { out.push(t); }); });
    }, Promise.resolve()).then(function () {
      return { text: out.join('').trim(), online: true };
    }).catch(function () {
      var off = offlineLookup(text, from);
      if (off) return { text: to === 'th' ? off.th : off.es, ro: to === 'th' ? off.ro : null, online: false };
      throw new Error(navigator.onLine === false ? 'offline' : 'busy');
    });
  }
  function offlineLookup(text, from) {
    var best = null, bestS = 0;
    ALL.forEach(function (it) {
      var r = R(it);
      var a = from === 'th' ? normTh(text) : normEs(text);
      var b = from === 'th' ? normTh(r.th) : normEs(r.es);
      if (!a || !b) return;
      var s = 1 - lev(a, b) / Math.max(a.length, b.length);
      if (from !== 'th') r.es.split('/').forEach(function (part) { var p = normEs(part); if (p) s = Math.max(s, 1 - lev(a, p) / Math.max(a.length, p.length)); });
      if (s > bestS) { bestS = s; best = r; }
    });
    return bestS >= 0.75 ? best : null;
  }

  function copyText(t) {
    if (window.Android && Android.copy && Android.copy(t)) { toast('Copiado 📋'); return; }
    var done = function () { toast('Copiado 📋'); };
    if (navigator.clipboard && window.isSecureContext) { navigator.clipboard.writeText(t).then(done, fallback); return; }
    fallback();
    function fallback() {
      var ta = document.createElement('textarea'); ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); done(); } catch (e) { toast('No se pudo copiar'); } ta.remove();
    }
  }
  function saveTr(m) {
    var th = m.from === 'es' ? m.out : m.src, es_ = m.from === 'es' ? m.src : m.out;
    if (!S.saved.some(function (x) { return x.th === th; })) { S.saved.push({ th: th, es: es_, ro: m.ro || '' }); save(); }
    toast('Guardada en Frases ⭐');
  }
  function bigTr(m) { m.from === 'es' ? showCard(m.out, m.src, m.ro) : showCard(m.src, m.out); }
  function sayTr(m) { if (m.from === 'es') sayTh(m.out, 0.9); else sayEs(m.out); }
  // Traduce, guarda en el historial y devuelve el mensaje
  function runTranslation(text, from) {
    var to = from === 'es' ? 'th' : 'es';
    return translate(text, from, to).then(function (res) {
      var m = { from: from, src: text, out: res.text, ro: res.ro || null, offline: !res.online, t: Date.now() };
      S.history.push(m); if (S.history.length > 100) S.history = S.history.slice(-100); save();
      return m;
    });
  }
  var NO_NET = 'Sin internet solo puedo traducir frases del curso. Mira «Frases», que funciona sin conexión.';
  var BUSY = 'Los servicios de traducción no responden ahora mismo. Espera un minuto y vuelve a intentarlo.';
  function trError(e) { return e && e.message === 'busy' ? BUSY : NO_NET; }

  SCREENS.translator = function () {
    var mode = S.trMode || 'talk';
    setTitle('Traductor');
    html('<div class="seg" id="trmode" style="margin-bottom:12px"><button data-m="talk">🗣️ Conversación</button><button data-m="write">⌨️ Escribir</button></div>');
    $$('#trmode button', view).forEach(function (b) { b.classList.toggle('on', b.dataset.m === mode); });
    on('#trmode button', 'click', function (e, b) { if (b.dataset.m !== mode) { S.trMode = b.dataset.m; save(); render(); } });
    if (mode === 'write') return writeTranslator();

    html('<div class="tip" id="ttip">🇪🇸 Pulsa el botón azul y habla en español: lo traduzco y lo digo en tailandés.<br>🇹🇭 La persona tailandesa pulsa el rojo y habla: verás y oirás el español.<br>⌨️ Para escribir, usa la pestaña «Escribir».</div><div class="chat" id="chat"></div>');
    if (S.history.length) $('#ttip').style.display = 'none';
    var bar = document.createElement('div'); bar.className = 'talkbar';
    bar.innerHTML = '<div class="live" id="live">&nbsp;</div><div class="talkbtns">' +
      '<button class="talk es" id="tes">🎤 Español<small>Yo hablo</small></button>' +
      '<button class="talk th" id="tth">🎤 ภาษาไทย<small>กดแล้วพูดภาษาไทย</small></button></div>';
    view.appendChild(bar);
    var chat = $('#chat');
    S.history.slice(-40).forEach(function (m) { addBubble(m, false); });
    scrollEnd();
    function scrollEnd() { setTimeout(function () { view.scrollTop = view.scrollHeight; }, 30); }
    function addBubble(m, animate) {
      var isMe = m.from === 'es';
      var div = document.createElement('div'); div.className = 'bubble ' + (isMe ? 'me' : 'them');
      div.innerHTML = '<div class="orig">' + (isMe ? '🇪🇸 ' : '🇹🇭 ') + esc(m.src) + '</div><div class="trans">' + (isMe ? '🇹🇭 ' : '🇪🇸 ') + esc(m.out) + '</div>' +
        (m.ro ? '<div class="ro" style="font-size:15px">' + esc(m.ro) + '</div>' : '') + (m.offline ? '<div class="muted" style="font-size:12px">sin conexión · frase del curso</div>' : '') +
        '<div class="acts"><button data-a="say">🔊</button><button data-a="big">🔍 Grande</button><button data-a="copy">📋</button><button data-a="save">⭐</button></div>';
      div.querySelector('[data-a=say]').onclick = function () { sayTr(m); };
      div.querySelector('[data-a=big]').onclick = function () { bigTr(m); };
      div.querySelector('[data-a=copy]').onclick = function () { copyText(m.out); };
      div.querySelector('[data-a=save]').onclick = function () { saveTr(m); };
      chat.appendChild(div);
      if (animate) scrollEnd();
    }
    function doTranslate(text, from) {
      text = (text || '').trim(); if (!text) return;
      $('#live').textContent = 'Traduciendo…';
      runTranslation(text, from).then(function (m) {
        $('#ttip').style.display = 'none';
        addBubble(m, true); $('#live').innerHTML = '&nbsp;';
        if (m.from === 'es' || S.speakOut) sayTr(m);
      }).catch(function (e) { $('#live').textContent = trError(e); });
    }
    function talk(btn, lang, from) {
      if (btn.classList.contains('on')) { Speech.stopListening(); return; }
      $$('.talk').forEach(function (b) { b.classList.remove('on'); });
      btn.classList.add('on');
      $('#live').textContent = from === 'es' ? 'Escuchando en español… habla con calma' : 'กำลังฟัง… (escuchando tailandés)';
      Speech.listen(lang, {
        onPartial: function (t) { $('#live').textContent = t; },
        onResult: function (list) { btn.classList.remove('on'); doTranslate(list[0], from); },
        onError: function (code) {
          btn.classList.remove('on');
          $('#live').textContent = (code === '7' || code === '6') && from === 'th' ? 'ไม่ได้ยิน ลองอีกครั้งนะคะ · No se oyó, prueba otra vez' : (speechErr(code) || ' ');
        }
      });
    }
    $('#tes').onclick = function () { talk(this, 'es-ES', 'es'); };
    $('#tth').onclick = function () { talk(this, 'th-TH', 'th'); };
    if (S.history.length) {
      html('<button class="btn small alt" id="clear" style="margin:0 auto 10px;display:block">Borrar conversación</button>');
      chat.parentNode.insertBefore($('#clear'), chat);
      $('#clear').onclick = function () { ask('¿Borrar toda la conversación del traductor?', 'Borrar', function () { S.history = []; save(); render(); toast('Conversación borrada'); }); };
    }
  };

  function writeTranslator() {
    var from = S.trFrom || 'es';
    var L = { es: { flag: '🇪🇸', name: 'Español', ph: 'Escribe en español lo que quieras decir…', lang: 'es-ES' },
              th: { flag: '🇹🇭', name: 'ไทย (tailandés)', ph: 'พิมพ์ภาษาไทยที่นี่… (escribe en tailandés)', lang: 'th-TH' } };
    html('<div class="card"><div class="langbar"><span class="lang" id="lsrc"></span><button class="swap" id="swap" aria-label="Cambiar idioma">⇄</button><span class="lang" id="ldst"></span></div>' +
      '<textarea id="src" rows="4" autocapitalize="sentences"></textarea>' +
      '<div class="row" style="gap:8px;margin-top:8px"><button class="btn small alt" id="dict">🎤 Dictar</button><button class="btn small alt" id="clr">✕</button><span class="grow"></span><button class="btn small" id="go">Traducir</button></div>' +
      '<div class="muted" id="wlive" style="font-size:14px;margin-top:6px;min-height:18px"></div></div>' +
      '<div id="out"></div>' +
      '<div class="muted" style="font-size:13px;margin-top:6px">💡 Para escribir en tailandés, añade el teclado tailandés en tu móvil (Ajustes › Teclado › Idiomas). El idioma se detecta solo al traducir.</div>');
    var src = $('#src');
    try { src.value = sessionStorage.getItem('sawadee.draft') || ''; } catch (e) { }
    function paintLang() {
      var to = from === 'es' ? 'th' : 'es';
      $('#lsrc').textContent = L[from].flag + ' ' + L[from].name;
      $('#ldst').textContent = L[to].flag + ' ' + L[to].name;
      src.placeholder = L[from].ph;
      src.lang = from;
    }
    function setFrom(f) { from = f; S.trFrom = f; save(); paintLang(); }
    paintLang();
    src.addEventListener('input', function () { try { sessionStorage.setItem('sawadee.draft', src.value); } catch (e) { } });
    $('#swap').onclick = function () {
      var last = S.history[S.history.length - 1];
      setFrom(from === 'es' ? 'th' : 'es');
      // al girar, el último resultado pasa a ser el texto de partida
      if (last && $('#out').innerHTML && last.from !== from) src.value = last.out;
      $('#out').innerHTML = '';
    };
    $('#clr').onclick = function () { src.value = ''; $('#out').innerHTML = ''; try { sessionStorage.removeItem('sawadee.draft'); } catch (e) { } src.focus(); };
    function go() {
      var text = src.value.trim(); if (!text) { src.focus(); return; }
      var th = hasThai(text), latin = /[a-zA-ZáéíóúñÁÉÍÓÚÑ]/.test(text);
      if (th && from === 'es') { setFrom('th'); toast('He detectado tailandés 🇹🇭'); }
      else if (!th && latin && from === 'th') { setFrom('es'); toast('He detectado español 🇪🇸'); }
      src.blur();
      $('#wlive').textContent = 'Traduciendo…';
      runTranslation(text, from).then(function (m) {
        $('#wlive').textContent = '';
        var isTh = m.from === 'es';
        $('#out').innerHTML = '<div class="card result ' + (isTh ? 'to-th' : 'to-es') + '"><div class="muted" style="font-size:13px">' + (isTh ? '🇹🇭 En tailandés' : '🇪🇸 En español') + (m.offline ? ' · sin conexión, frase del curso' : '') + '</div>' +
          '<div class="' + (isTh ? 'th' : 'es') + ' restext">' + esc(m.out) + '</div>' + (m.ro ? '<div class="ro">' + esc(m.ro) + '</div>' : '') +
          '<div class="acts2"><button class="btn small" data-a="say">🔊 Escuchar</button><button class="btn small alt" data-a="big">🔍 Enseñar</button><button class="btn small alt" data-a="copy">📋 Copiar</button><button class="btn small alt" data-a="save">⭐ Guardar</button></div></div>';
        $('#out [data-a=say]').onclick = function () { sayTr(m); };
        $('#out [data-a=big]').onclick = function () { bigTr(m); };
        $('#out [data-a=copy]').onclick = function () { copyText(m.out); };
        $('#out [data-a=save]').onclick = function () { saveTr(m); };
        if (isTh) sayTr(m);
        $('#out').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }).catch(function (e) { $('#wlive').textContent = trError(e); });
    }
    $('#go').onclick = go;
    $('#dict').onclick = function () {
      var b = this;
      if (b.classList.contains('on')) { Speech.stopListening(); return; }
      b.classList.add('on'); b.textContent = '⏹ Parar';
      var base = src.value ? src.value.replace(/\s*$/, ' ') : '';
      $('#wlive').textContent = from === 'es' ? 'Escuchando en español…' : 'กำลังฟัง… (escuchando tailandés)';
      Speech.listen(L[from].lang, {
        onPartial: function (t) { src.value = base + t; },
        onResult: function (list) { b.classList.remove('on'); b.textContent = '🎤 Dictar'; src.value = base + list[0]; $('#wlive').textContent = ''; go(); },
        onError: function (code) { b.classList.remove('on'); b.textContent = '🎤 Dictar'; $('#wlive').textContent = speechErr(code); }
      });
    };
  }

  function showCard(th, es, ro) {
    var d = document.createElement('div'); d.className = 'showcard';
    d.innerHTML = '<div class="inner"><div class="th">' + esc(th) + '</div>' + (ro ? '<div class="ro">' + esc(ro) + '</div>' : '') +
      '<div class="es" style="margin-top:14px">' + esc(es) + '</div></div>' +
      '<div class="row" style="position:absolute;bottom:30px;gap:10px"><button class="btn small" data-a="say">🔊</button><button class="btn small alt" data-a="flip">↻ Girar</button><button class="btn small alt" data-a="x">Cerrar</button></div>';
    d.querySelector('[data-a=say]').onclick = function (e) { e.stopPropagation(); sayTh(th, 0.85); };
    d.querySelector('[data-a=flip]').onclick = function (e) { e.stopPropagation(); d.classList.toggle('flip'); };
    d.querySelector('[data-a=x]').onclick = function () { d.remove(); window.onBack = back; };
    window.onBack = function () { d.remove(); window.onBack = back; return true; };
    document.body.appendChild(d);
  }

  // ---------------- Frases rápidas ----------------
  SCREENS.phrases = function () {
    setTitle('Frases rápidas');
    html('<div class="card"><h3>💱 Conversor</h3><div class="row"><input type="number" id="thb" placeholder="Baht ฿" inputmode="decimal"><span>⇄</span><input type="number" id="eur" placeholder="Euros €" inputmode="decimal"></div>' +
      '<div class="muted" style="font-size:13px;margin-top:6px">1 € = ' + S.eurRate + ' ฿ (cámbialo en Ajustes)</div></div>' +
      '<input type="search" id="q" placeholder="🔍 Buscar frase (español o ไทย)…"><div id="plist" style="margin-top:12px"></div>');
    $('#thb').oninput = function () { $('#eur').value = this.value ? (this.value / S.eurRate).toFixed(2) : ''; };
    $('#eur').oninput = function () { $('#thb').value = this.value ? Math.round(this.value * S.eurRate) : ''; };
    var groups = [];
    if (S.saved.length) groups.push({ title: '⭐ Mis frases guardadas', items: S.saved.map(function (x, i) { return { th: x.th, ro: x.ro, es: x.es, savedIdx: i }; }) });
    EXTRA.forEach(function (g) { groups.push({ title: g.cat, items: g.items.map(function (r) { return { th: r[0], ro: r[1], es: r[2] }; }) }); });
    LEVELS.concat(TOPICS).forEach(function (L) { groups.push({ title: L.icon + ' ' + L.title, items: levelItems(L.id).map(R) }); });
    function paint() {
      var q = $('#q').value.trim(), qn = normEs(q), qt = normTh(q);
      var out = '';
      groups.forEach(function (g, gi) {
        var its = g.items.filter(function (x) { return !q || (hasThai(q) ? normTh(x.th).indexOf(qt) >= 0 : normEs(x.es + ' ' + x.ro).indexOf(qn) >= 0); });
        if (!its.length) return;
        out += '<h3 style="margin:14px 0 6px">' + g.title + '</h3><div class="card">' + its.map(function (x) {
          return '<div class="phrase"><button class="say" data-th="' + esc(x.th) + '">🔊</button><div class="grow big" data-th="' + esc(x.th) + '" data-es="' + esc(x.es) + '" data-ro="' + esc(x.ro || '') + '"><div class="t">' + esc(x.th) + '</div>' +
            (x.ro ? '<div class="r">' + esc(x.ro) + '</div>' : '') + '<div class="e">' + esc(x.es) + '</div></div>' +
            (x.savedIdx != null ? '<button class="del" data-i="' + x.savedIdx + '">🗑️</button>' : '') + '</div>';
        }).join('') + '</div>';
      });
      $('#plist').innerHTML = out || '<div class="muted center">No hay frases con esa búsqueda. Prueba el traductor.</div>';
      $$('#plist .say').forEach(function (b) { b.onclick = function () { sayTh(b.dataset.th); }; });
      $$('#plist .big').forEach(function (b) { b.onclick = function () { showCard(b.dataset.th, b.dataset.es, b.dataset.ro); }; });
      $$('#plist .del').forEach(function (b) { b.onclick = function () { S.saved.splice(+b.dataset.i, 1); save(); render(); }; });
    }
    $('#q').oninput = paint;
    paint();
  };

  // ---------------- Ajustes ----------------
  SCREENS.settings = function () {
    setTitle('Ajustes');
    var voiceOk = Speech.thaiVoiceOk();
    var learned = Object.keys(S.items).length;
    html('<div class="card"><h3>📊 Tu progreso</h3><div class="muted">' + learned + ' de ' + ALL.length + ' frases vistas · ' + corePassed() + ' niveles aprobados · ' + S.xp + ' puntos · racha ' + streak() + ' días</div></div>' +
      '<div class="card"><label class="set" style="margin-top:0">Hablo como</label><div class="seg" id="g"><button data-g="m">Hombre (khráp)</button><button data-g="f">Mujer (khâ)</button></div>' +
      '<label class="set">Velocidad de la voz tailandesa: <span id="rv">' + S.rate + '</span></label><input type="range" id="rate" min="0.5" max="1.2" step="0.05" value="' + S.rate + '" style="width:100%">' +
      '<label class="set"><input type="checkbox" id="auto" ' + (S.autoplay ? 'checked' : '') + '> Reproducir audio automáticamente al estudiar</label>' +
      '<label class="set"><input type="checkbox" id="spk" ' + (S.speakOut ? 'checked' : '') + '> En el traductor, leer en voz alta el español</label>' +
      '<label class="set">Cambio: 1 € = ? ฿</label><input type="number" id="er" value="' + S.eurRate + '" inputmode="decimal"></div>' +
      '<div class="card"><h3>🔈 Voz y micrófono</h3><div class="muted">Voz tailandesa: ' + (voiceOk ? '✅ instalada' : '⚠️ no encontrada') + '</div>' +
      '<button class="btn small" id="test" style="margin-top:8px">Probar voz</button> ' +
      (Speech.native ? '<button class="btn small alt" id="inst" style="margin-top:8px">Instalar voz tailandesa</button> <button class="btn small alt" id="ttsset" style="margin-top:8px">Ajustes de voz</button>' : '') +
      (Speech.native ? '<label class="set">Micrófono</label><div class="seg" id="mm"><button data-m="inline">Integrado</button><button data-m="dialog">Ventana de Google</button></div><div class="muted" style="font-size:13px;margin-top:4px">Si no te entiende bien, prueba «Ventana de Google».</div>' : '') +
      '<div class="muted" style="margin-top:12px">Prueba del micrófono (di algo en tailandés):</div><button class="mic" id="mic" style="width:80px;height:80px;font-size:32px">🎤</button><div class="heard" id="heard"></div></div>' +
      '<div class="card"><h3>💾 Copia de seguridad</h3><div class="muted">Guarda tu progreso en un archivo para no perderlo si cambias de móvil o reinstalas la app.</div>' +
      '<div class="grid2"><button class="btn" id="exp">⬆️ Exportar</button><button class="btn alt" id="imp">⬇️ Importar</button></div>' +
      '<input type="file" id="impfile" accept="application/json,.json,text/plain" style="display:none"></div>' +
      '<div class="card"><button class="btn alt" id="replace" style="margin-top:0">Repetir test de nivel</button><button class="btn bad" id="reset">Borrar todo el progreso</button></div>' +
      '<div class="muted center" style="font-size:12px">Sawadee v1.6 · ' + (Speech.native ? 'Android' : 'Navegador') + '</div>');
    function paint() { $$('#g button', view).forEach(function (b) { b.classList.toggle('on', b.dataset.g === S.gender); }); }
    paint();
    on('#g button', 'click', function (e, b) { S.gender = b.dataset.g; save(); paint(); });
    on('#rate', 'input', function (e, el) { S.rate = +el.value; $('#rv').textContent = S.rate; save(); });
    on('#rate', 'change', function () { sayTh('สวัสดี' + (S.gender === 'm' ? 'ครับ' : 'ค่ะ')); });
    on('#auto', 'change', function (e, el) { S.autoplay = el.checked; save(); });
    on('#spk', 'change', function (e, el) { S.speakOut = el.checked; save(); });
    on('#er', 'change', function (e, el) { var v = parseFloat(el.value); if (v > 0) { S.eurRate = v; save(); } });
    on('#test', 'click', function () { sayTh('ยินดีต้อนรับสู่ประเทศไทย'); });
    on('#inst', 'click', function () { window.Android.installThaiVoice(); });
    on('#ttsset', 'click', function () { window.Android.openTtsSettings(); });
    on('#mic', 'click', function (e, m) {
      if (m.classList.contains('on')) return Speech.stopListening();
      m.classList.add('on'); $('#heard').textContent = 'Escuchando…';
      Speech.listen('th-TH', {
        onPartial: function (t) { $('#heard').textContent = t; },
        onResult: function (l) { m.classList.remove('on'); $('#heard').textContent = l[0] ? '«' + l[0] + '» ✅' : '…'; },
        onError: function (c) { m.classList.remove('on'); $('#heard').textContent = speechErr(c); }
      });
    });
    function paintMm() { $$('#mm button', view).forEach(function (b) { b.classList.toggle('on', b.dataset.m === (S.micMode === 'dialog' ? 'dialog' : 'inline')); }); }
    paintMm();
    on('#mm button', 'click', function (e, b) { S.micMode = b.dataset.m; save(); paintMm(); });
    on('#exp', 'click', exportProgress);
    on('#imp', 'click', function () { if (window.Android && Android.importProgress) Android.importProgress(); else $('#impfile').click(); });
    on('#impfile', 'change', function (e, el) {
      var f = el.files && el.files[0]; if (!f) return;
      var r = new FileReader(); r.onload = function () { window.onImportData(r.result); }; r.readAsText(f); el.value = '';
    });
    on('#replace', 'click', startPlacement);
    on('#reset', 'click', function () {
      ask('¿Seguro? Se borrará todo tu progreso. Si quieres conservarlo, expórtalo antes.', 'Borrar todo', function () { var g = S.gender; S = Object.assign({}, DEFAULTS, { gender: g, history: [], saved: S.saved, items: {}, days: {}, passed: {} }); save(); go('home', null, { root: true }); });
    });
  };

  // ---------------- Exportar / importar progreso ----------------
  function exportProgress() {
    var json = JSON.stringify({ app: 'aprende-tailandes', version: 1, exported: new Date().toISOString(), state: S }, null, 1);
    var name = 'progreso-tailandes-' + dayKey() + '.json';
    if (window.Android && Android.exportProgress) { Android.exportProgress(json, name); return; }
    var file = null;
    try { file = new File([json], name, { type: 'application/json' }); } catch (e) { }
    if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
      navigator.share({ files: [file], title: name }).then(function () { toast('Progreso exportado ✅'); }).catch(function () { });
      return;
    }
    var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([json], { type: 'application/json' })); a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    toast('Progreso exportado ✅');
  }
  window.onExportDone = function (ok, cancelled) { if (ok) toast('Progreso guardado ✅'); else if (!cancelled) toast('No se pudo guardar el archivo'); };
  window.onImportData = function (text) {
    if (text === null) return;
    var data = null;
    try { data = JSON.parse(text); } catch (e) { }
    if (!data || data.app !== 'aprende-tailandes' || !data.state) { toast('Ese archivo no es una copia de Sawadee'); return; }
    var st = data.state, n = Object.keys(st.items || {}).length, lv = Object.keys(st.passed || {}).length;
    ask('Se cargará la copia del ' + String(data.exported || '').slice(0, 10) + ' (' + n + ' frases vistas, ' + lv + ' niveles aprobados) y se reemplazará el progreso actual.', 'Importar', function () {
      S = Object.assign({}, DEFAULTS, st); S.onboarded = true; save();
      go('home', null, { root: true }); toast('Progreso importado ✅');
    });
  };

  updateXp();
  go('home', null, { root: true });
})();
