$(function(){

    $('.header').load('inc.html .header div', init);

        function init(){
            $('.nav_menu a').on('click',function(){
                localStorage.pageNum = $(this).index();
            });

            $('article .ca').on('click',function(){
                localStorage.pageNum = 4;
                console.log(localStorage.pageNum);
            });

            $('.nav_menu a').eq(localStorage.pageNum).css({  "font-weight":"bold" });
            $('article .ca').eq(localStorage.pageNum).css({ color:'#ff0' });
            $('.burger').css({ "display":"none" });
            
        }

});