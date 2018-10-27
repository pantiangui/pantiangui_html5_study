



var isok=false;//开关，用来判断是否能登录

//______________________________________________
//验证用户名
$("#username").blur(function(){
	var username=$("#username").val();
	if(username==""){
		isok=false;
		$("#l_usernamecue").text("* 不能为空");
		$("#l_usernamecue").css("color","red");
	}
	else{
		$("#l_usernamecue").text("");
		//正则
		if(/^1[3456789]\d{9}$/.test(username)||/^\w+@\w+(\.\w+)+$/.test(username)){
			$("#l_usernamecue").text("");
			isok=true;//改变开关
		}
		else{
			isok=false;//改变开关
			$("#l_usernamecue").text("* 用户名格式不正确");
			$("#l_usernamecue").css("color","red");
		}
	}
	
});


//______________________________________________
//验证用户名
$("#password").blur(function(){
	var password=$("#password").val();
	if(password==""){
		isok=false;
		$("#l_pwd").text("* 不能为空");
		$("#l_pwd").css("color","red");
	}
	else{
		isok=true;
		$("#l_pwd").text("");
	}
});


//______________________________________________
//登录
function login(){
	var username=$("#username").val();
	var password=$("#password").val();
	$.ajax({
		type:"post",
		url:"../api/login.php",
		async:true,//异步
		data:{//传过去的数据
			"mate":"login",//匹配参数
			"username":username,
			"password":password
		},
		success:function(str){//成功的回调
			
			if(str!="no"){
				var data = JSON.parse(str);
				alert("登录成功！");
				setCookie("user_id",data[0].user_id,1,"/");
				window.location.href="../index.html";
				var s=document.cookie
				console.log(123)
			}
			else{
				alert("登录失败,用户名与密码不匹配！")
			}
		}
	});
}



$("#login_btn").click(function(){
	login();
	
});

$(document).keydown(function(e){
	if(e.keyCode==13){
		login();
	}
});


