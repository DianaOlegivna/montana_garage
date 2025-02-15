export function paralaks() { 
 document.addEventListener("DOMContentLoaded", () => {
    new Rellax('.rellax');
 });
  const rellaxIcons = new Rellax('.rellax', {
    speed: -2, // базова швидкість
    center: true,
    round: true,
    vertical: true,
    horizontal: false
});
}
