let time = 3000;
let slideIndex = 0;
let images = document.querySelectorAll(".slider img");
let max = images.length;

function nextImage() {

    images[slideIndex].classList.remove("selected")

    slideIndex++

    if (slideIndex >= max) {
        slideIndex = 0
    }

    images[slideIndex].classList.add("selected")
}

function start() {
    setInterval(() => {

        nextImage()
    }, time)
}

window.addEventListener('load', start)

var homeIcon = document.getElementById("menu");

homeIcon.addEventListener('click', () => {
    let submenu = document.getElementById("test");
    if (submenu.style.display === 'flex') {
        submenu.style.display = 'none'
    }
    else {
        submenu.style.display = 'flex'
    }
})