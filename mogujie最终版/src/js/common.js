//公共js模块


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






//顶部栏__________________________________________________________

//初始化主页登录后状态
function index_login(){
	var user_id=getCookie("user_id");
	if(user_id){
		$.ajax({
			type:"get",
			url:"api/common.php",
			async:true,
			data:{
				"mate":"header_login",//匹配参数
				"user_id":user_id
			},
			success:function(str){
				var data = JSON.parse(str);
				//顶部登录
				$("#header #header_login").html(data[0].nickname+"<i class='arrow'></i>");
				$("#header #header_login_ol").html("<li>个人设置</li><li>退出</li>");
				//顶部登录下拉菜单中退出按钮
				$("#header #header_login_ol").children().eq(1).click(function(){
					setCookie("user_id",data[0].user_id,-1,"/");
					window.location.reload()
				});
				//初始化导航栏右侧用户提示部分
				$("#nav .banner_wrapper .user_info .base_info .user_imgs").html("<img src='img/user_img/user_"+user_id+".jpg'/>");
				$("#nav .banner_wrapper .user_info .base_info .welcom>span").html("您好！<b>"+data[0].nickname+"</b>");
				$("#nav .banner_wrapper .user_info .base_info .user_wait").css("display","block")
				
				//初始化右侧购物车栏头像
				$("#sidebar .avatar").html("<a href=''><img src='img/user_img/user_"+user_id+".jpg'/></a>");
			}
		});
		//顶部
		
		//消息
		$("#header #header_news").html("<a href=''>消息</a>");
		$("#header .header_news").attr("class","header_news xian");
		
		//我的收藏
		$("#header #header_collect").html("<a href=''>我的收藏<i class='arrow'></i></a><ol><li>收藏过的商品</li><li>收藏过的小店</li><li>浏览足迹</li></ol>");
		$("#header .header_collect").attr("class","header_collect xian");
		
	}
}



//初始化副页登录后状态
function html_login(){
	var user_id=getCookie("user_id");
	if(user_id){
		$.ajax({
			type:"get",
			url:"../api/common.php",
			async:true,
			data:{
				"mate":"header_login",//匹配参数
				"user_id":user_id
			},
			success:function(str){
				var data = JSON.parse(str);
				//顶部登录
				$("#header #header_login").html(data[0].nickname+"<i class='arrow'></i>");
				$("#header #header_login_ol").html("<li>个人设置</li><li>退出</li>");
				//顶部登录下拉菜单中退出按钮
				$("#header #header_login_ol").children().eq(1).click(function(){
					setCookie("user_id",data[0].user_id,-1,"/");
					window.location.reload()
				});
				
				//初始化右侧购物车栏头像
				$("#sidebar .avatar").html("<a href=''><img src='../img/user_img/user_"+user_id+".jpg'/></a>");
			}
		});
		//顶部
		
//		//消息
		$("#header #header_news").html("<a href=''>消息</a>");
		$("#header .header_news").attr("class","header_news xian");
		
		//我的收藏
		$("#header #header_collect").html("<a href=''>我的收藏<i class='arrow'></i></a><ol><li>收藏过的商品</li><li>收藏过的小店</li><li>浏览足迹</li></ol>");
		$("#header .header_collect").attr("class","header_collect xian");
		
	}
}






//顶部滑动导航栏__________________________________________________________

$(window).scroll(function(){
	var win_h=$(window).height();
	if ($(window).scrollTop() > win_h) {
		$("#sticky").css("display","block");
//		$("#sticky").animate({top:0},1000);
		$("#sticky").css("top",0)
	}
	else{
		$("#sticky").css("display","none");
//		$("#sticky").animate({top:"-100px"},1000);
		$("#sticky").css("top","-100px")
	}
});





//页面跳转__________________________________________________________

//主页页面跳转
function index_location(){
	
	//顶部滑动菜单li1
	$("#sticky>.container .sticky_nav_menu .sticky_menu .nav_list_1>dl>dd>a:nth-child(2)").attr("href","html/list.html");
	//侧边栏购物车跳转
	$("#sidebar .cart>a").attr("href","html/cart.html");
	
	//顶部栏回到首页
	$("#header>.container>a").attr("href","index.html");
	//顶部栏登录
	$("#header>.container #header_login").attr("href","html/login.html");
	//顶部栏购物车
	$("#header>.container>ul>.cart>a").attr("href","html/cart.html");
	
	//搜索栏logo
	$("#header_mid>.container>a").attr("href","index.html");
	
	//主导航栏  秋上新
	$("#main .banner_wrapper .container .nav_menu .nav_list_1>dl>dd>a:nth-child(2)").attr("href","html/list.html");
}

//副页页面跳转
function html_location(){
	//顶部滑动菜单li1
	$("#sticky>.container .sticky_nav_menu .sticky_menu .nav_list_1>dl>dd>a:nth-child(2)").attr("href","list.html");
	
	//侧边栏购物车跳转
//	$("#sidebar .cart>a").attr("href","cart.html");
	$("#sidebar .cart>a").click(function(){
		open("cart.html");
	})
	
	//顶部栏回到首页
	$("#header>.container>a").attr("href","../index.html");
	//顶部栏登录
	$("#header>.container #header_login").attr("href","login.html");
	//顶部栏购物车
	$("#header>.container>ul>.cart>a").attr("href","cart.html");
	//搜索栏logo
	$("#header_mid>.container>a").attr("href","../index.html");
	
	
	
}


