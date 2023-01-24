function backDay() {
    var year = prompt('请你输入年份：');
    if (isRun(year)) { //调用函数需要加小括号,year读取时是字符型，但是经过isRun()函数计算转换成数值型
        alert('你输入的' + year + '是闰年，2月份有29天');
    } else {
        alert('你输入的' + year + '不是闰年，2月份有28天');
    }
}

function isRun(year) {
    //如果是闰年，我们返回true，如果不是闰年，返回false
    var flag = false;
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        flag = true;
    }
    return flag;
}

backDay();
