document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideItems = document.querySelectorAll('.slide');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    const indicators = document.querySelectorAll('.indicator');
            
    let currentIndex = 0;
    let slideInterval;
        const slideCount = slideItems.length;
        const slideWidth = slideItems[0].clientWidth;
            
        // Set initial position
        slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            
        // Start automatic sliding
        function startSlideShow() {
            slideInterval = setInterval(() => {
                nextSlide();
            }, 10000); // 10 seconds interval
        }
            
        // Go to specific slide
        function goToSlide(index) {
            currentIndex = (index + slideCount) % slideCount;
            slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            updateIndicators();
        }
            
        // Next slide
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slideCount;
            slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            updateIndicators();
        }
            
        // Previous slide
        function prevSlide() {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            updateIndicators();
        }
            
        // Update indicators
        function updateIndicators() {
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }
            
        // Arrow click events
        arrowLeft.addEventListener('click', () => {
            clearInterval(slideInterval);
            prevSlide();
            startSlideShow();
        });
            
        arrowRight.addEventListener('click', () => {
            clearInterval(slideInterval);
            nextSlide();
            startSlideShow();
        });
            
        // Indicator click events
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                clearInterval(slideInterval);
                goToSlide(index);
                startSlideShow();
            });
        });
            
        // Pause on hover
        const sliderContainer = document.querySelector('.slider-container');
        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
            
        sliderContainer.addEventListener('mouseleave', () => {
            startSlideShow();
        });
            
        // Start the slideshow
        startSlideShow();
            
        // Handle window resize
        window.addEventListener('resize', () => {
            // Recalculate slide width and reposition
            slides.style.transition = 'none';
            const newSlideWidth = slideItems[0].clientWidth;
            slides.style.transform = `translateX(-${currentIndex * newSlideWidth}px)`;
            // Force reflow
            void slides.offsetWidth;
            // Re-enable transition
            slides.style.transition = 'transform 0.8s ease-in-out';
        });
    });