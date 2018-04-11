
<?php
require("init.php");
  //1:设置响应格式json
  //2:创建数据库连接并且设置编码
 $sql="SELECT count FROM ua_cart";

 $result=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);

if($rows==null){
	echo '{"code":-1,"msg":"0"}';
}else{

	echo json_encode($rows);
}



?>

