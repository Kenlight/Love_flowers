
//定义全局变量
var loginUid = "";
var uname="";


//接受登陆成功后的用户名的值
(function(){
    //加载就接收登陆页面传过来的参数，保存起来

    loginUid =sessionStorage.getItem("uid");
    uname=sessionStorage.getItem("uname");
    if(uname){
        var welcom=document.getElementById("welcom");
        welcom.innerHTML=`
            欢迎回来${uname},<a href="clearUname.html">退出登录</a>
        `;}
})();



//搜索框的模糊查询  jquery
(function(){

    $("#search").keyup(function(){
        $kw = $(this).val();
        //4:判断是否有输入
        if(!$kw){
            //5:如果没有输入隐藏提示列表
            $("#search_ul").hide();
            //6:停止程序继续执行
            return;
        }
        //3:发送ajax请求
        $.ajax({
            type:"GET",
            data:{ukw:$kw},
            url:"data/search.php",
            success:function(data){
                var html = "";
                $.each(data,function(idx,obj){
                    html += `
                        <li><a href="#" class="ukw">${obj.ukw}</a></li>

                        `;});

                $("#search_ul").html(html).show();
            },
            error:function(data){alert("Mysql连接失败")}
        });

        //失去焦点隐藏查询弹出框
    });
    //给弹出框UL添加监听事件
    $("#search_ul").on("click","a",function(){

        //点击查询弹出框的列项，把当前列表的值赋值给搜索框
        $("#search").val($(this).html());
        $("#search_ul").hide();
    })
})();







//第一部分的限时特价
//pageno第几页
function page(pageno) {
    $.ajax({
        type: "GET",
        url: "data/ua_produclist.php",
        data:{pageno:pageno},
        success: function (data) {
            var html = "";
            $.each(data, function (idx, obj) {
                html += `

                <li><a href="Love-flowe2.html"><img src="${obj.pic}" alt=""/></a><span>${obj.pname}</span><p>&yen;${obj.price}</p></li>

                  `;});

            $(".main_one_last_ul").html(html);
        },
        error: function (data) {
            alert("mysql连接失败" )
        }
    });
}
page(1);
//为页码添加点击事件
$lis=$("#main_one_ul>li:not(:last-child)");
//遍历li数组，绑定时间，获取下标值
$lis.each(function(index,ele){
  $(ele).click(function(e){
      e.preventDefault();
        page(index+1);//点击根据页数动态切换图片
  });
});


//第五部分

//开始发送请求

$.ajax({
    type: "GET",
    url: "data/main_fire.php",
//成功后执行的函数
    success: function (data) {
        //console.log(data)
        var html = "";
//拼字符串,依次写入到页面当中
        $.each(data, function (idx, obj) {
            html += `

               <figure>
                    <a href="#"><img  src="${obj.pic}"/></a>
                    <figcaption class="main_fire_fig">

                        <h5><a href="#">${obj.pname}</a></h5>
                        <span>&yen;${obj.price}</span>
                        <button ><a href="${obj.pid}"></a></button>
                        <div class="main_car"></div>
                    </figcaption>
                </figure>
                  `;});

//拼接到对应的位置
        $(".main_fire_left").html(html);
    },
    //失败后执行的函数
    error: function (data) {
        alert("mysql连接失败" )
    }
});


//给加入购物节绑定事件
$(".main_fire_left").on("click","button",function(e){

    e.preventDefault();
    //3:获取uid pid
    var u = loginUid;
    var p = $(this).find("a:first").attr("href");
    //console.log(p+","+u)

    //4:发送ajax
    //如果用户名有值，就发送请求
    if(uname){
    $.ajax({
        url:"data/addcart.php",
        data:{uid:u,pid:p},
        //5:并且接收返回数据
        success:function(data){


          //判断返回来的值，如果小于1，就跳转到登陆页面
            if(data.code>0) {


                alert(data.msg);
            }
        },
        error:function(){
            alert("网络故障，请检查");
        }
    });
//每次点击加入购物车，就调一次hede_top_car()，重新写入到加入购物车按钮显示出来

        hede_top_car();
    }else{
        if(window.confirm("你还未登陆，确定要登陆吗？")){
            location.href="user_submit.html";
        }

    }

});




//第五部分结束

//去购物车结束
//1加载购物车总数

function hede_top_car() {
    $.ajax({
        type: "GET",
        url: "data/hide_top_car.php",
//成功后执行的函数
        success: function (data) {

            //console.log(data)
            var values = 0;
            //console.log(uname);
//拼字符串,依次写入到页面当中
            $.each(data, function (idx, obj) {
                //返回来的json对象转为数字形式
                values += parseInt(obj.count);

            });

//拼接到对应的位置
            $(".hide_top_car>span").html(values);

        },
        //失败后执行的函数
        error: function (data) {
            alert("mysql连接失败")
        }
    });

}
if(uname){
hede_top_car();
}

$('.hide_top_car').on('click',function(){
    sessionStorage.setItem("uid",loginUid);
    location.href="shoppingcart.html"
});

