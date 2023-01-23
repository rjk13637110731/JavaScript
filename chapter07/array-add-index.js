//2.新增数组元素，修改索引号，追加数组元素
var arr1 = ['red', 'green', 'blue'];

arr1[3] = 'pink';
console.log(arr1);

arr1[4] = 'hotpink';
console.log(arr1);

arr1[1] = 'yellow'; //这里是替换原来的数组元素
console.log(arr1);

arr1 = '小猪佩奇'; //不要直接给数组名赋值，否则里面的数组元素都没有了
console.log(arr1);
