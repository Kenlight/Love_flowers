<?php
//功能:删除指定购物车中的记录
//1:设置响应头数据格式
//2:创建数据库连接
//3:设置编码
require("init.php");
//4:获取参数cid 购物车编码
@$cid=$_REQUEST["cid"]or die('{"code":-1,"msg":"编号是必须的"}');
//5:创建SQL语句并且发送SQL语句
$sql = "DELETE FROM ua_cart WHERE cid=$cid";
//6:获取返回的结果
$result = mysqli_query($conn,$sql);
if($result){
 echo ('{"code":1,"msg":"删除成功"}');
}
?>