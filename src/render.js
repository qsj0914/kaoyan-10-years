(function () {
  "use strict";

  const sourceLevelLabels = {
    official: "官方发布",
    "official-platform-reprint": "官方平台转载",
    institution: "机构整理",
    "post-exam-recall": "考后回忆"
  };

  const modelKindLabels = {
    official: "官方范文",
    institution: "机构范文/校订",
    original: "原创参考范文"
  };

  const essayGenreLabels = {
    letter: "书信与邮件",
    notice: "通知与告示",
    "picture-essay": "图画作文",
    "chart-essay": "图表作文"
  };

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function sourceMap(sources) {
    return new Map((sources ?? []).map(source => [source.id, source]));
  }

  function sourceBadge(source) {
    if (!source) return '<span class="source-badge source-badge--missing">来源待核对</span>';
    const label = sourceLevelLabels[source.level] ?? source.level;
    return `<span class="source-badge source-badge--${escapeHtml(source.level)}"><span aria-hidden="true">●</span>${escapeHtml(label)}</span>`;
  }

  function sourceLinks(ids, sources) {
    const byId = sourceMap(sources);
    const links = [...new Set(ids ?? [])].map(id => {
      const source = byId.get(id);
      if (!source) return `<li>${sourceBadge(null)} <code>${escapeHtml(id)}</code></li>`;
      const title = escapeHtml(source.title || source.publisher);
      const publisher = escapeHtml(source.publisher);
      const url = /^https?:\/\//i.test(String(source.url ?? "")) ? source.url : null;
      const label = url ? `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${title}</a>` : `<span>${title}</span>`;
      return `<li>${sourceBadge(source)} ${label}<span class="source-publisher">${publisher}</span></li>`;
    }).join("");
    return `<ul class="source-list">${links}</ul>`;
  }

  function list(items, className = "compact-list") {
    return `<ul class="${className}">${(items ?? []).map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function tags(items) {
    return (items ?? []).map(item => `<span class="tag">${escapeHtml(item)}</span>`).join("");
  }

  function politicsCard(question, sources) {
    const kindLabel = question.kind === "single" ? "单选" : "多选";
    const statusLabel = question.verificationStatus === "verified" ? "已核对" : "有争议";
    const options = Object.entries(question.options ?? {}).map(([letter, value]) => (
      `<li><span class="option-letter">${escapeHtml(letter)}</span><span>${escapeHtml(value)}</span></li>`
    )).join("");
    const answer = Array.isArray(question.answer) ? question.answer.join("") : question.answer;
    return `<article class="record-card politics-card" id="${escapeHtml(question.id)}" data-record-id="${escapeHtml(question.id)}">
      <header class="record-header">
        <div>
          <p class="record-kicker">${escapeHtml(question.year)} · 第 ${escapeHtml(question.number)} 题 · ${kindLabel}</p>
          <h2><a href="#/politics/question/${escapeHtml(question.id)}">${escapeHtml(question.stem)}</a></h2>
        </div>
        <span class="verification verification--${escapeHtml(question.verificationStatus)}">${statusLabel}</span>
      </header>
      <div class="tag-row">${tags(question.topics)}</div>
      <details class="record-disclosure prompt-disclosure">
        <summary>展开题目与选项</summary>
        <div class="disclosure-body">
          <p class="question-stem">${escapeHtml(question.stem)}</p>
          <ol class="options-list">${options}</ol>
        </div>
      </details>
      <details class="record-disclosure answer-disclosure">
        <summary>展开答案与解析</summary>
        <div class="disclosure-body">
          <p class="answer-line"><span>答案</span><strong>${escapeHtml(answer)}</strong></p>
          <p>${escapeHtml(question.analysis)}</p>
          ${question.discrepancy ? `<aside class="discrepancy"><strong>版本差异</strong><p>${escapeHtml(question.discrepancy)}</p></aside>` : ""}
          <h3>来源</h3>
          ${sourceLinks(question.sourceIds, sources)}
        </div>
      </details>
    </article>`;
  }

  function essayCard(essay, sources) {
    const statusLabel = essay.verificationStatus === "verified" ? "已核对" : "有版本差异";
    const expressions = (essay.keyExpressions ?? []).map(item => (
      `<li><strong>${escapeHtml(item.en)}</strong><span>${escapeHtml(item.zh)}</span></li>`
    )).join("");
    const modelLabel = modelKindLabels[essay.modelEssay?.sourceKind] ?? essay.modelEssay?.sourceKind;
    const promptImage = essay.promptImage
      ? `<figure class="prompt-figure"><img src="${escapeHtml(essay.promptImage)}" alt="${escapeHtml(essay.promptImageAlt)}" loading="lazy"><figcaption>${escapeHtml(essay.promptImageAlt)}</figcaption></figure>`
      : "";
    return `<article class="record-card essay-card" id="${escapeHtml(essay.id)}" data-record-id="${escapeHtml(essay.id)}">
      <header class="record-header">
        <div>
          <p class="record-kicker">${escapeHtml(essay.year)} · Part ${escapeHtml(essay.part)} · ${escapeHtml(essayGenreLabels[essay.genre] ?? essay.genre)}</p>
          <h2><a href="#/english1/essay/${escapeHtml(essay.id)}">${essay.part === "A" ? "应用文" : "大作文"}训练</a></h2>
        </div>
        <span class="verification verification--${escapeHtml(essay.verificationStatus)}">${statusLabel}</span>
      </header>
      <details class="record-disclosure prompt-disclosure">
        <summary>查看题目与审题</summary>
        <div class="disclosure-body">
          <pre class="prompt-text">${escapeHtml(essay.prompt)}</pre>
          ${promptImage}
          <div class="study-grid">
            <section><h3>审题要点</h3>${list(essay.analysis)}</section>
            <section><h3>段落提纲</h3>${list(essay.outline)}</section>
          </div>
        </div>
      </details>
      <details class="record-disclosure answer-disclosure">
        <summary>查看范文与点评</summary>
        <div class="disclosure-body">
          <p class="model-source"><span>${escapeHtml(modelLabel)}</span>${escapeHtml(essay.modelEssay?.provider)}</p>
          <pre class="model-essay">${escapeHtml(essay.modelEssay?.text)}</pre>
          <h3>重点表达</h3>
          <ul class="expression-list">${expressions}</ul>
          <h3>中文点评</h3>
          <p>${escapeHtml(essay.commentary)}</p>
          <h3>常见失分点</h3>
          ${list(essay.commonPitfalls)}
          ${essay.verificationNote ? `<aside class="discrepancy"><strong>来源说明</strong><p>${escapeHtml(essay.verificationNote)}</p></aside>` : ""}
          <h3>来源</h3>
          ${sourceLinks(essay.sourceIds, sources)}
        </div>
      </details>
    </article>`;
  }

  function homeView(db) {
    const politicsCount = db.politics.length;
    const essayCount = db.essays.length;
    const politicsDisputed = db.politics.filter(item => item.verificationStatus === "disputed").length;
    const essayDisputed = db.essays.filter(item => item.verificationStatus === "disputed").length;
    return `<div class="home-shell">
      <header class="home-intro">
        <p class="edition-mark">2017—2026 · 离线真题档案</p>
        <h1>十年真题，按题型拆开学。</h1>
        <p>英语一作文保留完整题目、题图、范文与点评；政治选择题逐题给出答案、解析与来源状态。</p>
      </header>
      <div class="subject-grid">
        <a class="subject-card subject-card--politics" href="#/politics">
          <span class="subject-code">POL</span>
          <h2>考研政治选择题</h2>
          <p>按年份、单多选、模块与关键词筛题。</p>
          <dl><div><dt>题目</dt><dd>${politicsCount}</dd></div><div><dt>保留争议</dt><dd>${politicsDisputed}</dd></div></dl>
          <span class="subject-action">进入政治题库 <span aria-hidden="true">→</span></span>
        </a>
        <a class="subject-card subject-card--english" href="#/english1">
          <span class="subject-code">ENG I</span>
          <h2>英语一作文</h2>
          <p>分开查看题目审题与范文点评，支持中英文搜索。</p>
          <dl><div><dt>作文</dt><dd>${essayCount}</dd></div><div><dt>版本差异</dt><dd>${essayDisputed}</dd></div></dl>
          <span class="subject-action">进入作文档案 <span aria-hidden="true">→</span></span>
        </a>
      </div>
    </div>`;
  }

  function checkboxGroup(name, legend, options, selected = []) {
    return `<fieldset><legend>${escapeHtml(legend)}</legend><div class="check-grid">${options.map(option => {
      const value = typeof option === "string" ? option : option.value;
      const label = typeof option === "string" ? option : option.label;
      return `<label><input type="checkbox" name="${escapeHtml(name)}" value="${escapeHtml(value)}" ${selected.includes(value) ? "checked" : ""}><span>${escapeHtml(label)}</span></label>`;
    }).join("")}</div></fieldset>`;
  }

  function filterPanel(subject, db, state = {}) {
    const filters = state.filters ?? state;
    const years = Array.from({ length: 10 }, (_, index) => 2017 + index);
    const search = `<label class="search-field" for="filter-query"><span>全文搜索</span><input id="filter-query" name="query" type="search" value="${escapeHtml(filters.query ?? "")}" placeholder="输入题干、主题或英文表达"></label>`;
    const yearGroup = checkboxGroup("years", "年份", years.map(year => ({ value: String(year), label: String(year) })), (filters.years ?? []).map(String));
    const specific = subject === "politics"
      ? checkboxGroup("kinds", "题型", [{ value: "single", label: "单选" }, { value: "multiple", label: "多选" }], filters.kinds ?? [])
        + checkboxGroup("modules", "模块", (db.taxonomy.politicsModules ?? []).map(item => ({ value: item.id, label: item.name })), filters.modules ?? [])
      : checkboxGroup("parts", "部分", [{ value: "A", label: "Part A" }, { value: "B", label: "Part B" }], filters.parts ?? [])
        + checkboxGroup("genres", "文体", (db.taxonomy.essayGenres ?? []).map(item => ({ value: item.id, label: item.name })), filters.genres ?? []);
    return `<button class="filter-drawer-toggle" type="button" aria-expanded="false" aria-controls="filter-form">筛选条件</button>
      <form id="filter-form" class="filter-form">
        ${search}${yearGroup}${specific}
        <button class="reset-filters" type="reset">清除筛选</button>
      </form>`;
  }

  window.ExamRender = { escapeHtml, homeView, politicsCard, essayCard, filterPanel };
})();
