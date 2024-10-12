document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    let projects = [];

    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            projects = data;
            createSlides(projects);
            initializeSwiper();
        })
        .catch(error => console.error('Erreur lors du chargement des projets:', error));

    function createSlides(projects) {
        const swiperWrapper = document.querySelector('.swiper-wrapper');
        projects.forEach((project, index) => {
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');
            slide.setAttribute('data-index', index);
            slide.innerHTML = `
                <h3>${project.title}</h3>
                <img src="${project.image}" alt="photo du site ${project.title}" loading="lazy">
            `;
            swiperWrapper.appendChild(slide);
        });

        document.querySelectorAll('.swiper-slide').forEach((slide) => {
            slide.addEventListener('click', function() {
                currentIndex = parseInt(slide.getAttribute('data-index'));
                showProject(currentIndex);
            });
        });
    }

    function initializeSwiper() {
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
    }

    function showProject(index) {
        console.log('Afficher le projet à l\'index:', index);
        const project = projects[index];
        if (!project) {
            console.error('Projet introuvable à l\'index:', index);
            return;
        }

        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-description').textContent = project.description;
        document.getElementById('modal-description-text').innerHTML = project.descriptionText;
        document.getElementById('modal-problems').textContent = project.problems;
        document.getElementById('modal-problems-text').innerHTML = project.problemsText;
        document.getElementById('modal-competences').textContent = project.competences;
        document.getElementById('modal-competences-text').innerHTML = project.competencesText;
        document.getElementById('modal-project-link').href = project.link;
        document.getElementById('modal-image').src = project.image;
        document.getElementById('modal').style.display = "block";
    }

    document.getElementById('prev-project').addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : projects.length - 1;
        showProject(currentIndex);
    });

    document.getElementById('next-project').addEventListener('click', function() {
        currentIndex = (currentIndex < projects.length - 1) ? currentIndex + 1 : 0;
        showProject(currentIndex);
    });

    document.getElementById('close-modal').addEventListener('click', function() {
        document.getElementById('modal').style.display = "none";
    });

    window.addEventListener('click', function(event) {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});