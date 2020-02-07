### vue-router导航钩子有哪些？

` Author rise created on 2020/2/6 `

- 有哪几种形式?
- 能做什么?
- 怎么用?

有三种形式

1. 全局导航勾子
2. 路由配置中间勾子
3. 组件内部导航勾子

### 全局的勾子函数
- beforeEach(to, from, next) 路由改变前调用

常用验证用户权限

beforeEach()参数
- to：Route:即将要进入的路由
- from：Route:当前正要离开的路由
- next：function()
