import BackTop from './components/BackTog';
let  scrollEvent=function(distance,vnode){
  
	let bodyDistance=document.documentElement.scrollTop// 获取当前位置
	   //根据距离修改显示隐藏
  	if (bodyDistance>=distance) {
  		if (vnode.context.isShow==false) {
  			vnode.context.isShow=true
  		}
  		
  	}else{
  		if (vnode.context.isShow) {
  			vnode.context.isShow=false
  		}
  		
  	}
}

export default{
	install(Vue){
		Vue.component('back-top',BackTop)
		Vue.directive('scroll-hide',{
        bind(el,binding,vnode){
           let distance=el.getAttribute('scroll-hide-distance');//设定的fa值

          window.addEventListener('scroll',function(){
            scrollEvent(distance,vnode)
          })
         
        },
        unbind(el,binding,vnode){
          let distance=el.getAttribute('scroll-hide-distance');//设定的fa值
        	   window.removeEventListener('scroll',function(){scrollEvent(distance,vnode)})

        }
		})
		//创建自定义指令
    // 实现回到顶部
    Vue.directive('go-top',{
      bind(el,binding,vnode){
          //监听元素是否被点击
          let eventType=binding.arg
           // let eventType=binding.modifiers//第一种方式通过arg 来获取
          // let eventType=binding.expression
          // console.log(eventType)
          el.addEventListener(eventType,()=>{
            document.documentElement.scrollTop=0;  
          })
         // 
      }
    })

	}
}