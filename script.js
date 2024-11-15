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
    const offset = -currentIndex * 100; // Usamos 100% para adaptarlo a cualquier tamaño de pantalla
    sliderContainer.style.transform = `translateX(${offset}%)`;
}

// Desplazamiento automático cada 3 segundos
setInterval(nextSlide, 3000);
