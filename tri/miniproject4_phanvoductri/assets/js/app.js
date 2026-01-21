// MOBILE MENU
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle.onclick = () => nav.classList.toggle("open");

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// SLIDER
let index = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);


document.getElementById("prev").onclick = () => {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
};

// ACCORDION
const accordionItems = document.querySelectorAll(".accordion .item");

accordionItems.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

