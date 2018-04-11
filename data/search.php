<?php
//连接数据库并设置编码方式
require("init.php");
//接收传过来的关键词参数
@$kw=$_REQUEST["ukw"];
//查询语句并发送
$sql="SELECT * FROM usearch WHERE ukw LIKE '%$kw%'";
$result=mysqli_query($conn,$sql);
//抓取返回来的数据
$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
if($rows!==null){
	echo json_encode($rows);
}


?>