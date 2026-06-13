(() => {
  const { $, $$, createFallback, attachImageFallbacks, prefersReducedMotion, registerInit, registerAnimations } = window.SKBuilders;

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

  const buildProjectGallery = (folder, files, names, category) => files.map((file, index) => {
    const title = names[index] || "Madurai Build " + String(index + 1).padStart(2, "0");
    return {
      src: "assets/" + folder + "/" + file,
      title,
      location: "Madurai",
      category,
      size: index % 6 === 0 ? "tall" : "",
      alt: title + " construction photo by SK Builders Madurai"
    };
  });

  const galleryItems = [
    ...buildProjectGallery("project_1", projectOneFiles, projectOneNames, "completed"),
    ...buildProjectGallery("project_2", projectTwoFiles, projectTwoNames, "ongoing"),
    ...fallbackGalleryItems
  ];

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
      meta.textContent = item.location + " / " + item.category;
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
      lightboxImg.src = createFallback(label);
    });
  };

  const renderGallery = () => {
    const grid = $("#galleryGrid");
    if (!grid) return;
    grid.innerHTML = galleryItems.map((item, index) => {
      return [
        '<button class="gallery-card reveal ' + (item.size === "tall" ? "is-tall" : "") + '" type="button" data-category="' + item.category + '" data-index="' + index + '" aria-label="Open ' + item.title + ' photo">',
        '<span class="image-wrap">',
        '<img src="' + item.src + '" width="900" height="' + (item.size === "tall" ? "1200" : "980") + '" loading="lazy" decoding="async" alt="' + item.alt + '" data-fallback-label="' + item.title + '">',
        '<span class="gallery-overlay"><strong>' + item.title + '</strong><span>' + item.location + ' / ' + item.category + '</span></span>',
        '</span>',
        '</button>'
      ].join('');
    }).join('');
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
          gsap.fromTo(".gallery-card:not([hidden])", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.04, ease: "power3.out" });
        }
      });
    });
  };

  registerInit(() => {
    renderGallery();
    setupGalleryFilters();
  });

  registerAnimations(({ gsap }) => {
    if ($(".gallery-grid")) {
      gsap.from(".gallery-card", { y: 42, autoAlpha: 0, scale: 0.96, duration: 0.68, ease: "power3.out", stagger: 0.035, clearProps: "opacity,visibility,transform", scrollTrigger: { trigger: ".gallery-grid", start: "top 88%", once: true } });
    }
  });
})();
