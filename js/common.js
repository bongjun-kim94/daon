$(function(){

    $('.header').load('inc.html .header > div', init);
    $('.footer').load('inc.html .footer p');

        function init(){
            $('.nav_menu a').on('click',function(){
                localStorage.pageNum = $(this).index();
            });

            $('.nav_menu a').eq(localStorage.pageNum).css({ "font-weight":"bold" });
            
    
        }

});