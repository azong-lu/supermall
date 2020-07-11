import Toast from "./Toast";

const myToast = {}

myToast.install = function (Vue) {
//    创建组件构造器
  const constructor = Vue.extend(Toast);

//  实例化对象
  const  toast = new constructor

//将组件对象手动挂载到某个元素
  toast.$mount(document.createElement('div'))

//  将元素挂载到body上
  document.body.appendChild(toast.$el)

//  挂载到原型上
  Vue.prototype.$toast = toast

}

export default myToast
