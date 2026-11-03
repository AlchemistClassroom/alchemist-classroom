/* The Alchemist Classroom — site script v3.0. Content lives in catalog.js. */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (t) { return String(t == null ? "" : t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };

  /* ---- placeholder drawing until the real art is in /images ---- */
  function flaskSVG(color) {
    return '<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false"><rect width="64" height="64" rx="16" fill="#111A2E"/>' +
      '<rect x=".75" y=".75" width="62.5" height="62.5" rx="15.5" fill="none" stroke="' + color + '" stroke-opacity=".55" stroke-width="1.5"/>' +
      '<path d="M26 14h12v13l10 17a4 4 0 0 1-3.5 6h-25A4 4 0 0 1 16 44l10-17z" fill="none" stroke="#F1F5F9" stroke-width="2.4" stroke-linejoin="round"/>' +
      '<path d="M20.4 38h23.2l3.6 6.2a2.4 2.4 0 0 1-2.1 3.6H18.9a2.4 2.4 0 0 1-2.1-3.6z" fill="' + color + '"/>' +
      '<line x1="24" y1="14" x2="40" y2="14" stroke="#F1F5F9" stroke-width="2.4" stroke-linecap="round"/></svg>';
  }
  function plusSVG() {
    return '<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false"><rect x="1" y="1" width="62" height="62" rx="16" fill="none" stroke="#94A3B8" stroke-dasharray="4 5" stroke-width="1.5"/>' +
      '<path d="M32 22v20M22 32h20" stroke="#94A3B8" stroke-width="2.4" stroke-linecap="round"/></svg>';
  }
  function fill(el) {
    var src = el.getAttribute("data-img"), kind = el.getAttribute("data-fallback"), color = el.getAttribute("data-color") || "#2DD4BF";
    if (kind === "flask") el.innerHTML = flaskSVG(color);
    else if (kind === "plus") el.innerHTML = plusSVG();
    if (!src) return;
    var img = new Image();
    img.onload = function () { img.alt = el.getAttribute("data-alt") || ""; el.innerHTML = ""; el.appendChild(img); };
    img.src = src;
  }
  function fillAll(root) { var s = (root || document).querySelectorAll(".slot"); for (var i = 0; i < s.length; i++) fill(s[i]); }
  function slot(cls, src, fb, color, alt) {
    return '<span class="slot ' + cls + '" data-img="' + esc(src || "") + '" data-fallback="' + fb + '" data-color="' + esc(color || "#2DD4BF") + '" data-alt="' + esc(alt || "") + '"></span>';
  }

  /* ---- data helpers ---- */
  function section(id) { for (var i = 0; i < SECTIONS.length; i++) if (SECTIONS[i].id === id) return SECTIONS[i]; }
  function app(id) { for (var i = 0; i < APPS.length; i++) if (APPS[i].id === id) return APPS[i]; }
  function appsIn(id) {
    var sec = section(id);
    return APPS.filter(function (a) { return a.section === id || (a.alsoIn || []).indexOf(id) > -1 || (sec && sec.subjects && a.subjects && a.subjects.length); });
  }
  function appsInSubject(subId) { return APPS.filter(function (a) { return (a.subjects || []).indexOf(subId) > -1; }); }
  var SUBJECT_ICONS = {
    "math": '<path d="M12 20h24M24 12v16M14 36h20M24 33v.01M24 41v.01" stroke-linecap="round"/>',
    "english": '<path d="M14 36l10-24 10 24M18 27h12" stroke-linecap="round" stroke-linejoin="round"/>',
    "science": '<path d="M20 10h8M21 10v10l-8 16a3 3 0 0 0 3 4h16a3 3 0 0 0 3-4l-8-16V10" stroke-linejoin="round"/><path d="M16 31h16"/>',
    "social-studies": '<circle cx="24" cy="24" r="13"/><path d="M11 24h26M24 11c4 4 6 8.5 6 13s-2 9-6 13c-4-4-6-8.5-6-13s2-9 6-13z"/>',
    "reading": '<path d="M24 15c-4-3-9-3-13-2v22c4-1 9-1 13 2 4-3 9-3 13-2V13c-4-1-9-1-13 2zM24 15v22" stroke-linejoin="round"/>'
  };
  function subjectIcon(id, color) {
    return '<svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" fill="none" stroke="' + color + '" stroke-width="2.6">' + (SUBJECT_ICONS[id] || '<rect x="12" y="12" width="24" height="24" rx="4"/>') + '</svg>';
  }
  function buyLink(a) {
    if (a.buyUrl) return { href: a.buyUrl, text: "Buy " + a.name + " — " + a.price, live: true };
    return { href: "mailto:" + STORE.supportEmail + "?subject=" + encodeURIComponent("Email me when " + a.name + " is available"), text: "Email me when it's available", live: false };
  }

  /* ---- top nav + index orbit, built from the catalog ---- */
  var open = SECTIONS.filter(function (s) { return !s.soon; });
  $("#bar-nav").innerHTML = open.map(function (s) { return '<a href="#' + s.id + '">' + esc(s.name) + "</a>"; }).join("") + '<a class="hide-sm" href="#about">About</a>';

  var n = SECTIONS.length, html = "";
  SECTIONS.forEach(function (s, i) {
    var ang = (-90 + (360 / n) * i) * Math.PI / 180, r = 38;
    var x = 50 + r * Math.cos(ang), y = 50 + r * Math.sin(ang);
    var nApps = appsIn(s.id).length;
    var count = s.soon ? "" : (nApps ? nApps + (nApps === 1 ? " app" : " apps") : "Coming soon");
    html += '<li class="node' + (s.soon ? " soon" : "") + '" style="left:' + x.toFixed(2) + "%;top:" + y.toFixed(2) + "%;--c:" + (s.color || "#94A3B8") + '">' +
      (s.soon ? '<a aria-disabled="true" tabindex="-1">' : '<a href="#' + s.id + '">') +
      '<span class="tile">' + slot("", s.emblem, s.soon ? "plus" : "flask", s.color) + "</span>" +
      '<span><span class="label">' + esc(s.name) + "</span>" + (count ? '<span class="count"><br>' + count + "</span>" : "") + "</span></a></li>";
  });
  $("#nodes").innerHTML = html;

  /* ---- pages ---- */
  function crumbs(parts) {
    return '<p class="crumbs"><a href="#index">Home</a>' + parts.map(function (p) { return " / " + (p[1] ? '<a href="#' + p[1] + '">' + esc(p[0]) + "</a>" : esc(p[0])); }).join("") + "</p>";
  }
  function folderGrid(s) {
    return '<div class="folders">' + s.subjects.map(function (sub) {
      var n = appsInSubject(sub.id).length;
      return '<a class="folder" href="#' + s.id + '--' + sub.id + '"><span class="folder-icon">' + subjectIcon(sub.id, s.color) + '</span>' +
        '<span class="folder-name">' + esc(sub.name) + '</span><span class="folder-count">' + (n ? n + (n === 1 ? ' tool' : ' tools') : 'Coming soon') + '</span></a>';
    }).join('') + '</div>';
  }
  function subjectPage(s, sub) {
    var list = appsInSubject(sub.id);
    return '<div class="wrap page" style="--c:' + s.color + '">' + crumbs([[s.name, s.id], [sub.name]]) +
      '<div class="sec-head"><span class="emblem subj-emblem">' + subjectIcon(sub.id, s.color) + '</span><div><h1>' + esc(sub.name) + '</h1><p>' + esc(sub.name) + ' tools from The Alchemist Classroom.</p></div></div>' +
      (list.length ? '<div class="grid">' + list.map(function (a) { return appCard(a, s.color); }).join('') + '</div>'
                   : '<div class="empty">' + esc(sub.name) + ' tools are on the way. Check back soon!</div>') + '</div>';
  }
  function appCard(a, color) {
    return '<a class="card" href="#' + a.id + '"><span class="icon">' + slot("", a.icon, "flask", color) + "</span><h3>" + esc(a.name) + "</h3><p>" + esc(a.short) +
      '</p>' + (a.demoUrl ? '<span class="demo-tag">Free demo</span>' : '') + '<span class="meta"><span class="price">' + esc(a.price) + '</span><span class="go">See details</span></span></a>';
  }
  function sectionPage(s) {
    if (s.subjects) {
      return '<div class="wrap page" style="--c:' + s.color + '">' + crumbs([[s.name]]) +
        '<div class="sec-head"><span class="emblem">' + slot("", s.emblem, "flask", s.color) + "</span><div><h1>" + esc(s.name) + "</h1><p>" + esc(s.blurb || s.short) + "</p></div></div>" +
        folderGrid(s) + "</div>";
    }
    var list = appsIn(s.id);
    return '<div class="wrap page" style="--c:' + s.color + '">' + crumbs([[s.name]]) +
      '<div class="sec-head"><span class="emblem">' + slot("", s.emblem, "flask", s.color) + "</span><div><h1>" + esc(s.name) + "</h1><p>" + esc(s.blurb || s.short) + "</p></div></div>" +
      (list.length ? '<div class="grid">' + list.map(function (a) {
        return '<a class="card" href="#' + a.id + '"><span class="icon">' + slot("", a.icon, "flask", s.color) + "</span><h3>" + esc(a.name) + "</h3><p>" + esc(a.short) +
          '</p><span class="meta"><span class="price">' + esc(a.price) + '</span><span class="go">See details</span></span></a>';
      }).join("") + "</div>" : '<div class="empty">' + (s.id === 'free-tools' ? 'The first free tools are on the way. Check back soon!' : 'New apps for this section are on the way.') + '</div>') + "</div>";
  }
  function appPage(a) {
    var s = section(a.section) || {}, b = buyLink(a);
    var feats = (a.features || []).length ? "<h2>What it does</h2><ul class=\"feat\">" + a.features.map(function (f) { return "<li><strong>" + esc(f[0]) + "</strong><span>" + esc(f[1]) + "</span></li>"; }).join("") + "</ul>" : "";
    var install = a.install ? '<h2>Two ways to set it up</h2><div class="opts">' +
      '<div class="opt"><h3>On one computer</h3><ol><li>Unzip the download into a folder.</li><li>Open the app in Chrome or Edge.</li><li>Follow the setup screens.</li></ol><p class="note">No IT help needed.</p></div>' +
      '<div class="opt"><h3>On a district server</h3><ol><li>Put the folder on a shared network drive (IT Setup Guide included).</li><li>Each staff member opens it from there and logs in.</li><li>Everyone shares one data file. Entries merge, so no one overwrites anyone.</li></ol><p class="note">Needs a real network drive, not a OneDrive or SharePoint sync folder.</p></div></div>' : "";
    return '<div class="wrap page" style="--c:' + (s.color || "#2DD4BF") + '">' + crumbs([[s.name, s.id], [a.name]]) +
      '<div class="app"><aside class="buybox"><span class="icon">' + slot("", a.icon, "flask", s.color, a.name + " app icon") + '</span>' +
      '<div class="price">' + esc(a.price) + "<small>one-time purchase</small></div>" +
      '<a class="btn btn-glow" href="' + esc(b.href) + '">' + esc(b.text) + "</a>" +
      (a.demoUrl ? '<a class="btn btn-demo" href="' + esc(a.demoUrl) + '" target="_blank" rel="noopener">Try the free demo</a>' : "") +
      (b.live ? "" : '<p class="soon">The store opens soon. This button asks to be emailed when it does.</p>') +
      '<p class="soon">Download link and instructions arrive by email right after you buy.</p></aside>' +
      '<div class="app-body"><h1>' + esc(a.name) + '</h1><p class="lead">' + esc(a.description || a.short) + "</p>" + windowHTML(a) + feats + install +
      "<h2>What you get</h2><ul class=\"ticks\">" + (a.includes || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" +
      "<h2>Works on</h2><p>" + esc(a.requirements) + "</p>" +
      '<h2>Your students\' data</h2><p>Everything you enter stays on your computer or your school\'s network drive. The app doesn\'t send data anywhere, and we never see it.</p>' +
      "</div></div></div>";
  }

  /* ---- app window: screenshot viewer ---- */
  function windowHTML(a) {
    var sc = a.screens || [];
    if (!sc.length) return "";
    return '<figure class="appwin" data-i="0"><div class="appwin-bar"><span class="dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="appwin-title">' + esc(a.name) + "</span></div>" +
      '<button class="appwin-view" type="button" aria-label="Open larger screenshot"><img src="' + esc(sc[0][0]) + '" alt="' + esc(sc[0][1]) + '"></button>' +
      '<figcaption><span class="appwin-cap">' + esc(sc[0][1]) + "</span>" + (sc.length > 1 ? '<span class="appwin-tabs" role="group" aria-label="Screenshots">' +
      sc.map(function (x, i) { return '<button type="button" data-shot="' + i + '" aria-pressed="' + (i === 0) + '" aria-label="Screenshot ' + (i + 1) + '"><img src="' + esc(x[0]) + '" alt=""></button>'; }).join("") + "</span>" : "") +
      '</figcaption><p class="appwin-note">Shown with sample students.</p></figure>';
  }
  document.addEventListener("click", function (e) {
    var tab = e.target.closest("[data-shot]");
    var win = e.target.closest(".appwin");
    if (tab && win) {
      var a = app((location.hash || "").slice(1)); if (!a) return;
      var i = +tab.getAttribute("data-shot"), sc = a.screens[i];
      var img = win.querySelector(".appwin-view img"); img.src = sc[0]; img.alt = sc[1];
      win.querySelector(".appwin-cap").textContent = sc[1];
      win.querySelectorAll("[data-shot]").forEach(function (b) { b.setAttribute("aria-pressed", b === tab); });
      return;
    }
    if (e.target.closest(".appwin-view")) {
      var big = win.querySelector(".appwin-view img"), dlg = $("#shot-dialog");
      dlg.querySelector("img").src = big.src; dlg.querySelector("img").alt = big.alt;
      dlg.querySelector("p").textContent = big.alt;
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    }
    if (e.target.closest("#shot-dialog") && (e.target.id === "shot-dialog" || e.target.closest(".dlg-close"))) $("#shot-dialog").close();
  });

  /* ---- router: #index, #<section-id>, #<app-id>, #about ---- */
  function route() {
    var id = (location.hash || "#index").slice(1), home = $("#view-home"), page = $("#view-page"), s = section(id), a = app(id);
    var subParts = id.split("--"), subSec = subParts.length === 2 ? section(subParts[0]) : null;
    var sub = subSec && subSec.subjects ? subSec.subjects.filter(function (x) { return x.id === subParts[1]; })[0] : null;
    if (sub) {
      page.innerHTML = subjectPage(subSec, sub);
      home.hidden = true; page.hidden = false; fillAll(page);
      var cs = document.querySelector('#bar-nav a[href="#' + subSec.id + '"]'); if (cs) cs.setAttribute("aria-current", "page");
      document.title = sub.name + " \u2014 " + subSec.name + " \u2014 The Alchemist Classroom";
      window.scrollTo(0, 0);
      var h1 = page.querySelector("h1"); if (h1) { h1.tabIndex = -1; h1.focus({ preventScroll: true }); }
      return;
    }
    var links = document.querySelectorAll("#bar-nav a");
    for (var i = 0; i < links.length; i++) links[i].removeAttribute("aria-current");
    if (s && !s.soon || a) {
      page.innerHTML = s ? sectionPage(s) : appPage(a);
      home.hidden = true; page.hidden = false; fillAll(page);
      var cur = document.querySelector('#bar-nav a[href="#' + (s ? s.id : a.section) + '"]');
      if (cur) cur.setAttribute("aria-current", "page");
      document.title = (s ? s.name : a.name) + " — The Alchemist Classroom";
      window.scrollTo(0, 0);
      var h = page.querySelector("h1"); if (h) { h.tabIndex = -1; h.focus({ preventScroll: true }); }
    } else {
      page.hidden = true; home.hidden = false; document.title = "The Alchemist Classroom — The Teacher Toolbox";
      var target = document.getElementById(id === "index" ? "main" : id);
      if (target && id !== "index") target.scrollIntoView(); else window.scrollTo(0, 0);
    }
  }
  window.addEventListener("hashchange", route);

  /* ---- shared bits ---- */
  var mails = document.querySelectorAll("[data-email]");
  for (var m = 0; m < mails.length; m++) { mails[m].href = "mailto:" + STORE.supportEmail; if (mails[m].textContent.indexOf("@") > -1) mails[m].textContent = STORE.supportEmail; }
  var yr = document.querySelectorAll("[data-year]");
  for (var y = 0; y < yr.length; y++) yr[y].textContent = new Date().getFullYear();

  fillAll(document);
  route();
})();
