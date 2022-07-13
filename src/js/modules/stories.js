var stories = {

    init: function () {
        this.slider();
    },

    slider: function () {
        var storiesSwiper = new Swiper(".stories", {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 0,
            slideToClickedSlide: false,
            shortSwipes: false,
            freeMode: {
                enabled: true,
                minimumVelocity: 0.2,
                momentum: false,
            },
            preloadImages: false,
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 3
            },
            navigation: {
                nextEl: '.storiesNext',
                prevEl: '.storiesPrev',
            },
            centeredSlides: false,
            breakpoints: {
                0: {
                },
                380: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                768: {
                    slidesPerGroup: 4,
                    slidesPerView: 4,
                    slideToClickedSlide: false,
                    shortSwipes: false,
                },
                960: {
                    slidesPerGroup: 5,
                    slidesPerView: 5
                },
                1280: {
                    slidesPerGroup: 5,
                    slidesPerView: 5
                },
                1440: {
                    slidesPerGroup: 5,
                    slidesPerView: 5
                }
            },
        });


        ;

        const storiesSliderSwiper = new Swiper('.storiesPopupSlider', {
            effect: "coverflow",
            grabCursor: false,
            allowTouchMove: true,
            centeredSlides: true,
            slidesPerView: "auto",
            preloadImages: false,
            spaceBetween: 150,
            // Enable lazy loading
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 4
            },
            slideToClickedSlide: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                modifier: 1,
                slideShadows: false,
                depth: 300,
                scale: 1,
            },
            pagination: {
                el: ".storiesPopupPagination",
                clickable: true,
            },
            navigation: {
                nextEl: '.storiesPopupNext',
                prevEl: '.storiesPopupPrev',
            },

        });


        document.querySelector(".storiesPopupClose").addEventListener("click", function (e) {
            document.querySelector(".storiesPopup").classList.remove("active");
            pageScroll.enable();
            document.querySelector("body").classList.remove("modalOnPage");
        });

        function linkClick() {
            document.querySelectorAll(".storiesElLink:not(.popupInit)").forEach(function (el) {
                el.classList.add("popupInit");
                el.addEventListener("click", function (e) {
                    e.preventDefault();
                    const elIndex = parseInt(this.closest(".storiesEl").getAttribute('data-i'));
                    storiesSliderSwiper.slideToLoop(elIndex, 200, function () {
                    });
                    pageScroll.disable();
                    document.querySelector("body").classList.add("modalOnPage");
                    document.querySelector(".storiesPopup").classList.add("active");
                })
            });
        }

        linkClick()

        storiesSwiper.on('slideChange', function () {
            linkClick()
        })

    }

};

stories.init();

/*



$(document).ready(function() {
    function isTouchDevice() {
        return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
    }
    $(function() {
        if ($(window).width() >= 1024) {

            let fptl = gsap.timeline({
                // yes, we can add it to an entire timeline!
                scrollTrigger: {
                    trigger: ".js-decor",
                    // endTrigger: ".js-decor-end",
                    // pin: true,   // pin the trigger element while active
                    start: "top bottom", // when the top of the trigger hits the bottom of the viewport
                    // end: "top bottom", // end after scrolling 500px beyond the start
                    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar

                }
            })
                .addLabel('start')
                .from(".js-desktop .m-decor-1", {yPercent: 100, ease: "none", rotation:-30}, 'start')
                .from(".js-desktop .m-decor-2", {yPercent: -100, ease: "none"}, 'start')
                .from(".js-desktop .m-decor-3", {yPercent: 150, ease: "none", rotation:30}, 'start')
            // .from(".js-desktop .m-decor-2", {y: "20%"})
            // .from(".js-desktop .m-decor-3", {y: "150%"})
        }

    });

    $(function() {
        var carouselSwiper = new Swiper(".js-carousel-slider", {
            slidesPerView: 1,
            spaceBetween: 0,
            preloadImages: false,
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 2
            },
            navigation: {
                nextEl: '.carousel__btn-next',
                prevEl: '.carousel__btn-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,

                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    });
    $(function() {
        var reviewsSwiper = new Swiper(".js-reviews-slider", {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            navigation: {
                nextEl: '.site-fp-reviews__btn-next',
                prevEl: '.site-fp-reviews__btn-prev',
            },
        });
    });



});





$(document).ready(function() {

    $(function() {
        var storiesSwiper = new Swiper(".stories", {
            slidesPerView: 2,
            spaceBetween: 0,
            freeMode: {
                enabled: true,
                minimumVelocity: 0.2,
                momentum: false,
            },
            // Disable preloading of all images
            preloadImages: false,
            // Enable lazy loading
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 3
            },
            navigation: {
                nextEl: '.stories-list__btn-next',
                prevEl: '.stories-list__btn-prev',
            },
            breakpoints: {
                // when window width is >= 768px
                768: {
                    slidesPerView: 3
                },
                // when window width is >= 1024px
                1024: {
                    slidesPerView: 4
                },
                1280: {
                    slidesPerView: 5
                },
                // when window width is >= 1440px
                1440: {
                    slidesPerView: 7
                }
            },
        });


    });


    let magnificInit = false;

    $(function() {
        $('.m-open-stories').magnificPopup({
            type:'inline',
            midClick: true,
            closeOnBgClick: false,
            mainClass: 'mfp-fade stories__popup',
            closeBtnInside: false,
            callbacks: {
                beforeOpen: function() {
                    $('html').addClass('no-scroll');
                    $('body').addClass('no-scroll');
                },

                open: function() {
                    if (!magnificInit) {
                        magnificInit = 1;
                        let $container = $(".mfp-container")
                        let downTarget;

                        // $container.click((e) => { e.stopPropagation()})

                        $container.on("mousedown", (e) => {
                            downTarget = e.target
                        })

                        $container.on("mouseup", (e) => {
                            if (e.target === downTarget && $(e.target).hasClass('mfp-container')) {
                                $.magnificPopup.close();
                            }
                        })
                    }

                },

                beforeClose: function() {
                    $('html').removeClass('no-scroll');
                    $('body').removeClass('no-scroll');
                }
            }
        });

        $('.m-open-stories').click(function(){
            $ind = $(this).attr('data-in');

            const storiesSliderSwiper = new Swiper('.stories__slider', {
                effect: "coverflow",
                initialSlide: $ind,
                grabCursor: false,
                allowTouchMove: true,
                centeredSlides: true,
                slidesPerView: "auto",
                preloadImages: false,
                spaceBetween: 150,
                // Enable lazy loading
                lazy: {
                    loadPrevNext: true,
                    loadPrevNextAmount: 4
                },
                slideToClickedSlide: true,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    modifier: 1,
                    slideShadows: false,
                    depth: 300,
                    scale: 1,
                },
                pagination: {
                    el: ".stories__pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: '.stories__btn-next',
                    prevEl: '.stories__btn-prev',
                },

            });
            storiesSliderSwiper.on('slideChange', function () {
                player.pause();
                // let index_currentSlide = storiesSliderSwiper.realIndex,
                // currentSlide = storiesSliderSwiper.slides[index_currentSlide];
                // if ($(currentSlide).find('video').length !== 0) {
                //   console.log('да');
                //   currentVideo = $(currentSlide).find('.video');
                //   var CurrentPlayer = new Plyr(currentVideo, {
                //     'controls': ['play-large',  'mute',],
                //     'hideControls': false
                //   });
                //   CurrentPlayer.play();
                //   console.log(currentVideo);
                // } else {
                //   CurrentPlayer.pause();
                //   console.log('нет');
                // };
            });
        });
    });
});
*/
