### 你知道vue的双向数据绑定的原理吗

` Author rise created on 2020/2/5 `

所谓双向数据绑定,就是数据层和视图层的数据同步,在写入数据的时候,视图层实时的同步更新;

- 原理:
采用`数据劫持`结合`发布者` `订阅者`模式的方式 通过`Object.defineproperty` 来劫持各个属性的 getter 和 setter,在数据变动时发布消息给订阅者,触发相应的监听回调;

> 设计思想:观察者模式

Vue的双向数据绑定的设计思想为观察者模式

Dep对象:Dependency 依赖的简写,包含有三个属性:`id,subs,target`和四个主要函数`addSub,removeSub,depend,notify`,是观察者的依赖集合,负责在数据发生改变时,使用`notify()`触发保存咋`subs`下的订阅列表,依次更新数据和DOM;

Observer对象,即观察者包含两个主要属性`value,dep`;做法是使用`getter/setter`方法覆盖默认的取值和赋值操作,将对象封装成为响应式对象,每一次调用的时候更新依赖列表,更新值时触发订阅者,定在对象的__ob__原型链属性上;
