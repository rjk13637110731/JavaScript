// 1.全局变量
var num = 10;//num是全局变量
console.log(num);

function fn() {
    console.log(num);
}
fn();

// 2.局部变量
function fun(aru) {
    var num1 = 10;//num1就是局部变量，只能在函数内部使用
    num2 = 20;
}
fun();
// console.log(num1);//报错
console.log(num2);
