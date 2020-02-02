<template>
	<div>
		<label><input type="text" v-model="foo"></label>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				foo: 1
			}
		},
		
		watch: {
			foo: function (newVal, oldVal) {
				console.log(newVal, oldVal);
			}
		}
	}
	
	// var vm = new Vue({
	// 	el: '#demo',
	// 	data: {
	// 		firstName: 'Foo',
	// 		lastName: 'Bar'
	// 	},
	// 	computed: {
	// 		fullName: function () {
	// 			return this.firstName + ' ' + this.lastName
	// 		}
	// 	}
	// })
	// vm.fullName  // Foo Bar computed内部的函数调用的时候不需要加()
</script>
<style>

</style>
