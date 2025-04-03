// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle mobile navigation
const nav = document.querySelector('nav');
const navLogo = document.querySelector('.nav__logo');
const navLinks = document.createElement('div');
navLinks.classList.add('nav__links');

const links = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Services', href: '#services' },
    { text: 'Projects', href: '#projects' },
    { text: 'Contact', href: '#contact' }
];

links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    navLinks.appendChild(a);
});

nav.appendChild(navLinks);

const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '<i class="ri-menu-line"></i>';
nav.appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile navigation when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Form submission handling
const form = document.querySelector('.footer__form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    console.log(data); // You can replace this with an actual fetch request to your backend
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Dynamic year in footer
const year = new Date().getFullYear();
const footer = document.querySelector('footer');
const yearSpan = document.createElement('span');
yearSpan.textContent = year;
footer.querySelector('.footer__details').appendChild(yearSpan);