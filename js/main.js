$(function(){
    $(window).resize(function(){
        if (window.matchMedia("(min-width: 1024px)").matches) {
            $('.burger-body .header__button').appendTo($('.header__in'));
        }
        if (window.matchMedia("(min-width: 769px)").matches) {
            $('.burger-body .header__contacts').appendTo($('.header__in'));
        }
        if (window.matchMedia("(max-width: 1023px)").matches) {
            $('.header__button').appendTo($('.burger-body'));
        }
        if (window.matchMedia("(max-width: 768px)").matches) {
            $('.header__contacts').appendTo($('.burger-body'));

            $('.sl_gal_js').not('.slick-initialized').slick({
                variableWidth: true
            })
        }
    });
    $(window).trigger('resize');
    if (window.matchMedia("(min-width: 1024px)").matches) {
        $('.burger-body .header__button').appendTo($('.header__in'));
    }
    if (window.matchMedia("(min-width: 769px)").matches) {
        $('.burger-body .header__contacts').appendTo($('.header__in'));
    }
    if (window.matchMedia("(max-width: 1023px)").matches) {
        $('.header__button').appendTo($('.burger-body'));
    }
    if (window.matchMedia("(max-width: 768px)").matches) {
        $('.header__contacts').appendTo($('.burger-body'));

        $('.sl_gal_js').not('.slick-initialized').slick({
            variableWidth: true
        })
    }
    function burg(){
        var burgerWr = $('.burger-wrap'),
            burgerBtn = $('.burger-btn'),
            burgerBody = $('.burger-body'),
            burgerCloseBtn = $('.burger-close-btn');

        burgerBtn.on('click', function(){
            $(burgerWr).addClass('opened');
            $('html').addClass('ovf');
        });

        burgerCloseBtn.on('click', function(){
            $(burgerWr).removeClass('opened');
            $('html').removeClass('ovf');
        })
    }
    burg();
    $(document).on('click', function(e){
        if( $(e.target).closest('.burger-btn').length || $(e.target).closest('.burger-body').length)
        return
        $('.burger-wrap').removeClass('opened');
        $('html').removeClass('ovf');
    });

    $('.block_prod select').niceSelect();

    $('.block_prod__show div').on('click', function() {
        $('.block_prod__prod').toggleClass('isActive')
        $(this).toggleClass('isActive');
        if ($(this).hasClass('isActive')) {
            $(this).text('Скрыть');
        } else {
            $(this).text('Показать еще');
        }
    });

    $('.feedback').click(function() {
        $('.form-wrapper').addClass('opened');
        $('html').addClass('ovf');
        return false;
    });
    $('.form-wrapper .icon-close').click(function() {
        $('.form-wrapper').removeClass('opened');
        $('html').removeClass('ovf');
        return false;
    });
    $(document).click( function(event){
        if( $(event.target).closest('.form-wrapper-inner').length ) 
          return;
        $('.form-wrapper').removeClass('opened');
        $('html').removeClass('ovf');
        event.stopPropagation();
    })
    $(document).keydown(function(event){
        if (event.which == 27) {
            $('.form-wrapper').removeClass('opened');
            $('html').removeClass('ovf');
        }
    });

    $('.sl_spec_js').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 641,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });

    var slideEl = $('.review__block');
    var slideBt = $('.review__btn');
    $('.review__btn:first-child').addClass('isActive');
    slideBt.click(function () {
        slideBt.removeClass('isActive');
        slideBt.removeClass('isActive');
        $(this).addClass('isActive');
        slideEl.hide();
        $('.' + this.id).show();
    });

    $('.optin_blocks__title').on('click', function() {
        $(this).toggleClass('isActive');
        $(this).parent().toggleClass('isActive');
    })
});