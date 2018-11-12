// 管理员页

const express=require('express');
const Router=express.Router();
const path = require("path")

// 引入模型
const adminModel=require('../model/adminModel.js');


// admin__________________________________________


/**
 * @api {post} /admin/manage_admin_init 初始化管理员页
 * @apiName manage_admin_init
 * @apiGroup manage_admin_init
 *
 * @apiSuccess {String} err 错误码
 * @apiSuccess {String} msg  信息
 * @apiSuccess {String} data  返回值
 */

// 初始化管理员页
Router.post('/manage_admin_init',function(req,res){
	adminModel.find()
	.then(function(data){
		if(data.length>0){
			return res.send({err:0,msg:'加载完成',data:data})
		}
	})
	.catch(function(err){
		return res.send({err:-1,msg:'加载失败',data:'null'})
	})
})



/**
 * @api {post} /admin/addadmin 添加管理员
 * @apiName addadmin
 * @apiGroup addadmin
 *
 * @apiParam {String} name 姓名
 * @apiParam {String} adminname 用户名
 * @apiParam {String} tel 电话
 * @apiParam {String} adminpwd 密码
 * @apiParam {String} date 时间
 * @apiParam {String} ip IP地址
 *
 * @apiSuccess {String} err 错误码
 * @apiSuccess {String} msg  信息
 */

// 添加管理员
Router.post('/addadmin',function(req,res){
	let {id,name,adminname,tel,adminpwd,date,ip} = req.body;
	
	//——————————————————————————
// 	var NodeRSA = require('node-rsa');
// 	var key = new NodeRSA({b: 512}); //生成新的512位长度密钥
// 
// 	var encrypted = key.encrypt(adminpwd, 'base64');  // 加密后数据
// 	console.log('加密后的数据: ', encrypted);
// 	var decrypted = key.decrypt(encrypted, 'utf8'); // 解密后数据
// 	console.log('解密后的数据: ', decrypted);
	//——————————————————————————
	
	adminModel.insertMany({'_id':id,name,adminname,tel,adminpwd,date,ip})
	.then(function(data){
		if(data.length>0){
			return res.send({err:0,msg:'添加成功'})
		}
	})
	.catch(function(err){
		return res.send({err:-1,msg:'添加失败'})
	})
})



/**
 * @api {post} /admin/update_admin 修改管理员
 * @apiName update_admin
 * @apiGroup update_admin
 *
 * @apiParam {String} id id值
 * @apiParam {String} title 文章标题
 * @apiParam {String} article 文章内容
 * @apiParam {String} category 栏目
 * @apiParam {String} article_pic 图片
 * @apiParam {String} date 日期
 *
 * @apiSuccess {String} err 错误码
 * @apiSuccess {String} msg  信息
 */

// 修改管理员
Router.post('/update_admin',function(req,res){
	let {id,name,adminname,tel,adminpwd} = req.body;
	adminModel.updateOne({
		_id:id
	},{
		$set:{
			name:name,
			adminname:adminname,
			tel:tel,
			adminpwd:adminpwd
		}
	})
	.then(function(data){
		if(data.ok==1){
			return res.send({err:0,msg:'修改成功'})
		}
	})
	.catch(function(err){
		return res.send({err:-1,msg:'修改失败'})
	})
})




/**
 * @api {post} /admin/deladmin 删除管理员
 * @apiName deladmin
 * @apiGroup deladmin
 *
 *@apiParam {String} id id值
 * 
 * @apiSuccess {String} err 错误码
 * @apiSuccess {String} msg  信息
 */

// 删除管理员
Router.post('/deladmin',function(req,res){
	let {id} = req.body;
	
	adminModel.remove({_id:id})
	.then(function(data){
		if(data.ok==1&&data.n==1){
			return res.send({err:0,msg:'删除成功'})
		}
	})
	.catch(function(err){
		return res.send({err:-1,msg:'删除失败'})
	})
})


// 管理员登录日志__________________________________________

/**
 * @api {post} /admin/loginlog_admin_init 初始化管理员登录日志
 * @apiName loginlog_admin_init
 * @apiGroup loginlog_admin_init
 * 
 * @apiParam {String} id 管理员id
 *
 * @apiSuccess {String} err 错误码
 * @apiSuccess {String} msg  信息
 * @apiSuccess {String} data  返回值
 */

// 初始化管理员登录日志
Router.post('/loginlog_admin_init',function(req,res){
	let {id} = req.body;
	
	adminModel.find({'_id':id})
	.then(function(data){
		if(data.length>0){
			return res.send({err:0,msg:'初始化完成',data:data})
		}
	})
	.catch(function(err){
		return res.send({err:-1,msg:'出错啦',data:null})
	})
})





module.exports=Router;