<?php
	//注册
	
	//编码设置
	header("content-type:text/html;charset=utf-8");
	
	//判断匹配名称
	$mate=isset($_POST["mate"])?$_POST["mate"]:"";
	if($mate=="checkname"){
		checkname();
	}
	if($mate=="checknickname"){
		checknickname();
	}if($mate=="register"){
		register();
	}
	
	//匹配用户名
	function checkname(){
		//引入配置文件
		include "connect.php";
		
		//接收参数
		$username=isset($_POST['username']) ? $_POST['username'] :'';
		
		//查询语句
		$sql="select * from user where username='$username'";
		
		//执行语句
		$res1=$conn->query($sql);
		
		if($res1->num_rows>0){
			//有这个用户名存在
			echo 'no';
		}else{
			echo 'yes';
		}
		
//		$res->close();//关闭结果集
	    $conn->close();//关闭数据库的链接
	}
	
	//匹配昵称
	function checknickname(){
		//引入配置文件
		include "connect.php";
		
		//接收参数
		$nickname=isset($_POST['nickname']) ? $_POST['nickname'] :'';
		
		//查询语句
		$sql1="select * from user where nickname='$nickname'";
		
		//执行语句
		$res2=$conn->query($sql1);
//		echo $res2->num_rows;
		if($res2->num_rows>0){
			//存在
			echo 'no';
		}else{
			echo 'yes';
		}
		
//		$res->close();//关闭结果集
	    $conn->close();//关闭数据库的链接
	}
	
	//注册
	function register(){
		//引入配置文件
		include "connect.php";
		
		//接收参数
		$username=isset($_POST["username"])?$_POST["username"]:"";
		$password=isset($_POST["password"])?$_POST["password"]:"";
		$nickname=isset($_POST["nickname"])?$_POST["nickname"]:"";
		
		//编写sql插入语句
		$sql="insert into user (nickname,username,password) value ('$nickname','$username','$password')";
		
		$res=$conn->query($sql);
		
		if($res){
			//插入成功
			echo 'yes';
		}
		else{
			echo 'no';
		}
		
//		$res->close();//关闭结果集
	    $conn->close();//关闭数据库的链接
	}
		
	
	
?>