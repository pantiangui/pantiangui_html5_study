import Vue from 'vue'
import Router from 'vue-router'



import Home from '../components/pages/Home/Home'
import Hot from '../components/pages/Home/Hot'
import Fruit from '../components/pages/Home/Fruit'
import Drink from '../components/pages/Home/Drink'

import Classify from '../components/pages/Classify/Classify'
import Cart from '../components/pages/Cart/Cart'

import Mine from '../components/pages/Mine/Mine'
import Login from '../components/pages/Mine/Login'
import Reg from '../components/pages/Mine/Reg'
import My from '../components/pages/Mine/My'

import Goods from '../components/pages/detailed/Goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',//匹配的hash地址
			redirect:'home/hot'
    },
		{
			path: '/home',//匹配的hash地址
			name: 'Home',//组件的路由的名字
			component: Home,//该路由所引用的组件
			children:[
				{path:'/',name:'Hot',component:Hot},
				{path:'fruit',name:'Fruit',component:Fruit},
				{path:'drink',name:'Drink',component:Drink},
				{path:'hot',name:'Hot',component:Hot},
				]
		},
		{
			path: '/classify',//分类
			name: 'Classify',//
			component: Classify//
		},
		{
			path: '/cart',//购物车
			name: 'Cart',//
			component: Cart//
		},
		{
			path: '/my',//我的
			name: 'My',//
			component: My,//
			children:[
				{path:'/',name:'Mine',component:Mine},
				{path:'login',name:'Login',component:Login},
        {path:'reg',name:'Reg',component:Reg},
        {path:'mine',name:'Mine',component:Mine}
			]
		},
		{
			path: '/goods/:id',//详情
			name: 'Goods',//
			component: Goods//
		}
  ]
})
