// Math数学对象，不是一个构造函数，所以我们不需要new来调用，而是直接使用里面的属性和方法即可
console.log(Math.PI);  // 一个属性 圆周率 3.141592653589793

console.log(Math.max(1, 99, 3)); // 99
console.log(Math.max(-1, -10)); // -1
console.log(Math.max(1, 99, '小猪佩奇')); // NaN
console.log(Math.max()); // -Infinity
