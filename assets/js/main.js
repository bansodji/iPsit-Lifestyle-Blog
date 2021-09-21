// Mobile Menu
$(document).ready(function(){
    $(".mobile-menu-wrap").hide();

    $("#icon-menu").click(function(){
        $(".mobile-menu-wrap").show();
    });

    $("#icon-cross").click(function(){
        $(".mobile-menu-wrap").hide();
    });
});

// Sticky Navbar
$(document).ready(function(){
    $("nav").addClass("nav-padding");
});
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $("nav").addClass("is-sticky");
        $("nav").css({ "transition": "300ms" });
        $("nav").removeClass("nav-padding");
    }
    else {
        $("nav").removeClass("is-sticky");
        $("nav").css({ "transition": "300ms" });
        $("nav").addClass("nav-padding");
    }
});

// Owl Carousel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut'
    })
})