<template>
	<div class="cart" :style="{minHeight:min_height+'px'}">
		<Header :title="title" ></Header>
		<div class="address">
			<span>请选择收货地址</span>
			<i class="iconfont icon-qianjin"></i>
		</div>
		<div class="kong" v-if="cart_data.length<1">
			<p>购物车空空如也……</p>
		</div>
		<div class="cart_box" v-if="cart_data.length>1">
			<div class="cart_box_header">
				满￥20起送，满￥35免配送费，不满收5元配送费
			</div>
			<ul>
				<li v-for="(value,index) in cart_data" :key="index">
					<div class="left">
						<i class="iconfont icon-yduifuxuankuangxuanzhong i_check" v-if="typeof(value.selected)=='boolean'?Boolean(value.selected):value.selected" @click="radios(index)"></i>
						<i class="iconfont icon-yduifuxuankuang" v-else="typeof(value.selected)=='boolean'?Boolean(value.selected):value.selected" @click="radios(index)"></i>
						<a class="img" @click="togoods(value.id)"><img :src="'../../../../static/'+value.img" alt=""></a>
					</div>
					<div class="right">
						<p class="title" @click="togoods(value.id)">{{value.title}}</p>
						<a @click="del(index)">移除</a>
						<span class="price" @click="togoods(value.id)">￥{{value.price}}</span>
						<p class="num_tool">
							<i class="iconfont icon-jianhao" @click="rednum(index)"></i>
							<span class="num">{{value.num}}</span>
							<i class="iconfont icon-jiahao" @click="addnum(index)"></i>
						</p>
					</div>
				</li>
			</ul>
			<div class="cart_box_footer">
				<p class="total">共￥<span v-html="total"></span></p>
				<a :class="total>0?'py topy':'topy'" @click="topy()">选好了</a>
			</div>
		</div>
		<Toolbar :toolbar_check="toolbar_check"></Toolbar>
	</div>
</template>

