<template><!--单文件组件，.vue会整合所有的文件-->
  <div >
    <div>
    <input class="item" v-model="inputValue" /><!--双向绑定-->
    <button @click="handleSubmit">提交</button>
    <ul>
      <todo-item
      v-for="(item, index) of list"
      :key="index"
      :content="item"
      :index="index"
      @deleteOne="handleDelet"
      ></todo-item>
       <!-- 父组件向子组件TodoItem.vue传值是通过属性传值 -->
    </ul>
    </div><!--所有的div都得在一个div里面-->
  </div>
</template>

<script>
import TodoItem from './components/TodoItem'
// 引入小组件

export default {
	//这是个对象实例
	components: {
		'todo-item': TodoItem,
		//对局部组件进行声明注册，想用todo-item这个标签去使用这个小组件
	},
	data() {
		//现在的data变成一个函数了
		//返回的值才是data
		return {
			inputValue: '',
			list: [1],
		}
	},
	methods: {
		handleSubmit() {
			//: function()在ES6里面可以简化成()
			this.list.push(this.inputValue),
				//this.list是this.$data.list的缩写
				(this.inputValue = '')
		},
		handleDelet(index) {
			this.list.splice(index, 1)
		},
	},
}
</script>

<style>
</style>
