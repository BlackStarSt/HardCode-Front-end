$('index.html').ready(function() {
    $('.banner__imagens').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        appendDots: $('.barra__progresso'),
        dots: true,
        arrows: false,
        asNavFor: '.subtitulo__container, .banner__descricao'
    });
    $('.subtitulo__container, .banner__descricao').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        focusOnSelect: true,
    });
});