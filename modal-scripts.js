document.addEventListener('DOMContentLoaded', function() {
let currentIndex = 0;
const slides = document.querySelectorAll('.swiper-slide');

function showProject(index) {
    console.log('Afficher le projet à l\'index:', index);
    const slide = slides[index];
    if (!slide) {
        console.error('Slide introuvable à l\'index:', index);
        return;
    }
    const title = slide.getAttribute('data-title');
    const description = slide.getAttribute('data-description');
    const descriptionText = slide.getAttribute('data-description-text');
    const problems = slide.getAttribute('data-problems');
    const problemsText = slide.getAttribute('data-problems-text');
    const competences = slide.getAttribute('data-competences');
    const competencesText = slide.getAttribute('data-competences-text');
    const link = slide.getAttribute('data-link');
    const linkText = slide.getAttribute('data-link-text');
    const image = slide.getAttribute('data-image');

    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-description-text').innerHTML = descriptionText;
    document.getElementById('modal-problems').textContent = problems;
    document.getElementById('modal-problems-text').innerHTML = problemsText;
    document.getElementById('modal-competences').textContent = competences;
    document.getElementById('modal-competences-text').innerHTML = competencesText;
    document.getElementById('modal-project-link').href = linkText;
    document.getElementById('modal-image').src = image;
    document.getElementById('modal').style.display = "block";
}

document.getElementById('prev-project').addEventListener('click', function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    showProject(currentIndex);
});

document.getElementById('next-project').addEventListener('click', function() {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    showProject(currentIndex);
});

slides.forEach((slide, index) => {
    slide.addEventListener('click', function() {
        currentIndex = index;
        showProject(currentIndex);
    });
});
});