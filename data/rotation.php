<?php
//1:设置响应头 17:25--17:45
//2:创建数据库连接并且设置编码
require("init.php");
//5:创建SQL语句并且发送SQL
$sql ="SELECT pic FROM rotation";
//6:抓取多行记录
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
//7:转换json发送
echo json_encode($rows);
?>