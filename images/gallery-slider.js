const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const leftChevron = document.querySelector('.left-chevron');
const rightChevron = document.querySelector('.right-chevron');

let currentIndex = 0;
const style = window.getComputedStyle(images[0]);

function updateSlide() {
    const marginLeft = parseFloat(style.marginLeft);
    const marginRight = parseFloat(style.marginRight);
    const itemWidth = images[0].offsetWidth + marginLeft + marginRight;
    slides.style.transform = `translateX(${-currentIndex * itemWidth}px`;
}

leftChevron.addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex--;
    }
    updateSlide();
});

rightChevron.addEventListener('click', () => {
    if (currentIndex === images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateSlide();
});

updateSlide();
