// 案例4
f1();
console.log(c);
console.log(b);
console.log(a);
function f1() {
    var a = b = c = 9;
    // 相当于 var a = 9; b = 9;c = 9;  b和c的前面没有var声明,当全局变量看
    // 集体声明 var a = 9,b = 9,c = 9;相当于：var a = 9; var b = 9; var c = 9;
    console.log(a);
    console.log(b);
    console.log(c);
}
