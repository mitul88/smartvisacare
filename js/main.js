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


// jQuery smoothScroll
$('.navbar a').on('click',function(e){
  if('this.hash' !== ''){
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    },
    800
    );
  }
});