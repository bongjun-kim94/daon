$(function(){

    $('.header').load('inc.html .header div', init);
    $('.footer').load('inc.html .footer p');

        function init(){
            $('.nav_menu a').on('click',function(){
                localStorage.pageNum = $(this).index();
            });

            $('article .ca').on('click',function(){
                localStorage.pageNum = 4;
                console.log(localStorage.pageNum);
            });

            $('.nav_menu a').eq(localStorage.pageNum).css({  "font-weight":"bold" });
            $('article .ca').eq(localStorage.pageNum).css({ color:'#f00' });
            $('.burger').css({ "display":"none" });
            
        }

});