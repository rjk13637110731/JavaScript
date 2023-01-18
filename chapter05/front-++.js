<script>
        // 1.想要一个变量自己加1  num = num + 1 比较麻烦
        var num = 1;
        num = num + 1;  // ++num
        num = num + 1;
        console.log(num);  // 3

        //2.前置递增运算符，++写在变量的前面
        var age = 10;
        ++age; // 类似于 age = age + 1
        console.log(age);  // 11

        // 3.先加1，后返回值
        var p = 10;
        console.log(++p + 20); //21
</script>
