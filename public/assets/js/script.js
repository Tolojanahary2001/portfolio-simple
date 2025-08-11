document.addEventListener("DOMContentLoaded", function () {
    // === 1. Activation effet AOS ===
    AOS.init({
        duration: 800,
        once: true
    });

    // === 2. Script pour changer fa-regular en fa-solid pour le lien actif ===
    const navLinks = document.querySelectorAll('.nav-link');
    function updateIcons() {
        navLinks.forEach(link => {
            const icon = link.querySelector('i');
            if (!icon) return;

            if (link.classList.contains('active')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
            } else {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
            }
        });
    }
    document.addEventListener('scroll', updateIcons);

    // === 3. Effet texte tapé ===
    const texts = ["Développeur Front-end", "Web Designer UI/UX", "Intégrateur"];
    let index = 0, charIndex = 0, isDeleting = false;
    const typedTextEl = document.getElementById("typedText");

    function typeEffect() {
        const currentText = texts[index];

        if (!isDeleting && charIndex <= currentText.length) {
            typedTextEl.textContent = currentText.substring(0, charIndex);
            charIndex++;
            setTimeout(typeEffect, 100);
        } else if (isDeleting && charIndex >= 0) {
            typedTextEl.textContent = currentText.substring(0, charIndex);
            charIndex--;
            setTimeout(typeEffect, 50);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) index = (index + 1) % texts.length;
            setTimeout(typeEffect, 1000);
        }
    }
    typeEffect();

    // === 4. Animation des barres de progression ===
    function animateProgressBars() {
        const section = document.querySelector("#technologie");
        const bars = section.querySelectorAll(".progress-bar");
        let sectionVisible = false;

        function isInViewport(el) {
            const rect = el.getBoundingClientRect();
            return rect.top < window.innerHeight && rect.bottom > 0;
        }

        function triggerAnimation() {
            if (sectionVisible) return;
            if (isInViewport(section)) {
                sectionVisible = true;
                bars.forEach(bar => {
                    const target = parseInt(bar.getAttribute("data-percentage"));
                    bar.style.transition = "width 2.5s ease-in-out";
                    bar.style.width = target + "%";
                    bar.setAttribute("aria-valuenow", target);
                });
            }
        }

        document.addEventListener("scroll", triggerAnimation);
        window.addEventListener("load", triggerAnimation);
    }
    animateProgressBars();

    // === 5. Scroll nav-link activation ===
    // === Scroll nav-link activation ===
function updateActiveNav() {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    const menuItems = document.querySelectorAll('nav .nav-link');
    menuItems.forEach(item => item.classList.remove('active'));
  
    const isInSection = (sectionId) => {
      const section = document.querySelector(sectionId);
      if (!section) return false;
      const sectionTop = section.offsetTop - 80; // ajuster si nécessaire
      const sectionBottom = sectionTop + section.offsetHeight;
      return scrollPos >= sectionTop && scrollPos < sectionBottom;
    };
  
    if (isInSection('#hero')) {
      document.querySelectorAll('nav a[href="#hero"]').forEach(link => link.classList.add('active'));
    } else if (isInSection('#about')) {
      document.querySelectorAll('nav a[href="#about"]').forEach(link => link.classList.add('active'));
    } else if (isInSection('#portfolio')) {
      document.querySelectorAll('nav a[href="#portfolio"]').forEach(link => link.classList.add('active'));
    } else if (isInSection('#technologie')) {
      document.querySelectorAll('nav a[href="#technologie"]').forEach(link => link.classList.add('active'));
    } else if (isInSection('#contact')) {
      document.querySelectorAll('nav a[href="#contact"]').forEach(link => link.classList.add('active'));
    } else {
      // fallback si besoin
      // document.querySelectorAll('nav a[href="#"]').forEach(link => link.classList.add('active'));
    }
  
    // mets à jour aussi les icônes pour correspondre aux classes active
    updateIcons();
  }
  
  // exécuter sur scroll (passive pour perf), sur load et immédiat après DOM ready
  document.addEventListener('scroll', updateActiveNav, { passive: true });
  window.addEventListener('load', updateActiveNav);
  updateActiveNav(); // <-- CET APPEL fait que "Home" sera actif dès le chargement
  

    // === 6. Effet scroller infini ===
    const scrollers = document.querySelectorAll(".scroller");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);
            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    }
});
