### 谈一谈你对vue响应式原理的理解？

` Author rise created on 2020/2/8 `

#### 深入响应式原理
Vue 最独特的特性之一，是其非侵入性的响应式系统。数据模型仅仅是普通的 JavaScript 对象。而当你修改它们时，视图会进行更新。这使得状态管理非常简单直接。

- 简单阐述vue响应式概念?
- vue当中这么去实现
- 这么做依赖收集.更新数据
- Object/Array

响应式实现:

- object.defineProperty
- proxy(不兼容旧浏览器)
