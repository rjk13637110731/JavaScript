// Date() 日期对象 是一个构造函数，必须使用new来调用创建我们的日期对象
var arr = new Array(); // 创建一个数组对象
var obj = new Object(); // 创建了一个对象实例

// 1.使用Date 如果没有参数，返回当前系统时间
var date = new Date();
console.log(date);

// 2.参数常用的写法 数字型 2019,10,01 或者是 字符串 '2019-10-01 8:8:8'
var date1 = new Date(2019, 10, 1);
console.log(date1); // 返回的是11月 不是10月

var date2 = new Date('2019-10-1 8:8:8');
console.log(date2);