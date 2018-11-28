<template>
	<div class='back-top' 
	v-scroll-hide='isShow'  
    scroll-hide-distance="300"
	
    v-go-top:click
	>
	<!-- v-go-top:click='12313'   -->
<!-- 
v-backtop-hide 通过一个自定义指令来监听页面滚动事件

 -->     
 		<transition
		   enter-active-class='fadeIn animated'
		    leave-active-class='fadeOut animated'
 		>
	 	 <div class='contain-box' v-show='isShow'>
	 	 	^
	 	 </div>
	 	</transition>
	</div>
</template>
<script>
export default{
	name:'back-top',
	data(){
		return {
			isShow:false
		}
	}
}
</script>
<style lang='less' scoped>
@import url('../styles/animate.css');
.back-top{
	   position: fixed;
		 right: 20px;
		 bottom: 150px;
	.contain-box{
		font-size:12px;
		width: 40px;
		height: 40px;
		font-size:30px;
		border-radius: 50%;
		background: #999;
		color:#fff;
		display: flex;
		justify-content: center;
		align-items:center;
		text-align:center;
		line-hight:40px;
	}
	&[size='small']{
		.contain-box{
		width: 40px;
		height: 40px;
		font-size:12px;
	    }
	}
	&[size='big']{
		.contain-box{
		width: 80px;
		height: 80px;
		font-size:12px;
	    }
	}
}	
</style>