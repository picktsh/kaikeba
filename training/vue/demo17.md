### 你知道vue的双向数据绑定的原理吗

` Author rise created on 2020/2/5 `

其实是语法糖,是change事件和绑定值(:value)的结合

### 一、原理：
1. vue 双向数据绑定是通过 数据劫持 结合 发布订阅模式的方式来实现的， 也就是说数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变；

2. 核心：关于VUE双向数据绑定，其核心是 Object.defineProperty()方法；

3. 介绍一下Object.defineProperty()方法

    （1）Object.defineProperty(obj, prop, descriptor) ，这个语法内有三个参数，分别为 obj （要定义其上属性的对象） prop （要定义或修改的属性） descriptor （具体的改变方法）

    （2）简单地说，就是用这个方法来定义一个值。当调用时我们使用了它里面的get方法，当我们给这个属性赋值时，又用到了它里面的set方法；
...
