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
        }

    });
    // testimonial slider
    $('.testimonial-slider').slick({
        arrows: false,
        dots: true,
        autoplay:true,
        autoplaySpeed: 1000,
    });
<<<<<<< HEAD
    // client slider
    $('.clients').slick({
        arrows: false,
        dots: false,
        autoplay:true,
        autoplaySpeed: 1000,
        slidesToShow:4
    });
    // orinhossain
=======
>>>>>>> 31a05cdeb18162a1172b5c2b4b9bd357201873a6
});