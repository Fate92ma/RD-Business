$(document).ready(function () { // Start Coding Here

    // Header on Scroll

    $(window).scroll(function () {
        var i = $(this).scrollTop()

        if (i >= 100) {
            $("header").css("background-color", "var(--color4)")
                .css("box-shadow", "0px 3px 6px 3px rgba(0,0,0,0.06)");

            $(".top i").css("visibility", "visible");

        } else {
            $("header").css("background-color", "transparent")
                .css("box-shadow", "none");

            $(".top i").css("visibility", "hidden");
        }
    });

    // Back to top

    $('.top i').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1200);
    });

    // Menu

    $(".menu").click(function () {
        $("header nav .list").toggleClass("mini");
    });

    // Portfolio

    $('#mixedSlider').multislider({
        duration: 2000,
        interval: 2000
    });

    // countTo

    var $window = $(window);

    $(window).on('scroll', function () {
        $topOffset = $(this).scrollTop();
        console.log($topOffset);

        if ($topOffset > 2500) {
            $('.timer').countTo({
                onUpdate: true
            });
        };
    });

}); // End Code