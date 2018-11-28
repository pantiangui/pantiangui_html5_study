<template>
	<div id="toolbar">
		<div class="toolbar">
			<ul>
				<router-link  v-for="(item, index) in toolbar_list" :key="index" tag="li" :to="item.to">
						<i :class="item.icon " :id="toolbar_check==index?'check':''"></i>
						<span class="title">{{item.bar}}</span>
						<span class="num" v-if="index==2">{{num}}</span>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	import {setLocalStorage,getLocalStorage}  from '../../../static/js/localStorage.js'
	export default {
		data() {
			return {
				font_color:'#fdd100',
				toolbar_list:[
					{to:'/home/hot',icon:'iconfont icon-shouye',bar:'首页'},
					{to:'/classify',icon:'iconfont icon-fenlei',bar:'分类'},
					{to:'/cart',icon:'iconfont icon-gouwuche',bar:'购物车'},
					{to:'/my/mine',icon:'iconfont icon-wode',bar:'我的'},
					],
					num:0
			};
		},
		created(){
			let cart_data=getLocalStorage("cart",true)
			this.num=cart_data.length
		},
		updated(){
			let cart_data=getLocalStorage("cart",true)
			this.num=cart_data.length
		},
		props:['toolbar_check'],
		
	}
</script>

<style lang="less" scoped="scoped">
	@import '../../styles/main.less';
	#toolbar{
		.height(162);
		.width(1080);
		bottom:0;
		.toolbar{
			.height(162);
			.width(1080);
			position:fixed;
			// background:green;
			border-top:1px solid #ccc;
			background:#fff;
			bottom:0;
			left:0;
			ul{
				display:flex;
				justify-content: space-around;
				li{
					position: relative;
					>*{
						.margin-top(6);
					}
					.height(162);
					width:2rem;
					text-align: center;
					.padding(20,20,20,20);
					display:flex;
					flex-direction: column;
					color:#ccc;
					i{
						.font-size(70);
						display: inline-block;
						.margin-top(0);
					}
					#check{
						color: #fdd100;
					}
					.title{
						.font-size(35);
					}
					.num{
						display: inline-block;
						.padding(0,10,0,10) ;
						background: @bg_color;
						position: absolute;
						.top(5);
						.left(100) ;
						.font-size(12);
						color: #FFF;
						border-radius: 50%;
					}
				}
			}
		}
	}
	
</style>
