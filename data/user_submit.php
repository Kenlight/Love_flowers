<?php
//用户验证通过模态框消失


require("init.php");
  //1:设置响应格式json
  //2:创建数据库连接并且设置编码
  //3:获取参数 uname upwd
	 @$u=$_REQUEST["uname"]or die('{"code":-1,"msg":"用户名是必须的"}'); 
	 @$p=$_REQUEST["upwd"]or die('{"code":-2,"msg":"密码是必须的"}');
 $sql="SELECT * FROM my_user WHERE uname='$u' AND upwd='$p'";

 $result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);

if($row==null){
	echo '{"code":-3,"msg":"用户名或密码错误"}';
}else{

	echo json_encode($row);
}
 

  
?>
