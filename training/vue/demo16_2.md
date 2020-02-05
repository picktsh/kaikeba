### 你知道nextTick的原理吗？

` Author rise created on 2020/2/5 `

> 根据官方文档的解释: `nextTick`可以在DOM更新完毕之后执行一个回调

#### 怎么用:
```javascript
// 修改数据 
vm.msg = 'Hello'
// DOM 还没有更新 
 
Vue.nextTick(function () { 
// DOM 更新了
})
```
尽管 MVVM 框架并不推荐访问DOM,但有时候的确会有这样的需求,尤其是和第三方插件进行配合的时候,免不了要进行DOM的操作;而`nextTick`就提供了这样一个桥梁,确保我们操作的是更新后的DOM;

**vue如何检测到DOM的更新呢?**

能监听到DOM改动的API:MutationObserver 

### 理解 MutationObserver

MutationObserver 是HTML5新增的属性,用于监听DOM修改事件,能过够监听到节点属性,文本内容,子节点等的改动,是一个强大的利器;

```javascript
// MutationObserver 基本用法
var observer = MutationObserver(function () {
    // 这里是回调函数
    console.log('DOM被修改了');
});
var article = document.querySelector('article');
observer.observe(article);
```

vue是不是用 MutationObserver 来监听DOM更新完毕的呢?

源码中实现 nextTick 的地方

`\src\core\util\next-tick.js`
```javascript
if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  let counter = 1
  const observer = new MutationObserver(flushCallbacks)
  const textNode = document.createTextNode(String(counter))
  observer.observe(textNode, {
    characterData: true
  })
  timerFunc = () => {
    counter = (counter + 1) % 2
    textNode.data = String(counter)
  }
  isUsingMicroTask = true
}
```
我们需要监听的是模板的DOM节点,vue为什么要自己创建一个文本节点来监听,似乎说不通;这里就要说到 js 的事件循环了

### 事件循环 (Event Loop)

在js的运行环境中,通常伴随着很多事情的发生,比如用户点击,页面渲染,脚本执行,网络请求,等等;为了协调这些事件的处理,浏览器通常会使用事件循环机制;

简单来说,事件循环会维护一个或多个任务列队(task queues),以上提到的事件作为任务源往队列中加入任务;有一个持续执行的线程来处理这些任务,每执行完一个任务就从队列中移除它,这就是事件循环;
![](https://mmbiz.qpic.cn/mmbiz_png/Ln9Ehepfls2VCgexqyyfibk2lbSVK5bL9SicAz8cGAJ1WsiaNd30pibBRPEoLtCYRk9PbyIlNC0xB348xX4Mu4Cl9g/640?wx_fmt=png)
```javascript
// 微任务
for (let i = 0; i < 100; i++) {
    dom.style.left = i + 'px'
}
```
事实上,这100次for循环同属一个task,浏览器只在task执行完后进行一次 DOM更新

只要让nextTick里的代码放在UI render步骤后面执行,岂不就能访问到更新后的DOM了?

vue就是这样的思路,并不是用DOM的变动监听,而是用队列控制的方式达到目的;那么vue又是如何做到列队控制的呢?我们可以很自然的想到setTimeout,把nextTick要执行的带啊吗当作下一个task放入队列末尾;

vue的数据响应过程包含:数据更改=>通知Watcher=>更新DOM;而数据的更改不由我们控制,可能任何时候都会发生;如果恰巧发生在重绘之前,就会发生多次渲染;这意味着性能浪费,这是vue不愿意看到的;

所以,vue的队列控制是经过了深思熟虑的;在这之前,我们还需要了解到 event loop的另一个重要概念 micro task;

### microtask
从名字看，我们可以把它称为微任务。对应的，task队列中的任务也被叫做macrotask。名字相似，性质可不一样了。

每一次事件循环都包含一个microtask队列，在循环结束后会依次执行队列中的microtask并移除，然后再开始下一次事件循环。

在执行microtask的过程中,后加入microtask队列的微任务，也会在下一次事件循环之前被执行。也就是说，macrotask总要等到microtask都执行完后才能执行，microtask有着更高的优先级。

microtask的这一特性，简直是做队列控制的最佳选择啊！vue进行DOM更新内部也是调用nextTick来做异步队列控制。而当我们自己调用nextTick的时候，它就在更新DOM的那个microtask后追加了我们自己的回调函数，从而确保我们的代码在DOM更新后执行，同时也避免了setTimeout可能存在的多次执行问题。

常见的microtask有：Promise、MutationObserver、Object.observe(废弃)，以及nodejs中的process.nextTick.

咦？好像看到了MutationObserver，难道说vue用MO是想利用它的microtask特性，而不是想做DOM监听？对喽，就是这样的。核心是microtask，用不用MO都行的。事实上，vue在2.5版本中已经删去了MO相关的代码，因为它是HTML5新增的特性，在iOS上尚有bug。

那么最优的microtask策略就是Promise了，而令人尴尬的是，Promise是ES6新增的东西，也存在兼容问题呀~ 所以vue就面临一个降级策略。

### vue的降级策略
上面我们讲到了，队列控制的最佳选择是microtask，而microtask的最佳选择是Promise.但如果当前环境不支持Promise，vue就不得不降级为macrotask来做队列控制了。

macrotask有哪些可选的方案呢？前面提到了setTimeout是一种，但它不是理想的方案。因为setTimeout执行的最小时间间隔是约4ms的样子，略微有点延迟。还有其他的方案吗？

不卖关子了，在vue2.5的源码中，macrotask降级的方案依次是：setImmediate、MessageChannel、setTimeout.

setImmediate是最理想的方案了，可惜的是只有IE和nodejs支持。

MessageChannel的onmessage回调也是microtask，但也是个新API，面临兼容性的尴尬...

所以最后的兜底方案就是setTimeout了，尽管它有执行延迟，可能造成多次渲染，算是没有办法的办法了。

### 总结
以上就是vue的nextTick方法的实现原理了，总结一下就是：

- vue用异步队列的方式来控制DOM更新和nextTick回调先后执行
- microtask因为其高优先级特性，能确保队列中的微任务在一次事件循环前被执行完毕
- 因为兼容性问题，vue不得不做了microtask向macrotask的降级方案
