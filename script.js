// Pixel Forge Studio Portfolio

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});
