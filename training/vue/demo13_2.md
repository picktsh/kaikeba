### watch和computed的区别以及怎么选用?

` Author rise created on 2020/2/1 `

### 区别

#### 1. 定义/语义区别
> watch
```html
<input type="text" v-model="foo">
```
```javascript
var vm = new Vue({
    el: '#demo',
    data: {
        foo: 1
    },
    watch: {
        foo: function (newVal, oldVal) {
            console.log(newVal, oldVal)
        }
    }    
});
vm.foo = 2 // 2 1
```

> computed
```javascript
var vm = new Vue({
		el: '#demo',
		data: {
			firstName: 'Foo',
			lastName: 'Bar'
		},
		computed: {
			fullName: function () {
				return this.firstName + ' ' + this.lastName
			}
		}
	})
```

#### 2.功能区别

watch更通用,computed派生的功能都能实现,计算属性底层来自于watch,但做了更多,例如缓存

#### 3.用法区别

computed 更简单/更高校,优先使用   
有些必须watch,比如值变化要和后端交互

### 使用场景
> watch

watch需要在数据发生变化时,执行异步或开销较大的操作时使用,简单讲,当一条数据影响多条数的时候,例如搜索数据

> computed

对于任何复杂逻辑或一个数据属性在它所依赖的属性发生变化时,也要发生变化,简单讲;当一个属性受多个属性影响的时候,例如购物车结算商品时
