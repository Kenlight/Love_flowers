/**
 * Created by Administrator on 2017/8/25.
 */

//从cookie中读取数据转为obj

//var arr = document.cookie.split(";");
//var obj = {};
//for (var i=0;i<arr.length;i++) {
//    var pair = arr[i].split("=");
//    var key = pair[0];
//    var val =pair[1];
//    obj[key] = val;
//}
//===================================================================

//加载页面头部 尾部
//$("#feeds").load("style.html", function () {
//
//    var e = sessionStorage.getItem("email");
//    if(e){
//        var str=`
//        <input type="search" placeholder="搜索"/>
//        <a href="#" id="user">
//            <b></b>
//            欢迎登陆
//        </a>
//        <a href="ea.html">
//            退出登录
//        </a>
//        <a href="shoppingCart.html" id="shopping">
//            <div id="shoppingTow"></div>
//        </a>`;
//        $("#navber").html(str);
//    }
//});
////===============================
//$("#dd").load("styleTow.html");
//(function(){
//    var headTu=document.getElementById("headTu");
//    window.onscroll=function(){
//        var scrollTop=document.body.scrollTop;
//        if(scrollTop>500){
//            headTu.style.cssText="height:50px";
//        }else{
//            headTu.style.cssText="height:0";
//        }
//    }
//})();
var uid=sessionStorage.getItem("uid");
//alert(uid);
//===========================================================
//查询购物车中信息
//发送ajax数据   动态生成图片
$.ajax({
    url:"data/cart.php",
    data:{uid:uid},
    success:function (data) {
        var html = "";
        $.each (data, function (idx,obj) {
            //console.log(obj.price,obj.count);
            html += `
                    <tr>
                        <td>
                            <input type="checkbox"/>
                            <input type="hidden" value="1" />
                            <div><img src="${obj.pic}" alt=""/></div>
                        </td>
                        <td>
                          <a href="">${obj.pname}</a>
                        </td>
                        <td>${obj.price}</td>
                        <td>
                            <button title="${obj.cid}" class="jian">-</button>
                            <input type="text" value="${obj.count}"/>
                            <button class="${obj.cid}">+</button>
                        </td>
                        <td>
                           <span>${obj.price*obj.count}</span>
                        </td>
                        <td>
                           <a href="${obj.cid}" class="btn-del">删除</a>
                        </td>
                    </tr>
          `;
        });
        $("#cart tbody").html(html);
//更新购物车中一条记录 +  ==============================================================
//获取所有+按钮
//绑定点击事件
        var car_footer = $("#cart_footer #total");
//console.log(car_footer);

        var tds = $("tbody tr td:nth-child(5)");
//console.log(tds);

        var all = 0;
        $("#cart tbody").on("click", "button:contains('+')", function (e) {
                //3:获取当前购物项编号cid
                var cid = $(this).attr("class");
                //4:发送ajax
                var that = this;

                $.ajax({
                    url:"data/update_cart.php",
                    data:{cid:cid},
                    success:function(data){
                        //console.log(data);
                        //5:更新
                        seart(that,'prev')
                    },
                    error:function(){
                        alert("网络故障");
                    }
                });

            });
//封装函数seart
//将加号 减号相同部分提出来
        function seart(btnname,aa){
            if(btnname==undefined){
            }
            else{
                //减号不同部分   next（）下一个
                if(aa=='next'){
                    var inputCount = $(btnname).next();
              //减号的值
                    var  v = parseFloat(inputCount.val())-1;
              //判断  v
                    if (v<1) {
                        v=1;
                    }
                }
                else{
                    //加号不同不份 prev()上一个
                    var inputCount = $(btnname).prev();
                    //加号的值
                    var  v = parseFloat(inputCount.val())+1;
                }
                //修改数量
                inputCount.val(v);
                //console.log(v)
                //重新计算小计
                var pri = $(btnname).parent().prev().text();
                //单价
                var total = $(btnname).parent().next();
                //数量
                var rs = pri*v;
                //拼接字符串
                total.html(`<span>${rs}</span>`);
                var sum=0;
                //遍历每一个商品总数相加
                for (var i=0;i<tds.length;i++){
                    //取出当前文本框的值
                    sum += parseFloat(tds[i].textContent);
                    console.log(tds[i].textContent) ;
                }
                all=sum;
//拼接字符串
                car_footer.html(`<td>${all.toFixed(2)}</td>`);
            }
        }
//更新购物车中一条记录 -
//获取所有-按钮
//绑定点击事件

        $("#cart tbody").on("click",
            "button:contains('-')",function (e){
                //获取购物产品编号
                var cid = $(this).attr("title");
                //预留this
                var that = this;
                //发送ajax请求
                //判断减号不能小于一
                if(parseFloat($(that).next().val())-1<1){return};
                $.ajax({
                    url:"data/update_cartjj.php",
                    data:{cid:cid},
                    success : function (data) {
                        if (data.code>0) {
                            seart(that,'next');
                        }
                    }
                })
            });


//全选===============================================

    //获取全选id
 //     var chbAll =  $( "#selAll");
 //     //获取购买商品的id
 //     var chbs = $("tbody :checkbox");
 //console.log(chbAll);console.log(chbs);
 //
 //       chbAll.click( function () {
 //           //遍历每一个tbody中的checkbox
 //           for(var i=0;i<chbs.length;i++){
 //               chbs[i]=this.checked;
 //           }
 //   });
            //判断点击购买商品时的chbs[i]
        //for(var i=0;i<chbs.length;i++){
        //
        //      chbs[i].click( function () {
        //          //如果不是等于chbAll为false
        //        if(!this.checked) {
        //
        //            chbAll.checked = false;
        //
        //        } else{
        //            //找到没有选择的checked  为false
        //            var unchecked = $("tbody :not(:checked)");
        //
        //                    if (unchecked!=null){
        //
        //                        chbAll.checked=false;
        //
        //                    } else { chbAll.checked=true; }
        //        }
        //      })
        //    }

        //====================================================
    }

});

//获取所有删除按钮
//绑定点击事件
$("#cart tbody").on("click","a.btn-del",
    function(e){
//阻止事件默认行为
        e.preventDefault();
//获取当前购物车编号 cid
        var cid = $(this).attr("href");
        console.log(cid);
//:获取当前行
        var tr = $(this).parents("tr");
        //弹出窗口问是否
        var rs = window.confirm("是否删除");

        if(!rs){
            return;
        }
//5:发送ajax
        $.ajax({
            url:"data/del_cart.php",
            data:{cid:cid},
            success:function(data){
                if(data.code>0){
                    tr.remove();
                }
            }
        });
//6:删除当前行
    });























