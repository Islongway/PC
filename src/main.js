/*
 * @Description:
 * @Autor: islongwayzzm
 * @Date: 2020-12-28 10:06:23
 * @LastEditors: islongwayzzm
 * @LastEditTime: 2020-12-28 16:15:20
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Global from '@/utils/global.js'
// import '@/assets/icons/svg/bigscreen.svg'

Vue.use(Global) // 注册全局组件
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
