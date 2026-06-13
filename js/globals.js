(() => {
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));
  const whatsappNumber = "918144414434";
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const initCallbacks = [];
  const animationCallbacks = [];

  const createFallback = (label) => {
    const safeLabel = String(label || "SK Builders Madurai").slice(0, 56);
    const svg = [
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-label="' + safeLabel + '">',
      '<defs>',
      '<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#181818"/><stop offset="0.55" stop-color="#3a3428"/><stop offset="1" stop-color="#d9a441"/></linearGradient>',
      '<pattern id="p" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="80" height="80" fill="rgba(255,255,255,0.04)"/><path d="M0 0h80M0 40h80" stroke="rgba(255,255,255,0.12)" stroke-width="2"/></pattern>',
      '</defs>',
      '<rect width="1200" height="900" fill="url(#g)"/><rect width="1200" height="900" fill="url(#p)"/>',
      '<path d="M140 720 380 260l190 260 120-180 370 380Z" fill="rgba(255,255,255,0.12)"/>',
      '<rect x="116" y="112" width="968" height="676" fill="none" stroke="rgba(255,255,255,0.28)" stroke-width="3"/>',
      '<text x="600" y="430" fill="#ffffff" text-anchor="middle" font-family="Georgia, serif" font-size="58" font-weight="700">' + safeLabel + '</text>',
      '<text x="600" y="482" fill="#f0d28e" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="700">SK Builders Madurai</text>',
      '</svg>'
    ].join('');
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
  };

  const attachImageFallbacks = () => {
    $$("img").forEach((img) => {
      if (img.dataset.fallbackReady === "true") return;
      img.dataset.fallbackReady = "true";
      const applyFallback = () => {
        const label = img.dataset.fallbackLabel || img.alt || "SK Builders Madurai";
        img.src = createFallback(label);
        img.classList.add("has-fallback");
      };
      img.addEventListener("error", applyFallback, { once: true });
      if (img.complete && img.naturalWidth === 0) applyFallback();
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

  const setupCursor = () => {
    const cursor = $(".cursor-dot");
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!cursor || !canHover) return;

    window.addEventListener("mousemove", (event) => {
      cursor.style.opacity = "1";
      cursor.style.transform = 'translate3d(' + event.clientX + 'px, ' + event.clientY + 'px, 0) translate(-50%, -50%)';
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
        button.style.transform = 'translate(' + (x * 0.12) + 'px, ' + (y * 0.18) + 'px)';
      });
      button.addEventListener("mouseleave", () => {
        button.style.transform = "";
      });
    });
  };

  const revealFallback = () => {
    $$(".reveal, .image-reveal").forEach((el) => {
      el.style.opacity = 1;
      el.style.visibility = "visible";
      el.style.transform = "none";
      el.style.clipPath = "none";
    });
  };

  const setupGsap = () => {
    if (!window.gsap || !window.ScrollTrigger || prefersReducedMotion) {
      revealFallback();
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
          element.classList.contains("process-step") ||
          element.classList.contains("stat-card") ||
          element.classList.contains("service-card") ||
          element.classList.contains("gallery-card") ||
          element.classList.contains("package-summary-card") ||
          element.classList.contains("comparison-table-wrap") ||
          element.classList.contains("package-cta-inner") ||
          element.classList.contains("paint-panel") ||
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
          scrollTrigger: { trigger: element, start: "top 86%", once: true }
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
          scrollTrigger: { trigger: element, start: "top 82%", once: true }
        });
      });

      animationCallbacks.forEach((callback) => callback({ gsap, ScrollTrigger, $, $$ }));

      if ($(".site-footer")) {
        gsap.from(".footer-grid > *, .footer-bottom", {
          y: 28,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          clearProps: "opacity,visibility,transform",
          scrollTrigger: { trigger: ".site-footer", start: "top 90%", once: true }
        });
      }
    } catch (error) {
      revealFallback();
    }
  };

  const setupBackToTop = () => {
    $(".back-to-top")?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  };

  const registerInit = (callback) => initCallbacks.push(callback);
  const registerAnimations = (callback) => animationCallbacks.push(callback);

  window.SKBuilders = {
    $,
    $$,
    whatsappNumber,
    prefersReducedMotion,
    createFallback,
    attachImageFallbacks,
    registerInit,
    registerAnimations,
    setHeaderState,
    revealFallback
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();

    initCallbacks.forEach((callback) => callback());
    attachImageFallbacks();
    setupMobileMenu();
    setupCursor();
    setupMagneticButtons();
    setupBackToTop();
    setupGsap();
    setHeaderState();
    window.addEventListener("scroll", setHeaderState, { passive: true });
  });
})();
