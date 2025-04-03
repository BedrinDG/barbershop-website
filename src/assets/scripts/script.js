$('#menu *').on('click', () => {
    if ($('#menu-open').css('display') === 'block') {
        $("#menu").hide();
    }
})

$("#menu-open").on('click', function () {
    $('#menu').show();
})

$('#about-us').click(function () {
    $('.about')[0].scrollIntoView({behavior: 'smooth'});
});

$('#services, #prices').click(function () {
    $('.price')[0].scrollIntoView({behavior: 'smooth'});
});

$('#barbers').click(function () {
    $('.barber')[0].scrollIntoView({behavior: 'smooth'});
});

//swiper init
// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     centeredSlides: true,
//     loop: true,
//     slidesPerView: 3,
//     autoHeight: false,
//     slidesOffsetBefore: 0,
//     navigation: {
//         nextEl: ".next",
//         prevEl: ".prev",
//     },
//     coverflowEffect: {
//         rotate: 0,
//         stretch: 0,
//         depth: 150,
//         modifier: 2.5,
//         slideShadows: false,
//     },
//     // autoplay: {
//     //     delay: 3000,
//     //     disableOnInteraction: false,
//     // },
//     pagination: {
//         el: ".swiper-pagination",
//         dynamicBullets: true,
//         paginationType: "bullets",
//         dynamicMainBullets: 0
//     },
// });



var mySwiper = new Swiper ('.swiper-container', {
    speed: 400,
    // spaceBetween: 100,
    initialSlide: 0,
    //truewrapper adoptsheight of active slide
    autoHeight: false,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // delay between transitions in ms
    autoplay: 5000,
    autoplayStopOnLast: false, // loop false also
    // If we need pagination
    pagination: '.swiper-pagination',
    paginationType: "bullets",

    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // And if we need scrollbar
    //scrollbar: '.swiper-scrollbar',
    // "slide", "fade", "cube", "coverflow" or "flip"
    effect: 'slide',
    // Distance between slides in px.
    spaceBetween: 60,
    //
    slidesPerView: 2,
    //
    centeredSlides: true,
    //
    slidesOffsetBefore: 0,
    //
    grabCursor: true,
})
