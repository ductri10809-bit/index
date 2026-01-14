document.getElementById("toggle").onclick = () => {
    document.body.classList.toggle("dark");
  };
  const cards = document.querySelectorAll(".card");

  window.addEventListener("scroll", () => {
    cards.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        card.classList.add("show");
      }
    });
  });
  const links = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  links.forEach(link => link.classList.remove("active"));
});