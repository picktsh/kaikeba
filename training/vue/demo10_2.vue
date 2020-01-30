<!--keep-live缓存页面-->
<!--<template>-->
<!--	<div id="app">-->
<!--		<keep-alive>-->
<!--			<router-view />-->
<!--		</keep-alive>-->
<!--	</div>-->
<!--</template>-->

<!--使用v-show复用DOM-->
<!--<template>-->
<!--	<div class="cell">-->
<!--		&lt;!&ndash;这种情况用v-show复用DOM&ndash;&gt;-->
<!--		<div v-show="value" class="on">-->
<!--			<Heavy :n="10000"/>-->
<!--		</div>-->
<!--		<section v-show="!value" class="off">-->
<!--			<Heavy :n="10000"/>-->
<!--		</section>-->
<!--	</div>-->
<!--</template>-->

<!--v-for遍历避免同时使用v-if-->
<!--<template>-->
<!--	<ul>-->
<!--		<li v-for="user in activeUsers" :key="user.id">{{user.name}}</li>-->
<!--	</ul>-->
<!--</template>-->

<!--如果是大数据长列表,可采用虚拟滚动,只渲染少部分区域的内容-->
<!--<recycle-scroller class="items" :items="items" :item-size="24">-->
<!--	<template>-->
<!--		<FetchItemView :item="item" @vote="voteItem"/>-->
<!--	</template>-->
<!--</recycle-scroller>-->

<!--图片懒加载-->
<!--<img v-lazy="/static/img/1.png">-->

<!--无状态的组件标记为函数式组件-->
<!--<template functional>-->
<!--	<div>1111</div>-->
<!--</template>-->

<!--子组件分割-->
<!--<template>-->
<!--	<div>-->
<!--		<childComp/>-->
<!--	</div>-->
<!--</template>-->

<!--变量本地化-->
<!--<template>-->
<!--	<div :style="{opacity: start / 3000}">{{result}}</div>-->
<!--</template>-->
<script>
	// 路由懒加载
	// const router = new VueRouter({
	// 	routes: [
	// 		{path: '/foo', component: () => import('./Foo.vue')}
	// 	]
	// })
	
	// v-for遍历避免同时使用v-if
	// export default {
	// 	computed: {
	// 		activeUsers: function () {
	// 			return this.user.filter(user => user.isActive)
	// 		}
	// 	}
	// }
	
	// 如果列表是纯粹的数据展示,不会有任何变化,就不需要做响应化
	// export default {
	// 	data: () => {
	// 		return {
	// 			users: []
	// 		}
	// 	},
	// 	async created() {
	// 		const users = await axios.get('/api.users')
	// 		this.users = Object.freeze(users)
	// 	}
	// }
	
	// 事件的销毁
	// export default {
	// 	created() {
	// 		this.timer = setInterval(this.refresh, 2000)
	// 	},
	// 	beforeDestroy() {
	// 		clearInterval(this.timer)
	// 	}
	// }
	
	// 像element-ui这样的第三方组件库可以按需引入避免体积太大
	// import Vue from 'vue'
	// import {Button, Select} from 'element-ui'
	//
	// Vue.use(Button)
	// Vue.use(Select)
	
	// 子组件分割
	// export default {
	// 	components: {
	// 		childComp: {
	// 			methods: {
	// 				heavy() {/*很耗时的任务*/
	// 				}
	// 			},
	// 			render(h) {
	// 				return h('div', this.heavy())
	// 			}
	// 		}
	// 	}
	// }
	
	// 变量本地化
	// import {heavy} from '@utils'
	//
	// export default {
	// 	props: ['start'],
	// 	computed: {
	// 		base() {
	// 			return 42
	// 		},
	// 		result() {
	// 			const base = this.base  // 不要频繁引用this.base
	// 			let result = this.start
	// 			for (let i = 0; i < 1000; i++) {
	// 				result += heavy(base)
	// 			}
	// 			return result
	// 		}
	// 	}
	// }
</script>
