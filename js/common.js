let mainSlide = new Swiper(".mainSlide", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  pagination: {
    el: ".pg1",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

let eduSlide = new Swiper(".eduSlide", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 32,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 2500,
});

let snsSlide = new Swiper(".snsSlide", {
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    1100: {
      slidesPerView: 3,
    },
  },
});

let newsSlide = new Swiper(".newsSlide", {
  slidesPerView: 1,
  spaceBetween: 48,
  breakpoints: {
    800: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
  },
});
