const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const leftChevron = document.querySelector('.left-chevron');
const rightChevron = document.querySelector('.right-chevron');

console.log(slides);
console.log(images);
console.log(leftChevron);
console.log(rightChevron);

let currentIndex = 0;

function updateSlide() {
    const itemWidth = images[0].getBoundingClientRect().width;
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
