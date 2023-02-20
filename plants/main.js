const burgerBtn = document.querySelector(".burger-btn");
const menu = document.querySelector(".nav");

burgerBtn.addEventListener("click", function() {
  menu.classList.toggle("nav__header--activ");
  burgerBtn.classList.toggle("burger-btn--activ");
});

