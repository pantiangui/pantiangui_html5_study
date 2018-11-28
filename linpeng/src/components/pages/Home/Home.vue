<template>
	<div class="home">
		<Header :title="title"></Header>
		<!-- <div class="banner">
			<img src="../../../assets/banner_img/banner_1_1.png" alt="">
		</div> -->
		<Banner></Banner>
		
		<div class="nav">
			<ul>
				<router-link v-for="(value,index) in nav_list" 
				:key="index" tag="li" :to="value.to" active-class="li_check">
					<span>{{value.type}}</span>
				</router-link>
				<router-link style="color: #999;" to="/classify">
					更多 >
				</router-link>
			</ul>
		</div>
		<router-view></router-view>
		
		<div class="footer"></div>
		<Toolbar :toolbar_check="toolbar_check"></Toolbar>
	</div>
</template>

<script>
	import Header from '../../commons/Header';//引入组件
	import Toolbar from '../../commons/Toolbar.vue';
	import Banner from '../../commons/Banner.vue';
	export default {
		name:'Home',
		components:{
			Header,Toolbar,Banner
		},
		data() {
			return {
				title:'邻朋便利店',//声明header标
				toolbar_check:'0',//底部控制栏
				nav_list:[
					{type:'热销榜',to:'/home/hot'},
					{type:'水果',to:'/home/fruit'},
					{type:'饮料',to:'/home/drink'}
				],
				// showstate:true,
				
			};
		},
		methods:{
		},
		created(){
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	@import '../../../styles/main.less';
	.home{
		.banner{
			.height(555);
			background:#f8f8f8;
			.width(1080);
			img{
				.width(1080);
				.height(528);
			}
		}
		.nav{
			.height(129);
			.width(1080);
			// background:#ccc;
			ul{
				display: flex;
				.font-size(35);
				text-align: center;
				>*{
					flex: 1;
					.line-height(128);
				}
				.li_check{
					.border-bottom(6px,solid,@color1);
				}
				li{
					color: @color2;
					span{
						display: inline-block;
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>
