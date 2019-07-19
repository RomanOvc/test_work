// это для 1.html

$(document).ready(function () {
    $('.header').height($(window).height());

});
$(".navbar a").click(function () {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top
    }, 1000)

});