import SimpleLightbox from "simplelightbox";

export function simple() { 
let lightboxPhotos = new SimpleLightbox('.photo-section .photo-simple', {
    captionDelay: 250,
    overlayOpacity: 0.4, 
    widthRatio: 0.7,
    maxZoom: 5,
});
 let lightboxAbout = new SimpleLightbox('.about-section .photo-simple', {
        captionDelay: 250,
     overlayOpacity: 0.4,
    maxZoom: 5,
    });
   
     [lightboxPhotos, lightboxAbout].forEach(lightbox => {
        lightbox.on('show.simplelightbox', () => {
            document.querySelectorAll('.swiper').forEach(swiperEl => {
                swiperEl.swiper.allowTouchMove = false;
            });
        });

        lightbox.on('close.simplelightbox', () => {
            document.querySelectorAll('.swiper').forEach(swiperEl => {
                swiperEl.swiper.allowTouchMove = true;
            });
        });

        lightbox.refresh();
    });
}

