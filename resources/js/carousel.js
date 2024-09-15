document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const newsItems = document.querySelectorAll('.news-item');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 350; // 350px is the width of each news item
        carousel.style.transform = `translateX(${offset}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < newsItems.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the start
        }
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = newsItems.length - 1; // Loop back to the end
        }
        updateCarousel();
    });
});
