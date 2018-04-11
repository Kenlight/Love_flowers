
$(window).ready(function(){

//    //接受登陆成功后的用户名的值
//    (function(){
//        var uname=sessionStorage.getItem("uname");
//        if(uname){
//        var welcom=document.getElementById("welcom");
//        welcom.innerHTML=`
//            欢迎回来${uname},<a href="clearUname.html">退出登录</a>
//        `;}
//    })();
//
//
////搜索框的模糊查询  jquery
//    (function(){
//
//        $("#search").keyup(function(){
//             $kw = $(this).val();
//            //4:判断是否有输入
//            if(!$kw){
//                //5:如果没有输入隐藏提示列表
//                $("#search_ul").hide();
//                //6:停止程序继续执行
//              return;
//            }
//                    //3:发送ajax请求
//                    $.ajax({
//                        type:"GET",
//                        data:{ukw:$kw},
//                        url:"data/search.php",
//                        success:function(data){
//                        var html = "";
//                        $.each(data,function(idx,obj){
//                        html += `
//                        <li><a href="#" class="ukw">${obj.ukw}</a></li>
//
//                        `;});
//
//                        $("#search_ul").html(html).show();
//                        },
//                        error:function(data){alert("Mysql连接失败")}
//                    });
//
//            //失去焦点隐藏查询弹出框
//        });
//        //给弹出框UL添加监听事件
//    $("#search_ul").on("click","a",function(){
//
//        //点击查询弹出框的列项，把当前列表的值赋值给搜索框
//        $("#search").val($(this).html());
//        $("#search_ul").hide();
//    })
//    })();

//主页轮播图
    function banner() {
        //获取图片
        var img=document.querySelector(".box>img.show");
        var li=document.querySelector(".index_ul>li.index_hover");

        if(img.nextElementSibling!=null/*nodeName=="IMG"*/){
            img.className="";
            li.className="";
            img.nextElementSibling.className="show";
            li.nextElementSibling.className="index_hover";
        }else{
            img.className="";
            li.className="";
            img.parentNode.firstElementChild.className="show";
            li.parentNode.firstElementChild.className="index_hover";
        }
    }
    (function(){//自调函数
//定时器，获取定时器的时间戳times
        var times=setInterval(banner,3000);
//获取当前轮播图片的父元素
        var  Index_img=document.getElementById("Index_img");
        Index_img.onmouseover=function(){//鼠标放上定时器暂停
            clearInterval(times);
            times=null;
            /*鼠标放上控制轮播上下页*/
            this.children[0].style.opacity=1;
            //右边上下页按钮

            this.children[2].style.opacity=1;
        }
//鼠标移除重启定时器
        Index_img.onmouseout=function(){
            times=setInterval(banner,3000);
            //鼠标移除轮播上下页按钮消失
            this.children[0].style.opacity=0;
            ////右边上下页按钮
            this.children[2].style.opacity=0;
        }
        var hover_left=document.querySelector("#Index_img>.hover_left");
        var hover_right=document.querySelector("#Index_img>.hover_right");
//轮播图左边按钮操作
        hover_left.onclick=function(){
            var img=document.querySelector(".box>img.show");
            var li=document.querySelector(".index_ul>.index_hover");


            //判断，如果当前show图片的下个元素不为null，就证明该图片下还有可轮播的图片
            if(img.previousElementSibling!=null){
                //设置当前图片下的图片显示出来
                img.className="";
                li.className=""; //首先把全部的show样式去掉
                img.previousElementSibling.className="show";
                li.previousElementSibling.className="index_hover";

            }else{

                //li.parentNode.firstElementChild.className="index_ul";<=低级错误，
                img.className="";
                li.className="";
                img.parentNode.lastElementChild.className="show";
                li.parentNode.lastElementChild.className="index_hover";
            }
        }
//轮播图右边按钮操作
        hover_right.onclick=function(){
            var img=document.querySelector(".box>img.show");
            var li=document.querySelector(".index_ul>.index_hover");


            //判断，如果当前show图片的下个元素不为null，就证明该图片下还有可轮播的图片
            if(img.nextElementSibling!=null){
                //设置当前图片下的图片显示出来
                img.className="";
                li.className=""; //首先把全部的show样式去掉
                img.nextElementSibling.className="show";
                li.nextElementSibling.className="index_hover";

            }else{

                //li.parentNode.firstElementChild.className="index_ul";<=低级错误，
                img.className="";
                li.className="";
                img.parentNode.firstElementChild.className="show";
                li.parentNode.firstElementChild.className="index_hover";
            }
        }


    })();
//轮播12345控制按钮

    var lis=document.querySelectorAll(".index_ul>li");
    var imgs=document.querySelectorAll(".box>img");
    for(var i=0;i<lis.length;i++){
        (function(n){
            lis[n].onclick=function(){
                for(var j=0;j<lis.length;j++){
                    lis[j].className="";
                    imgs[j].className="";
                }
                lis[n].className="index_hover";
                imgs[n].className="show";
            }
            //设置鼠标放上图片的状态，点击跳转相应页面
            imgs[n].setAttribute("href","#");
            imgs[n].onmouseover=function(){
                this.style.cssText="cursor:pointer;";
            }
        })(i)
    }



//第二部分图片切入 Jquery

    $lis=$("#main_two ul li:not(:last-child)");
    $lis.mouseover(function(){
        $(".main_two_show").removeClass("main_two_show");
        $(this).find("div").addClass("main_two_show");
    });






//第三部分手风琴效果  jQuery效果完成


    $(".accordion").on("mouseover",".title",function(e){
            $(this).next().addClass("in").siblings().removeClass("in");
        }
    );



//楼层样式设置
    $(()=>{
        var $elevator=$("#elevator"),
            $main=$("#main"),count=0;
//当窗口滚动的时候出触发事件
        $(window).scroll(()=>{
            //滚动上去的距离
            var scrollTop= document.body.scrollTop;
            //#main_one元素距离网页顶部的距离
            var offsetTop=$("#main_one").offset().top;
            //如果滚动上去的距离加上网页高度的一般大于等于#main_one元素距离网页顶部的距离时
            if(scrollTop+window.innerHeight/2>=offsetTop){
                //改变样式
                $elevator[0].style.cssText="height:217px;width:80px;opacity:1;";

            }else{
                $elevator[0].style.cssText="height:0;width:0;opacity:0;"
            }
            $main.children("div").each((i,elem)=>{

                var offsetTop=$(elem).offset().top;
                if(scrollTop+window.innerHeight/2>=offsetTop){
                    $(".affix a").removeClass("etitle");
                    $(".affix").find(`a:eq(${i})`).addClass("etitle");
                    //$elevator.find("li").removeClass("active");
                    $elevator.find(`li:eq(${i})`)
                        .addClass("active")
                        .siblings()
                        .removeClass("active");
                    count=i;
                }
            });
        });

        $elevator.on("mouseenter","li",e=>{//鼠标移上小楼层
            if(e.target.nodeName=="A"){
                e.target=e.target.parentNode
            }
            $(e.target).addClass("active");
        }).on("mouseleave","li",e=>{//鼠标移出小楼层里发生的事件
            if(e.target.nodeName=="A"){
                e.target=e.target.parentNode
            }
            var $tar=$(e.target);
            if($tar.index()!=count){//如果小楼层下标不等于大楼层下标，就清除对应小楼层移出鼠标样式
                $tar.removeClass("active");
            }
        }).on("click","a",e=>{//点击小楼层获取相应下标值
            var i=
                $elevator.find("a")
                    .index(e.target);


//根据下标值。鼠标点击跳转到相应的楼层
            $("body").animate({
                scrollTop:
                    $(`.floor:eq(${i})`)
                        .offset().top
            },500);
        })
    })




});


