(() => {
  const { $, $$, registerInit, registerAnimations } = window.SKBuilders;

  const brandLogos = {
    "maha": "assets/brands/maha-cement.png",
    "dalmia": "assets/brands/dalmia-cement.png",
    "ultratech": "assets/brands/ultratech-cement.png",
    "dsrm": "assets/brands/dsrm-steel.png",
    "aishwaryam": "assets/brands/aishwaryam-tmt.png",
    "jsw": "assets/brands/jsw-steel.png",
    "dr-fixit": "assets/brands/dr-fixit.png",
    "fosroc": "assets/brands/fosroc.png",
    "parryware": "assets/brands/parryware.png",
    "jaquar": "assets/brands/jaguar.png",
    "jaguar": "assets/brands/jaguar.png",
    "asian-paints": "assets/brands/asian-paints.png",
    "kundan": "assets/brands/kundan-cables.png",
    "finolex-cables": "assets/brands/finolex-cables.png",
    "hifi": "assets/brands/hifi-electric.png",
    "legrand": "assets/brands/legrand.png",
    "supreme": "assets/brands/supreme.png",
    "ashirvad": "assets/brands/ashirvad.png",
    "finolex-industries": "assets/brands/finolex-industries.png",
    "sintex": "assets/brands/sintex.png"
  };

  const setupBrandLogos = () => {
    if (!document.body.classList.contains("packages-page")) return;

    $$(".brand-spec[data-brand]").forEach((brand) => {
      if (brand.dataset.logoReady === "true") return;
      const key = brand.dataset.brand;
      const src = brandLogos[key];
      const name = brand.textContent.trim();
      brand.dataset.logoReady = "true";
      brand.setAttribute("aria-label", name);
      brand.setAttribute("title", name);
      if (!src) return;

      brand.classList.add("has-logo");
      brand.textContent = "";

      const chip = document.createElement("span");
      chip.className = "brand-logo-chip";
      const img = document.createElement("img");
      img.src = src;
      img.alt = name + " logo";
      img.loading = "eager";
      img.decoding = "async";
      img.dataset.fallbackReady = "true";
      img.addEventListener("error", () => {
        chip.remove();
        brand.classList.remove("has-logo");
        brand.textContent = name;
        brand.setAttribute("aria-label", name);
        brand.setAttribute("title", name);
      }, { once: true });
      chip.append(img);
      brand.append(chip);
    });
  };

  registerInit(setupBrandLogos);

  registerAnimations(({ gsap }) => {
    if (!document.body.classList.contains("packages-page")) return;
    if ($(".package-summary-grid")) {
      gsap.from(".package-summary-card", { y: 30, autoAlpha: 0, duration: 0.72, ease: "power3.out", stagger: 0.09, clearProps: "opacity,visibility,transform", scrollTrigger: { trigger: ".package-summary-grid", start: "top 84%", once: true } });
    }
    gsap.utils.toArray(".comparison-section").forEach((section) => {
      gsap.from(section, { y: 30, autoAlpha: 0, duration: 0.72, ease: "power3.out", clearProps: "opacity,visibility,transform", scrollTrigger: { trigger: section, start: "top 88%", once: true } });
    });
    if ($(".brand-logo-chip")) {
      gsap.from(".brand-logo-chip", { y: 12, autoAlpha: 0, duration: 0.42, ease: "power3.out", stagger: 0.018, clearProps: "opacity,visibility,transform", scrollTrigger: { trigger: ".packages-dark", start: "top 78%", once: true } });
    }
  });
})();
