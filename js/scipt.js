let burgerMenu = document.querySelector('.burger-menu img');
let navLinks = document.querySelector('nav');
burgerMenu.addEventListener('click', function() {
    burgerMenu.style.display = 'none';
    navLinks.style.display = 'flex';    
})