import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

export function initSwiper () { 
    const swiperAbout = new Swiper('.about-swiper', {
        modules: [Navigation, Keyboard],
    loop: false, 
        slidesPerView: 1,
    navigation: {
        nextEl: '.about-next',
        prevEl: '.about-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
        grabCursor: true,
        breakpoints: { 
            1440: { 
                slidesPerView: 3,
                 spaceBetween: 20,
        }
    },
    on: {
        init: function (swiper) {
            updateButtons(swiper, '.about-prev', '.about-next');
        },
        slideChange: function (swiper) {
            updateButtons(swiper, '.about-prev', '.about-next');
            pauseAllVideos();
        }
    }
    });

    const swiperPhoto = new Swiper('.swiper-photo', {
        modules: [Navigation, Keyboard],
        loop: false, 
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.photo-next',
            prevEl: '.photo-prev',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        grabCursor: true,
             
        on: {
            init: function (swiper) {
                updateButtons(swiper, '.photo-prev', '.photo-next');
            },
            slideChange: function (swiper) {
                updateButtons(swiper, '.photo-prev', '.photo-next');
                pauseAllVideos();
            }
        }
    });


function pauseAllVideos() {
        const videos = document.querySelectorAll('.swiper-slide video');
        videos.forEach(video => {
            if (!video.paused) {
                video.pause();
            }
        });
    }

    

function updateButtons(swiper, prevSelector, nextSelector) {
    const prevButton = document.querySelector(prevSelector);
    const nextButton = document.querySelector(nextSelector);

     if (!prevButton || !nextButton) return;
  
    prevButton.disabled = swiper.isBeginning;
    nextButton.disabled = swiper.isEnd; 

    prevButton.classList.toggle('swiper-button-disabled', swiper.isBeginning);
    nextButton.classList.toggle('swiper-button-disabled', swiper.isEnd); 
    
    }
}






