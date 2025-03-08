document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".Slide");
    const sliderContainer = document.querySelector(".Logo");

    let scrollSpeed = 2; //higher value faster scrolling
    let scrollAmount = 0;

    function duplicateImages() {
        const originalImages = slider.children.length;
        while (slider.scrollWidth < sliderContainer.clientWidth * 2) {
            for (let i = 0; i < originalImages; i++) {
                let clone = slider.children[i].cloneNode(true);
                slider.appendChild(clone);
            }
        }
    }

    function slideImages() {
        scrollAmount -= scrollSpeed;
        if (Math.abs(scrollAmount) >= slider.scrollWidth / 2) {
            scrollAmount = 0; // Reset position when halfway through
        }
        slider.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(slideImages);
    }

    duplicateImages();
    slideImages();
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".Slide2");
    const sliderContainer = document.querySelector(".Left");
    let scrollSpeed = 20;//Lower value faster sccrolling 

    function duplicateImages() {
        const originalImages = Array.from(slider.children);

        // Duplicate images until the total width covers at least 2x the container width
        while (slider.scrollWidth < sliderContainer.clientWidth * 2) {
            originalImages.forEach(img => {
                let clone = img.cloneNode(true);
                slider.appendChild(clone);
            });
        }
    }

    function startScrolling() {
        slider.style.animation = `scrollRight 10s linear infinite`; // Reverse direction
    }

    duplicateImages(); // Ensure enough images for infinite scrolling
    startScrolling();  // Apply smooth animation
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".Certfi");
    const sliderContainer = document.querySelector(".Certifications");

    let scrollSpeed = 2; //higher value faster scrolling
    let scrollAmount = 0;

    function duplicateImages() {
        const originalImages = slider.children.length;
        while (slider.scrollWidth < sliderContainer.clientWidth * 2) {
            for (let i = 0; i < originalImages; i++) {
                let clone = slider.children[i].cloneNode(true);
                slider.appendChild(clone);
            }
        }
    }

    function slideImages() {
        scrollAmount -= scrollSpeed;
        if (Math.abs(scrollAmount) >= slider.scrollWidth / 2) {
            scrollAmount = 0; // Reset position when halfway through
        }
        slider.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(slideImages);
    }

    duplicateImages();
    slideImages();
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".Slide3");
    const sliderContainer = document.querySelector(".Left2");
    let scrollSpeed = 20;//Lower value faster sccrolling 

    function duplicateImages() {
        const originalImages = Array.from(slider.children);

        // Duplicate images until the total width covers at least 2x the container width
        while (slider.scrollWidth < sliderContainer.clientWidth * 2) {
            originalImages.forEach(img => {
                let clone = img.cloneNode(true);
                slider.appendChild(clone);
            });
        }
    }

    function startScrolling() {
        slider.style.animation = `scrollRight 10s linear infinite`; // Reverse direction
    }

    duplicateImages(); // Ensure enough images for infinite scrolling
    startScrolling();  // Apply smooth animation
});