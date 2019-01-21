$(window).on('scroll', function(){
    start()
   })
   
   function start(){
     //.not('[data-isLoaded]')选中已加载的图片不需要重新加载
    $('img').not('[data-isLoaded]').each(function(){
      var $node = $(this)
      if( isShow($node) ){
        loadImg($node)
      }
    })
    }
   
   function isShow($node){
    return $node.offset().top <= $(window).height() + $(window).scrollTop()
    }
    function loadImg($img){
   
   $img.attr('src', $img.attr('data-src'))
   $img.attr('data-isLoaded', 1)
   }