// o.a = 1;
// o.b = 1;
// o.o = 3;
var str = 'abcoefoxyozzopp';
var o = {};
for (var i = 0; i < str.length; i++) {
    var chars = str.charAt(i); // chars是字符串的每一个字符
    if (o[chars]) { // o[chars] 得到的是属性值
        o[chars]++;
    } else {
        o[chars] = 1;
    }
}
console.log(o);
var max = 0;
var ch = '';
for (var k in o) {
    // k 得到的是属性名
    // o[k] 得到的是属性值
    if (o[k] > max) {
        max = o[k];
        ch = k;
    }
}
console.log(ch + '的次数为：' + max);
