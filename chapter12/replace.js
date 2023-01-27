// 1.替换字符 replace('被替换的字符','替换为的字符');  它只替换第一个字符
var str = 'andyandy';
console.log(str.replace('a', 'b')); // bndyandy

// 有一个字符串 'abcoefoxyozzopp' 要求把里面所有的o替换为*
var str1 = 'abcoefoxyozzopp';
while (str1.indexOf('o') !== -1) {
    str1 = str1.replace('o', '*');
}
console.log(str1);
