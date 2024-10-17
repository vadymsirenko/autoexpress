$(document).ready(function () {
    $('.carousel__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
}); 

$(".header__content, .services").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});
