import SimpleLightbox from "simplelightbox";

export function simple() { 
let lightbox = new SimpleLightbox('.photo-simple', {
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.4,
    
});
    lightbox.refresh();
}