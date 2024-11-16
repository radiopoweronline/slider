let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const sliderContainer = document.querySelector('.slider-container');

// Clonamos la primera y última imagen para crear el efecto infinito
const firstSlide = slides[0].cloneNode(true);
const lastSlide = slides[totalSlides - 1].cloneNode(true);

// Añadimos el clon de la primera imagen al final y el clon de la última imagen al principio
sliderContainer.insertBefore(lastSlide, slides[0]);
sliderContainer.appendChild(firstSlide);

// Función para mostrar la siguiente imagen
function nextSlide() {
    currentIndex++;

    if (currentIndex >= totalSlides) {
        // Cuando llegamos al último slide, reiniciamos el índice al primer slide
        sliderContainer.style.transition = 'none'; // Desactivamos la transición temporalmente
        currentIndex = 1; // Establecemos la posición en el primer slide (después del clon de la última imagen)
        sliderContainer.style.transform = `translateX(-${currentIndex * 1170}px)`; // Ajustamos la posición instantáneamente

        // Reactivamos la transición después de un pequeño delay
        setTimeout(() => {
            sliderContainer.style.transition = 'transform 0.9s ease-in-out'; // Reactivamos la transición
            updateSlider();
        }, 50);
    } else {
        updateSlider();
    }
}

// Función para mostrar la imagen anterior
function prevSlide() {
    currentIndex--;

    if (currentIndex < 0) {
        // Si estamos antes del primer slide, nos movemos al último slide (clon de la última imagen)
        sliderContainer.style.transition = 'none';
        currentIndex = totalSlides - 1;
        sliderContainer.style.transform = `translateX(-${currentIndex * 1170}px)`;

        setTimeout(() => {
            sliderContainer.style.transition = 'transform 0.9s ease-in-out';
            updateSlider();
        }, 50);
    } else {
        updateSlider();
    }
}

// Función para actualizar la posición del slider
function updateSlider() {
    const offset = -currentIndex * 1170; // Ajusta el desplazamiento según el ancho de las imágenes
    sliderContainer.style.transform = `translateX(${offset}px)`;
}

// Desplazamiento automático cada 6 segundos
setInterval(nextSlide, 6000);
