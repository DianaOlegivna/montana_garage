export function paralaks() { 
  document.addEventListener("DOMContentLoaded", () => {
    new Rellax('.rellax', {
    breakpoints: [375, 768, 1440],
    center: true,
    round: true
    });
  });
}
