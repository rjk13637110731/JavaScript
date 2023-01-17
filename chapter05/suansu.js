<script>
        console.log(1 + 1);  //2
        console.log(1 - 1);  //0
        console.log(1 * 1);  //1
        console.log(1 / 1);  //1

        //1. % 取余（取模）
        console.log(4 % 2);  //0
        console.log(5 % 3);  //2
        console.log(3 % 5);  //3

        // 2.浮点数 算术运算里面会有问题
        console.log(0.1 + 0.2);   // 0.30000000000000004
        console.log(0.07 * 100);  // 7.000000000000001

        // 3.我们不能直接拿着浮点数来进行相比较 是否先等
        var num = 0.1 + 0.1;
        console.log(num == 0.3);  //false
</script>
