// 利用对象封装自己的数学对象 里面有 PI 最大值和最小值
var myMath = {
    PI: 3.141592653,
    max: function () {
        var max = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            if (max < arguments[i]) {
                max = arguments[i];
            }
        }
        return max;
    },
    min: function () {
        var min = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            if (min > arguments[i]) {
                min = arguments[i];
            }
        }
        return min;
    }
};
console.log(myMath.PI);
console.log(myMath.min(1, 5, 9));
console.log(myMath.max(1, 5, 9));
