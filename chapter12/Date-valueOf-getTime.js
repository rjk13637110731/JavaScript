// 实例化Date对象
var now = new Date();

// 1. 用于获取对象的原始值
console.log(date.valueOf())
console.log(date.getTime())

// 2. 简单写可以这么做
var now = + new Date();

// 3. HTML5中提供的方法，有兼容性问题
var now = Date.now();
