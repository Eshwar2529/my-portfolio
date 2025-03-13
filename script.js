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

document.addEventListener("DOMContentLoaded", function() {
    let animatedElements = document.querySelectorAll(".Slide, .Slide2, .Slide3");
    animatedElements.forEach(el => {
        el.style.animationPlayState = "running";
    });
});






document.addEventListener("DOMContentLoaded", function() {
    let projects = document.querySelectorAll(".project-container");

    projects.forEach(project => {
        project.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    });
});




document.addEventListener("DOMContentLoaded", function() {
    let genieElements = document.querySelectorAll(".genie-box");

    // Function to show the animation on scroll
    function showOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Remove observer after appearing
            }
        });
    }

    // Observer to trigger animation on scroll
    let observer = new IntersectionObserver(showOnScroll, {
        threshold: 0.3 // Trigger when 30% visible
    });

    genieElements.forEach(el => observer.observe(el));

    // Also trigger animation on page load
    setTimeout(() => {
        genieElements.forEach(el => el.classList.add("show"));
    }, 500);
});


document.addEventListener("DOMContentLoaded", function () {
    let communicationSection = document.querySelector(".communication-envelope");

    function revealOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Trigger animation when visible
                observer.unobserve(entry.target); // Stop observing after animation runs once
            }
        });
    }

    let observer = new IntersectionObserver(revealOnScroll, { threshold: 0.3 }); // Start animation when 30% visible
    observer.observe(communicationSection);
});


document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".fade-in-left");

    function revealOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Add animation class
                observer.unobserve(entry.target); // Run only once
            }
        });
    }

    let observer = new IntersectionObserver(revealOnScroll, { threshold: 0.3 });

    elements.forEach(element => observer.observe(element));
});



document.addEventListener("DOMContentLoaded", function () {
    let communicationSection = document.querySelector(".skills-envelope");

    function revealOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Trigger animation when visible
                observer.unobserve(entry.target); // Stop observing after animation runs once
            }
        });
    }

    let observer = new IntersectionObserver(revealOnScroll, { threshold: 0.3 }); // Start animation when 30% visible
    observer.observe(communicationSection);
});




document.addEventListener("DOMContentLoaded", function () {
    const genieBox = document.querySelector('.genie-box');
    const educationSection = document.querySelector('.education-container');

    function revealEducation() {
        const rect = educationSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            educationSection.classList.add('show');
            window.removeEventListener('scroll', revealEducation); // Ensure it runs only once
        }
    }

    // Ensure genie effect completes before enabling scroll animation
    setTimeout(() => {
        genieBox.classList.add('show'); // Genie effect starts

        // After genie effect completes, enable scroll detection for education section
        setTimeout(() => {
            window.addEventListener('scroll', revealEducation);
            revealEducation(); // Check on page load in case it's already visible
        }, 0); // Adjust timing based on genie effect duration
    }, 1000); // Timing for genie effect start
});

