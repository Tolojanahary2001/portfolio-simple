  const texts = ["Développeur Front-end", "Web Designer UI/UX", "Intégrateur"];
  let index = 0; 
  let charIndex = 0;
  let isDeleting = false;

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

  document.addEventListener("DOMContentLoaded", typeEffect);

      
      function animateProgressBars() {
          const section = document.querySelector("#technologie");
          const bars = section.querySelectorAll(".progress-bar");

          let sectionVisible = false;

          function isInViewport(el) {
              const rect = el.getBoundingClientRect();
              return (
                  rect.top < window.innerHeight && rect.bottom > 0
              );
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