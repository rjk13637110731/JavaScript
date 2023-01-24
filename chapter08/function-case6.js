//定义一个获取数组中最大数的函数
function getArrMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

var arr = [5, 2, 99, 101, 67, 77];
var ret = getArrMax(arr);
console.log(ret);
