### 什么是一个递归组件？

` Author rise created on 2020/2/7 `

概念:递归组件是可以在他们自己的模板中调用自身的;

递归组件,一定要有一个结束条件,否则就会一直循环引用,最终出现错误;我们可以使用`v-if="false"`作为递归组件的结束条件;当遇到`v-if`为`false`时,组件将不会再进行渲染;

既然要用递归组件,那么对我们的数据格式肯定是需要满足递归条件的,就像下边这样,这是一个树状结构的递归数据
```javascript
let list = [
    {
        name: 'web全栈工程师',
        cList: [
            {
                name: 'vue', cList: [
                    {name: 'template'}
                ]
            },
            {name: 'react',},
        ]
    },
    {name: 'web高级工程师',},
    {
        name: 'web初级工程师',
        cList: [
            {name: 'html'},
            {name: 'css'},
            {name: 'javascript'},
        ]
    },
]
```
