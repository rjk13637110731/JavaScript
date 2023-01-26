function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var random = getRandom(1, 10);
while (true) {
    var num = prompt('你来猜？输入1~10之间的一个数字');
    if (num > random) {
        alert('你猜大了');
    } else if (num < random) {
        alert('你猜小了');
    } else {
        alert('恭喜你猜对了');
        break; // 退出整个循环，结束整个程序
    }
}
