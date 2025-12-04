// ========= Typing Effect in Hero =========
const typingTextElement = document.getElementById("typing-text");

const roles = [
    "Frontend & Python Developer",
    "HTML • CSS • JavaScript • Python",
    "Beginner Web Developer",
    "Python Tkinter App Developer"
];


let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let currentText = "";

function typeEffect() {
    const fullText = roles[roleIndex];

    if (!isDeleting) {
        currentText = fullText.slice(0, charIndex + 1);
        charIndex++;
    } else {
        currentText = fullText.slice(0, charIndex - 1);
        charIndex--;
    }

    typingTextElement.textContent = currentText;

    let typingSpeed = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === fullText.length) {
        typingSpeed = 1200; // pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 300;
    }

    setTimeout(typeEffect, typingSpeed);
}

if (typingTextElement) {
    typeEffect();
}

// ========= Mobile Navbar Toggle =========
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // Close menu when clicking a link (mobile)
    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
        });
    });
}

// ========= Reveal on Scroll =========
const revealElements = document.querySelectorAll(".reveal");

function handleReveal() {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealElements.forEach((elem) => {
        const revealTop = elem.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            elem.classList.add("active");
        }
    });
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);

// ========= Progress Bar Animation (when in view) =========
const progressBars = document.querySelectorAll(".progress-bar");

function animateProgressBars() {
    progressBars.forEach((bar) => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            const width = bar.getAttribute("style");
            // Trigger reflow and re-set width (to make sure animation works)
            bar.style.width = "0";
            setTimeout(() => {
                bar.setAttribute("style", width);
            }, 50);
        }
    });
}

window.addEventListener("scroll", animateProgressBars);
window.addEventListener("load", animateProgressBars);

// ========= Contact Form (Front-end Only) =========
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Simple front-end validation
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            formStatus.textContent = "Please fill in all fields.";
            formStatus.style.color = "red";
            return;
        }

        // For now just show success message
        // (Later you can integrate EmailJS or backend)
        formStatus.textContent = "Thank you! Your message has been recorded (demo).";
        formStatus.style.color = "green";

        contactForm.reset();
    });
}

// ========= Footer Year =========
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
