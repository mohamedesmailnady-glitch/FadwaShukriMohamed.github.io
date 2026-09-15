/* =========================================================================
   Fadwa Shukri Mohamed Elbaz — Portfolio
   All project content below (titles, years, descriptions, image order,
   external links) is transcribed directly from her portfolio PDF.
   Nothing here is invented.
   ========================================================================= */

(function () {
  "use strict";

  /* ---------------- Project data ---------------- */
  const PROJECTS = [
    {
      id: "3d-modeling-ar",
      title: "Virtual Monument Completion",
      year: "2024",
      category: "3D & AR",
      featured: true,
      description:
        "A 3D modeling and AR case study: a damaged Greco-Roman statue — missing its head and arms in the original artifact photo — was digitally sculpted to completion, then rendered back into a real setting to preview an augmented-reality presentation.",
      images: [
        { src: "assets/images/3d-modeling-ar/1.jpg", thumb: "assets/images/3d-modeling-ar/1-thumb.jpg", alt: "Original damaged statue photographed on a blue background, missing its head and arms" },
        { src: "assets/images/3d-modeling-ar/2.jpg", thumb: "assets/images/3d-modeling-ar/2-thumb.jpg", alt: "3D sculpt of the statue's draped robe in a Blender viewport, front view" },
        { src: "assets/images/3d-modeling-ar/3.jpg", thumb: "assets/images/3d-modeling-ar/3-thumb.jpg", alt: "3D sculpt of the completed statue in a Blender viewport, alternate angle" },
        { src: "assets/images/3d-modeling-ar/4.jpg", thumb: "assets/images/3d-modeling-ar/4-thumb.jpg", alt: "Final textured render of the completed statue placed in an interior setting" },
      ],
    },
    {
      id: "branding-taam-albuot",
      title: "Taam Albuot — Restaurant Identity",
      year: "2012",
      category: "Branding",
      description:
        "A corporate manual identity guideline for Taam Albuot (Taam El Biyout) restaurant: logo construction, bilingual Arabic/English typography, a colour system, and applications across table tents, aprons, storefront signage and food packaging.",
      images: [
        { src: "assets/images/branding-taam-albuot/1.jpg", thumb: "assets/images/branding-taam-albuot/1-thumb.jpg", alt: "Cover of the corporate manual identity guideline for Taam Albuot restaurant" },
        { src: "assets/images/branding-taam-albuot/2.jpg", thumb: "assets/images/branding-taam-albuot/2-thumb.jpg", alt: "Typography exploration for the Taam Albuot identity" },
        { src: "assets/images/branding-taam-albuot/3.jpg", thumb: "assets/images/branding-taam-albuot/3-thumb.jpg", alt: "Table-tent application of the Taam Albuot brand" },
        { src: "assets/images/branding-taam-albuot/4.jpg", thumb: "assets/images/branding-taam-albuot/4-thumb.jpg", alt: "Storefront signage application of the Taam Albuot brand" },
      ],
    },
    {
      id: "identity-graphic-dept",
      title: "Manual Identity — Graphic Department",
      year: null,
      category: "Signage",
      wide: true,
      description:
        "A pictogram and wayfinding identity system: pictorial logo development, bilingual typography, motivational wordmarks, and full-scale wall-typography applications for the Graphic Department. Shown here at its native landscape orientation — the source board was scanned sideways to fit a portrait page in the original PDF, so it's presented here the way it reads: left to right.",
      images: [
        { src: "assets/images/identity-graphic-dept/1.jpg", thumb: "assets/images/identity-graphic-dept/1-thumb.jpg", alt: "Full wayfinding identity board: pictogram set, pictorial logo development, typography and wall-application mockups" },
      ],
    },
    {
      id: "illustration-mamluk",
      title: "Mamluk-Era Illustration",
      year: "2013",
      category: "Illustration",
      description:
        "Hand-painted illustration researching Mamluk-era costume, architectural ornament and coinage, later reused in a 2017 calendar design.",
      images: [
        { src: "assets/images/illustration-mamluk/1.jpg", thumb: "assets/images/illustration-mamluk/1-thumb.jpg", alt: "Hand-painted illustrations of Mamluk-era figures, architectural capital and coinage" },
        { src: "assets/images/illustration-mamluk/2.jpg", thumb: "assets/images/illustration-mamluk/2-thumb.jpg", alt: "Further Mamluk-era illustration studies including calligraphic panels and figure sketches" },
      ],
    },
    {
      id: "photography",
      title: "Street & Architectural Photography",
      year: "2014",
      category: "Photography",
      description:
        "Documentary photography across Alexandria and Cairo, moving between street portraiture and historic architecture.",
      images: [
        { src: "assets/images/photography/1.jpg", thumb: "assets/images/photography/1-thumb.jpg", alt: "Street vendor portrait with colourful stacked buckets" },
        { src: "assets/images/photography/2.jpg", thumb: "assets/images/photography/2-thumb.jpg", alt: "Lanterns hanging beneath an archway with minarets in the background" },
      ],
    },
    {
      id: "packaging",
      title: "Packaging Design",
      year: "2015",
      category: "Packaging",
      description:
        "Packaging systems spanning a retail gift bag, a bakery's cake and cupcake range, and the Tinge poster-colour product line, including typography and pattern development for the Tinge brand.",
      images: [
        { src: "assets/images/packaging/1.jpg", thumb: "assets/images/packaging/1-thumb.jpg", alt: "Al-Hakam branded gift bag with Egyptian-motif border pattern" },
        { src: "assets/images/packaging/2.jpg", thumb: "assets/images/packaging/2-thumb.jpg", alt: "Cupcake box packaging with striped pattern and cupcakes" },
        { src: "assets/images/packaging/3.jpg", thumb: "assets/images/packaging/3-thumb.jpg", alt: "Tinge poster-colour tube packaging shown across a range of colourways" },
      ],
    },
    {
      id: "wayfinding-greco-roman",
      title: "Directional Signage — Greco-Roman Museum",
      year: "2024",
      category: "Signage",
      description:
        "On-street directional signage designed for the Greco-Roman Museum in Alexandria, shown installed on lamp-post banners along the surrounding streets.",
      images: [
        { src: "assets/images/wayfinding-greco-roman/1.jpg", thumb: "assets/images/wayfinding-greco-roman/1-thumb.jpg", alt: "Directional sign for the Greco-Roman Museum mounted on a street post" },
        { src: "assets/images/wayfinding-greco-roman/2.jpg", thumb: "assets/images/wayfinding-greco-roman/2-thumb.jpg", alt: "Directional sign installed on a lamp post along an Alexandria street" },
      ],
    },
    {
      id: "publication-design",
      title: "Publication Design",
      year: "2016",
      category: "Publication",
      description:
        "Print publication design including a conference catalog cover and index, an exhibition-invitation brochure, and a booklet on public transport in Alexandria.",
      images: [
        { src: "assets/images/publication-design/1.jpg", thumb: "assets/images/publication-design/1-thumb.jpg", alt: "Catalog cover and index spread with an Islamic pattern motif" },
        { src: "assets/images/publication-design/2.jpg", thumb: "assets/images/publication-design/2-thumb.jpg", alt: "Exhibition-invitation brochure mockup titled Exhibition of the Words" },
        { src: "assets/images/publication-design/3.jpg", thumb: "assets/images/publication-design/3-thumb.jpg", alt: "Booklet spread about public transport in Alexandria" },
      ],
    },
    {
      id: "advertising-manipulation",
      title: "Advertising & Photo Manipulation",
      year: "2018",
      category: "Advertising",
      description:
        "Photo-manipulation campaigns: a tourism series entitled \u201cHistory with Roots\u201d for Al Aazm Street, a conference identity for a talk on the history of Bayn al-Qasrayn in Cairo, and an awareness advertisement for a children's charity.",
      images: [
        { src: "assets/images/advertising-manipulation/1.jpg", thumb: "assets/images/advertising-manipulation/1-thumb.jpg", alt: "Tourism advertisement titled History with Roots, showing minarets rising from a desert landscape" },
        { src: "assets/images/advertising-manipulation/2.jpg", thumb: "assets/images/advertising-manipulation/2-thumb.jpg", alt: "Advertisement titled Ukweli for a Congo children's charity" },
        { src: "assets/images/advertising-manipulation/3.jpg", thumb: "assets/images/advertising-manipulation/3-thumb.jpg", alt: "Conference poster featuring an ornate ceiling dome for a talk on the history of Bayn al-Qasrayn" },
      ],
    },
    {
      id: "interactive-catalog",
      title: "Interactive Electronic Catalog",
      year: "2019",
      category: "Interactive",
      description:
        "An interactive electronic catalog produced for the Design & Graphic Communication department at the Faculty of Fine Arts, Alexandria University.",
      images: [
        { src: "assets/images/interactive-catalog/1.jpg", thumb: "assets/images/interactive-catalog/1-thumb.jpg", alt: "Screenshot of the interactive electronic catalog interface" },
      ],
      link: { label: "View interactive catalog", url: "https://drive.google.com/file/d/1XyJ7RNDlimCBoxD2f1Laxg2liYylHVUq/view?usp=drive_link" },
    },
    {
      id: "ui-design",
      title: "Faculty of Fine Arts — Web Design",
      year: "2020",
      category: "UI/UX",
      description:
        "A user-interface design for the Faculty of Fine Arts, Alexandria University website, prototyped in Figma.",
      images: [
        { src: "assets/images/ui-design/1.jpg", thumb: "assets/images/ui-design/1-thumb.jpg", alt: "Laptop mockup of the Faculty of Fine Arts website UI design" },
      ],
      link: { label: "View Figma prototype", url: "https://www.figma.com/proto/85Vd8RSLrdCDzdcLaA1kiL/%D9%83%D9%84%D9%8A%D8%A9-%D8%A7%D9%84%D9%81%D9%86%D9%88%D9%86-%D8%A7%D9%84%D8%AC%D9%85%D9%8A%D9%84%D8%A9--%D9%82%D8%B3%D9%85-%D8%A7%D9%84%D8%AC%D8%B1%D8%A7%D9%81%D9%8A%D9%83?type=design&node-id=73-41&t=mMaDUQxnjRkhMzm7-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=73%3A41&mode=design" },
    },
  ];

  const CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  /* ---------------- Render: filter pills ---------------- */
  const filtersEl = document.getElementById("filters");
  const gridEl = document.getElementById("project-grid");
  let activeCategory = "All";

  function renderFilters() {
    filtersEl.innerHTML = "";
    CATEGORIES.forEach((cat) => {
      const btn = document.createElement("button");
      btn.className = "filter-pill";
      btn.type = "button";
      btn.textContent = cat;
      btn.setAttribute("aria-pressed", String(cat === activeCategory));
      btn.addEventListener("click", () => {
        activeCategory = cat;
        renderFilters();
        renderGrid();
      });
      filtersEl.appendChild(btn);
    });
  }

  /* ---------------- Render: project grid ---------------- */
  function renderGrid() {
    gridEl.innerHTML = "";
    const visible = PROJECTS.filter((p) => activeCategory === "All" || p.category === activeCategory);

    visible.forEach((project) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "project-card" + (project.wide ? " wide" : "");
      card.setAttribute("data-project-id", project.id);
      card.setAttribute("aria-haspopup", "dialog");

      const cover = project.images[0];
      card.innerHTML = `
        <div class="thumb">
          <img src="${cover.thumb}" alt="${cover.alt}" loading="lazy" decoding="async" width="640" height="480">
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span>${project.category}</span>
            ${project.year ? `<span aria-hidden="true">&middot;</span><span class="yr">${project.year}</span>` : ""}
          </div>
          <h3>${project.title}</h3>
          <p>${truncate(project.description, 110)}</p>
          ${project.featured ? `<span class="card-tag-featured">Featured — 3D modeling case study</span>` : ""}
        </div>
      `;
      card.addEventListener("click", () => openLightbox(project.id));
      gridEl.appendChild(card);
    });
  }

  function truncate(str, max) {
    if (str.length <= max) return str;
    return str.slice(0, max).replace(/\s+\S*$/, "") + "\u2026";
  }

  /* ---------------- Lightbox ---------------- */
  const lightbox = document.getElementById("lightbox");
  const lbTitle = document.getElementById("lb-title");
  const lbMeta = document.getElementById("lb-meta");
  const lbStage = document.getElementById("lb-stage");
  const lbImg = document.getElementById("lb-image");
  const lbDots = document.getElementById("lb-dots");
  const lbDesc = document.getElementById("lb-description");
  const lbLink = document.getElementById("lb-link");
  const lbClose = document.getElementById("lb-close");
  const lbPrev = document.getElementById("lb-prev");
  const lbNext = document.getElementById("lb-next");

  let currentProject = null;
  let currentIndex = 0;
  let lastFocusedEl = null;

  function openLightbox(projectId) {
    currentProject = PROJECTS.find((p) => p.id === projectId);
    if (!currentProject) return;
    currentIndex = 0;
    lastFocusedEl = document.activeElement;

    lbTitle.textContent = currentProject.title;
    lbMeta.innerHTML = `<span>${currentProject.category}</span>${
      currentProject.year ? `<span aria-hidden="true">&middot;</span><span class="yr">${currentProject.year}</span>` : ""
    }`;
    lbDesc.textContent = currentProject.description;
    lbStage.classList.toggle("wide-asset", !!currentProject.wide);

    if (currentProject.link) {
      lbLink.href = currentProject.link.url;
      lbLink.textContent = currentProject.link.label + " \u2197";
      lbLink.hidden = false;
    } else {
      lbLink.hidden = true;
    }

    renderStageImage();
    renderDots();

    const multi = currentProject.images.length > 1;
    lbPrev.hidden = !multi;
    lbNext.hidden = !multi;
    lbDots.hidden = !multi;

    lightbox.setAttribute("data-open", "true");
    document.body.style.overflow = "hidden";
    lbClose.focus();
    document.addEventListener("keydown", onKeydown);
  }

  function closeLightbox() {
    lightbox.setAttribute("data-open", "false");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onKeydown);
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  function renderStageImage() {
    const img = currentProject.images[currentIndex];
    lbImg.src = img.src;
    lbImg.alt = img.alt;
  }

  function renderDots() {
    lbDots.innerHTML = "";
    currentProject.images.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Show image ${i + 1} of ${currentProject.images.length}`);
      dot.setAttribute("aria-current", String(i === currentIndex));
      dot.addEventListener("click", () => {
        currentIndex = i;
        renderStageImage();
        renderDots();
      });
      lbDots.appendChild(dot);
    });
  }

  function step(delta) {
    const n = currentProject.images.length;
    currentIndex = (currentIndex + delta + n) % n;
    renderStageImage();
    renderDots();
  }

  function onKeydown(e) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "Tab") trapFocus(e);
  }

  function trapFocus(e) {
    const focusables = lightbox.querySelectorAll('button:not([hidden]), a[href]:not([hidden])');
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  lbClose.addEventListener("click", closeLightbox);
  lbPrev.addEventListener("click", () => step(-1));
  lbNext.addEventListener("click", () => step(1));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  /* ---------------- Mobile nav ---------------- */
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");

  navToggle.addEventListener("click", () => {
    const open = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!open));
    mainNav.setAttribute("data-open", String(!open));
    document.body.style.overflow = !open ? "hidden" : "";
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      mainNav.setAttribute("data-open", "false");
      document.body.style.overflow = "";
    });
  });

  /* ---------------- Contact form (client-side only — no backend wired up) ---------------- */
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = document.getElementById("form-status");
      status.textContent =
        "This form isn't wired to a backend yet — add a form service (e.g. Formspree) or a mailto action to receive messages.";
    });
  }

  /* ---------------- Footer year ---------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Init ---------------- */
  renderFilters();
  renderGrid();
})();
