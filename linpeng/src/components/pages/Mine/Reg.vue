<template>
	<div class="res">
		<Header :title="title"></Header>
		<!-- <div class="box">
			    <label>用户名：</label><input  id="userName_win" v-model="username"><font color=red>*</font><br/>
    			<label>密&nbsp;&nbsp;&nbsp;码：</label><input id="pass_win" type="password" v-model="pass"><font color=red>*</font><br/>
				<button class="dl" @click="zc()">{{title}}</button>
		</div> -->
		
		
		<div class="box">
			<!--注册-->
			    <input  id="userName_win" v-model="username" placeholder="请输入用户名"><br/>
    			<input id="pass_win" type="password" v-model="pass" placeholder="请输入密码"><br/>
				<button class="dl" @click="zc()">注册</button><br>
				<a class="qx" @click="gologin()">已有账号，去登录 ></a>
		</div>
		
		
	</div>
</template>

<script>
	import {setLocalStorage,getLocalStorage}  from '../../../../static/js/localStorage.js'
	import Header from '../../commons/Header';//引入组件
	import Toolbar from '../../commons/Toolbar.vue';
	export default {
		name:'Res',
		components:{
			Header,Toolbar
		},
		data() {
			return {
				title:'注册',//声明header标
				toolbar_check:'2',
				username:'',
				pass:''
			};
		},
		methods:{
			zc(){
				if(this.username!=''&&this.pass!=''){
					var User=this.username;
					var Pass=this.pass
					var ing=User+','+Pass;
					// console.log(this.username)
//					console.log(ing)
					setLocalStorage('ing',ing)
					this.$router.replace('/my/login')
				}else{
					alert('请按要求填信息')
				}
				
			},
			gologin(){
				this.$router.replace('/my/login')
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	@import '../../../styles/main.less';
	.res{
		width:100%;
		.box{
			margin:auto;
			margin-top:100px;
			width:100%;
			text-align:center;
			.font-size(48);
			input{
				width:7rem;
				.height(100);
				border-bottom:1px solid #ccc;
				.margin-top(60);
				.font-size(40)
			}
			.dl{
				margin-top:20px;
				background: green;
				.width(780);
				.height(100);
				.margin-top(150);
				.font-size(48);
				.border-radius(50);
				color:#fff;
			}
			.qx{
				float:right;
				display:inline-block;
				.margin-right(150);
				.font-size(40);
				color:@color2;
				.margin-top(60);
			}
		}
	}
	
</style>
