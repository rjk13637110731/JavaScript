var str = '';
var row = prompt('请输入打印五角星的行数：');
var col = prompt('请输入打印五角星的列数：');
for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
        str += '☆';
    }
    str += '\n';
}
console.log(str);
