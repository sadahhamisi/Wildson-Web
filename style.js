let currentIndex = 0;
const images = document.querySelectorAll('#image-container img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    scrollToCurrentImage();
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    scrollToCurrentImage();
}

function scrollToCurrentImage() {
    images[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const target = link.getAttribute('data-target');
        const content = document.getElementById(target);

        // Toggle the active class to show/hide content
        content.classList.toggle('active');
    });

    // Show content on hover
    link.addEventListener('mouseenter', () => {
        const target = link.getAttribute('data-target');
        const content = document.getElementById(target);

        content.classList.add('active');
    });

    // Hide content when mouse leaves
    link.addEventListener('mouseleave', () => {
        const target = link.getAttribute('data-target');
        const content = document.getElementById(target);

        content.classList.remove('active');
    });
});




// Add JavaScript to handle navigation link clicks
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
        });
    });
});
