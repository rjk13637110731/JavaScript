// 1.绝对值方法
console.log(Math.abs(1)); // 1
console.log(Math.abs(-1)); // 1
console.log(Math.abs('-1')); // 1 隐式转换，会把字符串型 -1 转换成数字型 1
console.log(Math.abs('小猪佩奇')); // NaN

// 2.三个取整方法
// 2.1 Math.floor() 向下取整 往最小了取值
console.log(Math.floor(1.1)); // 1
console.log(Math.floor(1.9)); // 1

// 2.2 Math.ceil() ceil 天花板 向上取整 往最大了取值
console.log(Math.ceil(1.1)); // 2
console.log(Math.ceil(1.9)); // 2

// 2.3 Math.round() 四舍五入 其他数字都是四舍五入，但是.5特殊，它往大了取
console.log(Math.round(1.1)); // 1
console.log(Math.round(1.5)); // 2
console.log(Math.round(1.9)); // 2
console.log(Math.round(-1.1)); // -1
console.log(Math.round(-1.5)); // 这个结果是-1
