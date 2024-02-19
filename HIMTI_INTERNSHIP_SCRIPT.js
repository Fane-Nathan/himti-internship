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
