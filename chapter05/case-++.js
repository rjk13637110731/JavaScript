var a = 10;
++a;//++a 11  a = 11
var b = ++a + 2;
console.log(b);  //14

var c = 10;
c++;//c++ 11 c = 11
var d = c++ + 2;//c++ = 11 c=12
console.log(d); //13

var e = 10;
var f = e++ + ++e;//1.e++=10 e=11 2.e=12 ++e=12
console.log(f); //22
