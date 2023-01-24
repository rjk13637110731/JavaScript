//方法1：
function getResult(num1, num2) {
    return [num1 + num2, num1 - num2, num1 * num2, num1 / num2]
}

console.log(getResult(1, 2));

//方法2：
var a = parseFloat(prompt('请输入第一个数'));
var b = parseFloat(prompt('请输入第二个数'));
function count(a, b) {
    var arr = [a + b, a - b, a * b, a / b];
    return arr;
}

var result = count(a, b);
console.log(result);
