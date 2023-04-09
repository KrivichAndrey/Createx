document.addEventListener('DOMContentLoaded', () => {
  // const slider = document.querySelector('.projectGallerySlider');
  const slideViewPort = document.querySelector('.projectGallerySlider__viewPort');
  const slidesLine = document.querySelector('.projectGallerySlider__slidesLine');
  const slides = document.querySelectorAll('.projectGallerySlider__slide');
  const slideControlNext = document.querySelector('.sliderControl_next');
  const slideControlPrev = document.querySelector('.sliderControl_prev');

  const slideWidth = window.getComputedStyle(slideViewPort).width;
  let sliderLineOffset = 0;

  slidesLine.style.width = `${100 * slides.length}%`;
  slides.forEach((slide) => {
    slide.style.width = slideWidth;
  });

  slideControlNext.addEventListener('click', () => {
    if (sliderLineOffset === parseInt(slideWidth, 10) * (slides.length - 1)) {
      sliderLineOffset = 0;
    } else {
      sliderLineOffset += parseInt(slideWidth, 10);
    }
    slidesLine.style.transform = `translateX(-${sliderLineOffset}px)`;
    console.log(sliderLineOffset);
  });

  slideControlPrev.addEventListener('click', () => {
    if (sliderLineOffset === 0) {
      sliderLineOffset = parseInt(slideWidth, 10) * (slides.length - 1);
    } else {
      sliderLineOffset -= parseInt(slideWidth, 10);
    }
    slidesLine.style.transform = `translateX(-${sliderLineOffset}px)`;
  });
});
