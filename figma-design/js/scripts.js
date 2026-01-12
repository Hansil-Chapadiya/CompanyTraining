document.addEventListener('DOMContentLoaded', () => {

    const nav = document.querySelector('.nav-bar');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
});