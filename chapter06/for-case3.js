// 1.求1 - 100之间所有数的平均值
var sum = 0;
for (var i = 1; i <= 100; i++) {
    sum += i;
}
var avg = sum / 100;
console.log(avg);

// 2.求1 - 100之间所有偶数和奇数的和
var sum_ou = 0;
var sum_ji = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sum_ou += i;
    } else {
        sum_ji += i;
    }
}
console.log('奇数之和 = ' + sum_ji);
console.log('偶数之和 = ' + sum_ou);

// 3.求1 - 100之间所有能被3整除的数字的和
var sum_3 = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        sum_3 += i;
    }
}
console.log('被3整除的数之和：' + sum_3);
