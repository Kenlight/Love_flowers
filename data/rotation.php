<?php
//1:������Ӧͷ 17:25--17:45
//2:�������ݿ����Ӳ������ñ���
require("init.php");
//5:����SQL��䲢�ҷ���SQL
$sql ="SELECT pic FROM rotation";
//6:ץȡ���м�¼
$result = mysqli_query($conn,$sql);
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
//7:ת��json����
echo json_encode($rows);
?>