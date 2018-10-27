

//登录后状态页面渲染
html_login();

//页面跳转
html_location()





//列表部分__________________________
function wallbox(){
	var id=1;
//	var html="";
	$.ajax({
		type:"get",
		url:"../api/list.php",
		async:true,
		data:{
			"mate":"wallbox",//匹配参数
			"id":id
		},
		success:function(str){
			var data = JSON.parse(str);
			var len=data.length
			console.log(data)
			var lens=15;
			function init(){
				$("#main .wall_box").html("")
				for(var i=0;i<lens;i++){
					
					//创建节点
					var html="<div><div class='list_imgs'><img src=''/></div><p></p><div class='list_info'><b></b><del></del><div><i><img src=''/></i><span></span></div></div></div>"
					$("#main .wall_box").append(html);
					
					//渲染图片
					var imgs=data[i].goods_img;
					var imgsrc=imgs.split("&");
	//				console.log("../"+imgsrc[0])
					//渲染class
					$("#main .wall_box>div").eq(i).attr("class",data[i].goods_id);
					//渲染图片
					$("#main .wall_box>div").eq(i).children().eq(0).children().attr("src","../"+imgsrc[0]);
					//渲染标题
					$("#main .wall_box>div").eq(i).children().eq(1).text(data[i].goods_name);
					//渲染现价
					$("#main .wall_box>div").eq(i).children().eq(2).children().eq(0).text("￥"+data[i].goods_price);
					//渲染原价
					$("#main .wall_box>div").eq(i).children().eq(2).children().eq(1).text("￥"+data[i].goods_cost_price);
					//渲染收藏数
					$("#main .wall_box>div").eq(i).children().eq(2).children().eq(2).children().eq(1).text(data[i].goods_assess);
				}
				
				//取出列表页每行最后一个元素的div
				function maginright(){
					//获取个数
					var len=$("#main .wall_box>div").size();
					
					//设置大盒子高度
					var h=len/5;
					$("#main .wall_box").css("height",h*400+"px");
					//设置右边距
					for(var r=len;r>=1;r=r-5){
						$("#main .wall_box>div").eq(r-1).css("margin-right",0)
					}
				}
				maginright();
			}
			init();
			
			
			//点击加载更多
			$("#load").click(function(){
				
				if(lens<len){
					lens+=5;
					init();
					$("#load").css('display','block');
				}else{
					alert("到底啦！");
					$("#load").css('display','none');
					return false;
				}
			});
			
		}
	});
}
wallbox();




//点击跳转
$("#main .wall_box").on("click",">div",function(){
	var iclass=$(this).attr("class");
//	console.log(iclass)
	setCookie("list_class",iclass,1,"/")
	window.open("goods.html");
//	getCookie("list_class")
});


