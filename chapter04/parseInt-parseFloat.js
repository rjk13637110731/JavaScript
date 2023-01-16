<script>
        var age = prompt('请输入您的年龄：');
        console.log(typeof age);

        // 1.parseInt(变量) 可以将字符型的变量转换为数字型 得到的是整数
        console.log(parseInt(age));
        console.log(typeof parseInt(age));
        console.log(parseInt('3.14'));   //3 取整
        console.log(parseInt('3.94'));   //3 取整 没有进位
        console.log(parseInt('120px'));  //120 将后面px单位，即后面字母去除
        console.log(parseInt('rem120px')); //NaN

        // 2.parseFloat(变量) 可以将字符型转换为数字型，得到的是小数，浮点数
        console.log(parseFloat('3.1415926')); //3.1415926
        console.log(parseFloat('120px'));  //120 将后面px单位，即后面字母去除
        console.log(parseInt('rem120px')); //NaN

        // 3.利用 Number(变量) 强制转换函数
        var str = '123';
        console.log(Number(str));
        console.log(Number('12'));

        // 4.利用了算数运算 - + * / 隐式转换
        console.log('12' - 0);
        console.log('123' - '120'); //3
        console.log('123' * 1);
</script>
