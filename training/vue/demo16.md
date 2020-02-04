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
vue用异步队列的方式来控制DOM更新和nextTick回调先后执行 microtask因为其高优先级特性，能确保队列中的微任务在一次事件循环前被执行完毕 因为兼容性问题，vue不得不做了micro task(微任务)向macro task（宏任务）的降级方案 

方案依次是：setImmediate、MessageChannel、setTimeout
