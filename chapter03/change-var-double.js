<script>
        // js是编程语言，有很强的逻辑性在里面，实现这个要求的思路，先怎么做后怎么做
        // 1.我们需要一个临时变量帮助
        // 2.把apple1给我们临时变量temp
        // 3.把apple2里面的苹果给apple1
        // 4.把临时变量temp里面的值给apple2
        var temp;   //声明了一个临时变量
        var apple1 = '青苹果';
        var apple2 = '红苹果';
        console.log('交换前：apple1 = ' + apple1 + ',apple2 = ' + apple2);
        temp = apple1;    //把右边给左边
        apple1 = apple2;
        apple2 = temp;
        console.log('交换后：apple1 = ' + apple1 + ',apple2 = ' + apple2);
</script>
