// 有一个对象 来判断是否有该属性 对象['属性名']
var o = {
    age: 18
};

if (o['age']) {
    console.log('里面有该属性');
} else {
    console.log('没有该属性');
}
