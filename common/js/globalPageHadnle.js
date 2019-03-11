$(document).ready(function () {
    start();
    $(window).on('scroll', function () {
        start()
    })
    function start() {
        $('img').not('[data-isLoaded]').each(function () {
            var $node = $(this)
            if (isShow($node)) {
                loadImg($node)
            }
        })
    }

    function isShow($node) {
        return $node.offset().top <= $(window).height() + $(window).scrollTop()
    }
    function loadImg($img) {

        $img.attr('src', $img.attr('data-src'))
        $img.attr('data-isLoaded', 1)
    }
    $('.hamburger').click(function(){
        if($('.phone-navbar').hasClass('active')){
            $('.phone-navbar').removeClass('active');
        }else{
            $('.phone-navbar').addClass('active');
        }
    })
    $('.phone-navbar').on('click','.icon',function(){
        if($('.phone-navbar').hasClass('active')){
            $('.phone-navbar').removeClass('active');
        }else{
            $('.phone-navbar').addClass('active');

        }
    })
    $('.full-screen').find('a').on('click',function(){
        $('.phone-navbar').removeClass('active');
        location.href = '/m/#'+$(this).attr('data-name');
    })
})