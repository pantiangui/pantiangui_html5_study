<template>
	<div class="goods">
		<Header :title="title" :showstate="showstate"></Header>
		<div class="goods_box">
			<p class="goods_img">
				<img :src="'../../../../static/'+goods_data.img" alt="">
			</p>
			<p class="title">{{goods_data.title}}</p>
			<p class="price"><span>￥{{goods_data.price}}</span></p>
			<div class="goods_datas">
				<p class="goods_datas_title">—————&nbsp;&nbsp;&nbsp;商品详情&nbsp;&nbsp;&nbsp;—————</p>
				<p class="goods_datas_lis"><span>品牌</span><a>{{goods_data.brand}}</a></p>
				<p class="goods_datas_lis"><span>产品规格</span>{{goods_data.spec}}</p>
				<p class="goods_datas_lis"><span>保质期限</span>{{goods_data.period}}</p>
			</div>
			<div class="shop_talk">
				<p class="shop_talk_title">————&nbsp;&nbsp;&nbsp;麦点精选&nbsp;&nbsp;品质保证&nbsp;&nbsp;&nbsp;————</p>
				<p>我们用心为您精选优质商品</p>
				<p>48小时质保  品类丰富  物超所值</p>
				<p>让您买得放心  安心  舒心</p>
			</div>
		</div>
		<div class="goods_toolbars">
			<div class="goods_toolbar">
				<a class="addcart" @click="tocart(goods_data.id)">加入购物车</a>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from '../../commons/Header';//引入组件
	import {setLocalStorage,getLocalStorage}  from '../../../../static/js/localStorage.js'
	export default {
		name:'Goods',
		components:{
			Header
		},
		data() {
			return {
				title:'商品详情',//声明header标
				toolbar_check:'3',
				goods_data:'',
				showstate:true,
			};
		},
		methods:{
			tocart(id){//加入购物车
				let cart_data=getLocalStorage("cart",true)
				
				var ifcart_id=true;//用来做购物车id的全局判断
				for(let i=0;i<cart_data.length;i++){
					if(Number(cart_data[i].id)==id){
						cart_data[i].num=(Number(cart_data[i].num))+1;
						ifcart_id=true
						break;
					}else{
						ifcart_id=false;//改变全局的ifcart_id
					}
				}
				if(!ifcart_id){
					cart_data.unshift({"id":id,"num":"1","selected":false})
					
				}
				setLocalStorage("cart",cart_data)
				alert("添加购物车成功！")
				let cart_datas=getLocalStorage("cart",true)
			}
		},
		created(){
			var id=this.$route.params.id;
			this.$axios.get('/test/linpeng/goods_data/goods',{params:{id:id}})
			.then((data)=>{
				this.goods_data=data.data[0];
				// console.log(data.data[0])
			})
			.catch((err)=>{
				console.log(err)
			})
		}
	}
</script>

<style lang="less" scoped="scoped">
	@import '../../../styles/main.less';
	.goods{
		.goods_box{
			.goods_img{
				.width(1080);
				.height(1000);
				.padding(100,0,0,140);
				img{
					.width(800);
					.height(800);
				}
			}
			.title{
				.font-size(45);
				color:@color2;
				text-align:center;
			}
			.price{
				text-align: center;
				span{
					color: #FF4400;
					.font-size(45);
				}
			}
			.goods_datas{
				.width(1080);
				.height(450);
				.border-top(15,solid,#f8f8f8);
				.border-bottom(15,solid,#f8f8f8);
				.font-size(35);
				.goods_datas_title{
					text-align: center;
					color: #e1c071;
					.font-size(45);
					.margin(50,0,50,0);
				}
				.goods_datas_lis{
					.padding(15,0,15,50);
					span{
						display: inline-block;
						.width(200);
						color:#999999;
					}
					a{
						color:#333333;
					}
				}
			}
			.shop_talk{
				.width(1000);
				.height(380);
				background: #f6f5f3;
				.margin(40,40,40,40);
				.padding-top(50) ;
				>p{
					.font-size(35) ;
					text-align: center;
					color: #666666;
					.margin-top(20);
				}
				.shop_talk_title{
					color: @color2;
					.font-size(45) ;
					.margin(0,0,50,0);
				}
			}
		}
		.goods_toolbars{
			.height(141) ;
			.width(1080) ;
			.goods_toolbar{
				.height(141) ;
				.width(1080) ;
				.border-top(3px,solid,#f1f1f1) ;
				position: fixed;
				left: 0;
				bottom: 0;
				background: #fff;
				.addcart{
					display: inline-block;
					.width(300);
					.height(100);
					background: @bg_color;
					.margin-top(19);
					.margin-right(50);
					border-radius: 5px;
					float: right;
					.font-size(45) ;
					color: #fff;
					text-align: center;
					.line-height(100) ;
				}
			}
		}
	}
</style>
