### 你知道nextTick的原理吗？

` Author rise created on 2020/2/3 `

#### 是什么:
> 根据官方文档的解释,通俗理解: `nextTick`可以在DOM更新完毕之后执行一个回调

#### 怎么用:
```javascript
// 修改数据 
vm.msg = 'Hello'
// DOM 还没有更新 
 
Vue.nextTick(function () { 
// DOM 更新了
})
```

#### 应用场景: 
需要在DOM更新后操作DOM元素时使用

#### 举例: 
更新DOM后重新计算滚动条举例
 
#### 原理:  

Vue是异步执行dom更新的，一旦观察到数据变化，Vue就会开启一个队列，然后把在同一个事件循环 (event loop) 当中观察到数据变化的 watcher 推送进这个队列。

如果这个watcher被触发多次，只会被推送到队列一次。这种缓冲行为可以有效的去掉重复数据造成的不必要的计算和DOm操作。而在下一个事件循环时，Vue会清空队列，并进行必要的DOM更新。

当你设置 vm.someData = 'new value'，DOM 并不会马上更新，而是在异步队列被清除，也就是下一个事件循环开始时执行更新时才会进行必要的DOM更新。如果此时你想要根据更新的 DOM 状态去做某些事情，就会出现问题。

为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用 Vue.nextTick(callback) 。这样回调函数在 DOM 更新完成后就会调用。

vue用异步队列的方式来控制DOM更新和nextTick回调先后执行 microtask因为其高优先级特性，能确保队列中的微任务在一次事件循环前被执行完毕 因为兼容性问题，vue不得不做了micro task(微任务)向macro task（宏任务）的降级方案

方案依次是：setImmediate、MessageChannel、setTimeout
