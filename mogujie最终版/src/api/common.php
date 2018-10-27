<?php
	//公共PHP模块
	
	//编码设置
	header("content-type:text/html;charset=utf-8");
	
	//判断参数
	$mate=isset($_GET["mate"])?$_GET["mate"]:"";
	//初始化主内容
	if($mate=="header_login"){
		header_login();
	}

	
	
	function header_login(){
	    //引入配置文件
		include "connect.php";
		
		//接收参数
		$user_id=isset($_GET['user_id']) ? $_GET['user_id'] :'';
		
		//查询语句
		$sql="select nickname from user where user_id='$user_id'";
		
		//执行语句
		$res=$conn->query($sql);
		
		$row=$res->fetch_all(MYSQLI_ASSOC);//得到所有结果集
		
		echo json_encode($row,JSON_UNESCAPED_UNICODE);
		
		$res->close();//关闭结果集
	    $conn->close();//关闭数据库的链接
	}
?>