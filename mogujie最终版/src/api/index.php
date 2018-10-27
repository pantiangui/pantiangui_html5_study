<?php
	//主页
	
	//编码设置
	header("content-type:text/html;charset=utf-8");
	
	//判断参数
	$mate=isset($_GET["mate"])?$_GET["mate"]:"";
	//初始化主内容
	if($mate=="main_init"){
		main_init();
	}
	
	
	
	
	//主内容
	function main_init(){
		//引入配置文件
		include "connect.php";
		
		//接收数据
		$id=isset($_GET["id"])?$_GET["id"]:"";
		
		$ids=$id.'%';
		
		//查询语句
		$sql="SELECT * FROM goods WHERE goods_id LIKE '$ids'";
		
		//执行语句
		$res=$conn->query($sql);
		
		$row=$res->fetch_all(MYSQLI_ASSOC);//得到所有结果集
		
		echo json_encode($row,JSON_UNESCAPED_UNICODE);
		
		$res->close();//关闭结果集
	    $conn->close();//关闭数据库的链接
	}
	
	
	
	
	
	
	
	

?>