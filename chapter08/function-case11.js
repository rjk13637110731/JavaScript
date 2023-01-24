//判断闰年
function isRun(year) {
    //如果是闰年，我们返回true，如果不是闰年，返回false
    var flag = false;
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        flag = true;
    }
    return flag;
}

var re = isRun(2000);
console.log(re);
