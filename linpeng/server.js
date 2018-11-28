const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const path=require('path')

//post参数解析
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// app.get('/', (req,res)=>{
// 	res.send('okok');
// })

// 路由配置
const goods_data=require('./router/home.js')
const cart=require('./router/cart.js')
const Classify=require('./router/Classify.js')


// 路由指向
app.use('/linpeng/goods_data',goods_data)
app.use('/linpeng/Classify',Classify)
app.use('/linpeng/cart',cart)


app.listen('5000',()=>{
	console.log("服务器启动  5000")
})
