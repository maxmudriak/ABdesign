//=require jquery.min.js

// to inlude bootstrap plugins add "=" sign below
// require javascripts/bootstrap/*.*
//=require javascripts/bootstrap.min.js

//=require slick.min.js

;(function($){


	//affix #work-affix-first

    $('#work-affix-first').affix({
        offset: {
            top: $('#work-affix-first').offset().top,
            bottom: (
                $('#work-second').outerHeight(true)+
                $('#work-third').outerHeight(true)+
                $('.ba-contact').outerHeight(true)) + 350
        }
    });

    //affix #work-affix-second

    $('#work-affix-second').affix({
        offset: {
            top: $('#work-affix-second').offset().top,
            bottom: (
                $('#work-third').outerHeight(true)+
                $('.ba-contact').outerHeight(true)) + 350
        }
    });

    //affix #work-affix-second

    $('#work-affix-third').affix({
        offset: {
            top: $('#work-affix-third').offset().top,
            bottom: (
                $('.ba-contact').outerHeight(true)) + 350
        }
    });


    // remove affix and add slider

    $(document).ready(function(){
        // var $slider = $('.ba-slider');
        //
        // $slider.slick({
        // 	dots: true,
        // 	infinite: false
        // });
    });
    //
    //  $(window).on("resize", function() {
    //      var viewportWidth = $(window).width();
    //      if (viewportWidth < 992) {
    //          $(".ba-works__section").removeAttr("id").removeAttr("data-spy").removeClass("affix-top","affix-bottom","affix").addClass("remove");
    //          $(".ba-works__body").addClass("ba-slider");
    //      }
    //      console.log(viewportWidth);
    // });

    // $(window).resize(function () {
    //     var viewportWidth = $(window).width();
    //     if (viewportWidth < 1000) {
    //         $(".ba-works__section").removeAttr("id").removeAttr("data-spy").addClass("remove");
    //     }
    //     console.log(viewportWidth);
    // });

    //
    // $(window).ready(function () {
    //     var viewportWidth = $(window).width();
    //     if (viewportWidth < 992) {
    //         $(".ba-works__section").removeAttr("id").removeAttr("data-spy").removeClass("affix-top","affix-bottom","affix").addClass("remove");
    //         $(".ba-works__body").addClass("ba-slider");
    //     }
    //     console.log(viewportWidth);
    // });




    //fixed-nav

    window.onscroll = function() {
        var pageY = window.pageYOffset || document.documentElement.scrollTop;

        if (pageY>$('.ba-about').outerHeight(true)) {
            $(".ba-fixed-nav").addClass("visible")
        }
        if (pageY<$('.ba-about').outerHeight(true)) {
            $(".ba-fixed-nav").removeClass("visible")
        }
    };



    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 2000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
})(jQuery);






















