// 格式化时间 年月日
var date = new Date();
console.log(date.getFullYear()); // 返回当前日期的年 2023
console.log(date.getMonth() + 1); // 返回的月份小1个月 记得月份加1
console.log(date.getDate()); // 返回的是 几号
console.log(date.getDay()); // 返回的是 星期几 周日返回是0 周一返回的是1，周六返回的是6

// 我们写一个 2023年1月26日 星期四
var year = date.getFullYear();
var month = date.getMonth() + 1;
var dates = date.getDate();
var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六',];
var day = date.getDay();
console.log('今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[day]);
