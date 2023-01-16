<script>
        var birth = prompt('请输入您的出生年份：');
        var age = 2023 - birth;  //birth取过来的是字符串型，但是这里调用的减法，有隐式转换
        alert('您今年已经：' + age + '岁了');
</script>
