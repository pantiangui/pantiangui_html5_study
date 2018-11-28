<template>
	<div class="login">
		<Header :title="title"></Header>
		<div class="box">
			<!--登录-->
			    <input  id="userName_win" v-model="username" placeholder="请输入用户名"><br/>
    			<input id="pass_win" type="password" v-model="pass" placeholder="请输入密码"><br/>
				<button class="dl" @click="getData()">登录</button><br>
				<a class="qx" @click="goreg()">还没有账号？去注册 ></a>
		</div>
	</div>
</template>

<script>
	import {setLocalStorage,getLocalStorage}  from '../../../../static/js/localStorage.js'
	import Header from '../../commons/Header';//引入组件
	import Toolbar from '../../commons/Toolbar.vue';
	export default {
		name:'Login',
		components:{
			Header,Toolbar
		},
		data() {
			return {
				title:'登录',//声明header标
				toolbar_check:'2',
				username:'',
				pass:''
			};
		},
		methods:{
			getData(){
				var ing=getLocalStorage('ing')
				if(ing){
					var User=ing.split(",")[0]
					var Pass=ing.split(",")[1]
					var Login=User+','+Pass;
					var zt=1;
					if(User==this.username&&Pass==this.pass){
						// console.log('对的')
						setLocalStorage('login',1)
						var login=getLocalStorage('login')
						this.$store.commit('changeLogin',1)
//						console.log(login)
						this.$router.replace('/my/mine')
					}else {
						if(this.username==''&&this.pass==''){
							alert('请输入用户名和密码')
						}else if(this.username==''){
								alert('请输入用户名')
						}else if(this.pass==''){
								alert('请输入密码')
						}else{
							alert('用户名或密码不对')
						}
					}
				}else{
					if(this.username==''&&this.pass==''){
							alert('请输入用户名和密码')
						}else if(this.username==''){
								alert('请输入用户名')
						}else if(this.pass==''){
								alert('请输入密码')
						}else{
							alert('用户名或密码不对')
						}
				}
				
			},
			goreg(){
				this.$router.replace('/my/reg')
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	@import '../../../styles/main.less';
	.login{
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
				background: @bg_color;
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
