function countDown(time) {
    var nowTime = +new Date(); // 返回的是当前时间总的毫秒数
    var inputTime = +new Date(time); // 返回用户输入时间总的毫秒数
    var times = (inputTime - nowTime) / 1000; // times剩余时间总的秒数
    var d = parseInt(times / 60 / 60 / 24); // 天
    d = d < 10 ? '0' + d : d;

    var h = parseInt(times / 60 / 60 % 24); // 时
    h = h < 10 ? '0' + h : h;

    var m = parseInt(times / 60 % 60); // 分
    m = m < 10 ? '0' + m : m;

    var s = parseInt(times % 60); // 当前的秒
    s = s < 10 ? '0' + s : s;

    return d + '天' + h + '时' + m + '分' + s + '秒';
}
console.log(countDown('2023-1-26 18:00:00'));
