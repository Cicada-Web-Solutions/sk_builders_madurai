// Static sites cannot scan folders at runtime, so update these filename lists when clients add project images.
const projectOneFiles = [
  "WhatsApp Image 2026-06-10 at 12.28.32 PM (1).jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.32 PM (2).jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.32 PM (3).jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.32 PM.jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.33 PM.jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.34 PM (1).jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.34 PM (2).jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.34 PM.jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.40 PM.jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.41 PM.jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.46 PM (1).jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.46 PM (2).jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.46 PM.jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.47 PM (1).jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.47 PM (2).jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.47 PM (3).jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.47 PM (4).jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.47 PM (5).jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.47 PM (6).jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.47 PM (7).jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.47 PM (8).jpeg",
  "WhatsApp Image 2026-06-10 at 12.28.47 PM.jpeg"
];

const projectTwoFiles = [
  "WhatsApp Image 2026-06-10 at 12.30.31 PM.jpeg",
  "WhatsApp Image 2026-06-10 at 12.30.32 PM (1).jpeg",
  "WhatsApp Image 2026-06-10 at 12.30.32 PM.jpeg",
  "WhatsApp Image 2026-06-10 at 12.30.33 PM (1).jpeg",
  "WhatsApp Image 2026-06-10 at 12.30.33 PM.jpeg",
  "WhatsApp Image 2026-06-10 at 12.30.34 PM (1).jpeg",
  "WhatsApp Image 2026-06-10 at 12.30.34 PM.jpeg",
  "WhatsApp Image 2026-06-10 at 12.30.35 PM (1).jpeg",
  "WhatsApp Image 2026-06-10 at 12.30.35 PM (2).jpeg",
  "WhatsApp Image 2026-06-10 at 12.30.35 PM.jpeg",
  "WhatsApp Image 2026-06-10 at 12.30.36 PM (1).jpeg",
  "WhatsApp Image 2026-06-10 at 12.30.36 PM.jpeg",
  "WhatsApp Image 2026-06-10 at 12.30.37 PM (1).jpeg",
  "WhatsApp Image 2026-06-10 at 12.30.37 PM (2).jpeg",
  "WhatsApp Image 2026-06-10 at 12.30.37 PM.jpeg",
  "WhatsApp Image 2026-06-10 at 12.30.38 PM (1).jpeg",
  "WhatsApp Image 2026-06-10 at 12.30.38 PM (2).jpeg",
  "WhatsApp Image 2026-06-10 at 12.30.38 PM.jpeg",
  "WhatsApp Image 2026-06-10 at 12.30.39 PM (1).jpeg",
  "WhatsApp Image 2026-06-10 at 12.30.39 PM.jpeg",
  "WhatsApp Image 2026-06-10 at 12.30.40 PM (1).jpeg",
  "WhatsApp Image 2026-06-10 at 12.30.40 PM.jpeg"
];

const projectOneNames = [
  "Courtyard Glow",
  "Terrace Lightwell",
  "Evening Facade",
  "Warm Balcony Line",
  "Stone Frame Entry",
  "Quiet Street Home",
  "Golden Hour Porch",
  "Layered Elevation",
  "Window Rhythm",
  "Crisp Compound Edge",
  "Soft Lit Residence",
  "Frontage Detail",
  "Veranda Finish",
  "Roofline Study",
  "Garden Edge",
  "Entryway Balance",
  "Sunset Residence",
  "Facade Texture",
  "Balcony Finish",
  "Clean Line Home",
  "Porch Light Detail",
  "Final Handover"
];

const projectTwoNames = [
  "Foundation Rhythm",
  "Column Grid",
  "Site Morning",
  "Formwork Detail",
  "Rebar Layout",
  "Masonry Progress",
  "Beam Line",
  "Stair Core",
  "Wall Alignment",
  "Plaster Stage",
  "Service Chase",
  "Corner Detail",
  "Roof Prep",
  "Level Check",
  "Open Bay",
  "Finish Base",
  "Texture Trial",
  "Threshold Work",
  "Facade Prep",
  "Site Coordination",
  "Final Touches",
  "Ready for Finish"
];

