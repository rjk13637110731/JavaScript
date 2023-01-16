<script>
        // 如果一个变量声明未赋值，就是undefined，未定义数据类型
        var str;
        console.log(str);
        var variable = undefined;
        console.log(variable + 'pink');   //undefinedpink
        console.log(variable + 1);   //NaN undefined和数字相加，最后的结果是NaN

        //null 空值
        var space = null;
        console.log(space + 'pink'); //nullpink
        console.log(space + 1);  // 1
</script>
