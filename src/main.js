import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import Toast from "components/common/toast/index";
import lazyload from 'vue-lazyload'

Vue.use(Toast)
//使用懒加载
Vue.use(lazyload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
//事件总线
Vue.prototype.$bus = new Vue()
