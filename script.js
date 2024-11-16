let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const sliderContainer = document.querySelector('.slider-container');

// Función para mostrar la siguiente imagen
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

// Función para mostrar la imagen anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// Función para actualizar la posición del slider
function updateSlider() {
    const offset = -currentIndex * 1170; // Ajusta el desplazamiento según el ancho de las imágenes
    sliderContainer.style.transform = `translateX(${offset}px)`;
}

// Desplazamiento automático cada 3 segundos
setInterval(nextSlide, 3000);
