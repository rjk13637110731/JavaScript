var num = prompt('请输入班级的总人数：');
var score = 0;
var sum = 0;
for (var i = 1; i <= num; i++) {
    score = prompt('请输入第' + i + '个学生的成绩：');
    sum += parseFloat(score);
}
var average = sum / num;
console.log('总成绩：' + score);
console.log('平均成绩：' + average);
