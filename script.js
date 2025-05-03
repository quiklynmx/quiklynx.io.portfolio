// Simple scroll to top on header button click
document.querySelector('.btn').addEventListener('click', function() {
  document.querySelector('#about').scrollIntoView({
    behavior: 'smooth'
  });
});
