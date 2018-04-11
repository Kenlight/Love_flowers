<?php
//1:设置响应头 17:25--17:45 
//2:创建数据库连接并且设置编码
require("init.php");
//3:获取参数 pageno 当前页数
@$pageno=$_REQUEST["pageno"]or 
die('{"code":-1,"msg":"页数是必须的"}');
//4:计算将pageno-->数据库起始记录数 offset
$offset=($pageno-1)*4;
//5:创建SQL语句并且发送SQL
$sql ="SELECT * FROM ua_produclist";
$sql .=" LIMIT $offset,4";
//6:抓取多行记录
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
//7:转换json发送
echo json_encode($rows);
?>