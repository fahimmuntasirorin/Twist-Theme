
// sticky menu
$(window).load(() => {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 20) {
            $('.header-area').addClass('sticky')
        } else {
            $('.header-area').removeClass('sticky')
        }
    })
})
// isotope plugin
$(document).ready(function () {
    // counter up 
    $('.project-counter').counterUp({
        delay: 10,
        time: 1000
    });
    // magnific popup 
    $('.project-img').magnificPopup({
        type: 'image',

        gallery: {
            enabled: true
        },


    });
    // testimonial slider
    $('.testimonial-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
    });
    // client slider
    $('.clients').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
    // about popup video
    $('.video-popup').magnificPopup({
        type: 'iframe',
    });
    // isotope filtering
    // init Isotope
    var $grid = $('.project-items').isotope({
        // options
    });
    // filter items on button click
    $('.projects-menu').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    // wow js
})

new WOW().init();
