
// $(function(){

//     $.ajax({
//         url:'data.json',
//         success:function(data){
//             console.log(data);
//             var type, imgSrc, title;

//             function dataFun(ty){
//                 var tagList = '';

//                 data.loveyou.forEach(function(value, key){
//                     if(value.type == ty || ty == 'all'){
//                         type = value.type;
//                         imgSrc = value.imgSrc;
//                         title = value.title;

//                         // tagList += "<figure data-type="+ type +">";
//                         // tagList += "<div><img src"+ imgSrc + "></div>";
//                         // tagList += "<figcaption><p>"+ title +"</p></figcaption>";
//                         // tagList += "</figure>"

//                         // tagList += "<li><figure data-type="+ type +">";
//                         // tagList += "<div><a><img src="+ imgSrc +"></a></div>";
//                         // tagList += "<figcaption><p>"+ title +"</p></figcaption>";
//                         // tagList += "</figure></li>";

//                         tagList += "<figure data-type="+ type +">";
//                         tagList += "<img src="+ imgSrc +">";
//                         tagList += "<figcaption>"+ title +"</figcaption>";
//                         tagList += "</figure>";
//                     }
//                 });
//                 $('.main_01 ul').html(tagList);

//             }
//             dataFun('all');

//         }
//     });

// });