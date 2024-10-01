
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