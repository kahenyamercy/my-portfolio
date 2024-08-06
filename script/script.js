// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbarScroll');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scroll-active');
    } else {
        navbar.classList.remove('navbar-scroll-active');
    }
});

// Smooth Scrolling for Links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact Form Submission (for demonstration purposes)
document.querySelector('button[type="button"]').addEventListener('click', function() {
    alert('Your message has been sent!');
});
