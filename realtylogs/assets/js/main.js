(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Broken/missing image → show filename as a clear placeholder label
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      if (img.dataset.placeholderApplied) return;
      img.dataset.placeholderApplied = "1";
      const name = (img.getAttribute("src") || "").split("/").pop() || "image";
      const canvas = document.createElement("canvas");
      const isLogo = img.classList.contains("brand__logo") || img.width <= 40;
      const isBanner = /banner\.(jpe?g|png|webp)$/i.test(img.getAttribute("src") || "");
      canvas.width = isLogo ? 240 : isBanner ? 1600 : 780;
      canvas.height = isLogo ? 240 : isBanner ? 900 : 1680;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const g = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      g.addColorStop(0, "#fff5f8");
      g.addColorStop(1, "#f0f2f5");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(202,0,67,0.55)";
      ctx.lineWidth = 4;
      ctx.setLineDash([14, 10]);
      ctx.strokeRect(24, 24, canvas.width - 48, canvas.height - 48);
      ctx.setLineDash([]);
      ctx.fillStyle = "#1a1c1f";
      ctx.font = `600 ${Math.max(22, canvas.width * 0.045)}px Manrope, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(name, canvas.width / 2, canvas.height / 2 - 12);
      ctx.fillStyle = "#5c6570";
      ctx.font = `${Math.max(16, canvas.width * 0.028)}px Manrope, sans-serif`;
      ctx.fillText("replace this file", canvas.width / 2, canvas.height / 2 + 28);
      img.src = canvas.toDataURL("image/png");
      img.style.objectFit = "cover";
    });
  });

  const revealNodes = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealNodes.forEach((el) => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = Number(el.getAttribute("data-reveal-delay") || 0);
          window.setTimeout(() => el.classList.add("is-visible"), delay);
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealNodes.forEach((el) => io.observe(el));
  }

  document.querySelectorAll("[data-carousel]").forEach((root) => {
    const track = root.querySelector(".screen-carousel__track");
    const slides = Array.from(root.querySelectorAll(".screen-carousel__slide"));
    const prev = root.querySelector(".screen-carousel__nav--prev");
    const next = root.querySelector(".screen-carousel__nav--next");
    const dotsHost = root.querySelector(".screen-carousel__dots");
    if (!track || slides.length === 0) return;

    let index = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dots = slides.map((_, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "screen-carousel__dot" + (i === 0 ? " is-active" : "");
      btn.setAttribute("aria-label", `Show screenshot ${i + 1}`);
      btn.addEventListener("click", () => goTo(i));
      dotsHost?.appendChild(btn);
      return btn;
    });

    function goTo(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      track.style.transition = reduceMotion ? "none" : "";
      track.style.transform = `translateX(-${index * 100}%)`;
      slides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
      dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
    }

    prev?.addEventListener("click", () => goTo(index - 1));
    next?.addEventListener("click", () => goTo(index + 1));

    let touchX = null;
    track.addEventListener(
      "touchstart",
      (e) => {
        touchX = e.changedTouches[0]?.clientX ?? null;
      },
      { passive: true }
    );
    track.addEventListener(
      "touchend",
      (e) => {
        if (touchX == null) return;
        const dx = (e.changedTouches[0]?.clientX ?? touchX) - touchX;
        touchX = null;
        if (Math.abs(dx) < 40) return;
        goTo(index + (dx < 0 ? 1 : -1));
      },
      { passive: true }
    );

    goTo(0);
  });
})();
