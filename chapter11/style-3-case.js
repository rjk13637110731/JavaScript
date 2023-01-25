// 构造函数
// 我们需要创建四大天王

// 语法格式：
// function 构造函数名() {
//     this.属性 = 值;
//     this.方法 = function () { };
// }
// new 构造函数名();

function Star(uname, age, sex) {
    this.name = uname;
    this.age = age;
    this.sex = sex;
    this.sing = function (sang) {
        console.log(sang);
    }
}

var ldh = new Star('刘德华', 18, '男');
console.log(typeof ldh); //object
// 我们构造函数不需要return就可以返回结果
console.log(ldh.name);
console.log(ldh['sex']);
ldh.sing('冰雨');

var zxy = new Star('张学友', 58, '男');
console.log(zxy.name);
console.log(zxy.sex);
zxy.sing('李香兰');
