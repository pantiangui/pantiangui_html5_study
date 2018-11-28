
const express=require('express');
const Router=express.Router();
const path = require("path")
const fs=require('fs')


Router.post('/class',function(req,res){
	let page=req.body.params.page
	let count=req.body.params.count
	let lei=req.body.params.class
	let lei2=req.body.params.class2
	let fenlei=req.body.params.fenlei
	const json= require('../static/goods_data.json');
	let arr=[];
	let shu=0;
	let cut=[];
	for(let i=0;i<json.length;i++){
		shu=json[i].classify_1;
		arr.push(shu);
	}
	const newArr = Array.from(new Set(arr));//去重
	if(lei=='0'){
		cut=json.slice(page,count)
		res.send({newArr,cut})
	}
	if(lei=='热销榜'){
		let json1=json
		const newArr=[]
		cut=[];
		cut =cut=json1.slice(page,count)
		res.send({newArr,cut})
	}
	if(lei=='水果'){
		let json1=[]
		let lb1=[]
		for(var z=0;z<json.length;z++){
			if(json[z].classify_1=='水果'){
				json1.push(json[z])
				lb1.push(json[z].classify_2)
			}
		}
		if(lei2=='水果'){
		const newArr = Array.from(new Set(lb1));//去重
		cut=[];
		cut =cut=json1.slice(page,count)
		res.send({newArr,cut})
		}
		const newArr = Array.from(new Set(lb1));//去重
		cut=[];
		cut =cut=json1.slice(page,count)
		res.send({newArr,cut})
	}
	if(lei=='饮料'){
		let json1=[]
		let lb2=[]
		let lb3=[]
		for(var z=0;z<json.length;z++){
			if(json[z].classify_1=='饮料'){
				json1.push(json[z])
				lb2.push(json[z].classify_2)
			}
		}
		if(lei2=='全部分类'){
			cut=[];
			cut=json1.slice(page,count)		
			res.send(cut)
		}else if(lei2=='果汁'){
			for(var i=0;i<json1.length;i++){
				if(json1[i].classify_2==lei2){
					lb3.push(json1[i])
				}
			}
			cut=[];
			cut=lb3.slice(page,count)
			res.send(cut)
		}else if(lei2=='咖啡'){
			for(var i=0;i<json1.length;i++){
				if(json1[i].classify_2==lei2){
					lb3.push(json1[i])
				}
			}
			cut=[];
			cut=lb3.slice(page,count)
			res.send(cut)
		}else if(lei2=='功能饮料'){
			for(var i=0;i<json1.length;i++){
				if(json1[i].classify_2==lei2){
					lb3.push(json1[i])
				}
			}
			cut=[];
			cut=lb3.slice(page,count)
			res.send(cut)
		}
		else{
			const newArr = Array.from(new Set(lb2));//去重
			cut=[];
			cut=json1.slice(page,count)
			res.send({newArr,cut})
		}
		
	}
	
	if(lei=='蔬菜生鲜'){
		let json1=[]
		let lb3=[]
		let lb4=[]
		for(var z=0;z<json.length;z++){
			if(json[z].classify_1=='蔬菜生鲜'){
				json1.push(json[z])
				lb3.push(json[z].classify_2)
			}
		}
		if(lei2=='全部分类'){
			cut=[];
			cut=json1.slice(page,count)
			res.send(cut)
		}else if(lei2=='蔬菜'){
			for(var i=0;i<json1.length;i++){
				if(json1[i].classify_2==lei2){
					lb4.push(json1[i])
				}
			}
			cut=[];
			cut=lb4.slice(page,count)
			res.send(cut)
		}else if(lei2=='精肉'){
			for(var i=0;i<json1.length;i++){
				if(json1[i].classify_2==lei2){
					lb4.push(json1[i])
				}
			}
			cut=[];
			cut=lb4.slice(page,count)
			res.send(cut)
		}else if(lei2=='水产海鲜'){
			for(var i=0;i<json1.length;i++){
				if(json1[i].classify_2==lei2){
					lb4.push(json1[i])
				}
			}
			cut=[];
			cut=lb4.slice(page,count)
			res.send(cut)
		}
		else{
			const newArr = Array.from(new Set(lb3));//去重
			cut=[];
			cut=json1.slice(page,count)
			res.send({newArr,cut})
		}
		
	}
})

module.exports=Router;