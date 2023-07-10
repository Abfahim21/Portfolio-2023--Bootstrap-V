const navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 150) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};