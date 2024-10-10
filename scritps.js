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
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
   
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 800
});

document.querySelectorAll('.swiper-slide').forEach(slide => {
    slide.addEventListener('click', function() {
        var title = this.getAttribute('data-title');
        var description = this.getAttribute('data-description');
        var descriptionText = this.getAttribute('data-description-text');
        var problems = this.getAttribute('data-problems');
        var problemsText = this.getAttribute('data-problems-text');
        var competences = this.getAttribute('data-competences');
        var competencesText = this.getAttribute('data-competences-text');
        var link = this.getAttribute('data-link');
        var linkText = this.getAttribute('data-link-text');
        var image = this.getAttribute('data-image');
        
        console.log('Title:', title);
        console.log('Description:', description);
        console.log('DescriptionText:', descriptionText);
        console.log('Problems:',problems);
        console.log('ProblemsText:', problemsText);
        console.log('Competences:', competences);
        console.log('CompetencesText:', competencesText);
        console.log('Link:', link);
        console.log('LinkText:', linkText);
        console.log('Image:', image);
        
        var modal = document.getElementById('modal');
        var modalTitle = document.getElementById('modal-title');
        var modalDescription = document.getElementById('modal-description');
        var modalDescriptionText = document.getElementById('modal-description-text');
        var modalProblems = document.getElementById('modal-problems');
        var modalProblemsText = document.getElementById('modal-problems-text');
        var modalCompetences = document.getElementById('modal-competences');
        var modalCompetencesText = document.getElementById('modal-competences-text');
        var modalLink = document.getElementById('modal-link');
        var modalProjectLink = document.getElementById('modal-project-link');
        var modalImage = document.getElementById('modal-image');
        
        if (modalTitle && modalDescription && modalDescriptionText && modalProblems && modalProblemsText
            &&modalCompetences &&modalCompetencesText &&modalLink &&modalProjectLink && modalImage ) {
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalDescriptionText.innerHTML = descriptionText;
            modalProblems.textContent = problems;
            modalProblemsText.innerHTML = problemsText;
            modalCompetences.textContent = competences;
            modalCompetencesText.innerHTML = competencesText;
            modalProjectLink.textContent = "Lien du projet";
            modalProjectLink.href = linkText;
            modalImage.src = image;
            modal.style.display = "block";
        } else {
            console.error('Un ou plusieurs éléments de la modale sont introuvables.');
        }
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

document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.swiper-slide');
    slides.forEach(function(slide) {
        var linkElement = slide.querySelector('#project-link');
        var linkText = slide.getAttribute('data-link-text');
        var linkURL = slide.getAttribute('data-link-text');
        if (linkElement && linkText && linkURL) {
            linkElement.textContent = linkText;
            linkElement.href = linkURL;
        }
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