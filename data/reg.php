<?php
        //用户注册
         //1:设置响应格式json
         //2:创建数据库连接并且设置编码
         require("init.php");
         @$uname = $_REQUEST["uname"]or die('{"code":-1,"msg":"用户名是必须的"}');
          //4:创建SQL语句并且发送SQL
         $sql = "SELECT * FROM my_user WHERE uname='$uname'";
          //5:抓取一行记录
         $result = mysqli_query($conn,$sql);
         $row = mysqli_fetch_assoc($result);
          //6:判断
          //7:输出
        if($row!==null){
           echo '{"code":-2,"msg":"用户名已被注册"}';

         //判断
        }else{
			 //7:正确
         //创建SQL2并且发送SQL2
         @$upwd = $_REQUEST["upwd"]or die('{"code":-3,"msg","密码是必须"}');
         $sql = "INSERT INTO my_user VALUES(null,'$uname','$upwd');";
         $result = mysqli_query($conn,$sql);
         if($result===true){
			//10:注册成功
           echo '{"code":1,"msg":"注册成功"}';
         }
       }
?>