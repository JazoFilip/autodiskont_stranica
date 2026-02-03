const yearSpan = document.getElementById("year");

if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const scrollLinks = document.querySelectorAll(".scroll-top");

scrollLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});