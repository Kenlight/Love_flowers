<?php
 require("init.php");
 //获取两个参数
 @$uid = $_REQUEST["uid"]or die('{"code":-1,"msg":"用户编号是必须的"}');

 @$pid = $_REQUEST["pid"]or die('"code":-2,"msg":"产品号是必须的"');
//查询购物车
 $sql = "SELECT * FROM ua_cart WHERE uid=$uid AND pid=$pid";

 $result = mysqli_query($conn,$sql);
 $row = mysqli_fetch_assoc($result);
//最后添加的数量
 $c = 1;

 if($row!==null){
 //不为空就更新购物车

      $sql = "UPDATE ua_cart SET count=count+1 WHERE uid=$uid AND pid=$pid";
      $result = mysqli_query($conn,$sql);
      $c = $row["count"]+1;
 }else{
   $sql = "INSERT INTO ua_cart VALUES(null,$uid,$pid,1)";
   $result = mysqli_query($conn,$sql);

 }
 echo '{"code":1,"msg":"已添加成功"}';

?>