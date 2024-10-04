
(function() {
    emailjs.init("_-cslyDMgul-VWq-a"); // Remplace "_-cslyDMgul-VWq-a" par ta clé publique EmailJS
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
                location.reload(); // Recharge la page
            }, function(error) {
                alert('Une erreur est survenue. Veuillez réessayer.');
            });
    });
});
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

// Gestion des modales
document.querySelectorAll('.swiper-slide').forEach(slide => {
    slide.addEventListener('click', function() {
        var content = this.getAttribute('data-content');
        var modal = document.getElementById('modal');
        var modalText = document.getElementById('modal-text');
        modalText.textContent = content;
        modal.style.display = "block";
    });
});

document.querySelector('.close').addEventListener('click', function() {
    var modal = this.closest('.modal');
    modal.style.display = "none";
});

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
});

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        var modal = this.closest('.modal');
        modal.style.display = "none";
    });
});

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
});