// 添加删除数组元素
// 1.push() 在数组末尾 添加一个或者多个数组元素 push 推
var arr = [1, 2, 3];
// arr.push(4, 'pink');
console.log(arr.push(4, 'pink')); // 5
console.log(arr);
// 1.1 push是可以给数组追加新的元素
// 1.2 push()参数直接写数组元素就可以了
// 1.3 push()完毕之后，返回的结果是新数组的长度
// 1.4 原数组也会发生变化

// 2.unshift 在我们数组的开头 添加一个或者多个数组元素
// arr.unshift('red', 'purple');
console.log(arr.unshift('red', 'purple')); // 7
console.log(arr);
// 2.1 unshift是可以给数组前面追加新的元素
// 2.2 unshift()参数直接写数组元素就可以了
// 2.3 unshift()完毕之后，返回的结果是新数组的长度
// 2.4 原数组也会发生变化
