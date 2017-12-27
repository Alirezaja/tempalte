$(document).ready(function() {

    if($(window).width() > 500){
        $('.bxslider').bxSlider({
            mode: 'horizontal',
            moveSlides: 1,
            slideMargin: 40,
            infiniteLoop: true,
            responsive: true,
            minSlides: 1,
            maxSlides: 1,
            speed: 800,
            pager: false,
            onSlideAfter: function($slideElement, oldIndex, newIndex) {
                $(".det").fadeIn();
            },
            onSlideBefore: function($slideElement, oldIndex, newIndex) {
                $(".det").fadeOut();
            }
        });
    }else{
        $('.bxslider').bxSlider({
            mode: 'horizontal',
            moveSlides: 1,
            slideMargin: 40,
            infiniteLoop: true,
            responsive: true,
            minSlides: 1,
            maxSlides: 1,
            speed: 800,
            pager: false,
        });
    }


});