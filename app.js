//Get the button:
navbar = document.getElementById("navbar");



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
}