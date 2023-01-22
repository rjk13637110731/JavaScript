// 3.弹出一个提示框， 你爱我吗？  如果输入我爱你，就提示结束，否则，一直询问。
var message = '';
do {
    message = prompt('你爱我吗？');
} while (message != '我爱你');
alert('我也爱你！');
