// 1.打印人的一生，从1岁到100岁
var age = 0;
do {
    console.log(age + '岁了');
    age++;
} while (age <= 100);

// 2.计算 1 ~100 之间所有整数的和
var sum = 0;
var i = 1;
do {
    sum += i
    i++;
} while (i <= 100);
console.log('1 + 2 + 3 + ... + 100 = ' + sum);
