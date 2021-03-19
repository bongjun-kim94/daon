$(function(){

    var fadeN = 0;

    $('.spot .inner_c .imgList img').not(':first').hide();
    setInterval(function(){
        $('.spot .inner_c .imgList img').eq(fadeN).fadeOut(2000);
        fadeN++;
        if(fadeN == 5){fadeN = 0}
        $('.spot .inner_c .imgList img').eq(fadeN).fadeIn(2000);
    },4000);

    $('.arrow a').on('click',fadeFun);
    var imgNum = 0;

    function fadeFun(){
        $('.imgList img').eq(imgNum).fadeOut();
        console.log($(this).index());
        if($(this).index() == 1){
            imgNum++;
            if(imgNum == 5){imgNum = 0}
        }else{
            imgNum--;
            if(imgNum == -1){imgNum = 2}
        }
        $('.imgList img').eq(imgNum).fadeIn();
    }
});