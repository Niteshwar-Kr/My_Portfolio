
document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('active');
});

// Activate nav underline on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href').substring(1); // remove #
    link.classList.remove('active');

    // Only apply .active if it's not home
    if (linkHref === current && linkHref !== 'home') {
      link.classList.add('active');
    }
  });
});