//网页底客服弹出窗  和 顶部scroll下拉 原生JS完成
(function(){
    window.onscroll=function(){
        var scrollTop=document.body.scrollTop;
        var pop=document.getElementById("pop_up");
        if(scrollTop>700&&pop!=null){
            pop.style.cssText="height:250px; bottom:90px;opacity:1";
        }else if(scrollTop<525&&pop!=null){
            pop.style.cssText="height:0; bottom:-500px;opacity:0";
        }
        var hide_top=document.getElementById("hide_top");
        if(scrollTop>600){
            hide_top.style.cssText="height:50px;";
        }else{
            hide_top.style.cssText="height:0";
        }


    }
})();
(function(){
    var pop=document.getElementById("pop_up");
    pop.onclick=function(e){


        if(e.target.nodeName=="BUTTON"){
            document.body.removeChild(e.target.parentNode);


        }
    }
})();
<!--主页轮播图结束-->
<!--网页主体开始-->
<!--main第一部分中的滚动事件动画-->
(function(){
    var Ts=document.querySelector(".Text_scolls");
    setInterval(scoll,100);
    function scoll(){
        if(Ts.scrollTop>=98){
            Ts.scrollTop=0;
        }else{
            Ts.scrollTop++;
        }

    }
})();

(function(){

$("#main_two img,#main_three img,#main_four img").attr("src","Images/loading.gif");
Echo.init({
    offset: 0,//离可视区域多少像素的图片可以被加载
    throttle: 0 //图片延时多少毫秒加载
});


})()