const buildProjectGallery = (folder, files, names, category) => files.map((file, index) => {
  const title = names[index] || `Madurai Build ${String(index + 1).padStart(2, "0")}`;

  return {
    src: `assets/${folder}/${file}`,
    title,
    location: "Madurai",
    category,
    size: index % 6 === 0 ? "tall" : "",
    alt: `${title} construction photo by SK Builders Madurai`
  };
});

const fallbackGalleryItems = [
  {
    src: "assets/project_1.jpg",
    title: "Evening Residence",
    location: "Madurai",
    category: "completed",
    size: "tall",
    alt: "Completed residential exterior by SK Builders Madurai in Madurai"
  },
  {
    src: "assets/project_2.jpg",
    title: "Villa Concept",
    location: "Madurai",
    category: "concept",
    size: "",
    alt: "Modern villa elevation concept by SK Builders Madurai"
  },
  {
    src: "assets/project_3.jpg",
    title: "Premium Facade",
    location: "Madurai",
    category: "concept",
    size: "",
    alt: "Premium residential facade concept by SK Builders Madurai"
  },
  {
    src: "assets/project_4.jpg",
    title: "Mint Facade Home",
    location: "Madurai",
    category: "completed",
    size: "tall",
    alt: "Completed mint facade residence by SK Builders Madurai"
  },
  {
    src: "assets/project_5.jpg",
    title: "Modern Render",
    location: "Madurai",
    category: "concept",
    size: "",
    alt: "Modern residential elevation render by SK Builders Madurai"
  },
  {
    src: "assets/project_6.jpg",
    title: "Site Completion",
    location: "Madurai",
    category: "ongoing",
    size: "",
    alt: "Residential site completion stage by SK Builders Madurai"
  },
  {
    src: "assets/project_7.jpg",
    title: "Grey Elevation",
    location: "Madurai",
    category: "completed",
    size: "tall",
    alt: "Grey elevation residence completed by SK Builders Madurai"
  },
  {
    src: "assets/project_8.jpg",
    title: "Corner Residence",
    location: "Madurai",
    category: "completed",
    size: "",
    alt: "Corner residence exterior by SK Builders Madurai"
  },
  {
    src: "assets/project_9.jpg",
    title: "Green Accent Concept",
    location: "Madurai",
    category: "concept",
    size: "",
    alt: "Green accent residential concept by SK Builders Madurai"
  },
  {
    src: "assets/project_10.jpg",
    title: "Landscape Residence",
    location: "Madurai",
    category: "concept",
    size: "",
    alt: "Landscape residence concept by SK Builders Madurai"
  },
  {
    src: "assets/project_11.jpg",
    title: "Gate Finish Stage",
    location: "Madurai",
    category: "ongoing",
    size: "tall",
    alt: "Gate and facade finishing stage at SK Builders Madurai project"
  },
  {
    src: "assets/project_12.jpg",
    title: "Compact Homes",
    location: "Madurai",
    category: "completed",
    size: "",
    alt: "Compact residential homes by SK Builders Madurai"
  },
  {
    src: "assets/project_13.jpg",
    title: "Premium Concept",
    location: "Madurai",
    category: "concept",
    size: "",
    alt: "Premium residential concept by SK Builders Madurai"
  },
  {
    src: "assets/project_14.jpg",
    title: "Final Finishing",
    location: "Madurai",
    category: "ongoing",
    size: "tall",
    alt: "Final finishing stage at SK Builders Madurai project"
  }
];

const galleryItems = [
  ...buildProjectGallery("project_1", projectOneFiles, projectOneNames, "completed"),
  ...buildProjectGallery("project_2", projectTwoFiles, projectTwoNames, "ongoing"),
  ...fallbackGalleryItems
];

