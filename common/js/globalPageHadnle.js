$(document).ready(function () {
    start();
    $(window).on('scroll', function () {
        start()
    })
    function start() {
        //.not('[data-isLoaded]')选中已加载的图片不需要重新加载
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
    $('.full-screen').find('a').on('click',function(){
        var pathname = new RegExp(location.pathname);
        var name =  $(this).attr('data-name');
        if(!(/index/.test(pathname))){
            window.location.href = '../index/index.html#'+name;
        }else{
            var top = (parseInt($('html').css('font-size'))*130)/100;
            $('html,body').scrollTop($('#'+name).offset().top-top);
            // location.hash = "";
            // location.hash = name;
        }
        $('.phone-navbar').removeClass('active');
    })
})