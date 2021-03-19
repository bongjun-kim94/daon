$(function(){

    $('.header').load('inc.html .header > div', init);
    $('.footer').load('inc.html .footer p');

    function init(){
        $('.nav_menu a').on('click',function(){
            localStorage.pageNum = $(this).index();
        });

        $('.nav_menu a').eq(localStorage.pageNum).css({ "font-weight":"bold" });
    }

    // ul태그에 slide 클래스가 있을 때만 실행
    if($('ul').hasClass('slider')){
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
    }
  
      /* $('.regular').on({
        'beforeChange':function(event, slick, currentSlide, nextSlide){
          //alert('before');
        },
        'afterChange':function(slick, currentSlide){
          //alert('after');
        }
      }); */
  

  // select option 페이지 이동
  var seletNum = 0;
  $('select option').each(function(i){
    if($(this).attr('value') == localStorage.select){
      seletNum = i;
    }
  });

  $('select option').eq(seletNum).prop('selected',true);


  // 모바일 상태 top버튼
  $(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
        $('.goTop').fadeIn();
    } else {
        $('.goTop').fadeOut();
    }
  });

  $(".goTop").click(function() {
      $('html, body').animate({
          scrollTop : 0
      }, 500);
      
  });
});

// 방 정보 indi
function changeSelect(url){
  var selectB = document.querySelector('#changes optgroup option');
  //window.location.href=this.value
  localStorage.select = url;
  location.href = url;
  //var selectValue = selectB.options[selectB.selectedIndex].text;
  //select element에서 선택된 option의 text가 저장된다.
  // console.log(selectText);
}

// 모바일 버거메뉴 open, off
function openNav() {
  document.getElementById("mySidenav").style.width = "50%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} 