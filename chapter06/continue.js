for (var i = 1; i <= 5; i++) {
    if (i == 3) {
        break;//直接退出本次循环，直接跳到i++
    }
    console.log('我正在吃第' + i + '个包子');
}

//1.求1-100之间，除了能被7整除之外的整数和
var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        continue;
    }
    sum += i;
}
console.log(sum);
