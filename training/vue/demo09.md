### 谈谈你对vue组件之间通信的理解？

` Author rise created on 2020/1/28 `

> 定义:  

不同组件之间进行数据交互,使用其它组件的属性和方法

> 常见使用场景可以分为三类：
- 父子组件通信
- 兄弟组件通信
- 跨层组件通信
> 组件间的通信有以下几种(★推荐)
1. `props` ★★
2. `$emit`/`$on` ★★ 事件总线
3. `vuex` ★★★
4. `$parent`/`$children`
5. `$attrs`/`$listeners`
6. `provide`/`inject` ★★★

其余还有一些，比如跳转路由时传参，用localStronge等等

上面是概括,接下来看[示例代码](09vue组件之间通信方式.md)
