export function video() { 
    const videos = document.querySelectorAll('.swiper-slide video');

window.addEventListener('scroll', () => {
  videos.forEach(video => {
    if (!video.paused) {
      video.pause();
    }
  });
});
  
}

