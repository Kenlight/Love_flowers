//动态添加html头部到网页当中
//$("#heads").load("head.html");
(function(){
//给icon_list中每个li添加时间
var icon_list=document.getElementById("icon_list");
icon_list.onmouseover=function(e){//鼠标以上小图同步中图的地址
   if(e.target.nodeName=="LI"){
       //查找中图片的位置
       for(var i=0;i<6;i++){
           //清除小图片的所有边框
           e.target.parentNode.children[i].className="";
       }
       //显示当前图片的边框
          e.target.className="hovers";

       var mImg=document.getElementById("mImg");
       //根据.来查找下标位置
       var n=e.target.firstElementChild.getAttribute('src').indexOf(".");

       //根据小图片事件，拼接中图片的src
	
		 
       mImg.src=e.target.firstElementChild.getAttribute('src').slice(0,n)+"m"+e.target.firstElementChild.getAttribute('src').slice(n);

       largeDiv.style.backgroundImage=
          "url("+e.target.firstElementChild.getAttribute('src').slice(0,n)+"L"+e.target.firstElementChild.getAttribute('src').slice(n)+")";

   }
}
//鼠标移上中图片小图遮招层显示
var superMask=document.getElementById("superMask");//中图的遮照层
var largeDiv=document.getElementById("largeDiv");//放大镜大图div
var mack=document.getElementById("mask");//小遮照层
const IMGWIDTH=230,MAX=230;
superMask.onmousemove=function(e){
    mack.style.display="block";//鼠标放上小遮照层显示
    largeDiv.style.display="block";
    var X=e.offsetX;
    var Y=e.offsetY;

    var top=Y-IMGWIDTH/2;
    var left=X-IMGWIDTH/2;

    if(left<0){left=0}
    else if(left>MAX){left=MAX}
    //如果top<0,让top=0
    if(top<0){top=0}
    else if(top>MAX){top=MAX}

    mack.style.cssText=
        "left:"+left+"px;top:"+top+"px;display:block";
    largeDiv.style.backgroundPosition=
      -16/7*left+"px "+ -16/7*top+"px";


}
//鼠标移出遮照层
superMask.onmouseout=function(){
    mack.style.display="none";//鼠标移开小遮照层隐藏
    largeDiv.style.display="none";
}

//放大镜结束

//商品详细介绍，
var cities=[
    [{"name":'广州市',"value":101},
        {"name":'佛山市',"value":102},
        {"name":'湛江市',"value":103},
        {"name":'清远市',"value":104}],
    [{"name":'武汉市',"value":201},
        {"name":'河东市',"value":202},
        {"name":'南开市',"value":203}],
    [{"name":'石家庄市',"value":301},
        {"name":'廊坊市',"value":302},
        {"name":'保定市',"value":303},
        {"name":'唐山市',"value":304},
        {"name":'秦皇岛市',"value":305}]
];



var selCts=
    document.getElementsByName("cities")[0];
//查找name为provs的sel，绑定选中项改变事件
document.getElementsByName("provs")[0]
    .onchange=function(){
    //获得当前选中项的位置-1
    var i=this.selectedIndex-1;
    //如果i>=0时
    if(i>=0){
        //清除selCts的内容
        //selCts.innerHTML="";
        selCts.length=0;
        //获得cities中i位置的子数组
        var cts=cities[i];
        //创建frag
        var frag=
            document.createDocumentFragment();
        //添加默认项-请选择-,追加到selCts中
        frag.appendChild(new Option("-请选择-"));

        //遍历子数组
        for(var i=0;i<cts.length;i++){
            //创建一个option，追加到selCts中
            frag.appendChild(
                new Option(cts[i].name,cts[i].value)
            );
        }
        //将frag追加到selCts
        selCts.appendChild(frag);
        //将selCts显示
        selCts.className="";
    }else{
        selCts.className="hide";
    }
};

//计算商品的数量    jqury完成
var _btns=document.querySelectorAll(".count button");
(function(){
_btns[0].onclick=function(){
    var n=parseInt(this.nextElementSibling.innerHTML);
    if(n>1){
        n--;
        this.nextElementSibling.innerHTML=n;
    }
}
})();
(function(){
    _btns[1].onclick=function(){
        var n=parseInt(this.previousElementSibling.innerHTML);

            n++;
            this.previousElementSibling.innerHTML=n;
        }
})();



//    /*商品详细介绍和评论留言*/ jqury完成

$(".accordion").on("mouseover",".title",e=>{

    $(e.target).next().addClass("in")
        .siblings(".content").removeClass("in");
    $(e.target).addClass("title_png").siblings().removeClass("title_png")

});


//page右边图片详情介绍///商品详细描述   jqury完成

var $lis=$(".Commodity>li");
$lis.mouseover(e=>{
    $tar=$(e.target);
    $tar.addClass("page_right_show").siblings().removeClass("page_right_show");
    var n=$lis.index($tar);
    var data=document.querySelectorAll(".page_right>div[data-id]");
    $(data[n]).addClass("shows").siblings().removeClass("shows")

})
//(function(){
//var $lis=$("#page_ul>li");
//
//$lis.mouseover(e=>{
//e.preventDefault();
//    $tar=$(e.target);
//   if($tar[0].tagName=="A"){
//       $tar=$tar.parent();
//   }
//    $tar.addClass("li_hover").siblings().removeClass("li_hover");
//    var n=$lis.index($tar);
//    var page=document.querySelectorAll(".friend_film2 div");
//    $(page[n-1]).addClass("shows").siblings().removeClass("shows");
//});




//})();


//详情页网友实拍图片加载



function page2(pageno2){
    $.ajax({
        type:"GET",
        url:"data/shipai.php",
        data:{pageno2:pageno2},
        success:function(data){
        var html="";
        $.each(data,function(index,obj){
        html+=`
          <img src="${obj.pic}"/>
             `;
        })
            $(".page1").html(html);
        }
        //error:function(){alert("mysql未连接")}
    });

}
page2(1)

$("#page_ul").on("click","li:not(li[id])",function(e){

    e.preventDefault();

    page2($(this).text());

    $(this).addClass("li_hover").siblings().removeClass("li_hover");

});

 //   //为上下页绑定事件
 $("#page_right").click(function(e){
     e.preventDefault();
  $n=$(".li_hover").text();
     if($n<8){
         $(".li_hover").next().addClass("li_hover").siblings().removeClass("li_hover")
         page2($n)
     }else{
         $("#page_ul").find("li:nth-child(2)").addClass("li_hover").siblings().removeClass("li_hover")
         page2($n)
     }
     //点击左边
 })

    //详情页网友实拍图片加载结束
    $("#page_left").click(function(e){
        e.preventDefault();
        $n=$(".li_hover").text();
        if($n>1){
            $(".li_hover").prev().addClass("li_hover").siblings().removeClass("li_hover")
            page2($n)
        }else{
            $("#page_ul").find("li:nth-child(9)").addClass("li_hover").siblings().removeClass("li_hover")
            page2($n)
        }
    })





})()