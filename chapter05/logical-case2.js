var a = 3 > 5 && 2 < 7 && 3 == 4; 
console.log(a);  //false

var b = 3 <= 4 || 3 > 1 || 3 != 2; 
console.log(b); //true

var c = 2 === "2"; 
console.log(c);  //false

var d = !c || b && a ;
console.log(d); //true
