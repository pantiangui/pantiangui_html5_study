<?php
	//登录
	
	//编码设置
	header("content-type:text/html;charset=utf-8");
	
	//判断匹配名称
	$mate=isset($_POST["mate"])?$_POST["mate"]:"";
	if($mate=="checkname"){
		checkname();
	}
	if($mate=="login"){
		login();
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
		
		$res->close();//关闭结果集
	    $conn->close();//关闭数据库的链接
	}
	
	//登录
	function login(){
		//引入配置文件
		include "connect.php";
		//接收参数
		$username=isset($_POST["username"])?$_POST["username"]:"";
		$password=isset($_POST["password"])?$_POST["password"]:"";
		
		//编写查询语句
		//查询用户名及密码是否匹配
		$sql="select * from user where username='$username' and password='$password'";
		
		//执行语句
		$res=$conn->query($sql);
	
		if($res->num_rows>0){
			$sql2="select user_id from user where username='$username'";
			$res2=$conn->query($sql2);
			$row=$res2->fetch_all(MYSQLI_ASSOC);//得到所有结果集
			
			$yes=array("yes"=>"yes");//创建数组yes
			array_push($row,$yes);//将yes追加到row中
			
			echo json_encode($row,JSON_UNESCAPED_UNICODE);
			
		}else{
			echo 'no';
		}
		
		$res->close();//关闭结果集
	    $conn->close();//关闭数据库的链接
	}
	
	
	
?>