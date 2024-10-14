document.addEventListener("DOMContentLoaded", function() {
    var cookieBanner = document.getElementById("cookie-banner");
    var acceptButton = document.getElementById("accept-button");

    // Vérifie si l'utilisateur a déjà accepté
    if (!localStorage.getItem("cookieAccepted")) {
        cookieBanner.style.display = "flex";
    }

    // Ferme la bannière et enregistre l'acceptation
    acceptButton.onclick = function() {
        cookieBanner.style.display = "none";
        localStorage.setItem("cookieAccepted", "true");
    };
});


function toggleMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    const burgerMenu = document.querySelector('.burger-menu');
    mobileNav.classList.toggle('active');
    burgerMenu.classList.toggle('cross'); 
}
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        const mobileNav = document.querySelector('.mobile-nav');
        const burgerMenu = document.querySelector('.burger-menu');
        mobileNav.classList.remove('active');
        burgerMenu.classList.remove('cross'); 
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
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = window.innerWidth * 0.06; // 6vw en pixels
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


var modal = document.getElementById("legal-modal");
var btn = document.getElementById("open-modal");
var span = document.getElementsByClassName("close-legales")[0];

// Ouvrir la modale
btn.onclick = function() {
    modal.style.display = "block";
}

// Fermer la modale
span.onclick = function() {
    modal.style.display = "none";
}

// Fermer la modale quand on clique en dehors de celle-ci
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}