var str = 'abcoefoxyozzopp';
var index = str.indexOf('o');
var num = 0;
while (index !== -1) {
    console.log(index);
    num++;
    index = str.indexOf('o', index + 1);
}
console.log('o出现的次数是：' + num);
