// 主页
const express=require('express');
const Router=express.Router();
const path = require("path")
const fs=require('fs')

const goods_data= require('../static/goods_data.json');//引入文件

Router.get('/goods',function(req,res){
	let id = req.query.id;
	var data=[]
	if(id){
		for(var i=0;i<goods_data.length;i++){
			if(goods_data[i].id==id){//判断id发送
				data.push(goods_data[i])
			}
		}
		res.send(data)
	}else{
		res.send("参数错误！")
	}
	
})

Router.post('/homes',function(req,res){
	let type=req.body.type;
	let page=req.body.page;
	let count=req.body.count;
	var data=[]
	if(type=="hot"){//热销榜
		data=[]
		for(var i=0;i<goods_data.length;i++){
			if(i%2==0){//热销随便定义
				data.push(goods_data[i])
				
			}
		}
		data=data.slice(page,count)
	}
	if(type=="fruit"){//水果
		data=[]
		for(var i=0;i<goods_data.length;i++){
			if(goods_data[i].classify_1=="水果"){//判断等于水果则取出发过去
				data.push(goods_data[i])
			}
		}
		
		data=data.slice(page,count)
	}
	if(type=="drink"){//饮料
		data=[]
		for(var i=0;i<goods_data.length;i++){
			if(goods_data[i].classify_1=="饮料"){
				data.push(goods_data[i])
			}
		}
		data=data.slice(page,count)
	}
	res.send(data)
})

module.exports=Router;

