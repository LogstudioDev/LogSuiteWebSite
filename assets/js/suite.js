(function () {
  const root = document.documentElement;
  const langButtons = document.querySelectorAll("[data-set-lang]");
  const topbar = document.querySelector(".topbar");

  function setLang(lang) {
    root.dataset.lang = lang;
    langButtons.forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.setLang === lang));
    });
    try {
      localStorage.setItem("logsuite-lang", lang);
    } catch (_) {}
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.setLang));
  });

  let saved = "en";
  try {
    saved = localStorage.getItem("logsuite-lang") || saved;
  } catch (_) {}
  if (
    navigator.language &&
    navigator.language.toLowerCase().startsWith("zh") &&
    !localStorage.getItem("logsuite-lang")
  ) {
    saved = "zh";
  }
  setLang(saved === "zh" ? "zh" : "en");

  function onScroll() {
    if (!topbar) return;
    topbar.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = document.querySelectorAll("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    nodes.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  nodes.forEach((el) => io.observe(el));
})();
