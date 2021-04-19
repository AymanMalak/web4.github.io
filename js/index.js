$(function () {



    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll < 600) {
            $('.navbar').css('background', 'transparent');
        } else {
            $('.navbar').css({'background': 'rgba(0, 0, 0, 0.7)','transition':'0.8s all ease'});
        }
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        autoplay: true,
        autoplayTimeout: 12000,
        rtl: true,
        autoplayHoverPause: false,
    });

    $('.ayman').animatedHeadline({
        animationType: "rotate-1",
        animationDelay: 2500,
        barAnimationDelay: 3800,
        barWaiting: 800,
        lettersDelay: 50,
        typeLettersDelay: 150,
        selectionDuration: 500,
        typeAnimationDelay: 1300,
        revealDuration: 600,
        revealAnimationDelay: 1500
    });

    $(".num1").numScroll({
        number: 6,
        'symbol': true,
        'fromZero': true,
        'time': 6000,
        'delay': 1000
    });
    $(".num2").numScroll({
        number: 3000,
        'symbol': true,
        'fromZero': true,
        'time': 6000,
        'delay': 1000
    });
    $(".num3").numScroll({
        number: 60,
        'symbol': true,
        'fromZero': true,
        'time': 6000,
        'delay': 1000
    });

    $(window).load(function () {
        $("#navigation a").mPageScroll2id({
            scrollSpeed: 500
        });
    });
    // viewport smooth

    $('.flex-btn').click(function () {
        // $(this).css({''})
        $('#viewport').css({'position':'relative'});
    })
    $('.flexpanel').flexpanel({
        animation: 'fade',
        direction: 'right',
        // Width: '0',
        // wrapper: '#wrapper',
        button: '.flex-btn',
        minWidth:'100',
        maxWidth:'1500',
    });

    $('#btn-contact').click(function () {
        $(this).slideUp(100, function () {
            $('#contact').slideDown(500);
        });
    });
    $('#angle').click(function () {
        $('#contact').slideUp();
        $('#btn-contact').delay(500).slideDown(100);
    })

    var timer = 0;
    function recheck() {
        var window_top = $(this).scrollTop();
        var window_height = $(this).height();
        var view_port_s = window_top;
        var view_port_e = window_top + window_height;

        if (timer) {
            clearTimeout(timer);
        }

        $('.fly').each(function () {
            var block = $(this);
            var block_top = block.offset().top;
            var block_height = block.height();

            if (block_top < view_port_e) {
                timer = setTimeout(function () {
                    block.addClass('show-block');
                }, 100);
            } else {
                timer = setTimeout(function () {
                    block.removeClass('show-block');
                }, 1000);
            }
        });
    }

    // $(window).scroll(function () {
    //     recheck();
    // });

    // $(window).resize(function () {
    //     recheck();
    // });

    // recheck();

    var breakpoint = 840;
});