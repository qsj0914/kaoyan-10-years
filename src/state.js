(function (root) {
  "use strict";

  const THEMES = new Set(["light", "dark"]);
  const SUBJECTS = new Set(["politics", "english1"]);
  const ITEM_TYPES = { politics: "question", english1: "essay" };
  const HOME_ROUTE = { view: "home", subject: null, itemId: null, query: {} };

  function homeRoute() {
    return { ...HOME_ROUTE, query: {} };
  }

  function parseRoute(hash) {
    const raw = String(hash || "#/");
    const marker = raw.indexOf("#");
    const routeAndQuery = marker >= 0 ? raw.slice(marker + 1) : raw;
    const queryAt = routeAndQuery.indexOf("?");
    const pathname = (queryAt >= 0 ? routeAndQuery.slice(0, queryAt) : routeAndQuery).replace(/^\/+|\/+$/g, "");
    const params = new URLSearchParams(queryAt >= 0 ? routeAndQuery.slice(queryAt + 1) : "");
    const query = {};
    for (const [key, value] of params.entries()) {
      if (Object.hasOwn(query, key)) {
        query[key] = Array.isArray(query[key]) ? [...query[key], value] : [query[key], value];
      } else {
        query[key] = value;
      }
    }
    if (!pathname) return { ...homeRoute(), query };

    let segments;
    try {
      segments = pathname.split("/").map(segment => decodeURIComponent(segment));
    } catch {
      return homeRoute();
    }
    const [subject, type, itemId, ...extra] = segments;
    if (!SUBJECTS.has(subject) || extra.length > 0) return homeRoute();
    if (segments.length === 1) return { view: "workspace", subject, itemId: null, query };
    if (segments.length === 3 && type === ITEM_TYPES[subject] && itemId) {
      return { view: "workspace", subject, itemId, query };
    }
    return homeRoute();
  }

  function makeItemRoute(subject, id) {
    if (!SUBJECTS.has(subject) || id == null || String(id).trim() === "") return "#/";
    return `#/${subject}/${ITEM_TYPES[subject]}/${encodeURIComponent(String(id))}`;
  }

  function getStorage() {
    try {
      if (typeof localStorage !== "undefined") return localStorage;
      if (root && root.localStorage) return root.localStorage;
    } catch {
      return null;
    }
    return null;
  }

  function createState() {
    const storage = getStorage();
    let theme = "light";
    try {
      const saved = storage && storage.getItem("exam-theme");
      if (THEMES.has(saved)) theme = saved;
    } catch {
      // Storage can be unavailable in private or restricted browsing contexts.
    }

    return {
      get theme() { return theme; },
      setTheme(value) {
        if (!THEMES.has(value)) return theme;
        theme = value;
        try {
          if (storage) storage.setItem("exam-theme", theme);
        } catch {
          // Keep the in-memory preference when storage is unavailable.
        }
        return theme;
      }
    };
  }

  root.ExamState = { parseRoute, makeItemRoute, createState };
})(typeof window !== "undefined" ? window : globalThis);
