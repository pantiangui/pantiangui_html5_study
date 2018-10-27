

//初始化主页登录效果___________________________
index_login()

index_location()

//侧边栏__________________________________________________________


//置顶___________________________
$(window).scroll(function() {
	if ($(window).scrollTop() > 100) {
		$('#box #sidebar .sidebar_box .totop').fadeIn(800);
	} else {
		$('#box #sidebar .sidebar_box .totop').fadeOut(800);
	}
});

$("#box #sidebar .sidebar_box .totop").click(function() {
	$('body,html').animate({scrollTop: 0},1000);
	return false;
});





//轮播图部分__________________________________________________________

var s1 = new Slide(banner, 768, 440, [
	{"title":"标题1", "img":"img/banner/banner_1.jpg", "url":"#"},
	{"title":"标题2", "img":"img/banner/banner_2.jpg", "url":"#"},
], 15, 0, 5000, 1);




//主内容第一部分__________________________________________________________
function mod1maketing(){
	var id=101;
	$.ajax({
		type:"get",
		url:"api/index.php",
		async:true,
		data:{
			"mate":"main_init",//匹配参数
			"id":id
		},
		success:function(str){
			var data = JSON.parse(str);
			for(var i=0;i<4;i++){
				//渲染图片
				var imgs=data[i].goods_img;
				var imgsrc=imgs.split("&");
				
				$("#main_mod1 .maketing>div").children().eq(i).attr("class",data[i].goods_id)
				$("#main_mod1 .maketing>div").children().eq(i).children().eq(0).children().attr("src",imgsrc[0]);
				//渲染标题
				$("#main_mod1 .maketing>div").children().eq(i).children().eq(1).children().eq(0).text(data[i].goods_name);
				//渲染现价
				$("#main_mod1 .maketing>div").children().eq(i).children().eq(1).children().eq(1).text("￥"+data[i].goods_price);
				//渲染原价
				$("#main_mod1 .maketing>div").children().eq(i).children().eq(1).children().eq(2).text("￥"+data[i].goods_cost_price);
			}
		}
	});
}
mod1maketing();

//点击跳转到详情页
$("#main_mod1 .maketing>div").on("click",">div",function(){
	var goods_id=$(this).attr("class");
	console.log(goods_id)
	setCookie("list_class",goods_id,1,"/");
	window.open("html/goods.html");
});







//主内容第二部分__________________________________________________________
function mod2mslide(){
	var id=102;
	$.ajax({
		type:"get",
		url:"api/index.php",
		async:true,
		data:{
			"mate":"main_init",//匹配参数
			"id":id
		},
		success:function(str){
			var data = JSON.parse(str);
			for(var i=0;i<4;i++){
				//渲染图片
				var imgs=data[i].goods_img;
				var imgsrc=imgs.split("&");
				$("#main_mod2 .mslide_banner>div").eq(i).attr("class",data[i].goods_id)
				$("#main_mod2 .mslide_banner>div").eq(i).children().eq(0).children().attr("src",imgsrc[0]);
				//渲染标题
				$("#main_mod2 .mslide_banner>div").eq(i).children().eq(1).text(data[i].goods_name);
				//渲染现价
				$("#main_mod2 .mslide_banner>div").eq(i).children().eq(2).text("￥"+data[i].goods_price);
			}
		}
	});
}
mod2mslide();


//点击跳转到详情页
$("#main_mod2 .mslide_banner").on("click",">div",function(){
	var goods_id=$(this).attr("class");
//	console.log(goods_id)
	setCookie("list_class",goods_id,1,"/");
	window.open("html/goods.html");
});



//主内容第三部分__________________________________________________________

