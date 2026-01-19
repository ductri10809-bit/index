document.getElementById("toggleTheme").onclick = function () {
    document.body.classList.toggle("dark");
};

const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".menu-link");

window.addEventListener("scroll", () => {
    sections.forEach((sec, index) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            menuLinks.forEach(link => link.classList.remove("active"));
            menuLinks[index].classList.add("active");
        }
    });
});

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", () => {
    boxes.forEach(box => {
        const rect = box.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            box.classList.add("show");
        }
    });
});

const jumpBtn = document.querySelector(".jump");
jumpBtn.addEventListener("mouseover", () => {
    jumpBtn.classList.add("animate");
});
jumpBtn.addEventListener("animationend", () => {
    jumpBtn.classList.remove("animate");
});

const circle = document.querySelector(".circle");
document.addEventListener("mousemove", (e) => {
    circle.style.left = e.clientX + "px";
    circle.style.top = e.clientY + "px";
});
