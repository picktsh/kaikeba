### 你知道nextTick的原理吗？

` Author rise created on 2020/2/3 `

> 根据官方文档的解释,通俗理解: 它可以在DOM更新完毕之后执行一个回调
```javascript
// 修改数据 
vm.msg = 'Hello'
// DOM 还没有更新 
 
Vue.nextTick(function () { 
// DOM 更新了
})
```
### 使用场景
更新dom后重新计算滚动条举例
