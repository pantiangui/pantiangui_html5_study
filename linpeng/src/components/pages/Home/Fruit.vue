<template>
	<div class="fruit">
		<div class="banner_2">
			<img src="../../../assets/banner_img/banner_2_3.png" alt="">
		</div>
		<div class="itemlist clearfix">
			<ul v-infinite-scroll="loadMore"
					infinite-scroll-disabled="loading"
					infinite-scroll-distance="0">
				<li v-for="(item,index) in goods_list" :class="item.id">
					<a @click="togoods(item.id)"><img :src="'../../../../static/'+item.img" alt=""></a>
					<div>
						<p @click="togoods(item.id)">{{item.title}}</p>
						<span>￥{{item.price}}</span>
						<a class="iconfont icon-jiahao" @click="tocart(item.id)"></a>
					</div>
				</li>
			</ul>
		</div>
		<back-top size=''></back-top>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Toast,InfiniteScroll } from 'mint-ui';
	import {setLocalStorage,getLocalStorage}  from '../../../../static/js/localStorage.js'
	import '../../../../node_modules/mint-ui/lib/toast/style.css';
	Vue.use(InfiniteScroll);
	
	export default {
		name:'Fruit',
		data() {
			return {
				title:"水果",
				goods_list:"",
				page:0,
				count:2,
			};
		},
		methods:{
			loadMore(){
				this.$axios.post('/test/linpeng/goods_data/homes',{
					type:"fruit",
					page:this.page,
					count:this.count
				})
				.then((data)=>{
					// Toast('Loding');
					this.count++;
					this.goods_list="";
					this.goods_list=data.data;
				})
				.catch((err)=>{
					console.log(err)
				})
			},
			togoods(id){
				this.$router.push({path:`/goods/${id}`,params:{id:id}})
			},
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
			this.$axios.post('/test/linpeng/goods_data/homes',
			{
				type:"hot",
				page:this.page,
				count:this.count
				
			})
			.then((data)=>{
				this.goods_list="";
				this.goods_list=data.data;
			})
			.catch((err)=>{
				console.log(err)
			})
		}
	}
</script>

<style lang="less" scoped="scoped">
	@import '../../../styles/main.less';
	.fruit{
		.banner_2{
			.width(1080);
			.height(372) ;
			.padding(42,42,42,42);
			img{
				.width(996);
				.height(288) ;
			}
		}
		.itemlist{
			ul{
				li{
					.width(510);
					.height(666);
					.border(3,solid,#f1f1f1);
					.margin-left(20);
					.margin-bottom(20);
					float: left;
					>a{
						display: inline-block;
						.width(510);
						.height(486);
						.padding-top(33);
						.padding-left(45);
						img{
							.width(420);
							.height(420);
							
						}
					}
					div{
						.font-size(34);
						width: 100%;
						.height(180);
						.padding-left(30);
						.padding-right(30);
						>*{
							.margin-top(30);
						}
						p{
							.height(42);
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
						span{
							display: inline-block;
							color:@color4;
						}
						a{
							float: right;
							color:@color4;
						}
					}
				}
			}
		}
	}
</style>
