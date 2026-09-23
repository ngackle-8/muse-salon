const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");
const heroMessage = document.querySelector(".hero-message");

window.addEventListener("scroll", () => {

    const heroHeight = hero.offsetHeight;
    const viewportHeight = window.innerHeight;

    const scrollDistance = heroHeight - viewportHeight;

    let progress = window.scrollY / scrollDistance;
    progress = Math.max(0, Math.min(progress, 1));


    // SCENE 1 — MUSE

    let fadeProgress = (progress - 0.2) / 0.35;
    fadeProgress = Math.max(0, Math.min(fadeProgress, 1));

    const moveY = fadeProgress * -200;
    const scale = 1 + fadeProgress * 0.3;

    heroContent.style.transform =
        `translateY(${moveY}px) scale(${scale})`;

    heroContent.style.opacity = 1 - fadeProgress;


    // SCENE 2 — MESSAGE

    let messageProgress = (progress - 0.5) / 0.2;
    messageProgress = Math.max(0, Math.min(messageProgress, 1));

    let messageExit = (progress - 0.85) / 0.15;
    messageExit = Math.max(0, Math.min(messageExit, 1));

    heroMessage.style.opacity =
        messageProgress * (1 - messageExit);

    const messageY =
        80 - messageProgress * 80 - messageExit * 80;

    heroMessage.style.transform =
        `translateY(${messageY}px)`;

});

const stylistCards = document.querySelectorAll(".stylist-card");
const stylistObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.2
});

stylistCards.forEach((card) => {
    stylistObserver.observe(card);
});


const menuButton = document.querySelector(".menu-button");
const menuClose = document.querySelector(".menu-close");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    document.body.classList.add("menu-open");
});

menuClose.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
});

const mobileMenuLinks = document.querySelectorAll(".mobile-menu-links a");

mobileMenuLinks.forEach((link) => {

    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        document.body.classList.remove("menu-open");
    });

});


const sectionHeadings = document.querySelectorAll(
    ".about-heading, .stylists-heading, .services-heading, .book-heading"
);

const headingObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.2
});

sectionHeadings.forEach((heading) => {
    headingObserver.observe(heading);
});