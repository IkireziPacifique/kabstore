// Navbar -- Responsive
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  navbarLinks.classList.toggle('active')
})

// Carousel - lg
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// Carousel - sm
// var slideIndexsm = 1;
// viewSlides(slideIndexsm);

// // Next/previous controls
// function addSlides(y) {
//   viewSlides(slideIndexsm += y);
// }

// // Thumbnail image controls
// function SlideonView(y) {
//   viewSlides(slideIndexsm = y);
// }

// function viewSlides(y) {
//   var x;
//   var slidessm = document.getElementsByClassName("mySlides-sm");
//   var dotsm = document.getElementsByClassName("dotsm");

//   if (y > slidessm.length) {slideIndexsm = 1}
//   if (y < 1) {slideIndexsm = slidessm.length}
//   for (x = 0; x < slidessm.length; x++) {
//     slidessm[x].style.display = "none";
//   }
//   for (x = 0; x < dotsm.length; x++) {
//     dotsm[x].className = dotsm[x].className.replace(" active", "");
//   }
//   slidessm[slideIndexsm-1].style.display = "block";
//   dotsm[slideIndexsm-1].className += " active";
// }