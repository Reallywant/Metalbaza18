$('.slider-first').slick({
    dots: true,
    dotsClass: 'slick-dots dots',
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    accessibility: false,
});
$('.slider-second').slick({
    arrows: true,
    prevArrow:'<button class="slick-prev prev"></button>',
    nextArrow:'<button class="slick-next next"></button>',
    speed: 1000,
    accessibility: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: false,
});