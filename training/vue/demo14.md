### 谈谈你对vue生命周期的理解？

` Author rise created on 2020/2/2 `

先看一下官方图解
![](https://cn.vuejs.org/images/lifecycle.png)



## 生命钩子函数
vue中的生命钩子函数，就是随时或者说在达到某一阶段或条件时去触发的函数，目的就是为了完成一些动作或者事件。需要注意的是，所有的生命周期钩子自动绑定 `this` 上下文到实例中，因此你可以访问数据，对属性和方法进行运算。

通常我们所说的生命周期分为8个：

分别为在初始化实例时，默认调用的**beforeCreate**、**created**、**beforeMount**、**mounted**这四个钩子函数，

还有当更新数据时，更新之前会触发**beforeUpdate**这个钩子函数，更新完成之后，会触发**updated**这个钩子函数；

当vue的实例销毁时，会调用**beforeDestroy**和**destroyed**这两个钩子函数。

除此之外还有不常用的**activated**、**deactivated**、**errorCaptured**这三个钩子函数

### 过程

首先我们需要创建一个实例`new Vue()`,也就是在这个过程当中，首先执行了init（init是vue组件里面默认去执行的），`init Events & Lifecycle`后先调用了beforeCreate，所以此时事件已经好了，也能开始使用生命周期函数了，然后继续`init injections（注射） & reactivity（反应性）`，在实例创建完成后它会立即调用`created`。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。所以在init的时候，事件已经调用了，我们在beforeCreate的时候千万不要去修改data里面赋值的数据，最早也要放在created里面去做（添加一些行为）。

当created完成之后，它会去判断instance（实例）里面是否含有“el”option（选项），如果没有的话，它会等待我们调用vm.$mount(el)这个方法，然后执行下一步；如果有的话，直接执行下一步。紧接着会判断是否含有“template”这个选项，如果有，把 template 解析成一个 render function。render 函数会用 template 中的 html 去覆盖 html 中的 div 标签。在使用 .vue 文件进行开发的过程中，是没有 template 的，我们在 .vue 文件中写的 template 都经过了 vue-loader 处理，直接变成了 render 函数，放在vue-loader 解析过的文件中；这样做的好处，把 template 解析成 render 函数，比较耗时，vue-loader处理后，我们在页面上执行代码时，效率会变高。

beforeMount在有了render函数的时候才会执行，此时vue实例的`$el`和data都初始化了，但还是挂载之前为虚拟的dom节点。然后继续执行render函数。当执行完render函数之后，也就是el被新创建的`vm.$el`替换，并挂载到实例上去之后就会调用mounted这个钩子，在mounted挂载完毕之后，这个实例就算是走完流程了，此时el也被挂载到了真实DOM上。但是它不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用`vm.$nextTick()`。后续几个钩子函数，都是通过外部触发进行的。

当数据更新变化时，beforeUpdate 执行,然后`Virtual DOM re-render and patch`最后updated 执行。

当组件销毁时，beforeDestroy 执行,然后`Teardown watchers,child comonents and event listeners`，最后destroyed 执行。

然后说一下另外三个不常用的钩子，首先**activated**、**deactivated**是和vue中一个原生的组件**keep-alive**有关系,当`keep-alive`组件激活时调用`activated`钩子。`keep-alive` 组件停用时调用`deactivated`钩子。钩子**errorCaptured**是当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 `false` 以阻止该错误继续向上传播。

示例代码:

```html
<div id="app">
	<input type="text" v-model="msg">//测试数据更新时的钩子
	{{msg}}
</div>

<script>
	
	let vm = new Vue({
		el: "#app",
		data: {
			msg: "data数据",
		},
		methods: {
			fn() {
				this.msg = "改变data数据"
			}
		},
		beforeCreate() {
			// 创建之前;无法获取响应数据
			console.log("beforeCreate", "data:" + this.msg, "el:" + this.$el);
		},
		created() {
			// 创建之后
			console.log("created", "data:" + this.msg, "el:" + this.$el);
		},
		beforeMount() {
			// 挂载前
			console.log("beforeMount", "data:" + this.msg, "el:" + this.$el);
		},
		mounted() {
			// 挂载后
			console.log("mounted", "data:" + this.msg, "el:" + this.$el);
		},
		beforeUpdate() {
			// 数据更新之前
			console.log("beforeUpdate", "data:" + this.msg, "el:" + this.$el);
		},
		updated() {
			// 数据更新完成之后；
			console.log("updated", "data:" + this.msg, "el:" + this.$el);
		},
		beforeDestroy() {
			// 销毁之前
			console.log("beforeDestroy", "data:" + this.msg, "el:" + this.$el);
		},
		destroyed() {
			// 销毁之后
			console.log("destroyed", "data:" + this.msg, "el:" + this.$el);
		}
	});
	// vm.$destroy();//测试销毁组件调用的钩子
	
	/*
	//测试结果
	//初始化过程
	beforeCreate data:undefined el:undefined
	created data:data数据 el:undefined
	beforeMount data:data数据 el:[object HTMLDivElement]
	mounted data:data数据 el:[object HTMLDivElement]
	
	//数据更新后
	beforeUpdate data:data数据更新 el:[object HTMLDivElement]
	updated data:data数据更新 el:[object HTMLDivElement]
	
	//数据销毁后
	beforeDestroy data:data数据 el:[object HTMLDivElement]
	destroyed data:data数据 el:[object HTMLDivElement]
	*/
</script>
```



### 总结

- `beforecreate` : 可以在这加个loading事件
- `created` ：在这结束loading，还做一些初始数据的获取，实现函数自执行
- `mounted` ： 在这发起后端请求，拿回数据，配合路由钩子做一些事情
- `beforeDestroy`： 你确认删除XX吗？
- `destroyed` ：当前组件已被删除，清空相关内容
