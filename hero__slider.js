document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".hero__wrapper");
  const slides = document.querySelectorAll(".hero__slide");
  const nextBtn = document.querySelector(".slider__button--next");
  const prevBtn = document.querySelector(".slider__button--prev");
  const dots = document.querySelectorAll(".points-item");

  let currentSlide = 0;

  function updateSlider() {
   wrapper.style.transform = `translateX(-${currentSlide * 100}vw)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle("points-item--active", index === currentSlide);
    });
  }

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index;
      updateSlider();
    });
  });

  let startX = 0;
let endX = 0;

const isMobile = () => window.innerWidth <= 800;

// Обрабатываем касание
wrapper.addEventListener("touchstart", (e) => {
  if (!isMobile()) return;
  startX = e.touches[0].clientX;
});

wrapper.addEventListener("touchend", (e) => {
  if (!isMobile()) return;
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const diff = startX - endX;

  // Минимальная длина свайпа, чтобы сработало (в пикселях)
  if (Math.abs(diff) < 50) return;

  if (diff > 0) {
    // Свайп влево
    currentSlide = (currentSlide + 1) % slides.length;
  } else {
    // Свайп вправо
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  }

  updateSlider();
}

});