const whatsappNumber = "918144414434";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const brandLogos = {
  "maha": "assets/brands/maha-cement.jpeg",
  "dalmia": "assets/brands/dalmia-cement.png",
  "ultratech": "assets/brands/ultratech-cement.jpg",
  "dsrm": "assets/brands/dsrm-steel.png",
  "aishwaryam": "assets/brands/aishwaryam-tmt.jpg",
  "jsw": "assets/brands/jsw-steel.webp",
  "dr-fixit": "assets/brands/dr-fixit.jpg",
  "fosroc": "assets/brands/fosroc.jpg",
  "parryware": "assets/brands/parryware.png",
  "jaquar": "assets/brands/jaguar.png",
  "asian-paints": "assets/brands/asian-paints.jpg",
  "kundan": "assets/brands/kundan-cables.avif",
  "finolex-cables": "assets/brands/finolex-cables.png",
  "hifi": "assets/brands/hifi-electric.jpg",
  "legrand": "assets/brands/legrand.png",
  "supreme": "assets/brands/supreme.png",
  "ashirvad": "assets/brands/ashirvad.png",
  "finolex-industries": "assets/brands/finolex-industries.png",
  "sintex": "assets/brands/sintex.png"
};

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

const createFallback = (label) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-label="${label}">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#181818"/>
          <stop offset="0.55" stop-color="#3a3428"/>
          <stop offset="1" stop-color="#d9a441"/>
        </linearGradient>
        <pattern id="p" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="80" height="80" fill="rgba(255,255,255,0.04)"/>
          <path d="M0 0h80M0 40h80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
        </pattern>
      </defs>
      <rect width="1200" height="900" fill="url(#g)"/>
      <rect width="1200" height="900" fill="url(#p)"/>
      <path d="M140 720 380 260l190 260 120-180 370 380Z" fill="rgba(255,255,255,0.12)"/>
      <rect x="116" y="112" width="968" height="676" fill="none" stroke="rgba(255,255,255,0.28)" stroke-width="3"/>
      <text x="600" y="430" fill="#ffffff" text-anchor="middle" font-family="Georgia, serif" font-size="58" font-weight="700">${label}</text>
      <text x="600" y="482" fill="#f0d28e" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="700">SK Builders Madurai</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const attachImageFallbacks = () => {
  $$("img").forEach((img) => {
    if (img.dataset.fallbackReady === "true") return;
    img.dataset.fallbackReady = "true";
    const applyFallback = () => {
      const label = img.dataset.fallbackLabel || img.alt || "SK Builders Madurai";
      img.src = createFallback(label.slice(0, 56));
      img.classList.add("has-fallback");
    };
    img.addEventListener("error", applyFallback, { once: true });
    if (img.complete && img.naturalWidth === 0) applyFallback();
  });
};

const setupBrandLogos = () => {
  if (!document.body.classList.contains("packages-page")) return;

  $$(".brand-spec[data-brand]").forEach((brand) => {
    if (brand.dataset.logoReady === "true") return;

    const key = brand.dataset.brand;
    const src = brandLogos[key];
    const name = brand.textContent.trim();
    brand.dataset.logoReady = "true";
    if (!src) return;

    const chip = document.createElement("span");
    chip.className = "brand-logo-chip";

    const img = document.createElement("img");
    img.src = src;
    img.alt = `${name} logo`;
    img.loading = "lazy";
    img.decoding = "async";
    img.addEventListener("error", () => chip.remove(), { once: true });

    chip.append(img);
    brand.prepend(chip);
  });
};

const setHeaderState = () => {
  const header = $("#siteHeader");
  const backToTop = $(".back-to-top");
  const scrolled = window.scrollY > 24;
  const menuOpen = document.body.classList.contains("menu-open");
  header?.classList.toggle("is-scrolled", scrolled);
  header?.classList.toggle("is-hidden", scrolled && !menuOpen);
  backToTop?.classList.toggle("is-visible", window.scrollY > 700);
};

const setupMobileMenu = () => {
  const toggle = $(".menu-toggle");
  const menu = $("#mobileMenu");
  if (!toggle || !menu) return;

  const openMenu = () => {
    menu.hidden = false;
    requestAnimationFrame(() => menu.classList.add("is-open"));
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation menu");
    document.body.classList.add("menu-open");
    setHeaderState();
  };

  const closeMenu = () => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    document.body.classList.remove("menu-open");
    setHeaderState();
    window.setTimeout(() => {
      if (toggle.getAttribute("aria-expanded") === "false") menu.hidden = true;
    }, 560);
  };

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
  });

  $$("a", menu).forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      toggle.focus();
    }
  });
};

