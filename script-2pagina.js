let currentSlide = 0;
const slides = document.querySelectorAll('.slider-image');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function changeSlide(direction) {
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Mostrar o primeiro slide ao carregar a página
showSlide(currentSlide);