<script>
        // 1.更新变量
        var myname = '小猪佩奇';
        console.log(myname);
        myname = '小猪乔治';
        console.log(myname);

        // 2.声明多个变量
        /* var age = 18;
        var address = '火营村';
        var gz = 2000; */
        var age = 18, address = '火营村', gz = 2000;

        // 3.声明变量特殊情况
        // 3.1只声明不赋值，结果是？  程序也不知道里面存的是什么，所以结果是undefined，未定义的
        var sex;
        console.log(sex);    //undefined

        // 3.2不声明，不赋值，结果是？  直接使用某个变量会报错的
        // console.log(tel);

        // 3.3不声明，直接赋值使用，可以使用，不报错
        qq = 110;
        console.log(qq);
  </script>
