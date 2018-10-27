<?php
	
	//编码设置
	header("content-type:text/html;charset=utf-8");
	
	//判断参数
	$mate=isset($_GET["mate"])?$_GET["mate"]:"";
	//初始化主内容
	if($mate=="cartinit"){
		cartinit();
	}
	if($mate=="goods_data"){
		goods_data();
	}
	if($mate=="update_goods_num"){
		update_goods_num();
	}
	if($mate=="cart_delete"){
		cart_delete();
	}
	
	
	function cartinit(){
		//引入配置文件
		include "connect.php";
		
		//接收数据
		$user_id=isset($_GET["user_id"])?$_GET["user_id"]:"";
		
		//查询语句
		$sql="SELECT * FROM cart WHERE user_id='$user_id'";
		
		//执行语句
		$res=$conn->query($sql);
		
		$row=$res->fetch_all(MYSQLI_ASSOC);//得到所有结果集
		
		echo json_encode($row,JSON_UNESCAPED_UNICODE);
		
		$res->close();//关闭结果集
	    $conn->close();//关闭数据库的链接
	}
	
	//二次查找
	function goods_data(){
		//引入配置文件
		include "connect.php";
		
		//接收数据
		$goods_id=isset($_GET["goods_id"])?$_GET["goods_id"]:"";
		
		//查询语句
		$sql="SELECT * FROM goods WHERE goods_id='$goods_id'";
		
		//执行语句
		$res=$conn->query($sql);
		
		$row=$res->fetch_all(MYSQLI_ASSOC);//得到所有结果集
		
		echo json_encode($row,JSON_UNESCAPED_UNICODE);
		
		$res->close();//关闭结果集
	    $conn->close();//关闭数据库的链接
	}
	
	
	function update_goods_num(){
		//引入配置文件
		include "connect.php";
		
		//接收数据
		$goods_num=isset($_GET["goods_num"])?$_GET["goods_num"]:"";
		$goods_id=isset($_GET["goods_id"])?$_GET["goods_id"]:"";
		$user_id=isset($_GET["user_id"])?$_GET["user_id"]:"";
		
		//查询语句
		$sql="update cart set goods_num='$goods_num' where user_id='$user_id' and goods_id='$goods_id'";
		
		//执行语句
		$res=$conn->query($sql);
		
//		$res->close();//关闭结果集
	    $conn->close();//关闭数据库的链接
	}
	
	
	function cart_delete(){
		//引入配置文件
		include "connect.php";
		
		//接收数据
		$user_id=isset($_GET["user_id"])?$_GET["user_id"]:"";
		$goods_id=isset($_GET["goods_id"])?$_GET["goods_id"]:"";
		
		
		//查询语句
		$sql="delete from cart where user_id='$user_id' and goods_id='$goods_id'";
		
		//执行语句
		$res=$conn->query($sql);
		
	    $conn->close();//关闭数据库的链接
	}
	
	
?>