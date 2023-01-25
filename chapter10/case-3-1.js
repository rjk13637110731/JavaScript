var a;
function f1() {
    var b;
    var a;
    b = 9;
    console.log(a); //undefined
    console.log(b); //9
    a = '123';
}
a = 18;
f1();
