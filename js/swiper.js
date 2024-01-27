// DATA IMPORT
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs' // Import Swiper from Swiper API

// 1. CREATE AND CONFIGURE SWIPERS
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 2,
    spaceBetween: 10,

    breakpoints: {
        340: {
            slidesPerView: 3,
        },
        475: {
            slidesPerView: 4,
        },
        650: {
            slidesPerView: 5,
        },
        768: {
            slidesPerView: 4,
        },
        930: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 6,
        },
    },

    // Centered
    centeredSlides: true,
    centeredSlidesBounds: true,
    centerInsufficientSlides: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

});

// Export swiper object to other files
export default swiper;