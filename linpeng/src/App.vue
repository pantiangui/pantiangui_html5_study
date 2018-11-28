<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
	import {setLocalStorage,getLocalStorage}  from '../static/js/localStorage.js'
	import Home from './components/pages/Home/Home';//引入组件
	
export default {
  name: 'App',
	comments:{
		Home	//引入组件
	},
	data(){
		return	{
			
		}
	},
	created(){
		this.$axios.post('/test/linpeng/cart/cart')
		.then((data)=>{
			// console.log(data.data)
			setLocalStorage('cart',data.data);
			
		})
		.catch((err)=>{
			console.log(err)
		})
	}
}
</script>

<style>
#app {
	
}
</style>
