let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const sliderContainer = document.querySelector('.slider-container');

// Clonamos la primera imagen y la añadimos al final
const firstSlide = slides[0].cloneNode(true);
sliderContainer.appendChild(firstSlide);

// Función para mostrar la siguiente imagen
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;

    // Cuando llegamos al último índice, reiniciamos la posición sin salto visual
    if (currentIndex === 0) {
        sliderContainer.style.transition = 'none'; // Desactivamos la transición
        sliderContainer.style.transform = `translateX(0px)`; // Ajustamos la posición
        setTimeout(() => {
            sliderContainer.style.transition = 'transform 0.9s ease-in-out'; // Reactivamos la transición
            currentIndex = 1; // Establecemos la posición en la segunda imagen
            updateSlider();
        }, 50); // El timeout es breve para que se vea la transición al reiniciar
    } else {
        updateSlider();
    }
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

// Desplazamiento automático cada 6 segundos
setInterval(nextSlide, 6000);