//中间部分
function mod3mslide(){
	var id=103;
	$.ajax({
		type:"get",
		url:"api/index.php",
		async:true,
		data:{
			"mate":"main_init",//匹配参数
			"id":id
		},
		success:function(str){
			var data = JSON.parse(str);
			for(var i=0;i<6;i++){
				//渲染图片
				var imgs=data[i].goods_img;
				var imgsrc=imgs.split("&");
				$("#main_mod3 .mslide_banner>div>div").eq(i).children().eq(0).children().attr("src",imgsrc[0]);
				//渲染标题
				$("#main_mod3 .mslide_banner>div>div").eq(i).children().eq(1).text(data[i].goods_name);
				//渲染现价
				$("#main_mod3 .mslide_banner>div>div").eq(i).children().eq(2).text("￥"+data[i].goods_price);
			}
		}
	});
}
mod3mslide();


//右边部分
function mod3thematic(){
	var id=103;
	$.ajax({
		type:"get",
		url:"api/index.php",
		async:true,
		data:{
			"mate":"main_init",//匹配参数
			"id":id
		},
		success:function(str){
			var data = JSON.parse(str);
			for(var i=0;i<4;i++){
				//渲染图片
				var imgs=data[i].goods_img;
				var imgsrc=imgs.split("&");
				$("#main_mod3 .middle_thematic_list").eq(i).children().eq(0).children().attr("src",imgsrc[0]);
				//渲染标题
				$("#main_mod3 .middle_thematic_list").eq(i).children().eq(1).text(data[i].goods_name);
				//渲染现价
				$("#main_mod3 .middle_thematic_list").eq(i).children().eq(2).text("￥"+data[i].goods_price);
			}
		}
	});
}
mod3thematic();

//主内容猜你喜欢部分__________________________________________________________
function mainshow(){
	var id=1;
	$.ajax({
		type:"get",
		url:"api/index.php",
		async:true,
		data:{
			"mate":"main_init",//匹配参数
			"id":id
		},
		success:function(str){
			var data = JSON.parse(str);
			for(var i=0;i<10;i++){
				//渲染图片
				var imgs=data[i+6].goods_img;
				var imgsrc=imgs.split("&");
				
				$("#main_show #show_list>div").eq(i).attr("class",data[i+6].goods_id)
				$("#main_show #show_list>div").eq(i).children().eq(0).children().attr("src",imgsrc[0]);
				//渲染标题
				$("#main_show #show_list>div").eq(i).children().eq(1).text(data[i+6].goods_name);
				//渲染现价
				$("#main_show #show_list>div").eq(i).children().eq(2).children().eq(0).text("￥"+data[i+6].goods_price);
				//渲染原价
				$("#main_show #show_list>div").eq(i).children().eq(2).children().eq(1).text("￥"+data[i+6].goods_cost_price);
				//渲染收藏数
				$("#main_show #show_list>div").eq(i).children().eq(2).children().eq(2).children().eq(1).text(data[i+6].goods_assess);
				
				
				
			}
			for(var j=0;j<6;j++){
				var img=data[j].goods_img;
				var imgssrc=img.split("&");
//				console.log(imgssrc[0])
				$(".banner_wrapper .level_right_item>ul>li").eq(j).children().eq(0).children().attr("src",imgssrc[0])
				
			}
		}
	});
}
mainshow();

$(".banner_wrapper .nav_menu>ul>li").hover(function(){
	var nav_menu_index=$(this).index();
	for(var i=0;i<$(".banner_wrapper .nav_menu .level_nav").length;i++){
		$(".banner_wrapper .nav_menu .level_nav").eq(i).css("display","none");
	}
	$(".banner_wrapper .nav_menu .level_nav").eq(nav_menu_index).css("display","block");
},function(){
	var nav_menu_index=$(this).index();
	$(".banner_wrapper .nav_menu .level_nav").eq(nav_menu_index).css("display","none");
})


//点击跳转到详情页
$("#main_show #show_list").on("click",">div",function(){
	var goods_id=$(this).attr("class");
//	console.log(goods_id)
	setCookie("list_class",goods_id,1,"/");
	window.open("html/goods.html");
});