<script>
	import Header from '../../commons/Header';//引入组件
	import Toolbar from '../../commons/Toolbar.vue';
	import {setLocalStorage,getLocalStorage}  from '../../../../static/js/localStorage.js'
	
	
	export default {
		name:'Cart',
		components:{
			Header,Toolbar
		},
		data() {
			return {
				title:'购物车',//声明header标
				toolbar_check:'2',
				// showstate:true,
				min_height:'',
// 				cart_data:[{id:'100101001',title:'东鹏特饮',price:'6.15',goods_img:require('../../../../static/goods_img/100101001.jpg'),num:'2',selected: false},
// 					{id:'100101002',title:'红牛',price:'8.99',goods_img:require('../../../../static/goods_img/100101002.jpg'),num:'3',selected: false}
// 				],
				total:0,//默认总价
				cart_data:[],//购物车数据
				
			};
		},
		methods:{
			
			// 总价方法
			totals(){
				var prices=0;
				var cart_data=this.cart_data;
				for(var i=0;i<cart_data.length;i++){
					if(typeof(cart_data[i].selected)!='boolean'?Boolean(cart_data[i].selected):cart_data[i].selected){
						prices+=Number((cart_data[i].num*cart_data[i].price));
					}
				}
				this.total=prices.toFixed(2);
			},
			
			addnum(index){//加数量
				var cart_data=this.cart_data;
				var num=Number(cart_data[index].num);
				if(num<10){
					num+=1;
					cart_data[index].num=num;
					//修改数据
					let cart_datas=getLocalStorage('cart',true);
					cart_datas[index].num=(Number(cart_datas[index].num))+1;
					setLocalStorage("cart",cart_datas)
				}
				this.totals()
			},
			rednum(index){//减数量
				var cart_data=this.cart_data;
				var num=Number(cart_data[index].num);
				if(num>1){
					num-=1;
					cart_data[index].num=num;
					
					//修改数据
					let cart_datas=getLocalStorage('cart',true);
					cart_datas[index].num=(Number(cart_datas[index].num))-1;
					setLocalStorage("cart",cart_datas)
				}else{
					var res=confirm("您确定要删除该商品吗？");
					if(res){
						this.del_cart_data(index)
					}else{
						cart_data[index].num=1;
					}
				}
				this.totals()
			},
			radios(index){//选中
				var cart_data=this.cart_data;
				cart_data[index].selected=!cart_data[index].selected;
				this.totals()
			},
			del_cart_data(id){//定义删除功能函数
				document.querySelectorAll('.cart_box>ul>li')[id].remove();
				let cart_data=getLocalStorage('cart',true);
				cart_data.splice(id,1);
				setLocalStorage("cart",cart_data)
				// alert("删除成功！")
			},
			del(index){//删除
				var res=confirm("您确定要删除该商品吗？");
				if(res){
					this.del_cart_data(index)
				}
			},
			togoods(id){//进入详情页
				this.$router.push({path:`/goods/${id}`,params:{id:id}})
			},
			topy(){
				alert("付款成功！")
			}
		},
		
		created(){
			//初始化加载
			this.min_height=document.documentElement.clientHeight;//初始化页面背景色
			
			var cart_data_init=[]
			var cart_init_data=getLocalStorage("cart",true);//1.加载LocalStorage数据
			this.cart_data=[];//清空
			for(let i=0;i<cart_init_data.length;i++){
				let cart_data_id=cart_init_data[i].id;//获取id进行发送
				this.$axios.get('/test/linpeng/goods_data/goods',{params:{id:cart_data_id}})//发送请求
				.then((data)=>{
					var cart_datas=data.data[0];
					cart_datas.num=cart_init_data[i].num;//将num加入数组中
					cart_datas.selected=cart_init_data[i].selected;
					this.cart_data.push(cart_datas)//将循环的数组整合
					// console.log(cart_data);
				})
				.catch((err)=>{
					console.log(err)
				})	
			}
		},
		updated(){
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	@import '../../../styles/main.less';
	.cart{
		background: #f8f8f8;
		width: 100%;
		.address{//地址
			.height(150);
			width:100%;
			background:#fff;
			.margin-top(30);
			.margin-bottom(30);
			.padding(44,44,44,44);
			.font-size(35);
			.line-height(62);
			color:@color2;
			i{
				display: inline-block;
				float: right;
				color:@color3;
			}
		}
		.kong{//空页
			p{
				text-align: center;
				.margin-top(500);
				.font-size(50);
				color:@color2;
			}
		}
		.cart_box{//购物车列表
			background: #fff;
			.cart_box_header{
				.height(105);
				.width(1080);
				.border-bottom(3,solid,#f1f1f1);
				.padding-left(45) ;
				.line-height(105);
				.font-size(32);
				color:@color3;
			}
			ul{
				li{
					.height(255);
					.width(1080);
					.border-bottom(3,solid,#f1f1f1);
					.font-size(35) ;
					.left{
						display: inline-block;
						.line-height(255) ;
						float: left;
						i{
							display: inline-block;
							.margin-left(50);
							color: #c9c9c9;
							float: left;
						}
						.i_check{
							color: @color1;
						}
						.img{
							.width(180) ;
							.height(180) ;
							float: left;
							display: inline-block;
							.margin-left(50);
							.margin-right(50);
							img{
								.width(180) ;
								.height(180) ;
							}
						}
					}
					
					.right{
						display: inline-block;
						float: left;
						// background:yellowgreen;
						.height(255);
						.width(700);
						.padding-right(50);
						.title{
							display: inline-block;
							color: @color2;
							// background :green;
							float: left;
							.height(50);
							.width(500);
							.margin-top(50);
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
						>a{
							float: left;
							display: inline-block;
							.width(100);
							.height(50);
							// background:yellowgreen;
							.margin-top(50);
							.margin-left(50);
							text-align: center;
							color: #ff4400;
						}
						.price{
							float: left;
							display: inline-block;
							.margin-top(60);
							color: #ff4400;
						}
						.num_tool{
							
							display: inline-block;
							float: right;
							.height(50);
							.line-height(50);
							.font-size(35);
							.margin-top(60);
							span{
								display: inline-block;
								.padding(10,10,10,10);
								.width(60);
								text-align: center;
							}
							i{
								color: #ff4400;
							}
						}
					}
					
					
				}
			}
			.cart_box_footer{
				.height(143);
				.width(1080);
				.line-height(143);
				.total{
					.height(143);
					display: inline-block;
					.font-size(40);
					color:#ff4400;
					float: left;
					.margin-left(100);
				}
				.topy{
					display: inline-block;
					text-align: center;
					.font-size(40);
					.width(288) ;
					.height(143);
					float: right;
					background: @color3;
					color: @color2;
				}
				.py{
					background: @bg_color;
				}
			}
		}
	}
	
	
</style>
