<template>
	<div class="classify">
		<Header :title="title"></Header>
		<div class="box">
			<!--分类-->
			<!--<div class="left">
				<ul class="nav0" v-for="(item,index) in nav0">  
					<li @click="selItem0(index)" :class="sel0===index?'h0':''"  v-for="(item,key) in item" :key="index">{{key}}</li>
				</ul>
			</div>
			<div class="right">
				<ul class="nav">
					<li @click="selItem(item)" :class="sel===item?'hl':''"  v-for="(item,index) in nav" :key="index">{{item}}</li>	
				</ul>
				<ul class="nav2"   v-for="(item,index) in nav0[sel0]" >
					<li  @click="selItem2(index)" :class="sel2===index?'h2':''"  v-for="(value,index) in item" :key="index">{{value}}</li>	
				</ul>-->
				
				
				<div class="left">
				<ul class="nav0" >  
					<li @click="selItem0(item,index)"  :class="sel0===index?'h0':''"   v-for="(item,index) in splist"  >{{item}}</li>
				</ul>
			</div>
			<div class="right">
				<ul class="nav">
					<li @click="selItem(item)"  :class="sel===item?'hl':''"  v-for="(item,index) in nav" :key="index">{{item}}</li>	
				</ul>
				<ul class="nav2">
					<li  @click="selItem2(value,index)" :class="sel2===index?'h2':''"  v-for="(value,index) in nav3" :key="index">{{value}}</li>	
				</ul>
				<div class="flist">
					<ul v-infinite-scroll="loadMore"
  					infinite-scroll-disabled="loading"
 					 infinite-scroll-distance="0">
						<li v-for="(item,index) in sp" :class="item.id">
							<a @click="togoods(item.id)"><img :src="'../../../../static/'+item.img"/></a>
							
							<!--<img src="../../../../static/goods_img/100101002.jpg"/>-->
							<div class="" @click="togoods(item.id)">
								<p id="name">{{item.title}}</p><br/>
								<span class="price">￥:{{item.price}}</span>
								
							</div>
							<i id="jia" class="iconfont icon-jiahao" @click="tocart(item.id)"></i>
						</li>
					</ul>
				</div>
			</div>
			<back-top size=''></back-top>
		</div>
		<Toolbar :toolbar_check="toolbar_check"></Toolbar>
	</div>
</template>

