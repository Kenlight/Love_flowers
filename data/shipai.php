<?php
//设置响应头
//创建数据库连接并且设置编码
require("init.php");
//获取参数 pageno 当前页数
@$pageno=$_REQUEST["pageno2"]or
die('{"code":-1,"msg":"页数是必须的"}');
//计算将pageno-->数据库起始记录数 offset
$offset=($pageno-1)*6;
//创建SQL语句并且发送SQL
$sql ="SELECT * FROM shipai";
$sql .=" LIMIT $offset,6";
//抓取多行记录
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
//转换json发送
echo json_encode($rows);

?>