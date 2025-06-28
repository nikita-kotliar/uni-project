document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".header__menu li");

    menuItems.forEach(item => {
      item.addEventListener("click", () => {
        menuItems.forEach(el => el.classList.remove("active")); 
        item.classList.add("active"); 
      });
    });
  });