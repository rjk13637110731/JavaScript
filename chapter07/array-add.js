//1.新增数组元素，修改length长度
var arr = ['red', 'green', 'blue', 'pink'];
console.log(arr.length);//4
arr.length = 7;//把我们数组的长度修改为了5，里面应该有5个元素
console.log(arr);
console.log(arr[4]);//undefined
console.log(arr[5]);//undefined
console.log(arr[6]);//undefined
