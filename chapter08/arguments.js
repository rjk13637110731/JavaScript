//arguments的使用，只有函数才有arguments对象，而且每个函数都内置好了这个arguments
function fn() {
    console.log(arguments);//里面存储了所有传递过来的实参
    console.log(arguments.length);//3

    //我们按照数组的方式遍历
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
fn(1, 2, 3);

//伪数组，并不是真正意义上的数组
//1.具有length属性
//2.按照索引的方式进行存储的
//3.没有真正数组的一些方法push(),pop()等等
