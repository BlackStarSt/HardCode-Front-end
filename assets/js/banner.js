$('index.html').ready(function() {
    $('.banner__imagens').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        appendDots: $('.barra__progresso'),
        dots: true,
        arrows: false,
    });
});