const renderGallery = () => {
  const grid = $("#galleryGrid");
  if (!grid) return;

  grid.innerHTML = galleryItems.map((item, index) => `
    <button
      class="gallery-card reveal ${item.size === "tall" ? "is-tall" : ""}"
      type="button"
      data-category="${item.category}"
      data-index="${index}"
      aria-label="Open ${item.title} photo"
    >
      <span class="image-wrap">
        <img
          src="${item.src}"
          width="900"
          height="${item.size === "tall" ? "1200" : "980"}"
          loading="lazy"
          decoding="async"
          alt="${item.alt}"
          data-fallback-label="${item.title}"
        >
        <span class="gallery-overlay">
          <strong>${item.title}</strong>
          <span>${item.location} / ${item.category}</span>
        </span>
      </span>
    </button>
  `).join("");

  attachImageFallbacks();
  setupGalleryLightbox();
};

const setupGalleryFilters = () => {
  const buttons = $$(".filter-btn");
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      buttons.forEach((btn) => btn.classList.toggle("is-active", btn === button));
      $$(".gallery-card").forEach((card) => {
        const show = filter === "all" || card.dataset.category === filter;
        card.hidden = !show;
      });

      if (window.gsap && window.ScrollTrigger && !prefersReducedMotion) {
        gsap.fromTo(".gallery-card:not([hidden])", { autoAlpha: 0, y: 24 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: "power3.out"
        });
      }
    });
  });
};

const setupGalleryLightbox = () => {
  const lightbox = $("#lightbox");
  const lightboxImg = $("#lightbox img");
  const title = $("#lightboxTitle");
  const meta = $("#lightboxMeta");
  const close = $(".lightbox-close");
  if (!lightbox || !lightboxImg || !title || !meta || !close) return;

  const openLightbox = (item) => {
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    lightboxImg.dataset.fallbackLabel = item.title;
    title.textContent = item.title;
    meta.textContent = `${item.location} / ${item.category}`;
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    close.focus();
  };

  const closeLightbox = () => {
    lightbox.hidden = true;
    lightboxImg.removeAttribute("src");
    document.body.classList.remove("lightbox-open");
  };

  $$(".gallery-card").forEach((card) => {
    card.addEventListener("click", () => {
      const item = galleryItems[Number(card.dataset.index)];
      if (item) openLightbox(item);
    });
  });

  close.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
  });

  lightboxImg.addEventListener("error", () => {
    const label = lightboxImg.dataset.fallbackLabel || "Project Photo";
    lightboxImg.src = createFallback(label.slice(0, 56));
  });
};

