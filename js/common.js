$(function(){

    $('.header').load('inc.html .header > div', init);
    $('.footer').load('inc.html .footer p');

    function init(){
        $('.nav_menu a').on('click',function(){
            localStorage.pageNum = $(this).index();
        });

        $('.nav_menu a').eq(localStorage.pageNum).css({ "font-weight":"bold" });
    }

    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeend:1500,
        arrows:true,
        fade:true
        // speend:1000
        // centerMode: true,
        // vertical: true
      });
  
      /* $('.regular').on({
        'beforeChange':function(event, slick, currentSlide, nextSlide){
          //alert('before');
        },
        'afterChange':function(slick, currentSlide){
          //alert('after');
        }
      }); */

});