// Navbar -- Responsive
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-link')[0]

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active')
  navbarLinks.classList.toggle('active')
})