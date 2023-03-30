const menu = document.querySelector('.menu-responsive');
const navbar = document.querySelector('.main-nav');

menu.addEventListener('click', () => {
  navbar.classList.toggle('open');
});