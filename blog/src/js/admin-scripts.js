// 公共js



//声明页面端口号
var rootpath = "http://127.0.0.1:5000"




// ————————————————————————————————————————————————————————————————————————————————————
// 获取cookie
var admin_id=getCookie('huidl_admin_id');

// 页面初始化
function init(){
	var href=window.location.href;
	if(href.indexOf('login.html')==-1){//判断是否为登录界面，不是则执行
		if(!admin_id){
			alert('您还未登录，无法获取访问权限，请先登录！')
			window.location.href="login.html"
		}else{
			// 移除退出默认属性
			$("#bs-example-navbar-collapse-1 .dropdown-menu-left>li").eq(1).children().removeAttr('href');
			$("#bs-example-navbar-collapse-1 .dropdown-menu-left>li").eq(1).children().removeAttr('onclick');
			// 初始化
			header_init();
		}
	}
	
	// 判断是否为超级管理员
	if(admin_id!=1){
		$("#manage_admin").css("display","none")
	}
	
}
init()


// 页头部分初始化
function header_init(){
	// 设置onclick退出事件
	$("#bs-example-navbar-collapse-1 .dropdown-menu-left>li").eq(1).children().attr('onclick','exit()');
	
	
	$.ajax({
		type: "post",
		url: rootpath + '/huidl/admin/loginlog_admin_init',
		async: true, //异步
		data: {
			'id': admin_id
		},
		success: function(str) { //成功的回调
			if (str.err == 0) {
				// console.log(str.data[0])
				$("#bs-example-navbar-collapse-1 .dropdown-toggle").html(str.data[0].name+"<span class='caret'></span>");
				$("#seeUserInfo tbody input[name='truename']").val(str.data[0].name);
				$("#seeUserInfo tbody input[name='username']").val(str.data[0].adminname);
				$("#seeUserInfo tbody input[name='usertel']").val(str.data[0].tel);
				
			}
		}
	});
}



// 退出按钮事件
function exit(){
	var res=confirm('您确定要退出吗？')
	if(res){
		setCookie("huidl_admin_id","",-1,"/");
		window.location.href="login.html";
	}
}



// 隐藏个人信息密码框
$("#seeUserInfo input[name='old_password']").parent().parent().css('display','none');
$("#seeUserInfo input[name='password']").parent().parent().css('display','none');
$("#seeUserInfo input[name='new_password']").parent().parent().css('display','none');
$("#seeUserInfo .btn-primary").css('display','none');



// ——————————————————————————————————————————————————————————————————————————————————




// $.ajax({
// 	type: "post",
// 	url: "../api/login.php",
// 	async: true, //异步
// 	data: { //传过去的数据
// 		"mate": "login", 
// 	},
// 	success: function(str) { //成功的回调
// 		console.log(str)
// 	}
// });





// ————————————————————————————————————————————————————————————————————————
var checkall = document.getElementsByClassName("input-control");
//全选
function select() {
	for (var i = 0; i < checkall.length; i++) {
		checkall[i].checked = true;
		$(".input-control").eq(i).attr('check','check')
	}
};
//反选
function reverse() {
	for (var $i = 0; $i < checkall.length; $i++) {
		if (checkall[$i].checked) {
			checkall[$i].checked = false;
			$(".input-control").eq($i).attr('check','')
		} else {
			checkall[$i].checked = true;
			$(".input-control").eq($i).attr('check','check')
		}
	}
}
//全不选     
function noselect() {
	for (var $i = 0; $i < checkall.length; $i++) {
		checkall[$i].checked = false;
		$(".input-control").eq($i).attr('check','')
	}
}
// 单选
$(".table-responsive").on('click','.input-control',function(){
	if($(this).attr('check')){
		$(this).attr('check','')
	}
	else{
		$(this).attr('check','check')
	}
})


//启用工具提示
// $('[data-toggle="tooltip"]').tooltip();
