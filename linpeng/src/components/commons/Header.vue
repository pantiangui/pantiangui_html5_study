<template>
	<div id="header">
		<div class="header">
			<a class="iconfont icon-fanhui"  @click="goback()"  v-show='showstate'></a>
			<span>
				{{title}}
			</span>
			<!-- <a class="logins" v-show='setting'>{{setting}}</a> -->
		</div>
	</div>
</template>

<script>
	import {setLocalStorage,getLocalStorage}  from '../../../static/js/localStorage.js'
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goback(){
				this.$router.go(-1);
			}
		},
		created(){
			var str=this.$store.state.login
// 			if (str==1){
// 				this.$router.replace('/my/mine')
// 			}else{
// 				this.$router.replace('/my/login')
// 			} 
		},
		props:['title','showstate']
	}
</script>
<style lang="less" scoped="scoped">
	
	@import '../../styles/main.less';
	#header{
		.height(140);
		.width(1080);
		.header{
			z-index:1000;
			.height(140);
			.width(1080);
			position:fixed;
			// background:@bg_color;
			background:#FFF;
			// background:green;
			top:0;
			left:0;
			.line-height(140);
			.font-size(50);
			text-align:center;
			// position:relative;
			.icon-fanhui{
				position: absolute;
				.font-size(60);
				.left(30);
				// color: #ccc;
				color:@color2;
			}
			span{
				// .font-size(40);
			}
			.logins{
				.font-size(40);
				color:@color2;
				position: absolute;
				.right(50);
			}
		}
	}
	
</style>