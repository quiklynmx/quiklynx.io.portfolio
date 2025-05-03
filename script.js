// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll to About Section on Button Click
document.querySelector('.btn').addEventListener('click', function() {
  document.querySelector('#about').scrollIntoView({
    behavior: 'smooth'
  });
});
