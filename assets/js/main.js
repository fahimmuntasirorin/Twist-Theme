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
});