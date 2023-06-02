const menu = document.querySelector(".menu-right");
const burger = document.querySelector(".burger-nav");
burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
});