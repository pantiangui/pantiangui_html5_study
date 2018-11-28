<template>
	<div class="my">
		 <router-view></router-view>
	</div>
</template>
<script>
	import {setLocalStorage,getLocalStorage}  from '../../../../static/js/localStorage.js'
	import Header from '../../commons/Header';//引入组件
	import Toolbar from '../../commons/Toolbar.vue';
	export default {
		name:'My',
		components:{Header,Toolbar},
		data() {
			return {
				title:'我的',//声明header标
				toolbar_check:'3'
			};
		},
		methods:{

		},
		created(){
// 			console.log(this.$store.state.login)
// 			var str=this.$store.state.login
// 			if (str==1){
				// this.$router.replace('/my/mine')
// 			}else{
// 				this.$router.replace('/my/login')
// 			} 
		},
	}
</script>

