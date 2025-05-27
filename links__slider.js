document.addEventListener("DOMContentLoaded", () => {
  const linksWrapper = document.querySelector('.links__wrapper');
  const linksSlides = document.querySelectorAll('.links__slide');
  const linksPrevBtn = document.querySelector('.links__arrow--prev');
  const linksNextBtn = document.querySelector('.links__arrow--next');
  const linksSlider = document.querySelector('.links__slider');

  if (!linksWrapper || linksSlides.length === 0) return;

  let linksCurrentIndex = 0;

  linksWrapper.style.width = `${linksSlides.length * 100}%`;

  
  linksSlides.forEach(slide => {
    slide.style.width = `${100 / linksSlides.length}%`;
  });

  
  function updateLinksSlider() {
    linksWrapper.style.transform = `translateX(-${linksCurrentIndex * (100 / linksSlides.length)}%)`;
  }

  
  linksNextBtn?.addEventListener('click', () => {
    linksCurrentIndex = (linksCurrentIndex + 1) % linksSlides.length;
    updateLinksSlider();
  });

  linksPrevBtn?.addEventListener('click', () => {
    linksCurrentIndex = (linksCurrentIndex - 1 + linksSlides.length) % linksSlides.length;
    updateLinksSlider();
  });

   
  function toggleArrowVisibility() {
    const shouldHide = window.innerWidth < 1790;
    linksPrevBtn.style.display = shouldHide ? 'none' : 'block';
    linksNextBtn.style.display = shouldHide ? 'none' : 'block';
  }

  toggleArrowVisibility();
  window.addEventListener('resize', toggleArrowVisibility);
 
  let startX = 0;
  let endX = 0;

  linksSlider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  linksSlider.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        
        linksCurrentIndex = (linksCurrentIndex + 1) % linksSlides.length;
      } else {
        
        linksCurrentIndex = (linksCurrentIndex - 1 + linksSlides.length) % linksSlides.length;
      }
      updateLinksSlider();
    }
  });
});
