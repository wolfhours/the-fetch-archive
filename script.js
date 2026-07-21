(function () {
  "use strict";

  const main = document.getElementById("collections");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- render reels ----
  REELS.forEach((reel) => {
    const section = document.createElement("section");
    section.className = "reel";
    section.id = reel.id;

    const header = document.createElement("div");
    header.className = "reel__header";
    header.innerHTML = `
      <span class="reel__number">REEL ${reel.number}</span>
      <h2 class="reel__label">${reel.label}</h2>
      <span class="reel__count">${reel.pieces.length} piece${reel.pieces.length === 1 ? "" : "s"}</span>
    `;
    section.appendChild(header);

    if (reel.pieces.length === 0) {
      const empty = document.createElement("p");
      empty.className = "reel__empty";
      empty.textContent = "Nothing loaded yet. Coming soon.";
      section.appendChild(empty);
    } else {
      const grid = document.createElement("div");
      grid.className = "grid";

      reel.pieces.forEach((piece) => {
        const card = document.createElement("figure");
        card.className = "card";

        const img = document.createElement("img");
        img.src = reel.folder + piece.file;
        img.alt = piece.title;
        img.loading = "lazy";
        img.tabIndex = 0;
        img.addEventListener("click", () => openLightbox(img.src, piece.title));
        img.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openLightbox(img.src, piece.title);
          }
        });

        const caption = document.createElement("figcaption");
        caption.textContent = piece.title;

        card.appendChild(img);
        card.appendChild(caption);
        grid.appendChild(card);
      });

      section.appendChild(grid);
    }

    main.appendChild(section);
  });

  // ---- lightbox ----
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");

  function openLightbox(src, title) {
    lightboxImg.src = src;
    lightboxImg.alt = title;
    lightboxCaption.textContent = title;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    lightboxClose.focus();
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
  });

  // ---- footer year ----
  document.getElementById("year").textContent = new Date().getFullYear();

  // ---- camcorder timecode readout ----
  const timecodeEl = document.getElementById("timecode");
  if (!reduceMotion && timecodeEl) {
    let frame = 0;
    setInterval(() => {
      frame++;
      const totalSeconds = Math.floor(frame / 24);
      const h = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
      const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
      const s = String(totalSeconds % 60).padStart(2, "0");
      const f = String(frame % 24).padStart(2, "0");
      timecodeEl.textContent = `${h}:${m}:${s}:${f}`;
    }, 1000 / 24);
  }
})();
