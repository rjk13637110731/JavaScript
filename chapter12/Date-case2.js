// 格式化时间 时分秒
var date = new Date();
console.log(date.getHours()); // 小时
console.log(date.getMinutes()); // 分钟
console.log(date.getSeconds()); // 秒

// 要求封装一个函数返回当前的时分秒 格式是：08:08:08
function getTime() {
    var time = new Date();
    var h = time.getHours();
    h = h < 10 ? '0' + h : h;
    var m = time.getMinutes();
    m = m < 10 ? '0' + m : m;
    var s = time.getSeconds();
    s = s < 10 ? '0' + s : s;
    return h + ':' + m + ':' + s
}
console.log(getTime());
