### vue为什么要求组件模板只能有一个根元素?

` Author rise created on 2020/1/27 `

从3个方面考虑
1. `new Vue({el:'#app'})`
2. 单文件组件中,`template`下的元素`div`,其实就是"树"状结构中的"根"
3. diff算法要求的,源码中,src/core/vdom/patch.js - patchVnode()

> 一: 实例化 Vue时
```html
<div id="app"></div>
<script >
var vm = new Vue({ 
    el:'#app'
 })
</script>
```
反面示例
```html
<body>
    <div id="app1"></div>
    <div id="app2"></div>
</body>
```
Vue其实并不知道,哪一个才是我们的入口,如果同时设置了多个入口,那么Vue就不知道哪一个才是这个"类";
> 二: 在`webpack`搭建的vue开发环境下,使用单文件组件时
```vue
<template>
    <div>
    
    </div>
</template>    
```
template这个标签,有三个特性
1. 隐藏性: 该标签不会显示在页面的任何地方,不管里面有多少内容,它永远是隐藏的状态,设置了`display: none;`
2. 任意性: 该标签可以写在任何地方,甚至是`head`,`body`,`script`
3. 无效性: 该标签里的任何HTML内容都是无效的,不会起任何作用,只能用`innerHTML`来获取到里面的内容

一个vue单文件组件就是一个vue实例,如果`template`下有多个`div`,那么如何指定实例的根入口呢!  
为了让组件可以正常生成一个Vue实例,这个`div`自然会处理成程序的入口,通过这个根节点,来递归遍历整个vue树下的所有节点,并处理为vdom,最后再渲染成真正的HTML,插入到正确的位置

> 三

`diff`中`patchVnode`方法,用来比较新旧节点  
`src/core/vdom/patch.js - patchVnode`
