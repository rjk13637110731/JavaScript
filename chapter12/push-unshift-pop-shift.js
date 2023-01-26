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

// 3.pop() 它可以删除数组的最后一个元素
// arr.pop();
console.log(arr.pop()); // 'pink' 删除的那个元素
console.log(arr);
// 3.1 pop是可以删除数组的最后一个元素，记住只能删除一个元素
// 3.2 pop()没有参数
// 3.3 pop()完毕之后，返回的结果是删除的那个元素
// 3.4 原数组也会发生变化

// 4.shift() 它可以删除数组的第一个元素
// arr.pop();
console.log(arr.shift()); // 'red' 删除的那个元素
console.log(arr);
// 4.1 shift是可以删除数组的第一个元素，记住只能删除一个元素
// 4.2 shift()没有参数
// 4.3 shift()完毕之后，返回的结果是删除的那个元素
// 4.4 原数组也会发生变化
