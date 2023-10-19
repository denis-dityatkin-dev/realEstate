"use strict"

const reviewsSwiper = document.querySelector(".swiper");

if(reviewsSwiper){
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    //   direction: "vertical",
    autoHeight: true,
    loop: true,
      // If we need pagination
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // Автопрокрутка
    // autoplay: {
    // Пауза между прокруткой
    // delay: 1000,
    // Закончить на последнем слайде
    // stopOnLastSlide: true,
    // Отключить после ручного переключения
    // disableOnInteraction: false,
    // },
    // Скорость
    // speed: 2000,
    // Navigation arrows
    navigation: {
      nextEl: ".body-main-block__arrow.swiper-button-next",
      prevEl: ".body-main-block__arrow.swiper-button-prev",
    },

    // And if we need scrollbar
    //   scrollbar: {
    //     el: ".swiper-scrollbar",
    //   },
  });
}