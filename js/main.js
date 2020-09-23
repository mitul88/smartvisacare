const hamBurger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamBurger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

window.addEventListener("scroll", () => {
  const navBar = document.querySelector("nav");
  navBar.classList.toggle("nav-change", window.scrollY > 0);
});
