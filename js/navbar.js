function menuToggle() {
    const toggleMenu = document.querySelector('.toggle');
    const header = document.querySelector('header');
    toggleMenu.classList.toggle('active');
    header.classList.toggle('active');
}