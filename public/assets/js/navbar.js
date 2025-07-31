
        // scroll nav-link activation
        document.addEventListener('scroll', function () {
            // Obtenez la hauteur actuelle du défilement
            const scrollPos = window.scrollY || document.documentElement.scrollTop;

            // Sélectionnez tous les liens de navigation dans les deux navbars
            const menuItems = document.querySelectorAll('nav .nav-link');

            // Désactivez tous les liens actifs
            menuItems.forEach(function (item) {
                item.classList.remove('active');
            });

            // Fonction pour vérifier si on est dans une section donnée
            const isInSection = (sectionId) => {
                const section = document.querySelector(sectionId);
                const sectionTop = section.offsetTop - 80; // Ajustez ici pour anticiper
                const sectionBottom = sectionTop + section.offsetHeight;
                return scrollPos >= sectionTop && scrollPos < sectionBottom;
            };

            // Vérifiez la position des sections et activez les bons liens pour les deux navbars
            if (isInSection('#hero')) {
                document.querySelectorAll('nav a[href="#hero"]').forEach(function (link) {
                    link.classList.add('active');
                });
            }
            else if (isInSection('#about')) {
                document.querySelectorAll('nav a[href="#about"]').forEach(function (link) {
                    link.classList.add('active');
                });
            }
            else if (isInSection('#portfolio')) {
                document.querySelectorAll('nav a[href="#portfolio"]').forEach(function (link) {
                    link.classList.add('active');
                });
            }
            else if (isInSection('#technologie')) {
                document.querySelectorAll('nav a[href="#technologie"]').forEach(function (link) {
                    link.classList.add('active');
                });
            }  
            else if (isInSection('#contact')) {
                document.querySelectorAll('nav a[href="#contact"]').forEach(function (link) {
                    link.classList.add('active');
                });
            }
            else {
                document.querySelectorAll('nav a[href="#"]').forEach(function (link) {
                    link.classList.add('active');
                });
}
            
        });