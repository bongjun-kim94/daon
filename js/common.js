/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/***/ (() => {

eval("$(function () {\n  function inc() {\n    // 헤더, 푸터 호출\n    $('.header').load('inc.html .header > div', init);\n    $('.footer').load('inc.html .footer p');\n\n    function init() {\n      $('.nav_menu a').on('click', function () {\n        localStorage.pageNum = $(this).index();\n      });\n      $('.nav_menu a').eq(localStorage.pageNum).css({\n        \"font-weight\": \"bold\"\n      });\n    }\n  }\n\n  inc();\n\n  function ulSlide() {\n    // ul태그에 slide 클래스가 있을 때만 실행\n    if ($('ul').hasClass('slider')) {\n      $(\".regular\").slick({\n        dots: true,\n        infinite: true,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        autoplay: true,\n        autoplaySpeend: 1500,\n        arrows: true,\n        fade: true // speend:1000\n        // centerMode: true,\n        // vertical: true\n\n      });\n    }\n  }\n\n  ulSlide();\n\n  function selectPage() {\n    // select option 페이지 이동\n    var seletNum = 0;\n    $('select option').each(function (i) {\n      if ($(this).attr('value') == localStorage.select) {\n        seletNum = i;\n      }\n    });\n    $('select option').eq(seletNum).prop('selected', true);\n  }\n\n  selectPage();\n\n  function mobileTop() {\n    // 모바일 상태 top버튼\n    $(window).scroll(function () {\n      if ($(this).scrollTop() > 700) {\n        $('.goTop').fadeIn();\n      } else {\n        $('.goTop').fadeOut();\n      }\n    });\n    $(\".goTop\").click(function () {\n      $('html, body').animate({\n        scrollTop: 0\n      }, 500);\n    });\n  }\n\n  mobileTop();\n\n  function fade() {\n    // 메인페이지 fadein, fadeout\n    var fadeN = 0;\n    $('.spot .inner_c .imgList img').not(':first').hide();\n    setInterval(function () {\n      $('.spot .inner_c .imgList img').eq(fadeN).fadeOut(2000);\n      fadeN++;\n\n      if (fadeN == 5) {\n        fadeN = 0;\n      }\n\n      $('.spot .inner_c .imgList img').eq(fadeN).fadeIn(2000);\n    }, 4000);\n    $('.arrow a').on('click', fadeFun);\n    var imgNum = 0;\n\n    function fadeFun() {\n      $('.imgList img').eq(imgNum).fadeOut(); // console.log($(this).index());\n\n      if ($(this).index() == 1) {\n        imgNum++;\n\n        if (imgNum == 5) {\n          imgNum = 0;\n        }\n      } else {\n        imgNum--;\n\n        if (imgNum == -1) {\n          imgNum = 2;\n        }\n      }\n\n      $('.imgList img').eq(imgNum).fadeIn();\n    }\n  }\n\n  fade();\n\n  function realsche() {\n    // 실시간 예약페이지\n    // 체크 리스트 가격\n    // 이용기간 계산\n    $('.main_02 li select').on('change', selectValue);\n    $('.sec_06 div input').on('click', function () {\n      // 버튼 선택 시 background\n      $(this).next().toggleClass('active');\n      selectValue();\n    });\n\n    function selectValue() {\n      var total = 0,\n          price = 0,\n          persPrice = 20000,\n          juniorPrice = 10000,\n          stay,\n          pers,\n          junior,\n          result = 0;\n      $('.main_02 li').each(function () {\n        if ($(this).find('.sec_06 input').prop('checked')) {\n          price = $(this).find('.sec_06 input').val(); //90000\n\n          stay = $(this).find('.stay').val(); //1 2 3\n\n          pers = $(this).find('.pers').val(); // 2명 기준(1명 추가 20000원)\n\n          junior = $(this).find('.junior').val(); // 1명 추가 10000원\n\n          total = price * stay + pers * persPrice + junior * juniorPrice;\n          result += total;\n          $(this).find('.sec_06 p').text(priceStr(total) + '원');\n        } else {\n          $(this).find('.sec_06 p').text(0 + ' 원');\n        }\n      });\n      $('.main_03 div p').text('총 결제금액 :' + priceStr(result) + '원');\n    }\n\n    function priceStr(el) {\n      return el.toString().replace(/\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))/g, \",\");\n    } //예약 완료 안내창\n\n\n    $('.main_03 div a').on('click', function (e) {\n      e.preventDefault();\n\n      if ($('.sec_06 label').hasClass('active')) {\n        alert('예약 하시겠습니까?');\n      } else {\n        alert('객실을 선택해 주세요.');\n      }\n    });\n  }\n\n  realsche();\n});\n\n//# sourceURL=webpack://project_01/./src/js/common.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/common.js"]();
/******/ 	
/******/ })()
;