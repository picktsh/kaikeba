### 谈一谈对vue组件化的理解？

` Author rise created on 2020/1/26 `

**回答总体思路**  
组件化定义,优点,使用场景和注意事项等方面展开陈述,同事要强调`vue`中组件化的一些特点

源码分析1:组件定义
```javascript
// 全局组件定义
Vue.component('comp',{
    template:'<div>this is a component</div>'
})
```
> 组件定义,`src\core\global-api\assts.js`
```vue
<!--单文件组件定义-->
<template>
    <div> this is a component </div>
</template>
```
`vue-loader`会编译`template`为`render`函数,最终导出的依然是组件配置对象

源码分析2: 组件化优点  
lifecycle.js - mountComponent() 
> 组件,Watcher,渲染函数和更新函数之间的关系

源码分析3: 组件化实现  
构造函数: `src\core\global-api\extend.js`  
实例化及挂载: `src\core\vdom\patch.js - createElm()`

### 总结  
1. 组件是独立和可复用的代码组织单元,组件系统是`vue`的核心热性之一,它使开发者使用小型,独立和通常可复用的组件构建大型应用
2. 组件化开发能大幅度提高应用开发效率,测试性,复用性等;
3. 组件使用按分类有: 页面组件,业务组件,通用组件;
4. `vue`的组件时基于配置的,我们通常编写的组件是配置而非组件,框架后续会生成其构造函数,他们基于`VueComponent`扩展与`Vue` 
5. vue中常见的组件化技术有:属性`prop`,自定义事件,插槽等,他们主要用于组件通信,扩展等;
6. 合理的划分组件,有助于提升应用性能
7. 组件应该是高内聚低耦合的
8. 遵循单项数据流的原则
