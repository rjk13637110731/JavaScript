//利用函数翻转任意数组 reverse
function reverse(arr) {
    var arrNew = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        arrNew[arrNew.length] = arr[i];
    }
    return arrNew;
}

var arr1 = reverse([1, 3, 4, 6, 9]);
console.log(arr1);
var arr2 = reverse(['blue', 'pink', 'green']);
console.log(arr2);
