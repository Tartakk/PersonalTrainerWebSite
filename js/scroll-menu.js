let scrollSection = document.querySelectorAll("a[data-scroll]");

scrollSection.forEach(function (link) {
  link.addEventListener("click", function (event) {
    let targetId = this.getAttribute("data-scroll");
    let target = document.getElementById(targetId);
    if (target) {
      event.preventDefault();
      let offsetTop = target.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

let menuFood = document.querySelector(".menu-food"); //pobranie klasy
const menuFoodPosition = menuFood.offsetTop; //sprawdzenie wyskosci

window.addEventListener("scroll", function () {
  //nasluchiwanie przewijania strony
  if (
    (window.pageYOffset > menuFoodPosition)
  ) {
    //sprawdzenie pozycji, wysokosci na stronie, jezeli osiagnie wybrana wysokosc doda klase
    //dodanie klasy
    menuFood.classList.add("sticky");

  } else {
    //zabranie klasy
    menuFood.classList.remove("sticky");
  }
});
