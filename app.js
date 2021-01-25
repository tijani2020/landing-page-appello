/* ====== sticky navbar on scroll start ======== */

const navigation = document.getElementById('navbar')
const siteName = document.getElementById('site-name')
const linksParent = document.getElementById('white-links')


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)  {
      
      siteName.style.color = "#5f4dee";
      navigation.style.backgroundColor = "#fff";
      navigation.style.boxShadow = "0 2px 2px -2px rgba(0,0,0,.2)";
      navigation.style.height = "60px";
      linksParent.id = 'nowhite-links';
      navicone.style.color = "#5f4dee"

    }

    else  {    
      siteName.style.color = "white";
        navigation.style.height = "100px";
        navigation.style.backgroundColor = "transparent";
        navigation.style.boxShadow = "none";
        linksParent.id = 'white-links'
        navicone.style.color = "#fff"

    }
}

/* ====== sticky navbar on scroll end ======== */



var swiper = new Swiper('.swiper1', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 1000,
  },
  // Optional parameters
  direction: 'horizontal',
  loop: true,


  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});


/* ====== for testimonials from swiper ======== */

var mySwiper = new Swiper('.swiper2', {
  // autoplay
  autoplay: {
    delay: 5000,
  },

   // Optional parameters
   direction: 'horizontal',
   loop: true,
 
   // pagination
   pagination: {
     el: '.swiper-pagination2',
     clickable: true,
   },

});

/* ======= for testimonials from swiper ======= */

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

