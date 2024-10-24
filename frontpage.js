let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const toggleMenu = document.querySelector('.toggle-menu');
const dropdownMenu = document.querySelector('.dropdown-menu');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop && currentScroll > 50) {
        navbar.classList.add('hidden');
        if (navbar.classList.contains('hidden')) {
            console.log('hidden present');
        } else {
            console.log('hidden is not present');
        }
    } else if (currentScroll < lastScrollTop || currentScroll <= 50) {
        navbar.classList.remove('hidden');
        if (navbar.classList.contains('hidden')) {
            console.log('hidden present');
        } else {
            console.log('hidden is not present');
        }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

toggleMenu.addEventListener('click', function() {
    dropdownMenu.classList.toggle('active');
    toggleMenu.classList.toggle('active');
});

document.addEventListener('click', function(event) {
    if (!toggleMenu.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('active');
        toggleMenu.classList.remove('active');
    }
});


