let appointment_time = ['10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

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

$('.form-open').on('click', function () {
    $('#order').css('display', 'flex');
})

$('#get-discount').on('click', function () {
    $('#discount').css('display', 'flex');
})
$('.item-service-name').each(function (index, element) {
    $('#service').next().append(`<div data-value="${index}">${$(this).html()}</div>`);
})

$('.bottom-element-title').each(function (index, element) {
    $('#barber').next().append(`<div data-value="${index}">${$(this).html()}</div>`);
})

jQuery.each(appointment_time ,function (index, element) {
    $('#time').next().append(`<div data-value="${element}">${element}</div>`);
})

$(".custom-select").click(function (event) {
    event.stopPropagation();
    $(".options").hide();
    $(this).find(".options").toggle();
});

$(".options div").click(function (event) {
    event.stopPropagation();
    let text = $(this).text();
    let value = $(this).data("value");

    $(this).parent().parent().find('.selected-option').text(text);
    $(this).parent().prev().val(value);
    $(this).parent().hide();
});

$(document).click(function () {
    $(".options").hide();
});

$('#submit').on('click', function () {
    let name = $('#name');
    let service = $('#service');
    let date = $('#date');
    let phone = $('#phone-number');
    let barber = $('#barber');
    let time = $('#time');
    let hasError = false;

    $('.input_error').hide();
    $('.form-input').removeClass('error').addClass('not_error');

    if (!name.val()) {
        name.next().show();
        name.removeClass('not_error').addClass('error');
        hasError = true;
    }
    if (!service.val()) {
        service.parent().next().show();
        service.parent().removeClass('not_error').addClass('error');
        hasError = true;
    }
    if (!date.val()) {
        date.next().show();
        date.removeClass('not_error').addClass('error');
        hasError = true;
    }
    if (!phone.val()) {
        phone.next().show();
        phone.removeClass('not_error').addClass('error');
        hasError = true;
    }
    if (!barber.val()) {
        barber.parent().next().show();
        barber.parent().removeClass('not_error').addClass('error');
        hasError = true;
    }
    if (!time.val()) {
        time.parent().next().show();
        time.parent().removeClass('not_error').addClass('error');
        hasError = true;
    }
    if (!hasError) {
        $.ajax({
            method: "POST",
            url: "https://testologia.ru/checkout",
            data: {name: name.val(), service: service.val(), date: date.val(), phone: phone.val(), barber: barber.val(), time: time.val()}
        })
            .done(function (msg) {
                if (msg.success === 1){
                    $("#order").css('display', 'none');
                    $("#success").css('display', 'flex');
                } else {
                    alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ");
                }
            });
    }
})

new WOW({
    animateClass: 'animate__animated'
}).init();

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
