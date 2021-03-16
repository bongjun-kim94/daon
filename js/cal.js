
// 오늘날짜
today = new Date();
// 올해
year = today.getFullYear();
// 이번 달
month = today.getMonth();

ym = year + '년' + (month+1) + '월';

var todayd = document.querySelector('.main_01 .calendar .cal .tod');
console.log(todayd);
todayd.innerHTML = ym;