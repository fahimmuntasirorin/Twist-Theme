
// sticky menu
$(window).load(()=>{
    $(window).on('scroll',function(){
        if($(this).scrollTop() > 20){
            $('.header-area').addClass('sticky')
        }else{
            $('.header-area').removeClass('sticky')
        }
    })
})

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
    // client slider
    $('.clients').slick({
        arrows: false,
        dots: false,
        autoplay:true,
        autoplaySpeed: 1000,
        slidesToShow:4
    });
    // about popup video
    $('.video-popup').magnificPopup({
        type: 'iframe',
    });
})