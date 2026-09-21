/*=========================
    TYPED JS
=========================*/

var typed = new Typed(".text", {

    strings: [
        "Frontend Developer",
        "Backend Developer",
        "Web Developer",
        "UI / UX Designer"
    ],

    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1200,
    loop: true

});


/*=========================
    ACTIVE NAVBAR
=========================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/*=========================
    STICKY HEADER
=========================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    header.classList.toggle(
        "sticky",
        window.scrollY > 100
    );

});


/*=========================
    SMOOTH SCROLL
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/*=========================
    BUTTON ANIMATION
=========================*/

const buttons = document.querySelectorAll(".btn-box");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.08)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});


/*=========================
    CARD HOVER
=========================*/

const cards = document.querySelectorAll(
    ".service-card,.exp-card,.certificate-card,.project-card,.info-box"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


/*=========================
    PORTFOLIO HORIZONTAL SCROLL
=========================*/

const portfolio = document.querySelector(".portfolio-content");

if (portfolio) {

    portfolio.addEventListener("wheel", (e) => {

        const maxScroll =
            portfolio.scrollWidth - portfolio.clientWidth;

        const currentScroll = portfolio.scrollLeft;

        if (
            (e.deltaY > 0 && currentScroll < maxScroll) ||
            (e.deltaY < 0 && currentScroll > 0)
        ) {

            e.preventDefault();

            portfolio.scrollLeft += e.deltaY;

        }

    }, { passive: false });

}


/*=========================
    CERTIFICATE HORIZONTAL SCROLL
=========================*/

const certificateBox = document.querySelector(".certificate-box");

if (certificateBox) {

    certificateBox.addEventListener("wheel", (e) => {

        const maxScroll =
            certificateBox.scrollWidth - certificateBox.clientWidth;

        const currentScroll = certificateBox.scrollLeft;

        if (
            (e.deltaY > 0 && currentScroll < maxScroll) ||
            (e.deltaY < 0 && currentScroll > 0)
        ) {

            e.preventDefault();

            certificateBox.scrollLeft += e.deltaY;

        }

    }, { passive: false });

}


/*=========================
    SCROLL FADE
=========================*/

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(
    ".about,.education,.experience,.skills,.services,.portfolio,.certificate,.contact"
).forEach(el => {

    observer.observe(el);

});