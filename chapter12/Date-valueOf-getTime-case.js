// 获取Date总的毫秒数(时间戳 独一无二)
// 1.通过valueOf() getTime()
var date = new Date();
console.log(date.valueOf()); // 1674724121915 就是我们现在时间 距离1970年1月1日的总的毫秒数
console.log(date.getTime()); // 1674724121915

// 2.简单的写法（最常用的写法）
var date1 = +new Date(); // +new Date()返回的就是总的毫秒数
console.log(date1);// 1674724121915

// 3.H5新增的 获得总的毫秒数
console.log(Date.now()); // 1674724121915
