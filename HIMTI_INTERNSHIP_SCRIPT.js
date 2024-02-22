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

function toggleMenu() {
  var navLinks = document.getElementById('nav-links');
  if (navLinks.style.display === 'none' || navLinks.style.display === '') {
    navLinks.style.display = 'block';
  } else {
    navLinks.style.display = 'none';
  }
}

// I want to create a button function but somehow it never works
// let currentCard = 0;
// const cards = Array.from(document.querySelectorAll('.card-list .card'));

// // Show the first card initially
// cards[currentCard].classList.add('active');

// document.getElementById('prevBtn').addEventListener('click', function() {
//   // Hide the current card
//   cards[currentCard].classList.remove('active');
//   // Move to the previous card, or loop back to the last card if we're at the start
//   currentCard = (currentCard - 1 + cards.length) % cards.length;
//   // Show the new current card
//   cards[currentCard].classList.add('active');
// });

// document.getElementById('nextBtn').addEventListener('click', function() {
//   // Hide the current card
//   cards[currentCard].classList.remove('active');
//   // Move to the next card, or loop back to the first card if we're at the end
//   currentCard = (currentCard + 1) % cards.length;
//   // Show the new current card
//   cards[currentCard].classList.add('active');
// });
