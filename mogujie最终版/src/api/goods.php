<?php
	//主页
	
	//编码设置
	header("content-type:text/html;charset=utf-8");
	
	//判断参数
	$mate=isset($_GET["mate"])?$_GET["mate"]:"";
	//初始化主内容
	if($mate=="goods_data"){
		goods_data();
	}
	if($mate=="intocart"){
		intocart();
	}
	
	function goods_data(){
		//引入配置文件
		include "connect.php";
		
		//接收数据
		$goods_id=isset($_GET["goods_id"])?$_GET["goods_id"]:"";
		
		//查询语句
		$sql="SELECT * FROM goods WHERE goods_id=$goods_id";
		
		//执行语句
		$res=$conn->query($sql);
		
		$row=$res->fetch_all(MYSQLI_ASSOC);//得到所有结果集
		
		echo json_encode($row,JSON_UNESCAPED_UNICODE);
		
		$res->close();//关闭结果集
	    $conn->close();//关闭数据库的链接
	}
	
	function intocart(){
		//引入配置文件
		include "connect.php";
		
		//接收参数
		$user_id=isset($_GET["user_id"])?$_GET["user_id"]:"";
		$goods_id=isset($_GET["goods_id"])?$_GET["goods_id"]:"";
		$goods_num=isset($_GET["goods_num"])?$_GET["goods_num"]:"";
		$goods_size=isset($_GET["goods_size"])?$_GET["goods_size"]:"";
		
		//编写sql插入语句
		$sql="insert into cart (user_id,goods_id,goods_num,goods_size) value ('$user_id','$goods_id','$goods_num','$goods_size')";
		
		$res=$conn->query($sql);
		
		if($res){
			//插入成功
			echo 'yes';
		}
		else{
			echo 'no';
		}
		
//		$res->close();//关闭结果集
//	    $conn->close();//关闭数据库的链接	
	}
	
?>