document.addEventListener("DOMContentLoaded", function() {
    var cookieBanner = document.getElementById("cookie-banner");
    var acceptButton = document.getElementById("accept-button");

    // Vérifie si l'utilisateur a déjà accepté les cookies
    if (localStorage.getItem("cookieAccepted") === "true") {
        cookieBanner.style.display = "none";
    } else {
        cookieBanner.style.display = "flex";
    }

    // Ferme la bannière et enregistre l'acceptation
    acceptButton.onclick = function() {
        cookieBanner.style.display = "none";
        localStorage.setItem("cookieAccepted", "true");
    };
});
// Fonction pour basculer le menu
function toggleMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    const burgerMenu = document.querySelector('.burger-menu');
    mobileNav.classList.toggle('active');
    burgerMenu.classList.toggle('cross');
}

// Cloner les liens de navigation
document.querySelectorAll('.nav-links-container').forEach(container => {
    container.innerHTML = `
        <nav>
            <a class="nav-link" href="#accueil">Accueil</a>
            <a class="nav-link" href="#presentation">Présentation</a>
            <a class="nav-link" href="#competences">Compétences</a>
            <a class="nav-link" href="#realisations">Réalisations</a>
            <a class="nav-link" href="#contact">Contact</a>
        </nav>
    `;
});

// Ajouter des événements de clic pour la navigation 
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        const mobileNav = document.querySelector('.mobile-nav');
        const burgerMenu = document.querySelector('.burger-menu');
        mobileNav.classList.remove('active');
        burgerMenu.classList.remove('cross');
    });
});

// Ajouter des événements de clic pour une navigation fluide
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = window.innerWidth * 0.06;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

(function() {
    fetch('/.netlify/functions/getEmailJsUserId')
        .then(response => response.json())
        .then(data => {
            emailjs.init(data.userId);
        })
        .catch(error => console.error('Error fetching EmailJS user ID:', error));
})();
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        emailjs.sendForm('service_b96xxab', 'template_oj6mjek', this)
            .then(function() {
                alert('Message envoyé avec succès!');
                location.reload(); 
            }, function(error) {
                alert('Une erreur est survenue. Veuillez réessayer.');
            });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Récupération des éléments modales et des boutons de fermeture
    var modales = {
        legal: document.getElementById("legales"),
        terms: document.getElementById("conditions"),
        confidential: document.getElementById("confidential"),
        cookie: document.getElementById("cookie-modal")
    };

    var openLegalModal = document.getElementById("open-legal-modal");
    var openTermsModal = document.getElementById("open-terms-modal");
    var openConfidentialModal = document.getElementById("open-confidential-modal")
    var openCookieModal = document.getElementById("open-cookie-modal");

    var closeButtons = document.getElementsByClassName("close-legal");

    // Ouvrir la modale Mentions Légales
    openLegalModal.onclick = function(event) {
        event.preventDefault();
        modales.legal.style.display = "block";
    };

    // Ouvrir la modale Conditions Générales
    openTermsModal.onclick = function(event) {
        event.preventDefault();
        modales.terms.style.display = "block";
    };

    openConfidentialModal.onclick = function(event) {
        event.preventDefault();
        modales.confidential.style.display = "block";
    };

    // Ouvrir la modale Politique des Cookies
    openCookieModal.onclick = function(event) {
        event.preventDefault();
        modales.cookie.style.display = "block";
    };

    // Fermer les modales en cliquant sur les boutons de fermeture
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function() {
            for (var key in modales) {
                modales[key].style.display = "none";
            }
        }
    }

    // Fermer les modales en cliquant en dehors
    window.onclick = function(event) {
        for (var key in modales) {
            if (event.target == modales[key]) {
                modales[key].style.display = "none";
            }
        }
    }
});