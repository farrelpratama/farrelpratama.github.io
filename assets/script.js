const hamburgerMenu = document.querySelector(".hamburger");
const navActive = document.querySelector("ul");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open");
  navActive.classList.toggle("active");
});
