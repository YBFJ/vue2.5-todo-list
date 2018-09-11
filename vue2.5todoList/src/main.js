// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//main.js入口文件
import TodoList from './TodoList'
//在当前目录下引入TodoList组件，也就是整合的组件

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { TodoList },
  //注册了一个局部组件，模板就是app.vue，其实是TodoList : TodoList，因为前后一样的所以直接写进去就好啦
  //其实是App: App 引入外部组件名字叫App
  template: '<TodoList/>', //展示的就是App组件的内容
})
