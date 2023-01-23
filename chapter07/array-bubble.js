var arr = [5, 4, 3, 2, 1];
for (var i = 0; i <= arr.length - 1; i++) {//外层循环管趟数
    for (var j = 0; j <= arr.length - i - 1; j++) {//里层循环管每一趟的交换次数
        //内部交换2个变量的值，前一个和后面一个数组元素相比较
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);
