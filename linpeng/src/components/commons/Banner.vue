<template>
	<div class="banner">
		<div class="swiper-container">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide" v-for="(item,index) in img"><img :src="'../../../static/'+item"/></div>
	        <!--<div class="swiper-slide">2</div>
	        <div class="swiper-slide">3</div>-->
	        <!--../../assets/banner_img/banner_1_1.png-->
	    </div>
	    <!-- 如果需要分页器 -->
	    <!--<div class="swiper-pagination"></div>-->
	    <!-- 如果需要导航按钮 -->
	    <!--<div class="swiper-button-prev"></div>
	    <div class="swiper-button-next"></div>-->
	    
	    <!-- 如果需要滚动条 -->
	    <!--<div class="swiper-scrollbar"></div>-->
	</div>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import Vue from 'vue';
	import '../../../node_modules/swiper/dist/js/swiper.min.js'
	export default {
		data() {
			return {
				img:['banner_img/banner_1_1.png',
				'banner_img/banner_1_2.png',
				'banner_img/banner_1_3.png']
			};
		},
		methods:{
			getBanner(){
				Vue.nextTick(()=>{
					var mySwiper = new Swiper ('.swiper-container', {
				    loop: true, // 循环模式选项
				     autoplay:true,//等同于以下设置
					  autoplay: {
					    delay: 3000,
					    stopOnLastSlide: false,
					    disableOnInteraction: true,
					    },
				   	// 如果需要分页器
//				    pagination: {
//				      el: '.swiper-pagination',
//				    },
				    
				    // 如果需要前进后退按钮
//				    navigation: {
//				      nextEl: '.swiper-button-next',
//				      prevEl: '.swiper-button-prev',
//				    },
				    
//				     如果需要滚动条
//				    scrollbar: {
//				      el: '.swiper-scrollbar',
//				    },
				  })
				})
			}
		},
		created(){
			this.getBanner()
		},
		destroyed(){
            delete this.mySwiper
		},
		props:[],
		
	}
</script>

<style lang="less" scoped="scoped">
 	@import '../../../node_modules/swiper/dist/css/swiper.css';;
	@import '../../styles/main.less';
	/*.swiper-container[data-v-8f2f183a]{
		width:10rem;
	}*/
	.banner{
		.swiper-slide{
			.height(555);
			.width(1080);
			img{
				.height(555);
				.width(1080);
			}
		}
	}
	
	
	
</style>

<!--改地址了mine图片地址，banner图片地址  -->