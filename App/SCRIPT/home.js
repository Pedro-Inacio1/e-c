let slideIndex = 0;
const slides = document.querySelectorAll(".input");

function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.checked = (index === n);
    });
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0;
    showSlide(slideIndex);
}

function previousSlide() {
    slideIndex--;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlide(slideIndex);
}

document.querySelector(".navigation").addEventListener("click", function(event) {
    if (event.target.classList.contains("bar")) {
        let index = Array.from(event.target.parentNode.children).indexOf(event.target);
        slideIndex = index;
        showSlide(slideIndex);
    }
});

setInterval(nextSlide, 6000);