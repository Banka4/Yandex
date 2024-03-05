$(".single-item").slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: $(".services__btn-left"),
    nextArrow: $(".services__btn-right"),
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

$(window).on("resize", function () {
    if ($(window).width() > 1279) {
        $(".single-item").slick("unslick");
    } else {
        $(".single-item").not(".slick-initialized").slick({
            infinite: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
        });
    }
});
$(".party__list").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: $(".party__btn-left"),
    nextArrow: $(".party__btn-right"),
    // autoplay: true,
    // autoplaySpeed: 4000,
    responsive: [
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
            },
        },
    ],
});
