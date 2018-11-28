import Vue from 'vue'// vue实例
import Vuex from 'vuex' //vue router
import {setLocalStorage,getLocalStorage}  from '../../static/js/localStorage.js'

Vue.use(Vuex)

export default new Vuex.Store({
state:{
//		login:true,
//  login:window.localStorage.getItem('login')?window.localStorage.getItem('login'):false,
    login:getLocalStorage('login')?getLocalStorage('login'):0,
//  login:0,
    sliderShow:false
},
mutations:{
    //更改state 里的数据的方法
    changeLogin(state,val1){
      console.log(val1)
      state.login=val1
    },
}
})

