
// 오늘날짜
today = new Date();
// 올해
year = today.getFullYear();
// 이번 달
month = today.getMonth()+1;

ym = year + '년' + month + '월';
console.log(ym);

var todayd = document.querySelector('.tod');
console.log(todayd);
todayd.innerHTML = ym;
document.querySelector('.tod').innerHTML = ym;

