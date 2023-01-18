<script>
        console.log(3 >= 5);//false
        console.log(2 <= 4);//true
        //1.我们程序里面的等于符号 是== 默认转换数据类型，会把字符串型数据转换为数字型，只要求值相等 true
        console.log(3 == 5);//false
        console.log('小猪佩奇' == '小猪乔治');//false
        console.log(18 == 18);//true
        console.log(18 == '18');//true
        console.log(18 != 18);//false

        //2.我们程序里面有全等 一模一样，要求两侧的值，还有数据类型完全一致才可以 true
        console.log(18 === 18);//true
        console.log(18 === '18');//false
</script>
