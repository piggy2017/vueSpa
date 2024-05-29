// 该文件是整个项目的入口文件

// 引入Vue
import Vue from 'vue'
// 引入App组件,它是所有组件的父组件
import App from './App.vue'

// 引入vuex
// import Vuex from 'vuex'

import store from './store/index.js'

import plugins from './plugins.js'
Vue.use(plugins);

// Vue.use(Vuex);

// 关闭vue的生产提示
Vue.config.productionTip = false

// 创建Vue的实例对象 --- vm
new Vue({
  // el:'#app',
  // 将App组件放入到容器中
  render: h => h(App),   
  store,  // 将store挂载到vm实例上
  beforeCreate() {
    Vue.prototype.$bus = this;  // 注册全局事件总线
  }
}).$mount('#app')
