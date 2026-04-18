// ===========================
// TYPING ANIMATION
// ===========================

const typingTexts = [
    "Aspiring Software Developer | AI Enthusiast",
    "Building Intelligent Solutions",
    "Web Developer | Python Programmer",
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 50;
let deletingSpeed = 30;
let pauseTime = 2000;
let lastPauseTime = 0;

function typeAnimation() {
    const typingElement = document.querySelector('.typing-text');
    const currentText = typingTexts[textIndex];

    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            lastPauseTime = Date.now();
            setTimeout(typeAnimation, pauseTime);
            return;
        }
    } else {
        if (Date.now() - lastPauseTime < pauseTime) {
            setTimeout(typeAnimation, 50);
            return;
        }

        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
        }
    }

    setTimeout(typeAnimation, isDeleting ? deletingSpeed : typingSpeed);
}

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================

const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

// Debounce function for better performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Highlight active section with debounce
    updateActiveNavLink();
}, { passive: true });

// ===========================
// SMOOTH SCROLLING & ACTIVE NAV LINK
// ===========================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    let current = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// Smooth scroll on nav link click
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - navbar.offsetHeight;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });

            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
    });
});

// ===========================
// MOBILE MENU TOGGLE
// ===========================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navMenu.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

// ===========================
// SCROLL ANIMATIONS
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill cards, project cards, and achievement cards
document.querySelectorAll('.skill-card, .project-card, .achievement-card, .timeline-item').forEach((element) => {
    observer.observe(element);
});

// ===========================
// PARTICLE BACKGROUND
// ===========================

function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(99, 102, 241, ${Math.random() * 0.5 + 0.1})`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 4 + 3}s ease-in-out infinite`;
        particle.style.pointerEvents = 'none';

        particlesContainer.appendChild(particle);
    }
}

// ===========================
// BUTTON INTERACTIONS
// ===========================

document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-2px)';
    });

    btn.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// ===========================
// PAGE LOAD ANIMATIONS
// ===========================

window.addEventListener('load', () => {
    // Start typing animation
    typeAnimation();

    // Create particles
    createParticles();

    // Fade in elements on load
    document.querySelectorAll('.hero-title, .hero-subtitle').forEach((el, index) => {
        el.style.opacity = '1';
    });
});

// ===========================
// PROJECT CARD HOVER EFFECTS
// ===========================

document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-15px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// ===========================
// SKILL CARD HOVER EFFECTS
// ===========================

document.querySelectorAll('.skill-card').forEach((card) => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// ===========================
// ACHIEVEMENT CARD HOVER EFFECTS
// ===========================

document.querySelectorAll('.achievement-card').forEach((card) => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// ===========================
// GLASS EFFECT ENHANCEMENT
// ===========================

document.querySelectorAll('.glass-effect').forEach((element) => {
    element.addEventListener('mouseenter', function () {
        this.style.borderColor = 'rgba(99, 102, 241, 0.5)';
    });

    element.addEventListener('mouseleave', function () {
        this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    });
});

// ===========================
// RESPONSIVE SCROLL ANIMATIONS
// ===========================

function handleWindowResize() {
    if (window.innerWidth <= 768) {
        // Adjust animation speeds for mobile
        typingSpeed = 30;
        deletingSpeed = 20;
    } else {
        typingSpeed = 50;
        deletingSpeed = 30;
    }
}

window.addEventListener('resize', handleWindowResize);
handleWindowResize();

// ===========================
// SMOOTH PAGE SCROLL
// ===========================

window.addEventListener('scroll', () => {
    // Add any additional scroll-based animations here
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    // You can use this for progress bar or other scroll-based effects
});

// ===========================
// PARALLAX EFFECT (Optional Enhancement)
// ===========================

window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.scrollY;
        const heroElements = hero.querySelectorAll('.hero-content, .hero-image');

        heroElements.forEach((el, index) => {
            el.style.transform = `translateY(${scrollPosition * 0.1 * (index % 2 === 0 ? -1 : 1)}px)`;
        });
    }
});

// ===========================
// ACCESSIBILITY ENHANCEMENTS
// ===========================

// Reduce motion for users who prefer it
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.querySelectorAll('*').forEach((el) => {
        el.style.animation = 'none !important';
        el.style.transition = 'background-color 0.3s ease, color 0.3s ease !important';
    });
}

// ===========================
// FORM SUBMIT & WHATSAPP
// ===========================

const contactForm = document.getElementById("contactFormMain");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        if (!name || !email || !message) {
            e.preventDefault();
            alert("❌ Please fill in all fields.");
            return;
        }

        const fullMessage = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        const whatsappMessage = encodeURIComponent(fullMessage);
        const whatsappURL = `https://wa.me/919840787075?text=${whatsappMessage}`;

        window.open(whatsappURL, "_blank");

        // The browser will now submit the form to FormSubmit.co in a new tab.
    });
}

// ===========================
// INITIALIZATION
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all sections
    updateActiveNavLink();

    // Add loading state
    document.body.style.opacity = '1';
});

console.log('🚀 Portfolio loaded successfully!');
