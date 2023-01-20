//for循环可以重复执行不同的代码,因为有循环变量i的存在，i每次循环值都会变化
// for (var i = 1; i <= 100; i++) {
//     console.log('这个人今年' + i + '岁了');
// }

for (var i = 1; i <= 100; i++) {
    if (i == 1) {
        console.log('这个人今年1岁了，他出生了！');
    } else if (i == 100) {
        console.log('这个人100岁了，他死了！');
    } else {
        console.log('这个人今年' + i + '岁了！');
    }

}
