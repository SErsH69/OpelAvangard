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
    })
});