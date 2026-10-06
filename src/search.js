(function (root) {
  "use strict";

  function normalize(value) {
    return String(value ?? "").toLocaleLowerCase("zh-CN").replace(/\s+/g, " ").trim();
  }

  function asArray(value) {
    if (value == null) return [];
    return Array.isArray(value) ? value : [value];
  }

  function matchesSet(value, selected) {
    return !selected.length || selected.includes(value);
  }

  function intersects(values, selected) {
    return !selected.length || values.some(value => selected.includes(value));
  }

  function matchesQuery(record, query) {
    const terms = normalize(query).split(" ").filter(Boolean);
    if (!terms.length) return true;
    const parts = [];
    const collect = value => {
      if (value == null) return;
      if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
        parts.push(String(value));
      } else if (Array.isArray(value)) {
        value.forEach(collect);
      } else if (typeof value === "object") {
        Object.values(value).forEach(collect);
      }
    };
    collect(record);
    const haystack = normalize(parts.join(" "));
    return terms.every(term => haystack.includes(term));
  }

  function collectPoliticsText(record) {
    return [record.stem, record.options, record.analysis, record.topics];
  }

  function collectEssayText(record) {
    return [
      record.prompt,
      record.analysis,
      record.outline,
      record.modelEssay && record.modelEssay.text,
      record.modelEssay && record.modelEssay.provider,
      record.keyExpressions,
      record.commentary,
      record.commonPitfalls,
      record.verificationNote
    ];
  }

  function filterPolitics(records, filters = {}) {
    const years = asArray(filters.years);
    const kinds = asArray(filters.kinds);
    const modules = asArray(filters.modules);
    const topics = asArray(filters.topics);
    return records.filter(record =>
      matchesSet(record.year, years) &&
      matchesSet(record.kind, kinds) &&
      intersects(asArray(record.modules), modules) &&
      intersects(asArray(record.topics), topics) &&
      matchesQuery(collectPoliticsText(record), filters.query)
    );
  }

  function filterEssays(records, filters = {}) {
    const years = asArray(filters.years);
    const parts = asArray(filters.parts);
    const genres = asArray(filters.genres);
    return records.filter(record =>
      matchesSet(record.year, years) &&
      matchesSet(record.part, parts) &&
      matchesSet(record.genre, genres) &&
      matchesQuery(collectEssayText(record), filters.query)
    );
  }

  root.ExamSearch = { filterPolitics, filterEssays };
})(typeof window !== "undefined" ? window : globalThis);
