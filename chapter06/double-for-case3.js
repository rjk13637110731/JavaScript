var str = '';
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        str += '☆';
    }
    // 每次满 5个星星 就 加一次换行
    str += '\n';
}
console.log(str);
