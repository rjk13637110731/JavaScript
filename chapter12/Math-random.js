// random()这个方法里面不跟参数
console.log(Math.random()); // 0.23222378462593118

// 得到一个两数之间的随机整数，包括两个数在内：
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandom(1, 10));

// 随机点名
var arr = ['张三', '李四', '王二', '麻子', '小猪'];
console.log(arr[getRandom(0, arr.length - 1)]);
