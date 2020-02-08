<template>
	<div>
		<ul>
			<li v-for="(item, index) in list" :key="item.name">
				<p>{{item.name}}</p>
				<tree-menu :list="item.cList" />
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "treeMenu",
		components: {
			treeMenu
		},
		data: function () {
			return {
				list: [
					{
						name: 'web全栈工程师',
						cList: [
							{
								name: 'vue', cList: [
									{name: 'template'}
								]
							},
							{name: 'react',},
						]
					},
					{name: 'web高级工程师',},
					{
						name: 'web初级工程师',
						cList: [
							{name: 'html'},
							{name: 'css'},
							{name: 'javascript'},
						]
					},
				]
			}
		}
	}
</script>

<style scoped>

</style>
