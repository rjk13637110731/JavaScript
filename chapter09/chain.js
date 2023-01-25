// 作用域链: 内部函数访问外部函数的变量，采取的是链式查找的方式来决定取哪个值，这种结构我们称为作用域链表 就近原则
var num = 10;

function fn() { //外部函数
    var num = 20;

    function fun() { //内部函数
        console.log(num); // 20 ,一级一级访问
    }
    
    fun();
}

fn();
