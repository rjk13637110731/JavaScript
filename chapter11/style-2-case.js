// 利用new object创建对象
var obj = new Object();//创建了一个空对象
obj.uname = '张三丰';
obj.age = 18;
obj.sex = '男';
obj.sayHi = function () {
    console.log('Hi~~~');
};
//1. 使用等号=赋值的方法，添加对象的属性和方法。
//2.每个属性和方法之间用分号;结束

console.log(obj.uname);
console.log(obj['sex']);
obj.sayHi();
