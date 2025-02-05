export function setupMobileMenu() { 
  document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  const burgerIcon = document.querySelector(".burger-btn"); 
  const closeBtn = document.querySelector(".mobile-menu-close"); 
  const menuLinks = document.querySelectorAll(".menu-link-nav"); 

  
  function openMenu() {
    mobileMenu.classList.add("is-open");
  }

 
  function closeMenu() {
    mobileMenu.classList.remove("is-open");
  }

 
  burgerIcon.addEventListener("click", openMenu);

 
  closeBtn.addEventListener("click", closeMenu);

  
  menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

 
  mobileMenu.addEventListener("click", function (event) {
    if (!event.target.closest(".mobile-menu-container")) {
      closeMenu();
    }
  });
});

}
