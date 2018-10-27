
//购物车页

//登录后状态页面渲染
html_login();

//页面跳转
html_location()






//购物车页面数据渲染——————————————————————————————————————————

//用户id
var user_id=getCookie("user_id");
//通过用户id查找数据
if(user_id){
	$.ajax({
		type:"get",
		url:"../api/cart.php",
		async:true,
		data:{
			"mate":"cartinit",//匹配参数
			"user_id":user_id
		},success:function(str){
			var data = JSON.parse(str);
//				console.log(data)
			
			var arrs=[]
			for(let i=0;i<data.length;i++){
				//再通过商品id查找商品表
				var goods_id=data[i].goods_id;
				
					
				$.ajax({
					type:"get",
					url:"../api/cart.php",
					async:true,
					data:{
						"mate":"goods_data",//匹配参数
						"goods_id":goods_id
					},success:function(strs){
						var datas = JSON.parse(strs);
						//追加数组
						arrs.push(datas[0]);
						
						if(i==data.length-1){
							init(arrs);
						}
					}
				});
			}
			
			function init(arrs){
				for(var j=0;j<arrs.length;j++){
					//获取数量
					var goods_num=data[j].goods_num;
					//获取尺码
					var goods_size=data[j].goods_size;
					//获取商品信息
					var goods_data=arrs[j]
					
					var html=`<tbody id="${data[j].goods_id}">
								<tr class="shoptit">
									<td colspan="7">
										<input type="checkbox" name="" class="shopall" value="" />
										<a>蘑菇街</a>
									</td>
								</tr>
								<!--内容-->
								<tr class="cart_item">
									<td class="ckeck_wrap"><input type="checkbox" name="" id="" value="" /></td>
									<td class="goods_wrap">
										<a class="goods_img"><img src="../${goods_data.goods_img.split("&")[0]}"/></a>
										<a class="goods_title">${goods_data.goods_name}</a>
									</td>
									<td class="goodsinfo_wrap">
										<p>尺码：${goods_size}</p>
									</td>
									<td class="goodsprice_wrap">
										<del>${goods_data.goods_cost_price}</del>
										<p>${goods_data.goods_price}</p>
									</td>
									<td class="goodsnum_wrap">
										<div class="goods_nums">
											<input type="button" name="" class="goods_num_red" value="-" />
											<input type="text" name="" class="goods_num" value="${goods_num}" />
											<input type="button" name="" class="goods_num_add" value="+" />
										</div>
									</td>
									<td class="goodssum_wrap">
										<p>1.00</p>
									</td>
									<td class="goodsctrl_del">
										<a>删除</a>
									</td>
								</tr>
							</tbody>
					`
					$("#cart_main table").append(html)
					
				}
				
				//初始化小计
				for(var i=0;i<$(".cart_item").length;i++){
					var price=$(".cart_item .goodsprice_wrap>p").eq(i).text();//原价
					var num=$(".cart_item .goods_nums .goods_num").eq(i).val();//数量
					var total=(price*num).toFixed(2);//小计
					$(".cart_item .goodssum_wrap>p").eq(i).text(total);
					
				}
				
				//初始化购物车商品数
				cart_size();
			}
		}
	});
}
else{
	var res=confirm("您还未登录，是否要跳转到登录界面？");
	if(res){
		window.open("../html/login.html");
	}
}



//购物车功能操作——————————————————————————————————————————
//加数量
$('.cart_wrap').on('click','.goods_num_add',function(){
	//给每一个加号绑定事件(用事件委托的方式绑定)
	var val=$(this).prev().val();//前一个兄弟元素
	val++;//隐式转换
//	console.log(val);
	if(val>=10){
		//库存量是10.限制最大值
		val=10;
	}
	//设置内容
	$(this).prev().val(val);
	//小计
	price($(this));//把点击当前节点当成实参传过去
	var arr=checked();//判断哪行被选中，存到该数组中
	allnum(arr);//传被选中的行的下标过去，那边做累计处理
	
	//总价
	allprice(arr);
	//商品数
	goods_num($(this));
});


//减数量
$('.cart_wrap').on('click','.goods_num_red',function(){
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
	//小计
	price($(this));//把点击当前节点当成实参传过去
	var arr=checked();//判断哪行被选中，存到该数组中
	allnum(arr);//传被选中的行的下标过去，那边做累计处理
	//总价
	allprice(arr);
	goods_num($(this))
});





//小计
function price(now){
	var pri=now.parent().parent().prev().children().eq(1).text();//拿到对应行的单价
	
	//获取数量
	var all=now.parent().children().eq(1).val();
//	console.log(all);
	var aprice=pri*all;//小计
	now.parent().parent().next().children().eq(0).text(aprice.toFixed(2));//toFixed(2)保留两个小数
}

//删除当行

$('.cart_wrap').on('click','.goodsctrl_del>a',function(){
	var res=confirm('您确定要删除该商品吗？');
	if(res){
		var goods_id=$(this).parent().parent().parent().attr("id");
		var user_id=getCookie("user_id");
		$.ajax({
			type:"get",
			url:"../api/cart.php",
			async:true,
			data:{
				"mate":"cart_delete",//匹配参数
				"user_id":user_id,
				"goods_id":goods_id
			},success:function(str){
				console.log(str)
			}
		});
		
		
		
		
		
		$(this).parent().parent().parent().remove();//删除节点
		cart_size();//更新购物车商品数量
	}
	
	updata();
	var arr=checked();//判断哪行被选中，存到该数组中
	allnum(arr);//传被选中的行的下标过去，那边做累计处理
	
	//总价
	allprice(arr);
});


