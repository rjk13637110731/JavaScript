// 数组排序
// 1.翻转数组
var arr = ['pink', 'red', 'blue'];
arr.reverse();
console.log(arr);

// 2.数组排序（冒泡排序）
var arr1 = [13, 4, 77, 1, 7];
arr1.sort(function (a, b) {
    // return a - b;//按照升序的顺序排列
    return b - a;//按照降序的顺序排列
});
console.log(arr1);
