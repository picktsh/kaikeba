思考和扩展
React
1. Vdom
2. fiber
3. hooks
上⾯这些东⻄，能给我们什么启发 React VS Vue 设计的理念
1. Vdom 为什么有存在的必要 React和vue的vdom 区别
0.1: innerHTML $(xx).html dom全量重写 性能灾难
原则就是 少操作dom
1. 响应式： vue1.0 精确追踪数据，变化后最⼩化操作dom 数据量打了之后，响应式数据过
多，浏览器卡顿 option api { data(){},methods} 主动追踪
2. React15- vdom 没有追踪的概念
每次变化，⽣成新的数据 新⽼diff，计算出最⼩需要操作的dom 数据量⼤了之后，diff的过程
是同步的，经常⼤于16ms，就会导致偶尔卡顿 class XX extend Component 被动计算 上⾯
俩，都有瓶颈
vue2: 响应式+vdom 这俩看起来是冲突的 以组件为单位，控制颗粒度 响应式⾛到组件级
别，组件内部vdom option api React16 fiber+hooks 函数组件主推 函数组件有了内部状
态，⽐class优秀很多 let [count ,setCount] = useXX() fiber重点理解 时间切⽚ ？ 给我们的启
发
现在 Vue3 整体的架构和vue2类似多了⼏个东⻄
1. composition api （和hooks⻓的⼀样）
2. Proxy取代defineProperty 利⽤浏览器新特性
3. vdom的静态标记 静态标签 diff忽略 block 任何对dom结构产⽣影响的标签v-if v-for 内部都
是⼀个block ⽆论嵌套多少层，动态节点都是在⼀个数组⾥维护，diff的时候不⽤递归 4
cusom renderer api
React 17 ？期待
横向的扩展
fiber 两个⼤件，1. vdom从树=》链表 2. 利⽤浏览器渲染的间隔时间 requestIdleCallback 1. 前端架构
的更迭，本质上是数据结构和计算机基础逐渐深⼊的发展 以前的vdom{type：，children，props} 新
的vdom {type，child，return，slibing， props} 2. 16.6ms ⼀帧 任何占⽤主进程超过这个时间，都可
能会卡顿 这种任务，我们基本都可以⽤fiber这个理念来解决 md5的计算
block
性能优化 1. 减⼩计算量 2. 空间换时间 刷leetcode第⼀题 3. 缓存 4. fiber 时间切⽚
开课吧web全栈架构师
react⽗组件有更新，所有⼦孙组件默认都会执⾏render函数，这个不太理解为什么要这样 其实完全可
以⽤pureComponent取代所有的component function 就⽤memo 为啥不这么⼲，⽽是提供了两种⽅
式
React团队认为给你⾃由 Component⼿动挡 定制性更强
react设计将节点 时间复杂度O(n3)改成了O(n)其实没太理解 1。 考虑到web的场景 web⼤概率都是不
会发⽣结构性的变化 很少⼜⼀个完整的树变成别的⼦节点 基本都是平级修改，删除，替换 两个树完整
对⽐
vite 新⼀代的开发⼯具，利⽤浏览器⾃带的import
1. node_modules
2. css less sas
开课吧web全栈架构师