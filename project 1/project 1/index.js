const navLinks = document.querySelector(".links-container");
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar-container");
gsap.registerPlugin(ScrollTrigger);

let isActive = false;
const openNavLinks = () => {
    isActive = !isActive;
    if (isActive) {
        navLinks.style.display = "flex";
        gsap.fromTo(
            ".links-container",
            {
                opacity: 0,
                x: -900,
                duration: 0.3,
            },
            { opacity: 100, x: 0, duration: 0.3 }
        );
    } else {
        gsap.fromTo(
            ".links-container",
            { opacity: 100, x: 0, duration: 0.6 },
            {
                opacity: 0,
                x: -900,
                duration: 0.6,
            }
        );
        // navLinks.style.display = "none";
    }
};

window.addEventListener("scroll", function () {
    let scrollPosition = window.pageYOffset;
    if (scrollPosition >= 80) {
        navbar.style.backgroundColor = "white";
        navbar.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
    } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
    }
});

// const tl = gsap.timeline();

// tl.from(".hero-text-content", {
//     opacity: 0,
//     x: -400,
//     duration: 1,
//     ease: "power3.inOut",
//     stagger: 0.5,
// })
//     .from(
//         ".hero-img-container",
//         {
//             opacity: 0,
//             x: 400,
//             duration: 1,
//             ease: "power3.inOut",
//             stagger: 0.5,
//         },
//         "-=1"
//     )
//     .from(
//         ".card",
//         {
//             scrollTrigger: {
//                 trigger: ".card",
//                 toggleActions: "restart restart none none",
//             },
//             stagger: 0.2,
//             y: 100,
//             opacity: 0,
//             duration: 0.5,
//             ease: "linear",
//         },
//         "-=.3"
//     );
