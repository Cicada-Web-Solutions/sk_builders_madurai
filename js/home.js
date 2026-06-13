(() => {
  const { $, $$, whatsappNumber, registerInit, registerAnimations } = window.SKBuilders;

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
        $(".is-invalid", form)?.focus();
        return;
      }

      const formData = new FormData(form);
      const lines = [
        "New construction enquiry for SK Builders Madurai",
        "",
        "Name: " + formData.get("name"),
        "Phone: " + formData.get("phone"),
        "Project Type: " + formData.get("projectType"),
        "Approx. Sq.ft: " + formData.get("sqft"),
        "Location: " + formData.get("location"),
        "Message: " + (formData.get("message") || "Not provided")
      ];

      status.textContent = "Opening WhatsApp with your project details.";
      window.location.href = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(lines.join("\n"));
    });
  };

  registerInit(() => {
    if (!document.querySelector("#quoteForm")) return;
    setupQuoteForm();
  });

  registerAnimations(({ gsap }) => {
    if ($(".process-timeline")) {
      gsap.from(".process-step", { y: 34, autoAlpha: 0, duration: 0.62, stagger: 0.08, ease: "power3.out", clearProps: "opacity,visibility,transform", scrollTrigger: { trigger: ".process-timeline", start: "top 84%", once: true } });
    }
    if ($(".about-points")) {
      gsap.from(".about-points span", { y: 26, autoAlpha: 0, duration: 0.75, ease: "power3.out", stagger: 0.07, clearProps: "opacity,visibility,transform", scrollTrigger: { trigger: ".about-points", start: "top 82%", once: true } });
    }
    if ($(".stat-grid")) {
      gsap.from(".stat-card", { y: 44, autoAlpha: 0, scale: 0.94, duration: 0.85, ease: "back.out(1.25)", stagger: 0.09, clearProps: "opacity,visibility,transform", scrollTrigger: { trigger: ".stat-grid", start: "top 84%", once: true } });
    }
    if ($(".quick-grid")) {
      gsap.from(".quick-card", { y: 38, autoAlpha: 0, rotateX: 8, duration: 0.8, ease: "power3.out", stagger: 0.08, clearProps: "opacity,visibility,transform", scrollTrigger: { trigger: ".quick-grid", start: "top 84%", once: true } });
    }
    if ($(".project-preview-grid")) {
      gsap.from(".project-preview-card", { y: 46, autoAlpha: 0, scale: 0.94, rotate: 1.2, duration: 0.86, ease: "back.out(1.18)", stagger: 0.1, clearProps: "opacity,visibility,transform", scrollTrigger: { trigger: ".project-preview-grid", start: "top 84%", once: true } });
    }
    if ($(".service-grid")) {
      gsap.from(".service-card", { y: 38, autoAlpha: 0, scale: 0.96, duration: 0.76, ease: "power3.out", stagger: 0.07, clearProps: "opacity,visibility,transform", scrollTrigger: { trigger: ".service-grid", start: "top 84%", once: true } });
    }
    if ($(".contact-grid")) {
      gsap.from(".contact-grid > *, .map-wrapper", { y: 36, autoAlpha: 0, duration: 0.75, ease: "power3.out", stagger: 0.09, clearProps: "opacity,visibility,transform", scrollTrigger: { trigger: ".contact-grid", start: "top 84%", once: true } });
    }
  });
})();
