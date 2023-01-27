// 基本包装类型
var str = 'andy';
console.log(str.length); // 4
// 对象才有属性和方法，复杂数据类型才有属性和方法
// 简单数据类型为什么会有length属性呢？
// 基本包装类型：就是把简单数据类型包装成为了复杂数据类型

// 1. 生成临时变量，把简单类型包装为复杂数据类型
var temp = new String('andy');
// 2.把临时变量的值 给 str
str = temp;
// 3.销毁这个临时变量
temp = null;
