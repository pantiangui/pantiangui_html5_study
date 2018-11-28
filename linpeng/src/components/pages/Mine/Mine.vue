<template>
	<div class="mine">
		 <!--<router-view></router-view>-->
		<Header :title="title" ></Header>
		
		<div  class="big">
<!--			我的-->
			<div class="top">
				<!--老黄-->
				<!-- <input type="button" name="" id="esc" value="退出登录" @click="esc()"/> -->
				<dl>
					<dt class="user_icon" v-if="iflogin"><img src="../../../../img/2.png"/></dt>
					<dt class="cue" v-if="!iflogin" @click="tologin">您还未登录，请前往登录！</dt>
					<a>
					 	<dd>{{name}}</dd>
					</a>
					<a class="esc" @click="esc()"  v-if="iflogin">退出登录</a>
				</dl>
			</div>
			<div class="dd">
				<div class="ddl"><span >全部订单</span></div>
				<div class="ddr"><span >查看全部></span></div>
			</div>
			<div class="dai">
				<ul class="daiul">
					<li><i class="iconfont icon-daifukuan"></i><p>代付款</p></li>
					<li><i class="iconfont icon-daifahuo"></i><p>代发货</p></li>
					<li><i class="iconfont icon-daishouhuo"></i><p>待收货</p></li>
					<li><i class="icon iconfont icon-dingdanyiwancheng"></i><p>已完成</p></li>
				</ul>
			</div>
			<div class="shou">
				<div class="stop"><i class="icon iconfont icon-shouhuodizhi"></i><span>收货地址</span></div>
				<div class="sbottom"><i class="icon iconfont icon-kefu"></i><span>客服/反馈</span></div>
			</div>
			<div class="bottom">
				
			</div>
		</div>
		<Toolbar :toolbar_check="toolbar_check"></Toolbar>
	</div>
</template>

<script>
	import {setLocalStorage,getLocalStorage}  from '../../../../static/js/localStorage.js'
	import Header from '../../commons/Header';//引入组件
	import Toolbar from '../../commons/Toolbar.vue';
	
	export default {
		name:'Mine',
		components:{
			Header,Toolbar
		},
		data() {
			return {
				title:'我的',//声明header标
				toolbar_check:'3',
				name:'',
				iflogin:false,
				
			};
		},
		created(){
			var login=getLocalStorage('login')
			if(login==1){
				var str=getLocalStorage('ing')
				this.name=str.split(",")[0]
				this.iflogin=true;
			}
			
		},
		methods:{
			esc(){
				let res=confirm("您确定要退出登录吗？")
				if(res){
					this.$store.commit('changeLogin',0)
					setLocalStorage('login',0)
					var aaa=getLocalStorage('login')
					this.$router.replace('/my/login')
				}
			},
			tologin(){
				this.$router.replace('/my/login')
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	@import '../../../styles/main.less';
	.big{
		background:#eee;
		height:100%;
		/*.height(1870)*/
		.top{
			width:100%;
			.height(540);
			background:#ffd600;
			dl{
				margin: auto;
				display: flex;
				flex-direction: column;
				align-items: center;
				.user_icon{
					.margin-top(100);
				}
				.cue{
					.margin-top(200);
					.font-size(40);
					color: orangered;
					text-decoration: underline;
				}
				dd{
					.font-size(50);
					color:#FFF;
				}
			}
			#esc{
				border: 1px solid #ddd;
				.width(200);
				.height(60);
				position:absolute;
				.right(10);
				.top(50);
				z-index:2;
				background:#f8f8f8;
			}
			.esc{
				.font-size(35);
				.width(200);
				.height(65);
				display: inline-block;
				.border(1,solid,#ccc);
				color:@color2;
				text-align: center;
				.line-height(60);
				.margin-top(20);
			}
			
			
		}
		.dd{
			width: 100%;
			.height(135);
			background:#fff;
			.margin-top(29);
			display:flex;
			.font-size(35);
			.ddl{
				flex:1;
				display:flex;
				align-items:center;
				span{
					color: @color2;
					.margin-left(35)
				}
			}
			.ddr{
				flex:1;
				
				display:flex;
				align-items:center;
				justify-content:flex-end;
				span{
					.margin-right(35);
					color:#aaa;
				}
			}
		}
		.dai{
			width: 100%;
			.height(220);
			/*background:green;*/
			border-top:1px solid #e6e6e6;
			.daiul{
				width: 100%;
				height: 100%;
				background: #fff;
				display: flex;
				li{
					flex:1;
					/*text-align: center;*/
					/*.line-height(220);*/
					display:flex;
					/*align-content:center;*/
					justify-content:center;
					flex-direction:column;
					text-align:center;
					i{
						display: inline-block;
						.width(80);
						.height(80);
						.font-size(80);
						align-self:center;
						color: @color1;
					}
					p{
						.margin-top(20);
						.font-size(35);
						color: @color2;
					}
				}
			}
		}
		.shou{
			margin-top:10px;
			.padding-left(40);
			background:#fff;
			>div{
				border-bottom:1px solid #ddd;
				position: relative;
				.height(150);
				width:100%;
				>i{
					display: inline-block;
					.width(56);
					.height(56);
					.font-size(56);
					position: absolute;
					left: 0;
					.top(45);
					color: @color3;
				}
				>span{
					color: @color2;
					.font-size(35);
					position: absolute;
					.left(90);
					.top(50);
				}
			}
		}
	}
</style>
