vue3剖析,思路启发 大圣老师
## vue-next
1. composition api
2. reactivity 响应式 (Proxy 取代Object.defineProperty)
3. 虚拟dom重写 (加入了block的概念); 静态标记,精确更新
4. custom renderer api 自定义各个平台的渲染行为

组件级别的vdom
vue2

```html
div id="app""
    p
        span class="哈哈" {{name}}
    p1 哈哈
    div2 :class="xx" 嘿嘿

1. diff div (props)
2. diff p (props)
```

vue3  上面的结构,只有span的name是动态的,div2的class是动态的,别的都略过

以上所有分析标记,都在编译层,也就是再webpack上做的
