//Step1:为name为username和pwd的文本框绑定获得焦点事件
//获得表单对象: 
function fin(){
var txtName=document.querySelectorAll(".main_ul>li>div>input")[0];
var txtPwd=document.querySelectorAll(".main_ul>li>div>input")[1];
    var form=document.forms[0];
txtPwd.onfocus=getFocus;
txtName.onfocus=getFocus;
function getFocus(){
    this.className="txt_focus";
    var div=this.parentNode.nextElementSibling;
  div.className="vali_info";
    var b=this.nextElementSibling;
    b.className="";
    div.style.opacity="1";

}
//当离开焦点时调用函数
//用户名验证
txtName.onblur=function(){
    vali(this,/^[a-zA-Z0-9_]{3,16}$/);

}
//密码验证
txtPwd.onblur=function(){
    vali(this,/^\w{6}$/);
}


//文本框和密码框公用的函数
function vali(txt,reg){
    txt.className="";
    var b=txt.nextElementSibling;
    var div=txt.parentNode.nextElementSibling;
//验证通过时
    if(reg.test(txt.value)){
        b.className="vali_success";
        div.style.opacity="0";
        return true;

    }else{
        //验证不通过时
        b.className="vali_fail";
        div.className="vali_info_div";
        div.style.opacity="1";
        return false;
    }
}
//var Log=document.getElementById("Log");
    form.onsubmit=function(e){
        
  var rName=vali(txtName,/^[a-zA-Z0-9_]{3,16}$/);
  var rPwd=vali(txtPwd,/^\w{6}$/);
  //只要姓名和密码的验证结果不都为true
  if(!(rName&&rPwd)){
    e.preventDefault();//取消提交！
   
  }
};


};
fin();
	
//点击按钮提交表单ajax;
// $("#btn").click(function(){
// 	//2:获取用户名和密码
// 	var u=$("[name='uname']").val();
// 	var p=$("[name='upwd']").val();

// 	if(!u&&p){
// 		alert("密码或用户名有误");
// 		return;

		
// 	}


//     var loginUid="";

// 	//3:发送ajax请求
// 	$.ajax({
// 		type:"POST",
// 		data:{uname:u,upwd:p},
// 		url:"data/user_submit.php",
// 		success:function(data){

// 			if(data){
// 				//登录成功
//                 setTimeout(function(){
// 				alert("登陆成功,2s后跳转");
//                sessionStorage.setItem("uname",u);
//                sessionStorage.setItem("uid",data.uid);
//                 //console.log(data.code);
// 				location.href="index.html";
//                 },2000);

// 			}else{
				
// 				alert(data.msg);
//                 //console.log(data.code);
// 			}
// 		},
// 		error:function(){alert("请连接数据库")}
// 	});
// });














