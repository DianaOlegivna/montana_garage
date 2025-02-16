export function paralaks() { 
  document.addEventListener("DOMContentLoaded", () => {
    // Ініціалізація загального паралаксу для всіх елементів з класом .rellax
    new Rellax('.rellax', {
      speed: -2, // базова швидкість
      center: true,
      round: true,
      vertical: true,
      horizontal: false
    });

    // Ініціалізація для конкретних елементів з індивідуальними налаштуваннями
    const rellaxIcons = new Rellax('.icons8-mercedes-benz', {
      speed: 1, // налаштування для цього елементу
      center: false,
      round: true,
      vertical: true,
      horizontal: false
    });

    const rellaxAudi = new Rellax('.icons8-audi', {
      speed: 3, // інший параметр
      center: false,
      round: true,
      vertical: true,
      horizontal: false
    });

    // Можна додавати ще інші налаштування для різних елементів за необхідності
  });
}
