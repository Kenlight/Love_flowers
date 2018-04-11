<?php
 //1:设置响应数据格式
 //2:创建数据库连接，并且设置编码
 require("init.php");
 //3:获取参数uid
 @$uid=$_REQUEST["uid"]or die('{"code":-1,"msg":"用户编号是必须的"}');
 //4:创建SQL语句发送SQL语句

 $sql = " SELECT c.cid,p.pname,p.pic";
 $sql .= " ,p.price,c.count";
 $sql .= " FROM ua_cart c,ua_produclist p";
 $sql .= " WHERE c.pid=p.pid AND uid=$uid";


 //5:获取数据并且
 $result = mysqli_query($conn,$sql);
 $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
 echo json_encode($rows);
?>