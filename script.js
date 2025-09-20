document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  let nav = document.querySelector('.navbar');
  nav.classList.toggle('shadow-sm', window.scrollY > 50);
});
