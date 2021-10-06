// Navbar -- Responsive
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-link')[0]

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active')
  navbarLinks.classList.toggle('active')
})

// Active links
// const currentpage = current.href
// const menuItem = document.querySelectorAll('a')
// const menuLength = menuItem.length
// for (let i = 0; i<menuLength; i++){
//   if (menuitem[i].href === currentpage){
//     menuitem[i].className = "active"
//   }
// }

$(document).ready(function () {
  $('ul li a').click(function () {
    $('li a').removeClass("active");
    $(this).addClass("active");
  });
});


// Search
function booksFilter() {
  let input = document.getElementById('input-search').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('book1');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "";
    }
  }
}