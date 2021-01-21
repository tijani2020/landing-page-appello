// Partners slider

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  clickable: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// mobile nav start

const hamber = document.getElementById('hamber')
const navicone = document.getElementById('navicone')
const mobileNav = document.getElementById('mobile-nav')

mobileNav.style.display = "none";

hamber.addEventListener('click', (e) => {

  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
    navicone.className = "fas fa-bars"
    navicone.style.color = "#fff"

  } else {
    mobileNav.style.display = "block";
    navicone.className = "fas fa-times"
    navicone.style.color = "#5f4dee"
  }
}) 

// mobile nav end

