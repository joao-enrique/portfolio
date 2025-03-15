/* Swiper configuration */

var swiper = new Swiper('.mySwiper', {
    loop: true,
    spaceBetween: 50,

    keyboard: {
        enabled: true,
    },
  
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true,
    },

    nested: true,
});

var swiper2 = new Swiper(".mySwiper2", {
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

var swiper = new Swiper(".mySwiper3", {
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
});

/* Typed configuration */

var typed = new Typed('#element', {
    strings: ['Desenvolvedor Full-stack', 'Desenvolvedor de Jogos', 'Desenvolvedor e de Aplicativos'],
    typeSpeed: 110,
    loop: true,
});

var typed = new Typed('#element-about', {
    strings: ['Sobre Mim^3000'],
    typeSpeed: 110,
    loop: true,
});

var typed = new Typed('#element-services', {
    strings: ['Serviços^3000'],
    typeSpeed: 110,
    loop: true,
});

var typed = new Typed('#element-tech', {
    strings: ['tecnologias que utilizo:^3000'],
    typeSpeed: 50,
    loop: true,
});


/* dark and light mode configuration */

const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const body = document.body;

    if(mode.classList.contains('bxs-moon')) {
        mode.classList.remove('bxs-moon');
        mode.classList.add('bxs-sun');

        body.classList.add('dark');
        return ;
    }
    
    mode.classList.remove('bxs-sun');
    mode.classList.add('bxs-moon');

    body.classList.remove('dark');
});