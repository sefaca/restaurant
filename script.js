let menu = document.querySelector('.menu-responsive');
let navbar = document.querySelector('.main-nav');

menu.onclick = () => {
    menu.classList.toggle('fa-solid');
    navbar.classList.toggle('open')
}