### 你知道vue3有哪些新特性吗?它会带来什么影响?

` Author rise created on 2020/1/31 `

根据尤雨溪的PPT总结,Vue 3.0改进主要在以下几点
- 更快
    - 虚拟DOM重写
    - 优化slots的生成
    - 静态树提升
    - 静态属性提升
    - 基于Proxy的响应式系统
- 更小: 通过摇树优化核心知识库体积
- 更容易维护: TypeScript + 模块化
- 更加友好
    - 跨平台:编译器核心和运行时核心与平台无关,使得Vue更容易与任何平台(Web,Android,IOS)一起使用
- 更容易使用
    - 改进的TypeScript支持,编辑器能够提供强有力的类型检查和错误及警告
    - 更好的调试支持
    - 独立的响应化模块
    - Composition API (类似React Hooks)
    
### 虚拟DOM重写

期待更多的编译时提示来减少运行时的开销,使用更有效的代码来创建虚拟节点  
组件快速路径+单个调用+子节点类型检测
- 跳过不必要的分支
- JS引擎更容易优化
![图片](https://www.html.cn/newimg88/2018/11/0_xP0qosmcTwgGUwkl.jpg)
### 优化slots生成

vue3中可以单独重新渲染父级和子集
- 确保示例正确的跟踪依赖关系
- 避免不必要的父子组件重新渲染
![图片](https://www.html.cn/newimg88/2018/11/0_xP0qosmcTwgGUwkl.jpg)

### 静态树提升(Static Tree Hosting)

使用静态树提升,这意味着Vue3的编译器将能够检测到什么是静态的,然后将其提升,从而降低了渲染成本;
- 跳过修补整棵树,从而降低渲染成本
- 即使多次出现也能正常工作 (内存换时间)
![图片](https://www.html.cn/newimg88/2018/11/0_3bbllDHD6HGaP9iH.jpg)
    
### 静态属性提升

使用静态属性提升,Vue3打补丁时将跳过这些属性不会改变的节点
![图片](https://www.html.cn/newimg88/2018/11/0_yEGgo2cIDE0hChy7.jpg)

### 基于Proxy的数据响应式

Vue2中的响应式系统使用 Object.defineProperty的getter和setter;Vue3将使用ES2015 Proxy作为其观察机制,这将会带来如下变化
- 组件实例初始化的速度提高100%
- 使用Proxy节省以前一半的内存开销,加快速度,但是存在低版本浏览器版本的不兼容
- 为了继续支持IE11,Vue3将发布一个支持旧观察者机制和新Proxy版本的构建
![图片](https://www.html.cn/newimg88/2018/11/0_-CmteLaUv9b8vwo.jpg)

### 高可维护性

Vue3将带来更多可维护的源代码;它不仅会使用TypeScript,而且许多包被解耦,更加模块化
![图片](https://www.html.cn/newimg88/2018/11/0_FEKvTLJMagkJ8kAi.jpg)
