// 返回数组元素索引号方法：indexOf(数组元素) 作用就是返回该数组元素的索引号 从前面开始查找
// 它只返回第一个满足条件的索引号
// 在该数组中找不到该元素，返回-1
var arr = ['red', 'green', 'blue', 'pink', 'blue'];
console.log(arr.indexOf('blue')); // 2

// 返回数组元素索引号方法：lastIndexOf(数组元素) 作用就是返回该数组元素的索引号 从后面开始查找
console.log(arr.lastIndexOf('blue')); // 4
