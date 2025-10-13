// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("show");
    });
});

const slider = document.getElementById('slider');
const sliderContainer = document.getElementById('sliderContainer');
const slides = slider.querySelectorAll('img');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const dotsContainer = document.getElementById('dots');

let currentIndex = 0;
let fadeMode = false; // 🔥 Toggle slide/fade

// Update Slide
function updateSlide() {
  if (fadeMode) {
    slider.classList.add("fade");
    slides.forEach((img, i) => {
      img.classList.toggle("active", i === currentIndex);
    });
  } else {
    slider.classList.remove("fade");
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
}

// Arrows
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
}
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
}
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Swipe/Drag
let isDragging = false, startX = 0, moveX = 0;
const onDragStart = (e) => {
  isDragging = true;
  startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
};
const onDragMove = (e) => {
  if (!isDragging || fadeMode) return; // No drag in fade
  const x = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  moveX = x - startX;
  slider.style.transform = `translateX(-${currentIndex * 100}%) translateX(${moveX}px)`;
};
const onDragEnd = () => {
  if (!isDragging) return;
  isDragging = false;
  const threshold = sliderContainer.offsetWidth / 4;
  if (moveX > threshold) prevSlide();
  else if (moveX < -threshold) nextSlide();
  else updateSlide();
  moveX = 0;
};
sliderContainer.addEventListener("mousedown", onDragStart);
sliderContainer.addEventListener("mousemove", onDragMove);
sliderContainer.addEventListener("mouseup", onDragEnd);
sliderContainer.addEventListener("mouseleave", onDragEnd);
sliderContainer.addEventListener("touchstart", onDragStart);
sliderContainer.addEventListener("touchmove", onDragMove);
sliderContainer.addEventListener("touchend", onDragEnd);

// Init
updateSlide();

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