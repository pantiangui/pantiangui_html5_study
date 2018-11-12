const mongoose = require('mongoose')
//链接数据库
mongoose.connect('mongodb://localhost:27017/huidl', {
	useNewUrlParser: true
});
//创建数据库对象
let db = mongoose.connection;
//监听数据库链接错误
db.on('error', () => {
	console.log('数据库链接出错！')
})

db.on('open', function() {
	console.log("数据库链接成功！")
});
db.on('disconnected', function() {
	console.log('数据库连接断开！');
})




//schema 对象
//   let Schema = mongoose.Schema;
// 
//   let userSchema=new Schema({
//   	us:{type:String,required:true},
//   	pass:{type:String,required:true}
//   })
//   // type 字段类型  required 是否必须
//   let usermodel=mongoose.model('users', userSchema);
  // 参数1  集合名字  参数2是 schema对象 将schema对象变成model

//  usermodel.insertMany({us:'123',pass:'456'})
//  .then((data)=>{
//  	console.log(data)
//  })
//  .catch((err)=>{
//  	console.log(err)
//  })
 
//  usermodel.find()
//  .then((data)=>{
//  	console.log(data)
//  })
//  .catch((err)=>{
//  	console.log(err)
//  })
