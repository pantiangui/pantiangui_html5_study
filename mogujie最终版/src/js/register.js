
var isok=false;//开关，用来判断是否能注册

//______________________________________________
//验证用户名
$("#username").blur(function(){
	var username=$("#username").val();
	if(username==""){
		isok=false;
		$("#username_cue").text("* 不能为空");
		$("#username_cue").css("color","red");
	}
	else{
		$("#username_cue").text("");
		//正则
		if(/^1[3456789]\d{9}$/.test(username)||/^\w+@\w+(\.\w+)+$/.test(username)){
			$("#username_cue").text("");
			$.ajax({
				type:"post",
				url:"../api/register.php",
				async:true,
				data:{
					"mate":"checkname",//匹配参数
					"username":username
				},
				success:function(str){
					if(str=="yes"){
						isok=true;//改变开关
						$("#username_cue").text("");
					}
					else{
						isok=false;//改变开关
						$("#username_cue").text("* 用户名已存在");
						$("#username_cue").css("color","red");
					}
				}
				
			});
		}
		else{
			isok=false;//改变开关
			$("#username_cue").text("* 用户名格式不正确");
			$("#username_cue").css("color","red");
		}
	}
	
});


//______________________________________________
//验证密码
$("#pwd").blur(function(){
	var password=$("#pwd").val();
	if(password==""){
		isok=false;
		$("#pwd_cue").text("* 不能为空");
		$("#pwd_cue").css("color","red");
	}
	else{
		isok=true;
		$("#pwd_cue").text("");
	}
});



//______________________________________________
//验证密码与确认密码

$("#con_pwd").blur(function(){
	var password=$("#pwd").val();
	var con_password=$("#con_pwd").val();
	if(con_password==""){
		isok=false;
		$("#con_pwd_cue").text("* 不能为空");
		$("#con_pwd_cue").css("color","red");
	}else{
		$("#con_pwd_cue").text("");
		if(password!=con_password){
			isok=false;//改变开关
			$("#con_pwd_cue").text("* 确认密码与密码不符");
			$("#con_pwd_cue").css("color","red");
		}else{
			isok=true;//改变开关
			$("#con_pwd_cue").text("");
		}
	}
	
});


//______________________________________________
//验证昵称
$("#nickname").blur(function(){
	var nickname=$("#nickname").val();
	if(nickname==""){
		isok=false;
		$("#nickname_cue").text("* 不能为空");
		$("#nickname_cue").css("color","red");
	}else{
		$("#nickname_cue").text("");
		$.ajax({
			type:"post",
			url:"../api/register.php",
			async:true,
			data:{
				"mate":"checknickname",//匹配参数
				"nickname":nickname
			},
			success:function(str){
				if(str=="yes"){
					isok=true;//改变开关
					$("#nickname_cue").text("");
				}
				else{
					isok=false;//改变开关
					$("#nickname_cue").text("* 该昵称已存在");
					$("#nickname_cue").css("color","red");
				}
			}
			
		});
	}
	
});


//______________________________________________
//验证码
function code(){
	var codenum = Math.floor(Math.random()*900000)+100000;
	$("#code_case").text(codenum);
	$("#code_case").css("font-size",Math.floor(10+16*Math.random()))
	
	$("#code").blur(function(){
		var code=$("#code").val();
		if(code!=codenum){
			isok=false;//改变开关
			$("#code_cue").text("* 验证码输入不正确");
			$("#code_cue").css("color","red");
		}else{
			isok=true;//改变开关
			$("#code_cue").text("");
		}
	});
}
code();

$("#code_case").click(function(){
	code();
});
$("#code_case").keydown(function(){return key(arguments[0])}); //阻止复制
//______________________________________________
//验证同意选择
var ckecked=false;
$("#r_checked").click(function(){
	if(!ckecked){
		$("#r_checked").prop("ckecked","ckecked");
		ckecked=true;
	}
	else{
		ckecked=false;
	}
	
})


//______________________________________________
//注册
$("#reg_btn").click(function(){
	if(isok&&ckecked){
		var username=$("#username").val();
		var password=$("#pwd").val();
		var nickname=$("#nickname").val();
		var con_password=$("#con_pwd").val();
		var code=$("#code").val();
		$.ajax({
			type:"post",
			url:"../api/register.php",
			async:true,
			data:{
				"mate":"register",
				"username":username,
				"password":password,
				"nickname":nickname
			},
			success:function(str){
				if(str=="yes"){
					alert("注册成功！");
					var username=$("#username").val("");
					var password=$("#pwd").val("");
					var nickname=$("#nickname").val("");
					var con_password=$("#con_pwd").val("");
					var code=$("#code").val("");
				}
				else{
					alert("注册失败！");
				}
			}
		});
	}
	else{
		alert("似乎哪里有错误！")
	}
});




