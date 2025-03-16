/* Swiper Configuration */
const initSwiper = () => {
    new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 50,
        keyboard: { enabled: true },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
        },
        nested: true,
    });

    new Swiper(".mySwiper2", {
        direction: "vertical",
        mousewheel: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            direction: "vertical",
            clickable: true,
        },
        nested: true,
    });

    new Swiper(".mySwiper3", {
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },
    });
};

/* Typed Configuration */
const initTyped = () => {
    const elements = [
        { selector: "#element", strings: ["Desenvolvedor Full-stack", "Desenvolvedor de Jogos", "Desenvolvedor de Aplicativos"], speed: 110 },
        { selector: "#element-about", strings: ["Sobre Mim^3000"], speed: 110 },
        { selector: "#element-services", strings: ["Serviços^3000"], speed: 110 },
        { selector: "#element-tech", strings: ["Tecnologias que utilizo:^3000"], speed: 50 },
    ];

    elements.forEach(({ selector, strings, speed }) => {
        if (document.querySelector(selector)) {
            new Typed(selector, {
                strings,
                typeSpeed: speed,
                loop: true,
            });
        }
    });
};

/* Dark and Light Mode Toggle */
const initThemeToggle = () => {
    const modeIcon = document.getElementById("mode_icon");
    const body = document.body;

    if (!modeIcon) return;

    modeIcon.addEventListener("click", () => {
        const isDarkMode = modeIcon.classList.contains("bxs-moon");

        modeIcon.classList.toggle("bxs-moon", !isDarkMode);
        modeIcon.classList.toggle("bxs-sun", isDarkMode);
        body.classList.toggle("dark", isDarkMode);
    });
};

/* Initialize All Functions */
document.addEventListener("DOMContentLoaded", () => {
    initSwiper();
    initTyped();
    initThemeToggle();
});
