const hamburgerMenu = document.querySelector(".hamburger");
const navActive = document.querySelector("ul");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open");
  navActive.classList.toggle("active");
});

const galery = document.querySelector(".galery .container");
const overlay = document.querySelector(".galery .overlay");

galery.addEventListener("click", function (e) {
  if (e.target.className == "image") {
    overlay.classList.add("active");

    const imagePrev = document.querySelector(".galery .overlay .preview img");
    imagePrev.src = e.target.src;
  }
});

overlay.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    overlay.classList.remove("active");
  }
});
