// 主页
const express=require('express');
const Router=express.Router();
const path = require("path")

const goods_data= require('../static/cart.json');//引入文件

Router.post('/cart',function(req,res){
	
	res.send(goods_data)
})

module.exports=Router;

