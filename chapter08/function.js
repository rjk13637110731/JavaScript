// 1.求0-100之间的和
var sum = 0;
for (var i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// 2.求10-100之间的和
var sum = 0;
for (var i = 10; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// 3.函数就是封装了一段可以被重复执行调用的代码块，目的：就是让大量的代码重复使用
function getSum(num1, num2) {
    var sum = 0;
    for (var i = num1; i <= num2; i++) {
        sum += i;
    }
    console.log(sum);
}
getSum(1, 100);
getSum(10, 100);
getSum(1, 1000);
