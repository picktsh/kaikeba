### v-if 和 v-for 哪个优先级更高?如果两个同时出现,应该怎么优化得到更好的性能？

` Author rise created on 2020/1/20 `

> 当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。

- 为什么?  
举例:`v-for="item in list" v-if="!item.checked"` 这段代码,如果`if`先执行很显然是拿不到`item`这个值的, 所以需要先执行`v-for`循环,先拿到`item`  再交给`v-if`

>  优化, 一般有两种常见的情况  

- 过滤一个列表中的某些项
    - 实现: 将要过滤的列表交给计算属性[`computed`](https://cn.vuejs.org/v2/api/#computed)去处理,得到一个过滤后的列表再进行渲染
    - 优点: 只渲染有效列，渲染更高效，解耦渲染层逻辑，可维护性更强
- 判断整个列表是否显示
    - 实现: v-if放置在v-for外层容器元素上(例如:`ul`,`ol`,`div`,还可以是[`<template>`](https://cn.vuejs.org/v2/guide/conditional.html#%E5%9C%A8-lt-template-gt-%E4%B8%AD%E9%85%8D%E5%90%88-v-if-%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93%E4%B8%80%E6%95%B4%E7%BB%84))
    - 优点: 只判断一次,性能更好

官文提示: 永远不要把 v-if 和 v-for 同时用在同一个元素上。


最后看下官方文档:  
[教程 - 不推荐v-if 与 v-for 一起使用](https://cn.vuejs.org/v2/guide/conditional.html#v-if-与-v-for-一起使用)  
[风格指南 - 永远不要把 v-if 和 v-for 同时用在同一个元素上。](https://cn.vuejs.org/v2/style-guide/#避免-v-if-和-v-for-用在一起-必要)


