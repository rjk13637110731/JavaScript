// 声明函数
function getSum() {
    var sum = 0; // 准备一个变量，保存数字和
    for (var i = 1; i <= 100; i++) {
        sum += i; // 把每个数值 都累加 到变量中
    }
    console.log(sum);
}

// 调用函数
getSum();
