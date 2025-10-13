// FAQ Toggle
function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const sign = button.querySelector("span");
    const allAnswers = document.querySelectorAll(".faq-answer");

    allAnswers.forEach((a) => {
        if (a !== answer) {
            a.style.maxHeight = null;
            a.classList.remove("open");
            a.previousElementSibling.querySelector("span").textContent = "+";
        }
    });

    if (answer.classList.contains("open")) {
        answer.style.maxHeight = null;
        answer.classList.remove("open");
        sign.textContent = "+";
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.classList.add("open");
        sign.textContent = "−";
    }
}

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("show");
    });
});

// Back to Top Button
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});