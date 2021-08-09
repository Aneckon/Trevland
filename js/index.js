var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 148,
    slidesPerGroup: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 50,
        slidesPerGroup: 1,
      },
      560: {
        slidesPerView: 2,
        spaceBetween: 80,
        slidesPerGroup: 2,
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 130,
        slidesPerGroup: 3,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 150,
        slidesPerGroup: 5,
      }
    }
});

$(document).ready(function() {
  $('.header__burder-img').click(function(){
    $('.header__burder-img').toggleClass('menu__open');
    $('.header__menu-right').toggleClass('menu__open');
    $('body').toggleClass('fixed');
  });
});