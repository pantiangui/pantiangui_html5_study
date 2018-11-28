
const express=require('express');
const Router=express.Router();
const path = require("path")
const fs=require('fs')


Router.post('/goods',function(req,res){
	const json= require('../static/goods_data.json');
	
	res.send(json)
})

module.exports=Router;
