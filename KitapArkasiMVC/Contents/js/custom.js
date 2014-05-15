$(function () {

    // advantages_more
    $('.advantages_more > a:first-child').on('click', function () {
        $(this).parent().find('ul').fadeToggle();
        return false;
    });
    $('body').on('click', function () {
        $('.advantages_more > ul').fadeOut();
    });

    // member_title
    $('.member_title > span').on('click', function () {
        $(this).parent().find('.members_advantages_block').fadeToggle();
    });

    // show/hide input value
    $('input[type="text"]').each(function () {
        var valtxt = $(this).attr('value');
        $(this).focus(function () { if ($(this).val() == valtxt) { $(this).val(''); } });
        $(this).blur(function () { if ($(this).val() == '') { $(this).val(valtxt); } });
    });

    // editors_choice slider
    $('.editors_choice > ul').bxSlider({
        auto: true,
        adaptiveHeight: true,
        mode: 'fade',
        pause: 12000  /* duration of slide is display */
    });

    // readalikes slider
    if ($(window).width() > 788) {
        $('.readalikes_swirl > ul').bxSlider({
            auto: true,
            adaptiveHeight: true,
            minSlides: 2,
            maxSlides: 4,
            moveSlides: 1,
            slideWidth: 430,
            slideMargin: 80,
            pause: 12000
        });
    } else {
        $('.readalikes_swirl > ul').bxSlider({
            auto: true,
            adaptiveHeight: true,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            slideWidth: 430,
            slideMargin: 80,
            pause: 12000
        });
    };

    // topbuttons 
    if ($(window).width() > 788) {
        $('.topbuttons ul').bxSlider({
            minSlides: 4,
            maxSlides: 4,
            moveSlides: 1,
            slideWidth: 200,
            slideMargin: 20,
            pager: false
        });
    } else {
        $('.topbuttons ul').bxSlider({
            minSlides: 2,
            maxSlides: 2,
            moveSlides: 1,
            slideWidth: 200,
            slideMargin: 20,
            pager: false
        });
    };

    // Publishing Soon slider
    if ($(window).width() > 788) {
        $('.publishing_soon ul').bxSlider({
            minSlides: 6,
            maxSlides: 16,
            moveSlides: 1,
            slideWidth: 110,
            slideMargin: 32,
            pager: false
        });
    } else {
        $('.publishing_soon ul').bxSlider({
            minSlides: 4,
            maxSlides: 16,
            moveSlides: 1,
            slideWidth: 110,
            slideMargin: 32,
            pager: false
        });
    };

    // Featured reading guides slider
    if ($(window).width() > 788) {
        $('.most_viewed_books ul').bxSlider({
            minSlides: 5,
            maxSlides: 5,
            moveSlides: 1,
            slideWidth: 175,
            slideMargin: 5,
            pager: false
        });
    } else {
        $('.most_viewed_books ul').bxSlider({
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            slideWidth: 175,
            slideMargin: 5,
            pager: false
        });
    };

    // Most viewed book recommendation slider
    if ($(window).width() > 788) {
        $('.featured_reading_guides ul').bxSlider({
            minSlides: 2,
            maxSlides: 4,
            moveSlides: 1,
            slideWidth: 270,
            slideMargin: 25,
            pager: false
        });
    } else {
        $('.featured_reading_guides ul').bxSlider({
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            slideWidth: 270,
            slideMargin: 25,
            pager: false
        });
    };

    // ezine last issues
    if ($(window).width() > 788) {
        $('.last_issue ul').bxSlider({
            minSlides: 7,
            maxSlides: 7,
            moveSlides: 1,
            slideWidth: 72,
            slideMargin: 12,
            pager: false
        });
    } else {
        $('.last_issue ul').bxSlider({
            minSlides: 4,
            maxSlides: 4,
            moveSlides: 1,
            slideWidth: 72,
            slideMargin: 12,
            pager: false
        });
    };

    // news tickertape
    $('.tickertape ul').bxSlider({
        auto: true,
        mode: 'fade',
        pager: false,
        controls: false,
        speed: 1000
    });

    if ($(window).width() > 788) {
        $('.members_last_issue ul').bxSlider({
            minSlides: 5,
            maxSlides: 5,
            moveSlides: 1,
            slideWidth: 99,
            slideMargin: 17,
            pager: false
        });
    } else {
        $('.members_last_issue ul').bxSlider({
            minSlides: 2,
            maxSlides: 2,
            moveSlides: 1,
            slideWidth: 99,
            slideMargin: 17,
            pager: false
        });
    };

    //Discuss this book, Book Recommendations, Recent Reader Reviews sliders
    $('.discuss_book ul, .book_recommendations:not(.book_club_recommendations) ul, .recent_reader_reviews ul').bxSlider({
        adaptiveHeight: true,
        mode: 'fade',
        pager: false
    });

    // menu trigger
    $('.menu_trigger').on('click', function () {
        $('.menu_trigger + ul').toggle();
    });


});