// JavaScript Document
 slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider img');
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    } else {
        slideIndex = index;
    }

    const offset = -slideIndex * 100;
	document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

// Automatic slideshow
setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos
