### 谈谈你对vuex使用及其理解?

` Author rise created on 2020/2/3 `

### Vuex是什么?

Vuex是专门为vue.js应用程序开发的 **状态管理模式**; 集中管理, 单向数据流, 可预测;

适合大型单页应用程序使用

vuex的理念示意图
![](https://vuex.vuejs.org/vuex.png)

### 开始
每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。Vuex 和单纯的全局对象有以下两点不同：
0. Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
0. 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。

### 核心概念
0. State 单一状态树,定义需要共享的状态
0. Getters  用来获取处理后的状态的地方（新的状态）
0. Mutations  用来修改state中的状态值的地方
0. Actions 用来接收外部事件的请求，筛选条件  支持异步操作
0. Module 将 store 分割成模块，每个模块都具有state、mutation、action、getter、甚至是嵌套子模块。

### vuex创建公有仓库的插件
0. 储存公共状态 
0. 能够根据事件来修改状态
0. 多个组件都需要变化，有机制把这个新的状态通知给所有的组件


[Vuex官网](https://vuex.vuejs.org/zh/)
   
