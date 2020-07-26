import showMenu from "./modules/showMenu";

new WOW().init();

var header = $('.header'),
    scrollPrev = 0;

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if ( scrolled > 10 && scrolled > scrollPrev ) {
        header.removeClass('animate__fadeInDown');
        header.addClass('animate__fadeOutUp');
        header.addClass('out');
    } else {
        header.removeClass('out');
        header.removeClass('animate__fadeOutUp');
        header.addClass('animate__fadeInDown');
    }
    scrollPrev = scrolled;
});


$(".footer__up, .benefits__button a").click(function(){
    let link = $(this).attr("href");
    $("html, body").animate({scrollTop: $(link).offset().top+"px"});
    return false;
})


showMenu();