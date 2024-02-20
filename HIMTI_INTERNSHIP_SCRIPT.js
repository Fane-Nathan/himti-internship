let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.NavBar');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop < lastScrollTop) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-160px'; // Replace '50px' with the height of your navbar
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});