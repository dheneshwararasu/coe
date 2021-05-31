console.log("js");

function init_site_js() {
    $(document).foundation();

    $(document).ready(function() {
        // trigger click

        $(".hamburger").click(function() {
            $(this).toggleClass("is-active");
            $(".mob-nav-hold").toggleClass("close");
            $(".header").toggleClass("close");
        });

        setTimeout(function() {
            $(".intro-wrapper").addClass("close");
        }, 500);

        setTimeout(function() {
            $(".intro-error-wrapper").addClass("close");
        }, 500);

        // Entry table scroll wrap
        $(".entry table").wrap("<div class='table-scroll'></div>");

        // #ScrollToTop

        // $("a[href='#top']").click(function() {
        //   $("html, body").animate({ scrollTop: 0 }, "slow");
        //   return false;
        // });

        articlesCarousel = $(".owl-carousel.articles-carousel");
        articlesCarousel.owlCarousel({
            loop: false,
            nav: true,
            dots: true,
            items: 1,
            autoWidth: true,
            responsive: {
                0: {
                    margin: 50,
                },
                800: {
                    margin: 50,
                },
                1100: {
                    margin: 100,
                },
            },
            // onChanged: callback
        });

        // function callback(event) {
        //     items = event.item.count;     // Number of items
        //     item = event.item.index;     // Position of the current item
        // }

        // articlesCarousel.on('mousewheel', '.owl-stage', function(e) {
        //     if (e.deltaY > 0) {
        //         articlesCarousel.trigger('prev.owl');
        //         if (items != item + 1) {
        //             e.preventDefault();
        //         }
        //         e.preventDefault();
        //     } else {
        //         articlesCarousel.trigger('next.owl');
        //         if (items != item + 1) {
        //             e.preventDefault();
        //         }
        //     }
        // });

        // articlesCarousel.on('mousewheel', '.owl-stage', function (e) {
        //     if (e.deltaY>0) {
        //         articlesCarousel.trigger('prev.owl');
        //     } else {
        //         articlesCarousel.trigger('next.owl');
        //     }
        //     e.preventDefault();
        // });

        // #href scroll //

        // $('a[href^="#"]').on('click',function (e) {
        //     e.preventDefault();

        //     var target = this.hash;
        //     var $target = $(target);

        //     $('html, body').stop().animate({
        //         'scrollTop': $target.offset().top
        //     }, 700, 'swing', function () {
        //         window.location.hash = target;
        //     });
        // });

        // animations
        var $animation_elements = $(".animation-element");
        var $window = $(window);
        $vHeight = $(window).height();

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = window_top_position + window_height;
            $.each($animation_elements, function() {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top + $vHeight / 6;
                var element_bottom_position = element_top_position + element_height;
                if (
                    element_bottom_position >= window_top_position &&
                    element_top_position <= window_bottom_position
                ) {
                    $element.addClass("in-view");
                }
            });
        }
        $window.on("scroll resize", check_if_in_view);
        $window.trigger("scroll");

        // load more posts
        $(".posts-list > ul > li:lt(9)").show();

        infomacijaItems = $(".posts-list > ul > li").size();
        if (infomacijaItems < 10) {
            $(".js-more-posts").parent().hide();
        } else {
            $(".js-more-posts").parent().show();
        }

        $(".js-more-posts").click(function() {
            shown = $(".posts-list > ul > li:visible").size() + 9;
            if (shown < infomacijaItems) {
                $(".posts-list > ul > li:lt(" + shown + ")").show();
            } else {
                $(".posts-list > ul > li:lt(" + infomacijaItems + ")").show();
                $(".js-more-posts").parent().hide();
            }
        });

        if ($(".horizontal-content").length > 0) {
            manifestoW = $(".horizontal-content").outerWidth();
            // manifestoNeeded = manifestoW + (manifestoW / 5)
            manifestoNeeded = manifestoW;
            $(".horizontal").css("width", manifestoNeeded);

            $(window).on("resize", function() {
                manifestoW = $(".horizontal-content").outerWidth();
                manifestoNeeded = manifestoW;
                // manifestoNeeded = manifestoW + (manifestoW / 5)
                $(".horizontal").css("width", manifestoNeeded);
            });

            var controller = new ScrollMagic.Controller();

            var tl = new TimelineMax();

            var elementWidth = document.getElementById("container").offsetWidth;

            var width = window.innerWidth - elementWidth;

            var duration = (elementWidth / window.innerHeight) * 100;

            var official = duration + "%";

            tl.to(".container", 5, {
                x: width,
                ease: Power0.easeNone
            });

            var scene1 = new ScrollMagic.Scene({
                    triggerElement: ".container",
                    triggerHook: 0,
                    duration: official,
                })
                .setPin(".container")
                .setTween(tl)
                .addTo(controller);

            // console.log(elementWidth);
        }

        // $(".form-submit button").click(function() {
        //     $('.contact-form-hold').hide()
        //     $('.contact-form-success').show()
        // });

        var $window = $(window);
        $vHeight = $(window).height();
        $(window).scroll(function() {
            st = $(this).scrollTop();

            if ($(".horizontal-hold").length > 0) {
                horizontalWrapper = $(".horizontal-hold").offset().top;
                horizontalWrapperEnd = $(".horizontal-end").offset().top;
                scrolerW = $(".horizontal-content-scroller").outerWidth();
                scrolerSpanW = $(".horizontal-content-scroller span").outerWidth();
                totalH = horizontalWrapperEnd - horizontalWrapper;

                calculated =
                    ((st - horizontalWrapper) / (totalH - $vHeight)) *
                    (scrolerW - scrolerSpanW);

                $(".horizontal-content-scroller span").css({
                    transform: "translateX(" + calculated + "px)",
                    "-webkit-transform": "translateX(" + calculated + "px)",
                    "-ms-transform": "translateX(" + calculated + "px)",
                });

                if (st > horizontalWrapper) {
                    $(".horizontal-content-scroller").addClass("close");
                } else {
                    $(".horizontal-content-scroller").removeClass("close");
                }

                if (st > horizontalWrapperEnd - $vHeight) {
                    $(".horizontal-content-scroller").addClass("fadeout");
                } else {
                    $(".horizontal-content-scroller").removeClass("fadeout");
                }
            }
        });

        //F5 o cambio de ruta, siempre al TOP
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual"; //
        }
        window.scrollTo(0, 0);
        //
    });
}

// Get the modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var elmnt = document.getElementsByTagName("BODY")[0];
var elementIframe = document.getElementById("vimeoFrame");
var contentModal = document.getElementById("myModalContent");
btn.onclick = function() {
    modal.style.display = "block";
    modal.style.height = elmnt.offsetHeight + "px";
    contentModal.style.width = elmnt.offsetWidth / 1.5 + "px";
    elementIframe.src = "https://player.vimeo.com/video/443543658?playsinline=0";
    elementIframe.height = elmnt.offsetHeight / 1.5 + "px";
    elementIframe.width = elmnt.offsetWidth / 1.5 + "px";
};
elmnt.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        elementIframe.src = "";
    }
    return;
};