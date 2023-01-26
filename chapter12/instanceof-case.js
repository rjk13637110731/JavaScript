// 翻转数组
function reverse(arr) {
    if (arr instanceof Array) {
        var newArr = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            newArr[newArr.length] = arr[i];
        }
        return newArr;
    } else {
        return 'Error 这个参数必须要求是数组格式';
    }
}
console.log(reverse([1, 2, 3]));
console.log(reverse(1, 2, 3));

// 检测是否为数组
// 1.instanceof 运算符 它可以用来检测是否为数组
var arr = [];
var obj = {};
console.log(arr instanceof Array); // true
console.log(obj instanceof Array); // false

// 2.Array.isArray(参数) H5新增的方法，IE9以上版本支持
console.log(Array.isArray(arr)); // true
console.log(Array.isArray(obj)); // false
