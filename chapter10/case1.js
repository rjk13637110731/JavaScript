//案例1
var num = 10;
fun();
function fun() {
    console.log(num); //undefined
    var num = 20;
}

// 最终结果是 undefined
