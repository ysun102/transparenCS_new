
jQuery(document).ready(function ($) {

    'use strict';


    // $(".Modern-Slider").slick({
    //     autoplay:true,
    //     speed:1000,
    //     slidesToShow:1,
    //     slidesToScroll:1,
    //     pauseOnHover:false,
    //     dots:true,
    //     fade: true,
    //     pauseOnDotsHover:true,
    //     cssEase:'linear',
    //    // fade:true,
    //     draggable:false,
    //     prevArrow:'<button class="PrevArrow"></button>',
    //     nextArrow:'<button class="NextArrow"></button>', 
    //   });

    // $('#nav-toggle').on('click', function (event) {
    //     event.preventDefault();
    //     $('#main-nav').toggleClass("open");
    // });


    // $('.tabgroup > div').hide();
    //     $('.tabgroup > div:first-of-type').show();
    //     $('.tabs a').click(function(e){
    //       e.preventDefault();
    //         var $this = $(this),
    //         tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
    //         others = $this.closest('li').siblings().children('a'),
    //         target = $this.attr('href');
    //     others.removeClass('active');
    //     $this.addClass('active');
    //     $(tabgroup).children('div').hide();
    //     $(target).show();

    // })



    $(".box-video").click(function () {
        $('iframe', this)[0].src += "&amp;autoplay=1";
        $(this).addClass('open');
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });


    $('.tabs ul li').click(function () {
        // Remove 'is-active' class from all tabs
        $('.tabs ul li').removeClass('is-active');

        // Add 'is-active' class to the clicked tab
        $(this).addClass('is-active');
    });

    // $('.tabs ul li a').click(function (e) {
    //     e.preventDefault();
    //     var target = $(this).attr('href');

    //     $('.tab-content').hide();
    //     $(target).show();
    // });

    





    // var contentSection = $('.content-section, .main-banner');
    // var navigation = $('nav');

    // //when a nav link is clicked, smooth scroll to the section
    // navigation.on('click', 'a', function (event) {
    //     event.preventDefault(); //prevents previous event
    //     smoothScroll($(this.hash));
    // });

    // //update navigation on scroll...
    // $(window).on('scroll', function () {
    //     updateNavigation();
    // })
    // //...and when the page starts
    // updateNavigation();

    // /////FUNCTIONS
    // function updateNavigation() {
    //     contentSection.each(function () {
    //         var sectionName = $(this).attr('id');
    //         var navigationMatch = $('nav a[href="#' + sectionName + '"]');
    //         var navLi = navigationMatch.closest('li');
    //         if (($(this).offset().top - $(window).height() / 2 < $(window).scrollTop()) &&
    //             ($(this).offset().top + $(this).height() - $(window).height() / 2 > $(window).scrollTop())) {
    //             navigationMatch.addClass('active-section');
    //             navLi.css('background-color', 'white');
    //             navigationMatch.css('color', 'black');
    //         }
    //         else {
    //             navigationMatch.removeClass('active-section');
    //             navLi.css('background-color', 'black');
    //             navigationMatch.css('color', 'white');
    //         }
    //     });
    // }
    // function smoothScroll(target) {
    //     $('body,html').animate({
    //         scrollTop: target.offset().top
    //     }, 800);
    // }


    // $('.button a[href*=#]').on('click', function (e) {
    //     e.preventDefault();
    //     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 0 }, 500, 'linear');
    // });


    // $('#startwithdrop').on('click', function (event) {
    //     event.preventDefault();
    //     $('#startwith').addClass("is-active");

    //     $('#startwith .dropdown-content').on('click', function (event) {
    //         event.stopPropagation();
    //         $('#startwithdrop').find('span:first-child').text($(event.target).text());
    //         $('#startwith').removeClass("is-active");
    //     });
    // });


    // $('#digdeeperdrop').on('click', function (event) {
    //     event.preventDefault();
    //     $('#digdeeper').toggleClass("is-active");

    //     $('#digdeeper .dropdown-content').on('click', function (event) {
    //         event.stopPropagation();
    //         $('#digdeeperdrop').find('span:first-child').text($(event.target).text());
    //         $('#digdeeper').removeClass("is-active");
    //     });
    // });

    // $(document).on('click', function (event) {
    //     // Check if the clicked element is not #startwith or its descendants
    //     if (!$(event.target).closest('#startwithdrop').length) {
    //         event.preventDefault();
    //         $('#startwith').removeClass("is-active");
    //     }
    //     if (!$(event.target).closest('#digdeeperdrop').length) {
    //         event.preventDefault();
    //         $('#digdeeper').removeClass("is-active");
    //     }
    // });



});