const setupQuoteForm = () => {
  const form = $("#quoteForm");
  const status = $("#formStatus");
  if (!form || !status) return;

  const requiredFields = $$("[required]", form);

  requiredFields.forEach((field) => {
    field.addEventListener("input", () => field.classList.remove("is-invalid"));
    field.addEventListener("change", () => field.classList.remove("is-invalid"));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;

    requiredFields.forEach((field) => {
      const empty = !String(field.value).trim();
      field.classList.toggle("is-invalid", empty);
      if (empty) isValid = false;
    });

    if (!isValid) {
      status.textContent = "Please complete the required fields before sending.";
      const firstInvalid = $(".is-invalid", form);
      firstInvalid?.focus();
      return;
    }

    const formData = new FormData(form);
    const lines = [
      "New construction enquiry for SK Builders Madurai",
      "",
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Project Type: ${formData.get("projectType")}`,
      `Approx. Sq.ft: ${formData.get("sqft")}`,
      `Location: ${formData.get("location")}`,
      `Message: ${formData.get("message") || "Not provided"}`
    ];

    status.textContent = "Opening WhatsApp with your project details.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = url;
  });
};

const setupPackagePrefill = () => {
  const projectType = $("#projectType");
  const message = $("#message");
  if (!projectType || !message) return;

  $$(".package-link").forEach((link) => {
    link.addEventListener("click", () => {
      const packageName = link.dataset.package;
      projectType.value = "Turnkey Project";
      message.value = `I would like to enquire about the ${packageName}.`;
    });
  });
};

const setupCursor = () => {
  const cursor = $(".cursor-dot");
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!cursor || !canHover) return;

  window.addEventListener("mousemove", (event) => {
    cursor.style.opacity = "1";
    cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
  }, { passive: true });

  $$("a, button, .magnetic").forEach((element) => {
    element.addEventListener("mouseenter", () => cursor.classList.add("is-active"));
    element.addEventListener("mouseleave", () => cursor.classList.remove("is-active"));
  });
};

const setupMagneticButtons = () => {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!canHover || prefersReducedMotion) return;

  $$(".magnetic").forEach((button) => {
    button.addEventListener("mousemove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      button.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "";
    });
  });
};

const setupGsap = () => {
  if (!window.gsap || !window.ScrollTrigger || prefersReducedMotion) {
    $$(".reveal, .image-reveal").forEach((el) => {
      el.style.opacity = 1;
      el.style.visibility = "visible";
      el.style.transform = "none";
      el.style.clipPath = "none";
    });
    return;
  }

  try {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".page-loader", { autoAlpha: 0 });

    gsap.timeline({ defaults: { ease: "power3.out" } })
      .from(".hero .reveal, .page-hero .reveal", {
        y: 26,
        duration: 0.58,
        stagger: 0.07,
        clearProps: "transform"
      })
      .from(".hero .image-reveal", {
        clipPath: "inset(12% 0 12% 0)",
        duration: 0.82,
        clearProps: "clipPath"
      }, "-=0.48");

    gsap.utils.toArray(".section .reveal").forEach((element) => {
      if (
        element.closest(".hero") ||
        element.closest(".page-hero") ||
        element.classList.contains("package-card") ||
        element.classList.contains("process-step") ||
        element.classList.contains("stat-card") ||
        element.classList.contains("service-card") ||
        element.classList.contains("gallery-card") ||
        element.classList.contains("package-summary-card") ||
        element.classList.contains("comparison-table-wrap") ||
        element.classList.contains("package-cta-inner") ||
        element.closest(".project-preview-grid") ||
        element.closest(".about-points") ||
        element.classList.contains("quick-card")
      ) return;

      gsap.from(element, {
        autoAlpha: 0,
        y: 34,
        duration: 0.72,
        ease: "power3.out",
        clearProps: "opacity,visibility,transform",
        scrollTrigger: {
          trigger: element,
          start: "top 86%",
          once: true
        }
      });
    });

    gsap.utils.toArray(".section .image-reveal").forEach((element) => {
      if (element.closest(".hero")) return;

      gsap.from(element, {
        autoAlpha: 0,
        clipPath: "inset(14% 0 14% 0)",
        duration: 0.9,
        ease: "power3.out",
        clearProps: "opacity,visibility,clipPath",
        scrollTrigger: {
          trigger: element,
          start: "top 82%",
          once: true
        }
      });
    });

    gsap.utils.toArray("[data-parallax]").forEach((element) => {
      if (element.closest(".hero")) return;

      const image = element.querySelector("img");
      if (!image) return;

      const strength = Number(element.dataset.parallax || 0.08) * 100;

      gsap.to(image, {
        yPercent: strength,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    if ($(".packages-grid")) {
      gsap.from(".package-card", {
        y: 44,
        autoAlpha: 0,
        duration: 0.68,
        stagger: 0.09,
        ease: "power3.out",
        clearProps: "opacity,visibility,transform",
        scrollTrigger: {
          trigger: ".packages-grid",
          start: "top 82%",
          once: true
        }
      });
    }

    if ($(".process-timeline")) {
      gsap.from(".process-step", {
        y: 34,
        autoAlpha: 0,
        duration: 0.62,
        stagger: 0.08,
        ease: "power3.out",
        clearProps: "opacity,visibility,transform",
        scrollTrigger: {
          trigger: ".process-timeline",
          start: "top 84%",
          once: true
        }
      });
    }

    if ($(".about-points")) {
      gsap.from(".about-points span", {
        y: 26,
        autoAlpha: 0,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.07,
        clearProps: "opacity,visibility,transform",
        scrollTrigger: {
          trigger: ".about-points",
          start: "top 82%",
          once: true
        }
      });
    }

    if ($(".stat-grid")) {
      gsap.from(".stat-card", {
        y: 44,
        autoAlpha: 0,
        scale: 0.94,
        duration: 0.85,
        ease: "back.out(1.25)",
        stagger: 0.09,
        clearProps: "opacity,visibility,transform",
        scrollTrigger: {
          trigger: ".stat-grid",
          start: "top 84%",
          once: true
        }
      });
    }

    if ($(".quick-grid")) {
      gsap.from(".quick-card", {
        y: 38,
        autoAlpha: 0,
        rotateX: 8,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        clearProps: "opacity,visibility,transform",
        scrollTrigger: {
          trigger: ".quick-grid",
          start: "top 84%",
          once: true
        }
      });
    }

    if ($(".project-preview-grid")) {
      gsap.from(".project-preview-card", {
        y: 46,
        autoAlpha: 0,
        scale: 0.94,
        rotate: 1.2,
        duration: 0.86,
        ease: "back.out(1.18)",
        stagger: 0.1,
        clearProps: "opacity,visibility,transform",
        scrollTrigger: {
          trigger: ".project-preview-grid",
          start: "top 84%",
          once: true
        }
      });
    }

    if ($(".service-grid")) {
      gsap.from(".service-card", {
        y: 38,
        autoAlpha: 0,
        scale: 0.96,
        duration: 0.76,
        ease: "power3.out",
        stagger: 0.07,
        clearProps: "opacity,visibility,transform",
        scrollTrigger: {
          trigger: ".service-grid",
          start: "top 84%",
          once: true
        }
      });
    }

    if ($(".gallery-grid")) {
      gsap.from(".gallery-card", {
        y: 42,
        autoAlpha: 0,
        scale: 0.96,
        duration: 0.68,
        ease: "power3.out",
        stagger: 0.035,
        clearProps: "opacity,visibility,transform",
        scrollTrigger: {
          trigger: ".gallery-grid",
          start: "top 88%",
          once: true
        }
      });
    }

    if ($(".contact-grid")) {
      gsap.from(".contact-grid > *, .map-wrapper", {
        y: 36,
        autoAlpha: 0,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.09,
        clearProps: "opacity,visibility,transform",
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 84%",
          once: true
        }
      });
    }

    if ($(".site-footer")) {
      gsap.from(".footer-grid > *, .footer-bottom", {
        y: 28,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        clearProps: "opacity,visibility,transform",
        scrollTrigger: {
          trigger: ".site-footer",
          start: "top 90%",
          once: true
        }
      });
    }

    if ($(".packages-page")) {
      if ($(".package-summary-grid")) {
        gsap.from(".package-summary-card", {
          y: 30,
          autoAlpha: 0,
          duration: 0.72,
          ease: "power3.out",
          stagger: 0.09,
          clearProps: "opacity,visibility,transform",
          scrollTrigger: {
            trigger: ".package-summary-grid",
            start: "top 84%",
            once: true
          }
        });
      }

      gsap.utils.toArray(".comparison-section").forEach((section) => {
        gsap.from(section, {
          y: 30,
          autoAlpha: 0,
          duration: 0.72,
          ease: "power3.out",
          clearProps: "opacity,visibility,transform",
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            once: true
          }
        });
      });

      if ($(".brand-logo-chip")) {
        gsap.from(".brand-logo-chip", {
          y: 12,
          autoAlpha: 0,
          duration: 0.42,
          ease: "power3.out",
          stagger: 0.018,
          clearProps: "opacity,visibility,transform",
          scrollTrigger: {
            trigger: ".packages-dark",
            start: "top 78%",
            once: true
          }
        });
      }
    }

  } catch (error) {
    $$(".reveal, .image-reveal").forEach((el) => {
      el.style.opacity = 1;
      el.style.visibility = "visible";
      el.style.transform = "none";
      el.style.clipPath = "none";
    });
  }
};

const setupBackToTop = () => {
  $(".back-to-top")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
  $("#year").textContent = new Date().getFullYear();
  renderGallery();
  setupBrandLogos();
  attachImageFallbacks();
  setupGalleryFilters();
  setupMobileMenu();
  setupQuoteForm();
  setupPackagePrefill();
  setupCursor();
  setupMagneticButtons();
  setupBackToTop();
  setupGsap();
  setHeaderState();
});

window.addEventListener("scroll", setHeaderState, { passive: true });
