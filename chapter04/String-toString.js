<script>
        // 1.把数字型转换成字符串型  变量.toString()
        var num = 10;
        var str = num.toString();
        console.log(typeof str);   //string

        // 2.我们利用 String() 方法来实现  String(变量)
        console.log(typeof String(num));   //string

        // 3.利用 + 拼接字符串的方法实现转换效果 隐式转换
        console.log(typeof (num + ''));   //string
</script>