<script>
	import {setLocalStorage,getLocalStorage}  from '../../../../static/js/localStorage.js'
	import Vue from 'vue';
	import { Toast,InfiniteScroll } from 'mint-ui';
	import Header from '../../commons/Header';//引入组件
	import Toolbar from '../../commons/Toolbar.vue';
	import '../../../../node_modules/mint-ui/lib/toast/style.css';
	Vue.use(InfiniteScroll);
	export default {
		name:'Classify',
		components:{
			Header,Toolbar
		},
		data() {
			return {
				title:'分类',//声明header标
				toolbar_check:'1',
				nav0:[{'热销榜':['全部分类','进口','国产']},{'新鲜水果':['全部分类','进口水果','国产水果']},{'饮料':['全部分类','引用水','果汁饮料']},{'新鲜蔬菜':['全部分类','绿色','有机']},{'休闲零食':['全部分类','薯片','面包']},{'牛奶面包':['全部分类','牛奶','面包']},{'方便速食':['全部分类','方便','速食']}],
				splist:['热销榜'],
				sel0:0,
				nav:['综合排序','按价格','按销量'],
				nav3:[],
            	sel:'综合排序',
            	sel2:0,
            	sp:[],
            	page:0,
            	count:7,
            	class:0,
            	class2:'全部分类'
			};
		},
		methods:{
			loadMore(){
						this.$axios.post('/test/linpeng/Classify/class',{params:{
						class:this.class,
						page:this.page,
						count:this.count,
	            		
					}})
					.then((data)=>{
// 						Toast({
// 						  message: 'Loding',
// 						  position: 'center',
// 						  duration: 2000
// 						});
						this.count++
						this.sp=data.data.cut
					})
					.catch((err)=>{
						console.log(err)
				})
			},
			selItem0(item,index){    //侧边栏排序
				this.sel0=index;
				this.sel2=0;
				this.getData(item);
			},
			selItem(item){   //按价格  销量  综合
				this.sel=item;
				this.getData0(item);
			},
			selItem2(value,index){         //右下排序
				this.sel2=index;
				this.getData2(value);
			},
			getData0(item){
				if(item=='按价格'){
					function sortprice(a,b){
				   		return a.price-b.price
					}
					//利用js中的sort方法
					this.sp.sort(sortprice);
				}
				else if(item=='按销量'){
					function sortprice(a,b){
				   		return b.price-a.price
					}
					//利用js中的sort方法
					this.sp.sort(sortprice);
				}else if(item=='综合排序'){
					this.page=0
            		this.count=7
            		
					this.$axios.post('/test/linpeng/Classify/class',{params:{
					class:this.class,
					page:this.page,
	            	count:this.count,
	            	class2:this.class2
					
				}})
				.then((data)=>{
					 if(data.data.cut){
						this.sp=data.data.cut
					}else{
						this.sp=data.data
					}
				})
				.catch((err)=>{
					console.log(err)
			})
				}
				
			},
			getData(item){
				this.sel='综合排序'
				this.class=item
				this.page=0
            	this.count=7
            	// console.log(this.class2)
				this.$axios.post('/test/linpeng/Classify/class',{params:{
					class:this.class,
					page:this.page,
	            	count:this.count,
				}})
				.then((data)=>{
					this.sp=data.data.cut
					
					this.nav3=['全部分类']
					for(let i=0;i<data.data.newArr.length;i++){
						this.nav3.push(data.data.newArr[i])
					}
				})
				.catch((err)=>{
					console.log(err)
			})
			},
			getData2(item){
				this.sel='综合排序'
				// console.log(item)
				this.class2=item
				this.page=0
            	this.count=7
				this.$axios.post('/test/linpeng/Classify/class',{params:{
					page:this.page,
	            	count:this.count,
					class:this.class,
					class2:item
				}})
				.then((data)=>{
					if(data.data.newArr){
						this.sp=data.data.cut
					}else{
						this.sp=data.data
					}
				})
				.catch((err)=>{
					console.log(err)
			})
			},
			
			
			togoods(id){//进入详情页
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
			this.page=0
				this.count=7
			this.$axios.post('/test/linpeng/Classify/class',{params:{
					class:this.class,
					page:this.page,
					count:this.count,
				}})
				.then((data)=>{
					let length = data.data.newArr.length
					for(var i=0;i<length;i++){
						this.splist.push(data.data.newArr[i])
					}
					this.nav3.push('全部分类')
					
					this.sp=data.data.cut
				})
				.catch((err)=>{
					console.log(err)
			})
		}
	}
</script>

<style lang="less" scoped="scoped">
	@import '../../../styles/main.less';
	.classify{
		.box{
			
			/*z-index: -5;*/
			display: flex;
			border-top:1px solid #b1b1b1;
			.left{
				flex: 3;
				.width(270);
				height: 100%;
				margin-right:5px;
				position:fixed;
				.nav0{
					border-bottom:1px solid #b1b1b1;
					
					.li0{
						/*border-left: 3px solid #ffb925;*/
					}
					li{
						background:#f4f4f4;
						.font-size(35);
						.height(137);
						.line-height(137);
						text-align:center;
						border-top:1px solid #b1b1b1;
						.margin-top(-1);
						color:#333
					}
					.h0{
						border-left: 3px solid #ffb925;
						background: white;
					}
				}
			}
			.right{
				flex: 7;
				/*.width(780);*/
				.margin-left(280);
				position: relative;
			.nav{
				background:#fff;
					.width(780);
					/*width: 100%;*/
					.height(138);
					display: flex;
					align-items:center;
					border-bottom:1px solid #b1b1b1;
					/*position: fixed;*/
					li{
						.height(138);
						flex: 1;
						.font-size(35);
						text-align:center;
						.line-height(138);
						color:#333
						
					}
					.hl{
						color:#ffb925;
					}
				}
				.nav2{
					background:#fff;
					/*position: fixed;*/
					/*.top(280)*/
					/*width: 100%;*/;
					.width(780);
					.height(138);
					display: flex;
					align-items:center;
					li{
						.height(80);
						flex: 1;
						.font-size(35);
						border:1px solid #e4e4e4;
						background: f4f4f4;
						text-align:center;
						.line-height(80);
						.margin-right(10);
						.margin-left(10);
						color:#333
					}
					.h2{
						color:#ffb925;
						border:1px solid #ffb925;
					}
				}
				.flist{
					/*position: relative;
					.top(266);*/
					
					/*background: red;*/
					ul{
						li{
							display: flex;
							.height(260);
							border-bottom: 1px solid #e1e1e1;
							>*{
								.margin-top(45);
							}
							img{
								flex: 3;
								.width(214);
								.height(169);
							}
							div{
								flex: 7;
								.line-height(40);
								position: relative;
								.margin-left(40);
								span{
									.font-size(35);
									color: #333;
									display: inline-block;
								}
								#name{
									.font-size(35);
									color: #333;
									display: inline-block;
									.width(400);
									 text-overflow:ellipsis;
									 white-space:nowrap;
									 overflow:hidden;
								}
								.price{
									color: #ff4e0c;
								}
							}
							/*改的地方*/
							#jia{
								.width(68);
								.height(68);
								.font-size(70);
								display: inline-block;
								color:  #ff4e0c;
								.margin-left(250);
								.margin-top(150)
							}
							i{
								position: absolute;
								.right(100)
							}
						}
					}
				}
			}
		}
	}
</style>
