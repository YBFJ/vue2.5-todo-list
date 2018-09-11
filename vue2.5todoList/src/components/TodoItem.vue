<template>
  <li class="item" @click="handleDelete">{{content}}</li>
</template>

<script>
export default {
	//必须得记住子组件和父组件的结构是一样的，必须得建立对象实例
	//必须得建立export default{}千万别忘！！！在子组件
	props: ['content', 'index'],
	// 表示可以从子组件接受的属性值
	methods: {
		handleDelete() {
			this.$emit('deleteOne', this.index); //父子组件通讯
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* scoped制定样式作用域，对组件外面的不起作用，此处为子组件的样式，并不会影响父组件的颜色 */
.item {
	color: blue;
}
</style>
