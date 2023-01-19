<script>
        // 4.逻辑或短路运算 如果表达式1结果为真，则返回的是表达式1；如果表达式1结果为假，则返回的是表达式2
        console.log(123 || 456);//123
        console.log(123 || 456 || 789);//123
        console.log(0 || 456 || 789);//456
       
		//逻辑中断很重要，它会影响我们程序运行的结果
		var num = 0;
        console.log(123 || num++);
        console.log(num);            //0
</script>
