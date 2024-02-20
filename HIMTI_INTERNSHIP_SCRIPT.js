// Select all cards
const cards = document.querySelectorAll(".card");

// Function to rotate card
function rotateCard(e) {
  const cardRect = this.getBoundingClientRect();
  const cardX = cardRect.left + cardRect.width / 2;
  const cardY = cardRect.top + cardRect.height / 2;
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const rotateY = (mouseX - cardX) / 10;
  const rotateX = -(mouseY - cardY) / 10;
  this.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

// Add event listeners to each card
cards.forEach((card) => {
  card.addEventListener("mousemove", rotateCard);
  card.addEventListener("mouseleave", function () {
    this.style.transform = "rotateX(0) rotateY(0)";
  });
});

let lastScrollTop = 0;
let navbarTimeout;

window.addEventListener('scroll', () => {
  clearTimeout(navbarTimeout);

  const navbar = document.querySelector('.NavBar'); // Changed from '.navbar' to '.NavBar'
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.classList.add('navbar-hidden');
  } else {
    navbar.classList.remove('navbar-hidden');
  }

  lastScrollTop = scrollTop;

  navbarTimeout = setTimeout(() => {
    navbar.classList.add('navbar-hidden');
  }, 3000); // 3 seconds
});