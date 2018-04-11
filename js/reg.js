
$("#reg_header").load("user_sub_head.html");
$("#reg_footer").load("user_sub_footer.html");
//表单验证
//获取用户输入框
var fleg=true;
function reg(){

    var txtname=document.getElementById("uname");
    var txtpwd=document.getElementById("upwd");
    var txtpwd2=document.getElementById("upwd2");
    txtname.onblur=function(){
        vali(/^[a-zA-Z0-9_]{3,16}$/,this,"正确","格式有误,请重新输入");

    };
    txtpwd.onblur=function(){
        vali(/^[a-z0-9_-]{6,18}$/ ,this,"正确","密码6~11位字母/数字");
    };
    txtpwd2.onblur=function(){
        this.nextElementSibling.innerHTML="";
        if(this.value!=txtpwd.value){

            this.nextElementSibling.innerHTML="两次密码不一致";
            this.nextElementSibling.style.color="red";
            fleg=false;

        }else{
            vali(/^[a-z0-9_-]{6,18}$/ ,this,"正确","密码6~11位数字");
            fleg=true;

        }
    }
    function vali(reg,txt,val,val2){

        if(reg.test(txt.value)){
            txt.nextElementSibling.className="";
            txt.nextElementSibling.className="vali_success";
            txt.nextElementSibling.innerHTML=val;
            txt.nextElementSibling.style.color="green";
			
            return true;
        }else{
            txt.nextElementSibling.className="";
            txt.nextElementSibling.className="vali_fail";
            txt.nextElementSibling.innerHTML=val2;
            txt.nextElementSibling.style.color="red";
            fleg=false;
			return false;
        }
    }
//})();
};
reg();

//绑定事件
//点击按钮注册，ajax请求;



$("#btn").click(function(){
	

    //2:获取用户名和密码
    var u=$("[name='uname']").val();
    var p=$("[name='upwd']").val();

    if(fleg && u && p){
    //3:发送ajax请求
    $.ajax({
        type:"POST",
        data:{uname:u,upwd:p},
        url:"data/reg.php",
        success:function(data){
            if(data.code>0){
                //注册成功
                alert(data.msg+"\n请登录...");

                location.href="user_submit.html";
                //location.href="index.html";
                //loginName = u;
                //loginUid = data.uid;
            }else{

                alert(data.msg);
                //console.log(data.code);
            }
        },
        error:function(data){alert("Mysql连接失败")}
    });
    }else{
        alert("请补全所有信息");

    }

});















