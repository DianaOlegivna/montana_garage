export function paralaks() { 
  document.addEventListener("DOMContentLoaded", () => {
    new Rellax('.rellax', {
      speed: -2,
      center: true,
      round: true,
      vertical: true,
      horizontal: false
    });
  });
}
