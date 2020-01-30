### 你了解哪些vue性能优化方法？

` Author rise created on 2020/1/30 `

答题思路: 根据题目描述,这里主要探讨Vue代码层面的优化
- 路由懒加载
```javascript
const router = new VueRouter({
    routes: [
        {path: '/foo', component: () => import('./Foo.vue')}
    ]
})
```
- keep-live缓存页面
```vue
<template>
    <div id="app">
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>
</template>
```
- 使用v-show复用DOM
```vue
<template>
	<div class="cell">
		<!--这种情况用v-show复用DOM-->
		<div v-show="value" class="on">
			<Heavy :n="10000"/>
		</div>
		<section v-show="!value" class="off">
			<Heavy :n="10000"/>
		</section>
	</div>
</template>

```
- v-for遍历避免同时使用v-if
```vue
<template>
	<ul>
		<li v-for="user in activeUsers" :key="user.id">{{user.name}}</li>
	</ul>
</template>
<script>
	export default {
		computed: {
			activeUsers: function () {
				return this.user.filter(user => user.isActive)
			}
		}
	}
</script>
```
- 长列表性能优化
    - 如果列表是纯粹的数据展示,不会有任何变化,就不需要做响应化
    ```javascript
    export default {
            data: () => {
                return {
                    users: []
                }
            },
            async created() {
                const users = await axios.get('/api.users')
                this.users = Object.freeze(users)
            }
        }
    ```
    - 如果是大数据长列表,可采用虚拟滚动,只渲染少部分区域的内容
    ```vue
    <recycle-scroller class="items" :items="items" :item-size="24">
        <template>
            <FetchItemView :item="item" @vote="voteItem"/>
        </template>
    </recycle-scroller>
    ```
    - > 参考 vue-virtual-scroller , vue-virtual-scroll-list
- 事件的销毁
    - Vue组件销毁时,会自动解绑它的全部指令及事件监听,但是仅限于组件本身的事件
    ```vuejs
	export default {
		created() {
			this.timer = setInterval(this.refresh, 2000)
		},
		beforeDestroy() {
			clearInterval(this.timer)
		}		
	}
    ```
- 图片懒加载
    - 对于图片过多的页面,为了加速页面的加载速度,所以很多时候我们需要将页面内,未出现在可视区域的图片先不做加载,等到滚动到可视区域后再去加载
    ```vue
    <img v-lazy="/static/img/1.png">
    ```
    > 参考: vue-lazyload
- 第三方插件按需引入
    - 像element-ui这样的第三方组件库可以按需引入避免体积太大
    ```vue
    import Vue from 'vue'
    import {Button, Select} from 'element-ui'
  	
	Vue.use(Button)
	Vue.use(Select)
    ```
    
- 无状态的组件标记为函数式组件
```vue
<template functional>
	<div>1111</div>
</template>
```
- 子组件分割
```vue
<template>
	<div>
		<child-comp/>
	</div>
</template>
<script >
	export default {
		components: {
			childComp: {
				methods: {
					heavy() {/*很耗时的任务*/
					}
				},
				render(h) {
					return h('div', this.heavy())
				}
			}
		}
	}
</script>
```
- 变量本地化
```vue
<template>
	<div :style="{opacity: start / 3000}">{{result}}</div>
</template>
<script >
	import {heavy} from '@utils'
	
	export default {
		props: ['start'],
		computed: {
			base() {
				return 42
			},
			result() {
				const base = this.base  // 不要频繁引用this.base
				let result = this.start
				for (let i = 0; i < 1000; i++) {
					result += heavy(base)
				}
				return result
			}
		}
	}
</script>
```
- SSR服务端渲染
    - 更好的SEO
    - 首屏速度更快


