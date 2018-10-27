//详情页




//登录后状态页面渲染
html_login();

//页面跳转
html_location();





//商品详情主内容选项卡
$(".col .col_main>ul>li").click(function(e){
	//获取下标
	$index=$(this).index();
	
	//清除样式
	for(var i=0;i<$(".col .col_main .module>div").size();i++){
		$(".col .col_main .module>div").eq(i).css("display","none");
		$(".col .col_main>ul>li").eq(i).children().attr("class","")
	}
	
	//点击切换
	$(".col .col_main .module>div").eq($index).css("display","block");
	
	//li样式变化
	$(".col .col_main>ul>li").eq($index).children().attr("class","check")
})



//初始化页面渲染
var goods_id=getCookie("list_class");
if(goods_id){
	//将商品id插入节点上
	$("#goods_info").attr("class",goods_id)
	$.ajax({
		type:"get",
		url:"../api/goods.php",
		async:true,
		data:{
			"mate":"goods_data",//匹配参数
			"goods_id":goods_id
		},success:function(str){
			var data = JSON.parse(str);
			data=data[0];
//			console.log(data)
			
			//左边图片部分
			var goods_imgs=data.goods_img;
			goods_imgs=goods_imgs.split("&");
			//渲染大图
			$(".imgdet .pic>img").attr("src","../"+goods_imgs[0])
			$(".imgdet .bigpic>img").attr("src","../"+goods_imgs[0])
			var len=goods_imgs.length;
			if(len>5){
				len=5;
			}else{
				len=goods_imgs.length
			}
			//渲染小图
			for(var j=0;j<len;j++){
				var html="<li><img/><span></span></li>"
				$(".imgdet .imglist>ul").append(html);
				$(".imgdet .imglist>ul>li").eq(j).children().eq(0).attr("src","../"+goods_imgs[j]);
			}
			//样式设置
			$(".imgdet .imglist>ul>li").eq(0).attr('class',"active")
			if(len=5){
				$(".imgdet .imglist>ul>li").eq(4).attr('style',"margin-right: 0;")
			}
			
			
			
			//中间信息部分
			//$("").
			//标题
			$(".info_box>h2").text(data.goods_name);
			//原价
			$(".info_box .price_cost >del").text("￥"+data.goods_cost_price);
			//现价
			$(".info_box .property .price").text("￥"+data.goods_price);
			//评价
			$(".info_box .property .property_extra .pingjia").text(data.goods_assess);
			//销量
			$(".info_box .property .property_extra .xiaoliang").text(data.goods_sales);
			//颜色
			var colorimg=data.goods_colorimg.split("&");
			
			for(var i=0;i<colorimg.length-1;i++){
				//创建节点
				var html="<li><img src=''/></li>"
				$(".info_box .goods_style>ul").append(html);
				
				$(".info_box .goods_style>ul>li").eq(i).children().attr("src","../"+colorimg[i]);
			}
			//尺码
			var goods_size=data.goods_size.split("&");
			for(var i=0;i<goods_size.length;i++){
				//创建节点
				var html="<li></li>"
				$(".info_box .goods_size>ul").append(html);
				
				$(".info_box .goods_size>ul>li").eq(i).text(goods_size[i]);
			}
			//库存
			$(".info_box .goods_num_box .stock_num").text(data.goods_num)
			
			
			
		}
	});
}
else{
	alert("好像哪里出问题了 !");
	window.location.href="list.html";
}



//点击数量加减
//加数量
$('#goods_num_add').on('click',function(){
	//给每一个加号绑定事件(用事件委托的方式绑定)
	var val=$(this).prev().val();//前一个兄弟元素
	val++;//隐式转换
	if(val>=10){
		//库存量是10.限制最大值
		val=10;
		return false;
	}
	//设置内容
	$(this).prev().val(val);
});


//减数量
$('.goods_nums').on('click','#goods_num_red',function(){
	//给每一个加号绑定事件(用事件委托的方式绑定)
	var val=$(this).next().val();
	val--;//隐式转换
//	console.log(val);
	if(val<=1){
		//库存量是100.限制最大值
		val=1;
	}
	//设置内容
	$(this).next().val(val);
});


//选中尺码
$(".info_box .goods_size>ul").on("click","li",function(){
	for(var i=0;i<$(".info_box .goods_size>ul>li").length;i++){
		$(".info_box .goods_size>ul>li").eq(i).css("box-shadow","")
		$(".info_box .goods_size>ul>li").eq(i).attr('class',"")
	}
	$(this).css("box-shadow","0 0 10px red");
	$(this).attr('class',"size_check")
	
//	var s=$(".info_box .goods_size>ul .size_check").text()
//	console.log(s)	
})




//加入购物车功能
$(".info_box .tocart").click(function(){
	//用户id
	var user_id=getCookie("user_id");
	//商品id
	var goods_id=$("#goods_info").attr("class")
	//商品数量
	var goods_num=$(".info_box .goods_num_box #goods_num").val();
	//尺码
	var goods_size=$(".info_box .goods_size>ul .size_check").text();
	
	//是否登录
	if(user_id){
		//判断是否选择尺码
		if(goods_size){
			$.ajax({
				type:"get",
				url:"../api/goods.php",
				async:true,
				data:{
					"mate":"intocart",//匹配参数
					"user_id":user_id,
					"goods_id":goods_id,
					"goods_num":goods_num,
					"goods_size":goods_size
				},success:function(str){
					if(str=="yes"){
						alert("添加购物车成功!")
					}
				}
			});
			
		}
		else{
			alert("请选择尺码！")
		}
		
	}else{
		var l=confirm("您还未登录，是否要进行登录？")
		if(l){
			window.open("login.html");
		}
	}
	
	
	
	
});






