<?php
//����:ɾ��ָ�����ﳵ�еļ�¼
//1:������Ӧͷ���ݸ�ʽ
//2:�������ݿ�����
//3:���ñ���
require("init.php");
//4:��ȡ����cid ���ﳵ����
@$cid=$_REQUEST["cid"]or die('{"code":-1,"msg":"����Ǳ����"}');
//5:����SQL��䲢�ҷ���SQL���
$sql = "DELETE FROM ua_cart WHERE cid=$cid";
//6:��ȡ���صĽ��
$result = mysqli_query($conn,$sql);
if($result){
 echo ('{"code":1,"msg":"ɾ���ɹ�"}');
}
?>