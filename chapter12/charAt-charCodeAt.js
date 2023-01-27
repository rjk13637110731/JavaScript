// 根据位置返回字符
// 1.charAt(index) 根据位置返回子字符
var str = 'andy';
console.log(str.charAt(3)); // y
for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}

// 2.charCodeAt(index) 根据位置返回字符ASCII码,判断用户按下了哪个键
console.log(str.charCodeAt(0)); // 97

// 3.str[index] H5新增的
console.log(str[0]); // a