//全选
var isCheacked=true;
function all_checked(){
	//attr()加普通属性      title    prop() 加有行为的属性
	if(isCheacked){
		//全选
		$('.ckeck_wrap input').prop('checked','checked');
		$('.shopall').prop('checked','checked');//店铺
		$('#all_checks').prop('checked','checked');
	}else{
		//不选
		$('.ckeck_wrap input').removeAttr('checked');
		$('.shopall').removeAttr('checked');
		$('#all_checks').removeAttr('checked');
	}
	isCheacked=!isCheacked;
	
	//点击全选的时候，数量和总价跟着变
	//总数量
	var arr=checked();//判断哪行被选中，存到该数组中
	allnum(arr);//传被选中的行的下标过去，那边做累计处理
	
	//总价
	allprice(arr);
}
//表头全选
$('.s_all').on('click',function(){
	all_checked();
});
//表尾全选
$('#all_checks').on('click',function(){
	all_checked();
});


//循环判断哪行被选中了
function checked(){
	var arr=[];//设置一个空数组，等会被选中的就把下标存起来
	var le=$('.ckeck_wrap input').size();
	for(var i=0;i<le;i++){
		if($('.ckeck_wrap input').eq(i).prop('checked')){
			//不为空证明被选中了
			arr.push(i);
		}
	}
	return arr;
}


//删除多行
$('#delall').on('click',function(){
	var arr=checked();//被选中的行
	var res=confirm('您确定要删除多行吗？');
	if(res){
		//删除arr下标对应的行
		for(var i=arr.length-1;i>=0;i--){
			//从后面开始删除
			$('.ckeck_wrap').eq(arr[0]).parent().parent().remove();
			$('.goodsctrl_del').eq(arr[0]).parent().parent().remove();
		}
		cart_size();//更新购物车商品数量
	}
	
	updata();
	var arr=checked();//判断哪行被选中，存到该数组中
	allnum(arr);//传被选中的行的下标过去，那边做累计处理
	
	//总价
	allprice(arr);
});



//刷新判断购物车是否为空
function updata(){
	if($('.ckeck_wrap').size()==0){
		$('#all_checks').removeAttr('checked');
	}
}


//总数量
function allnum(arr){
	var num=0;//总数量
	for(var i=0;i<arr.length;i++){
		num+=parseInt($('.goods_num').eq(arr[i]).val());
	}
	
	$('.cart_paybar .nums').text(num);
	if(num>0){
		$("._info>a").css("background","#f13e3a");
	}
	else{
		$("._info>a").css("background","#d8d8d8");
	}
}


//总价
function allprice(arr){
	var price=0;
	for(var i=0;i<arr.length;i++){
		var nowtotal=$('.goodssum_wrap p').eq(arr[i]).text();
//		nowtotal=$.trim(nowtotal);
//		console.log(nowtotal);
//		nowtotal=nowtotal.substring(2);//数据提取完成  255
//		console.log(nowtotal);
		price+=nowtotal*1;
	}
	
	$('.cart_paybar .total').text(price.toFixed(2));
}



//单行选中
$('#cart_main .container').on('click','input',function(){
	
	var arr=checked();
	
	if(arr.length==$('.ckeck_wrap').size()){
		//都被选中了
		
		$('#all_checks').prop('checked','checked');
		$('.s_all').prop('checked','checked');
		//三个都被选中了，下次点击全选按钮是为了全不选
		isCheacked=false;
	}
	else{
		$('#all_checks').removeAttr('checked');
		$('.s_all').removeAttr('checked');
		//证明没有选中全部
		isCheacked=true;
		
	}
	var arr=checked();//判断哪行被选中，存到该数组中
	allnum(arr);//传被选中的行的下标过去，那边做累计处理
	
	$('.shopall').eq(arr[0]).prop('checked','checked');//店铺
	//总价
	allprice(arr);
});


//手动输入改变总价
$('.goods_num').on('blur',function(){
	price($(this));
	var arr=checked();//判断哪行被选中，存到该数组中
	allnum(arr);//传被选中的行的下标过去，那边做累计处理
	
	//总价
	allprice(arr);
});



////店铺选择
//$(".shopall").on("click",function(){
//	
//	$(this).parent().parent().next().children().eq(0).children().prop('checked','checked');
//	var arr=checked();//判断哪行被选中，存到该数组中
//	allnum(arr);//传被选中的行的下标过去，那边做累计处理
//	
//	//总价
//	allprice(arr);
//})


//初始化购物车商品数量
function cart_size(){
	var sizes=$(".cart_item").size();
	$(".allgoods>span").text(sizes)
}
cart_size();

//购买按钮
$("#cart_btn").click(function(){
//	console.log(checked())
	cart_size();//更新购物车商品数量
	
	
})


//修改单个商品数量
function goods_num(o){
	var goods_num=o.parent().children().eq(1).val();//数量
	var goods_id=o.parent().parent().parent().parent().attr("id");
	var user_id=getCookie("user_id");
//	console.log(user_id)
	$.ajax({
		type:"get",
		url:"../api/cart.php",
		async:true,
		data:{
			"mate":"update_goods_num",//匹配参数
			"goods_num":goods_num,
			"goods_id":goods_id,
			"user_id":user_id
		},success:function(str){
//			console.log(str)
		}
	});
	
	
}


