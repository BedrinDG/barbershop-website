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

$('.popup-close').on('click', function () {
    $('.popup').css('display', 'none');
})

$('#get-discount').on('click', function () {
    $('#discount').css('display', 'flex');
})
$('.item-service-name').each(function (index, element) {
    $('#service').next().append(`<div data-value="${index}">${$(this).html()}</div>`);
})

$(".custom-select").click(function (event) {
    event.stopPropagation();
    $("#dropdown").toggle();
});

$(".options div").click(function () {
    let text = $(this).text();
    let value = $(this).data("value");

    $("#selected").text(text);
    $("#service").val(value);

    $('#service').next().hide();
});

$(document).click(function () {
    $("#dropdown").hide();
});


new Swiper('.mySwiper', {
    autoHeight: false,
    direction: 'horizontal',
    effect: 'slide',
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    spaceBetween: -150,
    slidesPerView: 2,
    initialSlide: 1,
    autoplayStopOnLast: false,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        paginationType: "bullets",
        dynamicMainBullets: 0
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    breakpoints: {
        1016: {
            spaceBetween: -38,
            slidesPerView: 2,
        }
    }
})
