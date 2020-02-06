### vue-router导航钩子有哪些？

` Author rise created on 2020/2/6 `

Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。包含的功能有：

- 嵌套的路由/视图表
- 模块化的、基于组件的路由配置
- 路由参数、查询、通配符
- 基于 Vue.js 过渡系统的视图过渡效果
- 细粒度的导航控制
- 带有自动激活的 CSS class 的链接
- HTML5 历史模式或 hash 模式，在 IE9 中自动降级
- 自定义的滚动条行为

### 导航守卫

1. 全局前置守卫： router.beforeEach
2. 全局解析守卫： router.beforeResolve
3. 全局后置钩子： router.afterEach
4. 路由独享的守卫： beforeEnter
5. 组件内的守卫： beforeRouteEnter、beforeRouteUpdate (2.2 新增)、beforeRouteLeave
```javascript
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
```
### 完整的导航解析流程
1. 导航被触发。
1. 在失活的组件里调用离开守卫。
1. 调用全局的 `beforeEach` 守卫。
1. 在重用的组件里调用 `beforeRouteUpdate` 守卫 (2.2+)。
1. 在路由配置里调用 `beforeEnter`。
1. 解析异步路由组件。
1. 在被激活的组件里调用 `beforeRouteEnter`。
1. 调用全局的 `beforeResolve` 守卫 (2.5+)。
1. 导航被确认。
1. 调用全局的 `afterEach` 钩子。
1. 触发 DOM 更新。
1. 用创建好的实例调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数。
