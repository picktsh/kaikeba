### watch和computed的区别以及怎么选用?

` Author rise created on 2020/2/1 `

用一句话概括它们的区别  
`watch`通过某个数据的变化，去做多件事情  
`computed`通过多个数据的变化，来得到一个结果  

### 计算属性
- 基础例子

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护;   
例如：
```vue
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```
在这个地方，模板不再是简单的声明式逻辑。你必须看一段时间才能意识到，这里是想要显示变量 `message` 的翻转字符串。当你想要在模板中多次引用此处的翻转字符串时，就会更加难以处理。

所以，对于任何复杂逻辑，你都应当使用计算属性。

- 计算属性缓存 vs 方法

我们可以通过在表达式中调用方法来达到同样的效果：
```html
<p>Reversed message: "{{ reversedMessage() }}"</p>
```
```javascript
// 在组件中
methods: {
  reversedMessage: function () {
    return this.message.split('').reverse().join('')
  }
}
```
我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 `message` 还没有发生改变，多次访问 `reversedMessage` 计算属性会立即返回之前的计算结果，而不必再次执行函数。

- 计算属性 vs 侦听属性

Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：**侦听属性**。

- 计算属性的 setter

计算属性默认只有 `getter` ，不过在需要时你也可以提供一个 `setter` ：
```javascript
// ...
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
// ...
```
现在再运行 `vm.fullName = 'John Doe'` 时，`setter` 会被调用，`vm.firstName` 和 `vm.lastName` 也会相应地被更新。

### 侦听器

虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。

[官方文档](https://cn.vuejs.org/v2/guide/computed.html)
