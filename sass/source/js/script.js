document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slider__slide');
  let currentSlide = 0;

  document.getElementById('next').addEventListener('click', function() {
      goToSlide(currentSlide + 1);
  });

  document.getElementById('prev').addEventListener('click', function() {
      goToSlide(currentSlide - 1);
  });

  function goToSlide(n) {
      slides[currentSlide].classList.remove('slider__slide--active');
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add('slider__slide--active');
  }
});

//menu

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', function () {
  menu.classList.toggle('menu--open');
  });
burger.addEventListener('click', function () {
  burger.classList.toggle('header__close');
})
