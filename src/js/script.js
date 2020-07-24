const burgerButton = document.querySelector(".burger-button");
const navbar = document.querySelector(".header-navbar");
let width = document.documentElement.clientWidth;
let navbarSelectors = document.querySelectorAll("a");
const modalWindow = document.querySelector(".modal");
const modalButton = document.querySelector(".button-modal");

function scrollState(overflow = false) {
  if (overflow === "scroll") {
    document.body.style = "overflow:auto;";
  } else {
    document.body.style = "overflow:hidden;";
  }
}
console.log(burgerButton.classList);
// burger-menu
if (width <= 480) {
  burgerButton.addEventListener("click", () => {
    event.preventDefault();
    const arr = Array.from(burgerButton.classList);
    if (arr.includes("burger-active")) {
      scrollState("scroll");
    } else {
      scrollState();
    }
    burgerButton.classList.toggle("burger-active");
    navbar.classList.toggle("navbar-active");
  });
}

//  navbar
navbarSelectors.forEach((el) => {
  el.addEventListener("click", (e) => {
    event.preventDefault();
    const attr = el.getAttribute("href");
    const attrId = document.getElementById(attr);
    if (el.textContent === "Signup") {
      modalWindow.classList.add("modal-active");
      scrollState();
      navbar.classList.remove("navbar-active");
      burgerButton.classList.remove("burger-active");
    }
    if (!attrId) {
      return;
    }
    attrId.scrollIntoView({ behavior: "smooth", block: "start" });
    if (width <= 480) {
      navbar.classList.toggle("navbar-active");
      burgerButton.classList.toggle("burger-active");
      scrollState("scroll");
    }
  });
});

//modal
modalButton.addEventListener("click", () => {
  modalWindow.classList.toggle("modal-active");
  scrollState("scroll");
});
