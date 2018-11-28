// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 清除样式
import './styles/base.css';

// 引入模块
import Vue from 'vue'
import App from './App'

import router from './router'//引入路由
import Axios from "axios"
import  store from './store/index.js'

//回顶
import ToTop from '../ToTop';
Vue.use(ToTop)// 调用模块 里的 install 方法  并且将 Vue 实例进行传递

Vue.prototype.$axios=Axios	//挂载axios 便于组件使用

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },//挂载app组件
  template: '<App/>'//用app元素来替代主页的div元素
})
