(function () {
  "use strict";

  const SUBJECT_LABELS = {
    politics: "考研政治选择题",
    english1: "英语一作文"
  };

  const filters = {
    politics: { years: [], kinds: [], modules: [], topics: [], query: "" },
    english1: { years: [], parts: [], genres: [], query: "" }
  };

  let preference;
  let currentRoute = { view: "home", subject: null, itemId: null, query: {} };

  function escapeHtml(value) {
    if (window.ExamRender?.escapeHtml) return window.ExamRender.escapeHtml(value);
    return String(value).replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function missingDataFile(db) {
    for (let year = 2017; year <= 2026; year += 1) {
      if (db.politics.filter(item => item.year === year).length !== 33) return `data/politics/politics-${year}.js`;
      if (db.essays.filter(item => item.year === year).length !== 2) return `data/english/english-${year}.js`;
    }
    return null;
  }

  function hasValidDatabaseShape(db) {
    return Boolean(
      db &&
      Array.isArray(db.sources) &&
      Array.isArray(db.politics) &&
      Array.isArray(db.essays) &&
      db.taxonomy &&
      Array.isArray(db.taxonomy.politicsModules) &&
      Array.isArray(db.taxonomy.essayGenres)
    );
  }

  function showInitializationError(filename, detail) {
    const content = document.querySelector("#content");
    const home = document.querySelector("#home-view");
    const workspace = document.querySelector("#workspace-view");
    home.hidden = true;
    workspace.hidden = false;
    document.querySelector("#filter-panel").hidden = true;
    content.innerHTML = `<div class="init-error"><h1>题库未能完整载入</h1><p>请确认文件 <code>${escapeHtml(filename)}</code> 与网站位于同一文件夹结构中。</p><p>${escapeHtml(detail)}</p></div>`;
  }

  function setTheme(theme) {
    const applied = preference.setTheme(theme);
    document.documentElement.dataset.theme = applied;
    const button = document.querySelector("#theme-toggle");
    button.setAttribute("aria-label", applied === "dark" ? "切换浅色模式" : "切换深色模式");
    button.title = applied === "dark" ? "切换浅色模式" : "切换深色模式";
  }

  function updateNavigation(subject) {
    document.querySelectorAll("#subject-nav a").forEach(link => {
      const active = link.getAttribute("href") === `#/${subject}`;
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  function readFilterForm(subject) {
    const form = document.querySelector("#filter-form");
    if (!form) return;
    const data = new FormData(form);
    const target = filters[subject];
    target.query = String(data.get("query") ?? "");
    target.years = data.getAll("years").map(Number);
    if (subject === "politics") {
      target.kinds = data.getAll("kinds").map(String);
      target.modules = data.getAll("modules").map(String);
    } else {
      target.parts = data.getAll("parts").map(String);
      target.genres = data.getAll("genres").map(String);
    }
  }

  function sortRecords(subject, rows) {
    return [...rows].sort((left, right) => {
      if (right.year !== left.year) return right.year - left.year;
      if (subject === "politics") return left.number - right.number;
      return left.part.localeCompare(right.part);
    });
  }

  function workspaceRows(subject) {
    const db = window.EXAM_DB;
    const selected = subject === "politics"
      ? window.ExamSearch.filterPolitics(db.politics, filters.politics)
      : window.ExamSearch.filterEssays(db.essays, filters.english1);
    const all = subject === "politics" ? db.politics : db.essays;
    const active = currentRoute.itemId ? all.find(item => item.id === currentRoute.itemId) : null;
    if (active && !selected.some(item => item.id === active.id)) selected.unshift(active);
    return sortRecords(subject, selected);
  }

  function renderWorkspaceContent(subject, focusAfterRender = false) {
    const content = document.querySelector("#content");
    const rows = workspaceRows(subject);
    const noun = subject === "politics" ? "道题" : "篇作文";
    const description = subject === "politics"
      ? "先独立作答，再展开答案与解析。争议题会保留版本差异。"
      : "题目与范文分开展开；机构校订与原创版本均明确标注。";
    const cards = rows.map(record => subject === "politics"
      ? window.ExamRender.politicsCard(record, window.EXAM_DB.sources)
      : window.ExamRender.essayCard(record, window.EXAM_DB.sources)
    ).join("");
    content.innerHTML = `<header class="workspace-header"><div><h1>${SUBJECT_LABELS[subject]}</h1><p>${description}</p></div><span class="result-count" role="status" aria-live="polite" aria-atomic="true">当前 ${rows.length} ${noun}</span></header>${rows.length ? `<div class="record-list">${cards}</div>` : '<div class="empty-state"><h2>没有符合条件的内容</h2><p>清除部分筛选条件或换一个关键词试试。</p></div>'}`;

    if (currentRoute.itemId) {
      const item = document.getElementById(currentRoute.itemId);
      if (item) {
        item.classList.add("is-active");
        if (focusAfterRender) item.scrollIntoView({ block: "start" });
      }
    }
    if (focusAfterRender) content.focus({ preventScroll: Boolean(currentRoute.itemId) });
  }

  function bindFilterPanel(subject) {
    const panel = document.querySelector("#filter-panel");
    const form = panel.querySelector("#filter-form");
    const toggle = panel.querySelector(".filter-drawer-toggle");
    form.addEventListener("input", () => {
      readFilterForm(subject);
      renderWorkspaceContent(subject);
    });
    form.addEventListener("reset", () => {
      window.setTimeout(() => {
        filters[subject] = subject === "politics"
          ? { years: [], kinds: [], modules: [], topics: [], query: "" }
          : { years: [], parts: [], genres: [], query: "" };
        renderWorkspaceContent(subject);
      }, 0);
    });
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
    });
  }

  function renderRoute(focusAfterRender = false) {
    currentRoute = window.ExamState.parseRoute(window.location.hash || "#/");
    const home = document.querySelector("#home-view");
    const workspace = document.querySelector("#workspace-view");
    const filterPanel = document.querySelector("#filter-panel");
    updateNavigation(currentRoute.subject);

    if (currentRoute.view === "home") {
      home.hidden = false;
      workspace.hidden = true;
      home.innerHTML = window.ExamRender.homeView(window.EXAM_DB);
      document.title = "研途十年｜考研英语一作文与政治选择题";
      return;
    }

    home.hidden = true;
    workspace.hidden = false;
    filterPanel.hidden = false;
    filterPanel.innerHTML = window.ExamRender.filterPanel(currentRoute.subject, window.EXAM_DB, filters[currentRoute.subject]);
    bindFilterPanel(currentRoute.subject);
    renderWorkspaceContent(currentRoute.subject, focusAfterRender);
    document.title = `${SUBJECT_LABELS[currentRoute.subject]}｜研途十年`;
  }

  function initialize() {
    const required = ["EXAM_DB", "ExamState", "ExamSearch", "ExamRender"];
    const absent = required.find(name => !window[name]);
    if (absent) {
      const files = {
        EXAM_DB: "data/bootstrap.js",
        ExamState: "src/state.js",
        ExamSearch: "src/search.js",
        ExamRender: "src/render.js"
      };
      showInitializationError(files[absent], `缺少运行模块：${absent}`);
      return;
    }
    if (!hasValidDatabaseShape(window.EXAM_DB)) {
      showInitializationError("data/bootstrap.js", "题库对象结构无效：预期包含来源、分类、政治题和英语作文数组。");
      return;
    }
    const missing = missingDataFile(window.EXAM_DB);
    if (missing) {
      showInitializationError(missing, "预期每年有33道政治选择题和2篇英语一作文。请检查文件是否被移动或重命名。");
      return;
    }

    preference = window.ExamState.createState();
    setTheme(preference.theme);
    document.querySelector("#theme-toggle").addEventListener("click", () => setTheme(preference.theme === "dark" ? "light" : "dark"));
    window.addEventListener("hashchange", () => renderRoute(true));
    renderRoute();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize);
  else initialize();
})();
